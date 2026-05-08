<!-- GitHub Trending: Go | 24,660 stars | +12 today -->

# flipped-aurora/gin-vue-admin

> 🚀Vite+Vue3+Gin拥有AI辅助的基础开发平台，企业级业务AI+开发解决方案，内置mcp辅助服务，内置skills管理，支持TS和JS混用。它集成了JWT鉴权、权限管理、动态路由、显隐可控组件、分页封装、多点登录拦截、资源权限、上传下载、代码生成器、表单生成器和可配置的导入导出等开发必备功能。

## Repository Info
- **URL**: https://github.com/flipped-aurora/gin-vue-admin
- **Stars**: 24,660
- **Forks**: 7,073
- **Language**: Go
- **License**: Apache License 2.0
- **Created**: 2019-09-01
- **Updated**: 2026-05-08
- **Topics**: admin, ai, casbin, claw, element-ui, gin, gin-admin, gin-vue-admin, go, go-admin, golang, gorm, i18n, jwt, mcp, skills, vibecoding, vue, vue-admin, vue3
- **Open Issues**: 44

## README (excerpt)

<div align=center>
<img src="http://qmplusimg.henrongyi.top/gvalogo.jpg" width="300" height="300" />
</div>

<div align=center>
<img src="https://img.shields.io/badge/golang-1.20-blue"/>
<img src="https://img.shields.io/badge/gin-1.9.1-lightBlue"/>
<img src="https://img.shields.io/badge/vue-3.3.4-brightgreen"/>
<img src="https://img.shields.io/badge/element--plus-2.3.8-green"/>
<img src="https://img.shields.io/badge/gorm-1.25.2-red"/>
<img src="https://gitcode.com/flipped-aurora/gin-vue-admin/star/badge.svg"/>
</div>

<div align=center>
<a href="https://trendshift.io/repositories/3250" target="_blank"><img src="https://trendshift.io/api/badge/repositories/3250" alt="Calcium-Ion%2Fnew-api | Trendshift" style="width: 250px; height: 55px;" width="250" height="55"/></a>
</div>

[English](./README-en.md) | 简体中文

## 支持claw生态

