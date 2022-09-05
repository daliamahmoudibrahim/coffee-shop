
var swiper = new Swiper(".mySwiper", {
  watchSlidesProgress: true,
  slidesPerView: 3,
});

let search_icon=document.getElementById('search');
let search_input=document.querySelector('.search');
let close_icon=document.getElementById('close');
let bars=document.getElementById('bars');
let nav_ul=document.querySelector('.container .nav ul');
let close_bars=document.getElementById('close-bars');
let nav_ul_li=document.querySelectorAll('.container ul li');

search_icon.onclick=function(){
   search_input.style.display='block';
   search_icon.style.display='none';
   close_icon.style.display='inline-block';
}

close_icon.onclick=function(){
    search_input.style.display='none';
    search_icon.style.display='inline-block';
    close_icon.style.display='none';
}

bars.onclick=function(){
  nav_ul.style.display='block';
  nav_ul.classList.add("ul-mobile");
  nav_ul_li.forEach((li_class)=>{
     li_class.classList.add('ul-li-mobile');
     console.log(li_class);
  });
  bars.style.display='none';
  close_bars.style.display='inline-block';
}


close_bars.onclick=function(){
  // nav_ul.classList.add('.container ul li');
  nav_ul.classList.remove('ul-mobile');
  nav_ul_li.forEach((li_class)=>{
    li_class.classList.remove('ul-li-mobile');
    console.log(li_class);
 });
  nav_ul.style.display='none';
  bars.style.display='inline-block';
  close_bars.style.display='none';
}

