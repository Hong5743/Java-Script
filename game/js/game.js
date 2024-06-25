const windowEvent = () => {              // 윈도우 이벤트 함수(키, 마우스)
  window.addEventListener('keydown', e => { // 키가 눌릴때 호출되는 함수
    console.log('키눌림 : ' + e.which);
  });

  window.addEventListener('keyup', e => {  // 키가 때질 때 호출되는 함수
    console.log('키때짐 : ' + e.which);
  });
}

const init = () => {                     // 프로그램 시작에 필요한 함수
  windowEvent();
}

window.onload = () => {                  // 파일이 실행되고 실행되는 함수
  init();
}  

젠장 유튜브 영상이 유료일 줄이야 내일부터는 다른 영상을 보고 다시 작성할 듯
