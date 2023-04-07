
// 서브페이지2 box 클릭시 상세view 보여지기
const boxs = document.querySelectorAll('.box')
const detailViews = document.querySelectorAll('.detail_view')
boxs.forEach(function(box,index){
  box.onclick = function(){
    detailViews.forEach(function(detailView){
      detailView.style.display = 'none'
    })
    detailViews[index].style.display = 'block'
  }
})

// 서브페이지2 상세view의 close 버튼!
const closeBtn = document.querySelectorAll('.close_btn')
closeBtn.forEach(function(Close,index){
  Close.onclick = function(){
    detailViews.forEach(function(detailView){
      detailView.style.display = 'none'
    })
  }
})