# FastAPI 개요

- **FastAPI 는 웹 API** 프레임워크임
    - **웹 API 프레임 워크란?: 웹 애플리케이션을 만들기 위한 도구와 라이브러리의 모음**
    - 웹 API는 레스토랑의 **주방**과 같다. 주방에서 음식을 만드는 과정을 효율적으로 관리하기 위해 필요한 **도구와 기계, 규칙** 등이 있다. 이때 이러한 **도구와 규칙, 기계를 모아놓은 "시스템"**이 웹 API 프레임워크라고 할 수 있다. 결론적으로, 웹 API 프레임워크는 **웹 애플리케이션(레스토랑)에서 웹 API(주방)를 효율적으로 운영하기 위한 도구와 규칙을 제공하는 것**

## **1. FastAPI 설치**

우선 **main.py**라는 파이썬 파일을 만들어야 한다.

(main이라는 이름은 fastAPI에 붙이는 관용적인 이름이다. 달라도 큰 상관은 없다.)

파일을 만들었다면 터미널 창을 이용해, fastapi를 다운 받자.

*pip install fastapi[all] uvicorn*

![](https://mblogthumb-phinf.pstatic.net/MjAyMzA5MTdfMjc4/MDAxNjk0OTUzOTYyODA1.kUbK9P9SYUAwqcKhsfKHnweC-I7Lu5GD2_mLt7vQpoIg.BlERr-96Du9dvRVDs5gM1lW_uMLvobTESfpDeah0m2cg.PNG.sodaincan7/image.png?type=w800)

error가 뜨지 않았다면 설치가 잘 된것이다.

---

## **2. 간단한 FastAPI 어플리케이션 생성/실행**

다음은 [main.py](http://main.py) 에 들어갈 기본적인 FastAPI 코드이다.

*from fastapi import FastAPI

app = FastAPI()

@app.get("/")
def read_root():
    return {"안녕": "FastAPI"}*

그리고 코드를 실행시키는 명령어는 다음과 같다.

이때 main은 파일의 이름으로, 자신의 파일 이름을 넣으면 실행 가능하다.(현재 파일은 **main.py**)

*uvicorn main:app --reload*

![](https://mblogthumb-phinf.pstatic.net/MjAyMzA5MTdfMzAg/MDAxNjk0OTU0MTc4Mjgz.w8_R1IJxr32PexXBhN9fCzlP0-uppsx05_0oknfz4yMg.tfxJmKmtXR05XyHGQA4atAVjsdl4IQovnKYclOsB_Gwg.PNG.sodaincan7/image.png?type=w800)

실행 후, 주소를 들어가 확인을 하면 다음과 같은 화면이 눈앞에 보일 것이다.

![](https://mblogthumb-phinf.pstatic.net/MjAyMzA5MTdfMjIz/MDAxNjk0OTU0MjU3MzQ3.3JSREMVYHLLt08DaXwsWrYCjB_hIpHvRKS8cjwGg7Ukg.MCHmzk_95UOnbhB_E01NUd9eY0lg0yDfdtek4yrxE_4g.PNG.sodaincan7/image.png?type=w800)

---

## **3. FastAPI로 데이터 전달**

오늘은 FastAPI를 통해 기본적으로 데이터가 전달되는 구조만 만들어보자.

우리의 예제는 **[ index.html 정보 입력 -> result.html 정보 전달 ]**의 구조로 예제를 만들어 볼것이다. 이를 위해 우선 templates라는 폴더를 만들고 그 안에 index.html, result.html이라는 html 파일을 만들어 보자.

![](https://mblogthumb-phinf.pstatic.net/MjAyMzA5MTdfMjQ3/MDAxNjk0OTU0NTY2NTU4.6AfPT4WY9cl-cNptqWX8AwnzeUSCmjU6LIWhQujHVhcg.r6nW2GD7ffG29UdkcR2cq95lCdcqpSt-02Fikxk0kVcg.PNG.sodaincan7/image.png?type=w800)

html파일을 templates 폴더 안에 넣도록 하자

[코드 main.py]

from fastapi import FastAPI, Form, Request
from fastapi.templating import Jinja2Templates
from fastapi.responses import HTMLResponse

# FastAPI의 인스턴스를 생성
app = FastAPI()

templates = Jinja2Templates(directory="templates")

# templates 폴더의 "index.html" 응답
@app.get("/", response_class=HTMLResponse)
async def read_root(request: Request):
    return templates.TemplateResponse("index.html", {"request": request})

# 사용자가 폼을 통해 보낸 데이터(content)를 받아서 "result.html" 템플릿에 넘김
@app.post("/result", response_class=HTMLResponse)
async def post_result(request: Request, content: str = Form(...)):
    return templates.TemplateResponse("result.html", {"request": request, "content": content})

[코드 index.html]

<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Index</title>
</head>
<body>
    <form action="/result" method="post">
        <input type="text" name="content" placeholder="내용을 입력하세요...">
        <button type="submit">제출</button>
    </form>
</body>
</html>

[코드 result.html]

<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Result</title>
</head>
<body>
    <h1>입력한 내용:</h1>
    <p>{{ content }}</p>
</body>
</html>

---

## **4. 결과 확인**

다시 터미널에 명령어를 입력해 실행하면 다음과 같은 화면이 나타난다.

*uvicorn main:app --reload*

[입력화면, index.html]

![](https://mblogthumb-phinf.pstatic.net/MjAyMzA5MTdfMjk0/MDAxNjk0OTU1MDAyMDQ4.AxA7wWQITs5yxQt7KJYz2JpF49HkqSowFUe6roOwXi0g.wlx9la4_ezzR1vNn0Jr-dRtJ25tICNQtkdH4OobXXpcg.PNG.sodaincan7/image.png?type=w800)

[출력화면, result.html]

![](https://mblogthumb-phinf.pstatic.net/MjAyMzA5MTdfODgg/MDAxNjk0OTU1MDM4MDU5.cQgrxvgcY1xwsajLB16U1xgR5KnJ-UDd0qAyEqwGivIg.0OGmz4OTtZJaYfVUX5HY8pbSo-9U1QTF4xkQAs_gG20g.PNG.sodaincan7/image.png?type=w800)

성공!!!!