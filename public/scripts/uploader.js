import horse from "./assets/videos/horsenft.mp4"
import porsche from "./assets/videos/car.mp4"

let videos=document.querySelectorAll('.threeDvideo')
// var source = document.querySelectorAll(".videosource");

// console.log(source)

for(let n=0;n<2;n++){
    let VideoID=videos[n].id;

    let Source=document.createElement("source")
    videos[n].appendChild(Source);
    
    if(VideoID==="nft"){
        
        Source.setAttribute('src', horse);
        Source.setAttribute('type', 'video/mp4');
        


    }
    if(VideoID==="porsche"){
        Source.setAttribute('src', porsche);
        Source.setAttribute('type', 'video/mp4'); 
        

    }
    
}


