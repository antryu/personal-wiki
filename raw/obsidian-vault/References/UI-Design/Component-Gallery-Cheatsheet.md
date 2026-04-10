# 🧩 UI Component Cheatsheet

> Source: https://component.gallery/components/
> 용도: 프로젝트 UI 빌드 시 컴포넌트 네이밍 & 패턴 레퍼런스

---

## Navigation
| 컴포넌트 | 별명 | 설명 |
|---|---|---|
| **Breadcrumb** | Breadcrumb trail | 현재 위치를 계층 링크로 표시 |
| **Navigation** | Nav, Menu | 내비게이션 링크 컨테이너 |
| **Pagination** | - | 다중 페이지 이동 |
| **Tabs** | Tabbed interface | 패널 간 전환 |
| **Skip link** | - | 키보드 유저용 섹션 건너뛰기 |

## Input
| 컴포넌트 | 별명 | 설명 |
|---|---|---|
| **Button** | - | 액션 트리거 |
| **Button group** | Toolbar | 연관 버튼 묶음 |
| **Checkbox** | - | 다중 선택 (단독: on/off) |
| **Radio** | Radio group | 단일 선택 |
| **Select** | Dropdown, Select input | 접혀있는 옵션 목록 |
| **Combobox** | Autocomplete, Autosuggest | 텍스트 필터 + 셀렉트 |
| **Text input** | - | 한 줄 텍스트 |
| **Textarea** | Textbox | 여러 줄 텍스트 |
| **Date input** | - | 날짜 (개별 필드) |
| **Date picker** | Calendar, Datetime picker | 캘린더 UI로 날짜 선택 |
| **Color picker** | - | 색상 선택 |
| **Slider** | Range input | 범위 값 선택 |
| **Stepper** | Nudger, Quantity, Counter | 숫자 +/- 버튼 |
| **Toggle** | Switch, Lightswitch | on/off 전환 |
| **File upload** | File input, Dropzone | 파일 업로드 |
| **Rich text editor** | RTE, WYSIWYG | 서식 있는 텍스트 편집 |
| **Search** | - | 검색 입력 |
| **Segmented control** | Toggle button group | 뷰/옵션 전환 (버튼+라디오 하이브리드) |

## Form
| 컴포넌트 | 별명 | 설명 |
|---|---|---|
| **Form** | - | 입력 컨트롤 그룹 |
| **Fieldset** | - | 관련 필드 묶음 |
| **Label** | Form label | 입력 필드 레이블 |

## Layout
| 컴포넌트 | 별명 | 설명 |
|---|---|---|
| **Accordion** | Collapse, Disclosure, Expandable | 접기/펼치기 스택 |
| **Card** | Tile | 단일 엔티티 컨테이너 |
| **Carousel** | Content slider | 슬라이드 콘텐츠 |
| **Drawer** | Tray, Flyout, Sheet | 가장자리에서 슬라이드 패널 |
| **Header** | - | 페이지 상단 (사이트명 + 네비) |
| **Footer** | - | 페이지 하단 (저작권, 링크) |
| **Separator** | Divider, HR | 구분선 |
| **Spacer** | - | 일관된 여백 래퍼 |
| **Tree** | - | 계층 구조 (파일 탐색기 등) |
| **Hero** | Jumbotron, Banner | 대형 배너 (보통 첫 섹션) |

## Content
| 컴포넌트 | 별명 | 설명 |
|---|---|---|
| **Avatar** | - | 사용자 사진/이니셜 |
| **Badge** | Tag, Label, Chip | 상태/메타 소형 라벨 |
| **Heading** | - | 섹션 제목 |
| **Icon** | - | 그래픽 심볼 |
| **Image** | Picture | 이미지 임베드 |
| **Link** | Anchor, Hyperlink | 리소스 참조 |
| **List** | - | ul / ol / dl |
| **Quote** | Pull quote, Blockquote | 인용 |
| **Rating** | - | 별점 |
| **Table** | Data table | 행/열 데이터 (정렬/필터 포함 시 Data Table) |
| **File** | Attachment, Download | 첨부/다운로드 표시 |
| **Video** | Video player | 비디오 재생 |

## Feedback
| 컴포넌트 | 별명 | 설명 |
|---|---|---|
| **Alert** | Notification, Banner, Callout | 중요 변경 알림 |
| **Toast** | Snackbar | 다른 콘텐츠 위에 뜨는 알림 |
| **Modal** | Dialog, Popup | 다른 콘텐츠 위 인터랙션 필요 |
| **Empty state** | - | 데이터 없음 표시 + 대체 액션 |
| **Progress bar** | - | 장시간 태스크 진행률 |
| **Progress tracker** | Stepper, Steps, Timeline | 단계별 진행 표시 |
| **Spinner** | Loader, Loading | 백그라운드 처리 중 표시 |
| **Skeleton** | Skeleton loader | 콘텐츠 로딩 전 플레이스홀더 |

## Overlay
| 컴포넌트 | 별명 | 설명 |
|---|---|---|
| **Dropdown** | Select menu | 숨겨진 액션/네비 메뉴 (폼 입력 X) |
| **Popover** | - | 클릭으로 뜨는 추가 정보 (인터랙티브) |
| **Tooltip** | Toggletip | 호버로 뜨는 설명 |

## Utility
| 컴포넌트 | 별명 | 설명 |
|---|---|---|
| **Visually hidden** | Screenreader only | 스크린리더 전용 숨김 텍스트 |

---

## 💡 자주 헷갈리는 네이밍

| 흔히 쓰는 | 표준 | 차이 |
|---|---|---|
| Popup | Modal 또는 Popover | Modal=전체 차단, Popover=부분 |
| Dropdown | Select (폼) vs Dropdown menu (액션) | 용도가 다름 |
| Toast vs Alert | Toast=임시 오버레이, Alert=영구 인라인 | 지속 시간 |
| Drawer vs Modal | Drawer=가장자리 슬라이드, Modal=중앙 | 위치 |
| Chip vs Badge vs Tag | 거의 동의어 | 디자인 시스템마다 다름 |
| Stepper (숫자) vs Stepper (단계) | Stepper=숫자 +/-, Progress tracker=단계 | 완전히 다른 것 |
