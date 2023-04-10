const menu_wrap = document.querySelector('.menu_wrap')
const hamburg_bar = document.querySelector('.hamburg_bar')
const dark = document.querySelector('.dark')
const hamburg_line = document.querySelector('.hamburg_line')

let hamburg_btn = 0
hamburg_bar.addEventListener('click',function(){
  
  if(hamburg_btn === 0){
    menu_wrap.style.right='0'
    dark.style.display='block'
    dark.style.background= 'rgba(0,0,0,0.7)';
    hamburg_line.classList.add('on')
    hamburg_btn = 'on'
  }else{
    menu_wrap.style.right='-55%'
    dark.style.display='none'
    dark.style.background= 'rgba(0,0,0,0)';
    hamburg_line.classList.remove('on')
    hamburg_btn = 0
  }
})
dark.addEventListener('click',function(){
  menu_wrap.style.right='-55%'
    dark.style.display='none'
    dark.style.background= 'rgba(0,0,0,0)';
    hamburg_line.classList.remove('on')
    hamburg_btn = 0
})

$('.main_menu_wrap').on('click',function(){
  $('.sub_menu_wrap').slideUp()
  $(this).find('.sub_menu_wrap').slideDown()
})