[🦞GvaClaw](https://plugin.gin-vue-admin.com/details/159)

## ✨一分钟生成前后端基础代码

<table>
  <tr>
    <td width="250">
	  <p>⭐️ <a href="https://www.bilibili.com/video/BV1B3htzqEf1/?spm_id_from=333.1387.homepage.video_card.click" target="__blank"> 高度适配AI编辑器的MCP </a></p>
      <p>📄 创建基础模板</p>
      <p>🤖 AI生成结构</p>
      <p>⏰ 生成代码</p>
      <p>🏷️ 分配权限</p>
      <p>🎉 基础CURD生成完成</p>   
    </td>
    <td>
      <video src="https://private-user-images.githubusercontent.com/165128580/384700666-4d039215-af29-4f86-bb4f-60dbab38f58e.mp4?jwt=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJnaXRodWIuY29tIiwiYXVkIjoicmF3LmdpdGh1YnVzZXJjb250ZW50LmNvbSIsImtleSI6ImtleTUiLCJleHAiOjE3MzEyNTIxNDYsIm5iZiI6MTczMTI1MTg0NiwicGF0aCI6Ii8xNjUxMjg1ODAvMzg0NzAwNjY2LTRkMDM5MjE1LWFmMjktNGY4Ni1iYjRmLTYwZGJhYjM4ZjU4ZS5tcDQ_WC1BbXotQWxnb3JpdGhtPUFXUzQtSE1BQy1TSEEyNTYmWC1BbXotQ3JlZGVudGlhbD1BS0lBVkNPRFlMU0E1M1BRSzRaQSUyRjIwMjQxMTEwJTJGdXMtZWFzdC0xJTJGczMlMkZhd3M0X3JlcXVlc3QmWC1BbXotRGF0ZT0yMDI0MTExMFQxNTE3MjZaJlgtQW16LUV4cGlyZXM9MzAwJlgtQW16LVNpZ25hdHVyZT00NjJkMDcwZjJkMjAyMmU1N2I2MzQxY2RhODFlNzgzNGRiMDFhMmY2NTYyM2ZmODdhNDVmMWE1NzlhMDdlOTI5JlgtQW16LVNpZ25lZEhlYWRlcnM9aG9zdCJ9.ZJbswpLzF2RHjemcGirKOP0L1fvpl3FUqIiQ_-yjeUo" data-canonical-src="https://private-user-images.githubusercontent.com/165128580/384700666-4d039215-af29-4f86-bb4f-60dbab38f58e.mp4?jwt=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJnaXRodWIuY29tIiwiYXVkIjoicmF3LmdpdGh1YnVzZXJjb250ZW50LmNvbSIsImtleSI6ImtleTUiLCJleHAiOjE3MzEyNTIxNDYsIm5iZiI6MTczMTI1MTg0NiwicGF0aCI6Ii8xNjUxMjg1ODAvMzg0NzAwNjY2LTRkMDM5MjE1LWFmMjktNGY4Ni1iYjRmLTYwZGJhYjM4ZjU4ZS5tcDQ_WC1BbXotQWxnb3JpdGhtPUFXUzQtSE1BQy1TSEEyNTYmWC1BbXotQ3JlZGVudGlhbD1BS0lBVkNPRFlMU0E1M1BRSzRaQSUyRjIwMjQxMTEwJTJGdXMtZWFzdC0xJTJGczMlMkZhd3M0X3JlcXVlc3QmWC1BbXotRGF0ZT0yMDI0MTExMFQxNTE3MjZaJlgtQW16LUV4cGlyZXM9MzAwJlgtQW16LVNpZ25hdHVyZT00NjJkMDcwZjJkMjAyMmU1N2I2MzQxY2RhODFlNzgzNGRiMDFhMmY2NTYyM2ZmODdhNDVmMWE1NzlhMDdlOTI5JlgtQW16LVNpZ25lZEhlYWRlcnM9aG9zdCJ9.ZJbswpLzF2RHjemcGirKOP0L1fvpl3FUqIiQ_-yjeUo" controls="controls" muted="muted" class="d-block rounded-bottom-2 border-top width-fit" style="max-height:640px; min-height: 200px">
</video>
    </td>
  </tr>
</table>


# 项目文档
[在线文档](https://www.gin-vue-admin.com) : https://www.gin-vue-admin.com

[初始化](https://www.gin-vue-admin.com/guide/start-quickly/initialization.html)
						       
[从环境到部署教学视频](https://www.bilibili.com/video/BV1Rg411u7xH)

[开发教学](https://www.gin-vue-admin.com/guide/start-quickly/env.html) (贡献者:  <a href="https://github.com/LLemonGreen">LLemonGreen</a> And <a href="https://github.com/fkk0509">Fann</a>)

[交流社区](https://support.qq.com/products/371961)

[插件市场](https://plugin.gin-vue-admin.com/)

[软件著作权证书](https://www.gin-vue-admin.com/copyright.pdf)

# 重要提示

1.本项目从起步到开发到部署均有文档和详细视频教程

2.本项目需要您有一定的golang和vue基础

3.您完全可以通过我们的教程和文档完成一切操作，因此我们不再提供免费的技术服务，如需服务请进行[付费支持](https://www.gin-vue-admin.com/coffee/payment.html)

4.如果您将此项目用于商业用途，请遵守Apache2.0协议并保留作者技术支持声明。您需保留如下版权声明信息，以及日志和代码中所包含的版权声明信息。所需保留信息均为文案性质，不会影响任何业务内容，如决定商用【产生收益的商业行为均在商用行列】或者必须剔除请[购买授权](https://plugin.gin-vue-admin.com/license)
\
<img src="https://qmplusimg.henrongyi.top/openSource/login.jpg" width="1000">

<img src="