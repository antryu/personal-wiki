#!/usr/bin/env python3
"""
Build index.html from analysis/*.md + wiki/channels/*.md
Reads markdown files and generates a static HTML dashboard.
"""

import os
import re
from pathlib import Path
from datetime import datetime

ROOT = Path(__file__).parent.parent
ANALYSIS_DIR = ROOT / "analysis"
WIKI_DIR = ROOT / "wiki" / "channels"
OUT = ROOT / "index.html"


def read_md(path):
    """Read markdown file and return content."""
    try:
        return path.read_text(encoding="utf-8")
    except:
        return ""


def md_to_html(md):
    """Simple markdown to HTML converter."""
    lines = md.split("\n")
    html = []
    in_list = False
    in_table = False
    table_header_done = False

    for line in lines:
        stripped = line.strip()

        # Headers
        if stripped.startswith("# "):
            if in_list: html.append("</ul>"); in_list = False
            if in_table: html.append("</table>"); in_table = False
            html.append(f'<h2 class="section-title">{stripped[2:]}</h2>')
        elif stripped.startswith("## "):
            if in_list: html.append("</ul>"); in_list = False
            if in_table: html.append("</table>"); in_table = False
            html.append(f'<h3 class="subsection-title">{stripped[3:]}</h3>')
        elif stripped.startswith("### "):
            if in_list: html.append("</ul>"); in_list = False
            html.append(f'<h4 class="detail-title">{stripped[4:]}</h4>')

        # Tables
        elif "|" in stripped and stripped.startswith("|"):
            cells = [c.strip() for c in stripped.split("|")[1:-1]]
            if all(set(c) <= set("- :") for c in cells):
                continue  # Skip separator row
            if not in_table:
                html.append('<table class="wiki-table">')
                in_table = True
                table_header_done = False
            if not table_header_done:
                html.append("<tr>" + "".join(f"<th>{c}</th>" for c in cells) + "</tr>")
                table_header_done = True
            else:
                html.append("<tr>" + "".join(f"<td>{bold(c)}</td>" for c in cells) + "</tr>")

        # List items
        elif stripped.startswith("- ") or stripped.startswith("* "):
            if in_table: html.append("</table>"); in_table = False; table_header_done = False
            if not in_list:
                html.append('<ul class="wiki-list">')
                in_list = True
            content = stripped[2:]
            html.append(f"<li>{bold(content)}</li>")

        # Checkbox items
        elif stripped.startswith("- [ ]") or stripped.startswith("- [x]"):
            checked = "checked" if "[x]" in stripped else ""
            content = stripped.split("] ", 1)[1] if "] " in stripped else stripped[5:]
            if not in_list:
                html.append('<ul class="wiki-list">')
                in_list = True
            html.append(f'<li><input type="checkbox" {checked} disabled> {bold(content)}</li>')

        # Code blocks
        elif stripped.startswith("```"):
            if in_list: html.append("</ul>"); in_list = False
            continue

        # Blockquotes
        elif stripped.startswith("> "):
            if in_list: html.append("</ul>"); in_list = False
            html.append(f'<blockquote class="wiki-quote">{bold(stripped[2:])}</blockquote>')

        # Paragraphs
        elif stripped:
            if in_list: html.append("</ul>"); in_list = False
            if in_table: html.append("</table>"); in_table = False; table_header_done = False
            html.append(f"<p>{bold(stripped)}</p>")

    if in_list: html.append("</ul>")
    if in_table: html.append("</table>")
    return "\n".join(html)


def bold(text):
    """Convert **text** to <strong>text</strong>."""
    text = re.sub(r'\*\*(.+?)\*\*', r'<strong>\1</strong>', text)
    text = re.sub(r'`(.+?)`', r'<code>\1</code>', text)
    # Links
    text = re.sub(r'\[(.+?)\]\((.+?)\)', r'<a href="\2" target="_blank">\1</a>', text)
    return text


