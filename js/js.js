// 메뉴 상단 
const MenuLine = document.querySelectorAll('.sub_menu_line');
const MenuBlank = document.querySelectorAll('.main_menu_li');
MenuLine.forEach(function(item,index){
  //메뉴라인에 마우스를 올리면 메뉴라인에 해당하는 메뉴블랭크가 생긴다.
  item.onmouseover = function(){
    MenuBlank[index].classList.add('underbar')
  }
  //메뉴라인에서 마우스를 빼면 메뉴라인에 해당하는 메뉴 블랭크가 생긴다.
  item.onmouseout = function(){
    MenuBlank[index].classList.remove('underbar')
  }
})




