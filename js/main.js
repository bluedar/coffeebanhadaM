const bnBtn = document.querySelectorAll('.banner ul li button')
const bnImg = document.querySelector('.banner_space div')

// 배너 버튼 클릭시 배너위치 이동기능
let Btn = 0
let Num = 0
bnBtn.forEach(function(bnbtn,btn){
  bnbtn.onclick = function(){
    bnBtn[Btn].classList.remove('point_bn')
    this.classList.add('point_bn')
    Btn=btn;
    Num= -1920 * btn
    bnImg.style.marginLeft = `${Num}px`;
    console.log(Num)
    }
})


// 배너 버튼및 이미지 전환 함수 왼쪽 -> 오른쪽
function moveBanner(){
  Btn += 1
  let yBtn = Btn-1
  if(Btn ==8){
    Btn = 0;
    Num = 0;
    bnImg.style.marginLeft = `${Num}px`
    bnBtn[7].classList.remove('point_bn')
    bnBtn[0].classList.add('point_bn')
  }else{Num -= 1920;
    bnImg.style.marginLeft = `${Num}px`;
    console.log(Num)
    bnBtn[yBtn].classList.remove('point_bn')
    bnBtn[Btn].classList.add('point_bn')
  }
}

// 배너 버튼 및 이미지 전환 함수 리버스 오른쪽 -> 왼쪽
function moveBannerR(){
  Btn -= 1
  let yBtn = Btn+1
  if(Btn == -1){
    Btn = 7;
    Num = 7*(-1920);
    bnImg.style.marginLeft = `${Num}px`
    bnBtn[0].classList.remove('point_bn')
    bnBtn[7].classList.add('point_bn')
  } else{Num += 1920;
    bnImg.style.marginLeft = `${Num}px`;
    bnBtn[yBtn].classList.remove('point_bn')
    bnBtn[Btn].classList.add('point_bn')
  }
}

// 배너 버튼 및 이미지 슬라이드 재생 기능(기본상태 = 재생상태)
let intervalID =
setInterval(moveBanner, 2000);


let intervalSW = "moveBanner"

//배너공간 토글 배너 슬라이드 역방향 재생기능
const bntoggle = document.querySelector('.banner_space')
bntoggle.addEventListener('click',function(){
  if(intervalSW =="moveBanner" ){
    clearInterval(intervalID)
    intervalID = setInterval(moveBannerR,2000)
    intervalSW = "moveBannerR"
  } else if(intervalSW =="moveBannerR" ){
    clearInterval(intervalID)
    intervalID = setInterval(moveBanner,2000)
    intervalSW = "moveBanner"
  }
})
/*
//배너공간 토글 배너 슬라이드 정지/재생 기능
const bntoggle = document.querySelector('.banner_space')
bntoggle.addEventListener('click',function(){
  if(intervalID){
    clearInterval(intervalID)
    intervalID = undefined;
  } else{intervalID =
    setInterval(moveBanner,2000)
  }
})
*/