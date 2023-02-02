const tab=document.querySelectorAll(".carte");
const fleche1=document.querySelector(".img-fleche1")
const fleche2=document.querySelector(".img-fleche2")
const slide=document.querySelector(".slide")
let indince_element_active=0

function augmenter(variable){
 variable.style="z-index:2;transform:scale(1.5);widht:calc(2*100%)";
}
function diminuer(variable){
 variable.style="z-index:1;transform:scale(1)";
}
window.onload=()=>{
 augmenter(tab[indince_element_active])
}
fleche1.onclick=()=>{
 if(indince_element_active!=0)
 diminuer(tab[indince_element_active])
 augmenter(tab[indince_element_active-1])
 slide.scrollBy(-180,0)
indince_element_active=indince_element_active-1 
}
fleche2.onclick=()=>{
 if(indince_element_active!=7)
 diminuer(tab[indince_element_active])
 augmenter(tab[indince_element_active+1])
 slide.scrollBy(210,0)
indince_element_active=indince_element_active+1 
}