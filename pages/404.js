import Mouse from "../public/components/Mouse"
import Head from "next/head"


function NotFoundPage(){
    return(
        <>   
        <Head><title>404</title></Head>
        <Mouse></Mouse>
        <section className="w-100 min-vh-100">
            <div className="container min-vh-100 d-flex flex-column align-items-center justify-content-center">
            <div className="d-flex flex-column gap-4 w-100 h-100 text-center">
        <h1>404</h1>
        <h2 className="">Sorry, cant connect to the world.</h2> 
    </div>
            </div>
        </section>
        
        </>
    )
}

export default NotFoundPage;