//magic footer

var main=document.querySelector(".main")
var observer= new IntersectionObserver((entries)=>{
    entries.forEach((entry)=>{
      if(entry.isIntersecting){
        entry.target.classList.add('magic-footer')
    }else{

          entry.target.classList.remove('magic-footer')

      }
    }) 
  })
  

  var foot =document.querySelectorAll("footer")
  foot.forEach((el)=>observer.observe(el))
  
  
  

  
  