# Node.js 패키지 생성 및 외부 패키지 사용

※ npm을 이용해서 Node.js 패키지를 만들고 다른 외부 패키지를 이용

## npm - Node Package Manager

- Node.js의 패키지 관리 도구 (패키지 : 기능 단위로 묶은 모듈)
- 패키지 파일들을 효율적으로 관리하기 위해 root폴더 지정

## 초기 설정

- npm을 이용하기 위한 root경로에 초기 설정
    
    <img src="img/Untitled.png">
    
    해당 경로 확인 후 엔터
    
    <img src="img/Untitled%201.png">
    
    package name, version, entry point, author 입력
    
    <img src="img/Untitled%202.png">
    
    package.json 생성으로 패키지 초기화 완료
    
- package.json : 패키지 정보를 기록하는 환경설정 파일
    - main : 진입파일 - 여러 개의 파일 중에 패키지를 실행시킬 파일
    - script : 자주 실행시킬 명령어를 미리 사전에 정의하는 곳
        
        script에 있는 명령어를 사용하기 위해서는 앞에 npm을 붙여야 함
        
        <img src="img/Untitled%203.png">
        

## npm을 이용한 외부 패키지 불러오기

- 오픈 패키지를 설치
    
    <img src="img/Untitled%204.png">
    
    <img src="img/Untitled%205.png">
    
    i : install 약자 → i대신 install로 써도 무방
    
    <img src="img/Untitled%206.png">
    
    <img src="img/Untitled%207.png">
    
    설치 시, 해당 경로에 있는 package.json으로 설치되고 위와 같이 새로운 파일과 코드 생성
    
    node_modules : 외부 패키지 저장소
    
    package-lock.json : 설치된 외부 패키지들이 정확히 어떤 버전으로 설치되었는지 기록되어 있음
    
- 외부 패키지 호출
    
    <img src="img/Untitled%208.png">
    
    npm i를 통해서 다운로드 받은 외부 모듈의 경우 경로를 명시할 필요X
    
    <img src="img/Untitled%209.png">