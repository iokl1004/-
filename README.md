# React.js에 대한 알쓸신잡 노트
* 제작한 프로젝트를 깃허브에 호스팅 하는 방법!
  * 해당 프로젝트 터미널창에서 npm i gh-pages 설치
  * package.json 파일 맨 밑에 가서, "homepage" : "주소" 추가할것!
    * 주소에는 대문자가 들어가면 안됨, 깃허브 양식에 맞게 입력해야함
    * https://유저이름.guthub.id/리포지토리이름
    * 예) "homepage": "https://iokl1004.github.io/react-movie"
  * scripts 항목에 가서 아래 코드 추가!
    * "deploy": "gh-pages -d build",
    * "predeploy": "npm run build"
  * ※ 업로드 하고자 하는 프로젝트는 반드시 깃허브 리포지토리에 반드시 존재해야하며, 없을경우 리포티토리 생성!
  * 터미널에 npm run deploy 실행
  * package.json에 추가한 홈페이지에 접속 후, 제대로 되는지 확인!
