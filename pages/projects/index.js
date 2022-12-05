import Link from "next/link";
import {useRouter} from "next/router"

function Projects(){
    const projects=[
        {
            id:'VRS',name:'VendorRatingSolution'
        },
        {
            id:'SK',name:'SuperKrishak'
        },
    ]
    
    const router= useRouter()
   

  
    return(
        <div>
        <h1>Hello this is main project page</h1>
        {/* <Link href=""></Link> */}
        
        <ul>
            {
                
                projects.map((project)=><li key={project.id}>
                    
                    <Link href={`/projects/${project.id}`} style={{backgroundColor:'white',}}>{project.name}</Link>;
                    <button className="btn btn-primary" onClick={ function loadproject(){
                            router.push(`/projects/${project.id}`);
                        }} > Load Project</button>
                </li>,
                

                )
                
            }
        
        </ul>
        
        </div>
    )
}

export default Projects;