def build():
    now = datetime.now().strftime("%Y-%m-%d %H:%M")

    # Read analysis files (Opus - comprehensive)
    analysis_files = sorted(ANALYSIS_DIR.glob("*.md")) if ANALYSIS_DIR.exists() else []

    # Read wiki/channels files (Ollama - recent)
    wiki_files = sorted(WIKI_DIR.glob("*.md")) if WIKI_DIR.exists() else []

    # Build nav tabs
    tabs = []
    sections = []

    # Tab 1: Overview (from Discord-Analysis.md)
    overview_file = ANALYSIS_DIR / "Discord-Analysis.md"
    if overview_file.exists():
        tabs.append(("overview", "Overview"))
        sections.append(("overview", md_to_html(read_md(overview_file))))

    # Tab 2: Timeline
    timeline_file = ANALYSIS_DIR / "Discord-Timeline.md"
    if timeline_file.exists():
        tabs.append(("timeline", "Timeline"))
        sections.append(("timeline", md_to_html(read_md(timeline_file))))

    # Tab 3: Channels (from analysis files)
    channel_files = [
        ("knowledge", "Discord-Knowledge.md", "🧠"),
        ("worldmodel", "Discord-WorldModel.md", "🔬"),
        ("snp500", "Discord-SNP500.md", "📊"),
        ("ytower", "Discord-YTower.md", "🏢"),
        ("mybidwise", "Discord-MyBidWise.md", "📋"),
        ("daily", "Discord-DailyTracker.md", "📅"),
        ("other", "Discord-OtherChannels.md", "📁"),
    ]

    tabs.append(("channels", "Channels"))
    channel_html = '<div class="channel-grid">'
    for cid, fname, icon in channel_files:
        fpath = ANALYSIS_DIR / fname
        if fpath.exists():
            content = md_to_html(read_md(fpath))
            channel_html += f'''
            <details class="channel-card">
              <summary>{icon} {fname.replace("Discord-","").replace(".md","")}</summary>
              <div class="channel-content">{content}</div>
            </details>'''
    channel_html += '</div>'
    sections.append(("channels", channel_html))

    # Tab 4: Live Wiki (Ollama compiled)
    if wiki_files:
        tabs.append(("live", "Live Wiki"))
        live_html = f'<p class="wiki-meta">Qwen 72B가 매일 자동 컴파일 · 최근 7일 요약</p><div class="channel-grid">'
        for wf in wiki_files:
            name = wf.stem
            content = md_to_html(read_md(wf))
            live_html += f'''
            <details class="channel-card">
              <summary>📝 #{name}</summary>
              <div class="channel-content">{content}</div>
            </details>'''
        live_html += '</div>'
        sections.append(("live", live_html))

    # Build HTML
    nav_html = "\n".join(
        f'<button class="{"active" if i==0 else ""}" data-tab="{tid}">{label}</button>'
        for i, (tid, label) in enumerate(tabs)
    )

    sections_html = "\n".join(
        f'<div class="section {"active" if i==0 else ""}" id="{sid}">{content}</div>'
        for i, (sid, content) in enumerate(sections)
    )

    html = f'''<!DOCTYPE html>
<html lang="ko">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>_y Knowledge Base — Personal Wiki</title>
  <style>
    :root {{
      --bg: #0a0e17; --surface: #111827; --surface2: #1a2235;
      --border: #1e293b; --text: #e2e8f0; --muted: #64748b;
      --amber: #f59e0b; --purple: #a855f7; --cyan: #06b6d4;
      --green: #22c55e; --blue: #3b82f6; --rose: #f43f5e;
    }}
    * {{ box-sizing: border-box; margin: 0; padding: 0; }}
    body {{ background: var(--bg); color: var(--text); font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif; line-height: 1.7; }}

    header {{ background: var(--surface); border-bottom: 1px solid var(--border); padding: 1.5rem 2rem; }}
    .header-inner {{ max-width: 1200px; margin: 0 auto; }}
    header h1 {{ font-size: 1.4rem; font-weight: 800; background: linear-gradient(135deg, var(--amber), #f97316); -webkit-background-clip: text; -webkit-text-fill-color: transparent; }}
    header .meta {{ color: var(--muted); font-size: 0.8rem; margin-top: 0.25rem; }}

    .nav {{ display: flex; gap: 0.5rem; padding: 0 2rem; background: var(--bg); border-bottom: 1px solid var(--border); overflow-x: auto; position: sticky; top: 0; z-index: 100; }}
    .nav button {{ padding: 0.75rem 1rem; font-size: 0.8rem; font-weight: 600; color: var(--muted); background: none; border: none; border-bottom: 2px solid transparent; cursor: pointer; white-space: nowrap; transition: all 0.2s; }}
    .nav button:hover {{ color: var(--text); }}
    .nav button.active {{ color: var(--amber); border-bottom-color: var(--amber); }}

    .container {{ max-width: 1200px; margin: 0 auto; padding: 1.5rem 2rem; }}
    .section {{ display: none; }}
    .section.active {{ display: block; }}

    .section-title {{ font-size: 1.2rem; font-weight: 700; color: var(--amber); margin: 1.5rem 0 0.75rem; padding-bottom: 0.5rem; border-bottom: 1px solid var(--border); }}
    .subsection-title {{ font-size: 1rem; font-weight: 600; color: var(--cyan); margin: 1.25rem 0 0.5rem; }}
    .detail-title {{ font-size: 0.9rem; font-weight: 600; color: var(--green); margin: 1rem 0 0.4rem; }}

    p {{ font-size: 0.85rem; color: var(--muted); margin-bottom: 0.5rem; }}
    strong {{ color: var(--text); }}
    code {{ background: var(--surface2); padding: 0.15rem 0.4rem; border-radius: 4px; font-size: 0.8rem; color: var(--amber); }}
    a {{ color: var(--blue); text-decoration: none; }}
    a:hover {{ text-decoration: underline; }}
    blockquote {{ border-left: 3px solid var(--amber); padding: 0.5rem 1rem; margin: 0.5rem 0; background: var(--surface); border-radius: 0 8px 8px 0; font-size: 0.85rem; color: var(--muted); }}

    .wiki-table {{ width: 100%; border-collapse: collapse; margin: 0.75rem 0; font-size: 0.82rem; }}
    .wiki-table th {{ background: var(--surface2); color: var(--amber); padding: 0.5rem 0.75rem; text-align: left; border-bottom: 2px solid var(--border); font-weight: 600; }}
    .wiki-table td {{ padding: 0.4rem 0.75rem; border-bottom: 1px solid var(--border); color: var(--muted); }}
    .wiki-table tr:hover td {{ background: var(--surface); }}

    .wiki-list {{ list-style: none; margin: 0.5rem 0; }}
    .wiki-list li {{ font-size: 0.83rem; padding: 0.3rem 0; padding-left: 1rem; position: relative; color: var(--muted); }}
    .wiki-list li::before {{ content: "▸"; position: absolute; left: 0; color: var(--amber); }}
    .wiki-list li strong {{ color: var(--text); }}

    .channel-grid {{ display: flex; flex-direction: column; gap: 0.75rem; }}
    .channel-card {{ background: var(--surface); border: 1px solid var(--border); border-radius: 10px; overflow: hidden; }}
    .channel-card summary {{ padding: 0.75rem 1rem; cursor: pointer; font-weight: 600; font-size: 0.9rem; color: var(--text); }}
    .channel-card summary:hover {{ background: var(--surface2); }}
    .channel-card[open] summary {{ border-bottom: 1px solid var(--border); color: var(--amber); }}
    .channel-content {{ padding: 1rem; max-height: 600px; overflow-y: auto; }}

    .wiki-meta {{ font-size: 0.75rem; color: var(--muted); margin-bottom: 1rem; padding: 0.5rem; background: var(--surface); border-radius: 6px; text-align: center; }}
    .wiki-quote {{ font-style: italic; }}

    footer {{ text-align: center; padding: 2rem; color: var(--muted); font-size: 0.7rem; border-top: 1px solid var(--border); margin-top: 2rem; }}

    @media (max-width: 768px) {{
      header {{ padding: 1rem; }}
      .container {{ padding: 1rem; }}
      .wiki-table {{ font-size: 0.75rem; }}
    }}
  </style>
</head>
<body>

<header>
  <div class="header-inner">
    <h1>_y Knowledge Base</h1>
    <div class="meta">Personal Wiki — Last built: {now} · Opus analysis + Qwen 72B daily compile</div>
  </div>
</header>

<div class="nav">
  {nav_html}
</div>

<div class="container">
  {sections_html}
</div>

<footer>
  Data: Discord 19ch (187K lines) + Claude Code sessions (M1+M4) + Obsidian + PRJs<br>
  Pipeline: M1 cron (00:00 Discord, 00:15 Claude) → M4 cron (00:30 Claude, 01:00 Qwen 72B compile) → GitHub → Vercel
</footer>

<script>
document.querySelectorAll('.nav button').forEach(btn => {{
  btn.addEventListener('click', () => {{
    document.querySelectorAll('.nav button').forEach(b => b.classList.remove('active'));
    document.querySelectorAll('.section').forEach(s => s.classList.remove('active'));
    btn.classList.add('active');
    document.getElementById(btn.dataset.tab).classList.add('active');
  }});
}});
</script>

</body>
</html>'''

    OUT.write_text(html, encoding="utf-8")
    print(f"✅ Built {OUT} ({len(html):,} bytes, {len(tabs)} tabs)")


if __name__ == "__main__":
    build()
