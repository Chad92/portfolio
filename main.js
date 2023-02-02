// const tab=document.querySelectorAll(".carte");
// const fleche1=document.querySelector(".img-fleche1")
// const fleche2=document.querySelector(".img-fleche2")
// const slide=document.querySelector(".slide")
// let indince_element_active=0

// function augmenter(variable){
//  variable.style="z-index:2;transform:scale(1.5);widht:calc(2*100%)";
// }
// function diminuer(variable){
//  variable.style="z-index:1;transform:scale(1)";
// }
// window.onload=()=>{
//  augmenter(tab[indince_element_active])
// }
// fleche1.onclick=()=>{
//  if(indince_element_active!=0)
//  diminuer(tab[indince_element_active])
//  augmenter(tab[indince_element_active-1])
//  slide.scrollBy(-180,0)
// indince_element_active=indince_element_active-1 
// }
// fleche2.onclick=()=>{
//  if(indince_element_active!=7)
//  diminuer(tab[indince_element_active])
//  augmenter(tab[indince_element_active+1])
//  slide.scrollBy(210,0)
// indince_element_active=indince_element_active+1 
// }
let sliderImages = document.querySelectorAll('.slide');
  let current = 0;

  function reset() {
    for (let i = 0; i < sliderImages.length; i++) {
      sliderImages[i].style.display = 'none';
    }
  }

  function startSlide() {
    reset();
    sliderImages[0].style.display = 'block';
  }

  function slideLeft() {
    reset();
    sliderImages[current - 1].style.display = 'block';
    current--;
  }

  function slideRight() {
    reset();
    sliderImages[current + 1].style.display = 'block';
    current++;
  }

  let prevBtn = document.querySelector('#prevBtn');
  let nextBtn = document.querySelector('#nextBtn');

  prevBtn.addEventListener('click', function() {
    if (current === 0) {
      current = sliderImages.length;
    }
    slideLeft();
  });

  nextBtn.addEventListener('click', function() {
    if (current === sliderImages.length - 1) {
      current = -1;
    }
    slideRight();
  });

  startSlide();
