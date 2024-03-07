let imgs=document.querySelectorAll(".header-slider ul img")
let prev_btn=document.querySelector(".prev-control")
let next_btn=document.querySelector(".next-control")

let n=0

function changeSlide(){
    for (let i = 0; i  < imgs.length; i++) {
        imgs[i].style.display="none";
    }
    imgs[n].style.display="block"
}
changeSlide()

prev_btn.addEventListener("click",function(e){
    if(n>0){
        n--;
    }else{
        n=imgs.length-1
    }
changeSlide()
})
   
next_btn.addEventListener('click',()=>{
    if(n<imgs.length-1){
        n++
    }else{
        n=0
    }
    changeSlide()
})
    


