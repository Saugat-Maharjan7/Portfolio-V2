let scrollable = document.querySelector('main');
let first=document.querySelector('.model-row1');
let second=document.querySelector('.model-row2');

//parallax scrolling is initiated only when the window is larger than 990px

if(window.innerWidth>990){
    scrollable.addEventListener('scroll',()=>{
        for (let i=0;i<=1000;i++){
            let top=scrollable.scrollTop;
            let t=top+i*.1  
            let x=t/1000;
            console.log(t)

            // console.log(x) 
            if(t>3100){
                // console.log("point reached")
                    first.style.transform="translateX(-"+(x*1)*25+"px)"
                    second.style.transform="translateX(-"+(x/1)*100+"px)"
    
            }
        }
    })
}





