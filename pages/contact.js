import { useEffect, useState } from 'react';
import { useRef } from 'react';
import { motion as m } from "framer-motion"
import Mouse from "../public/components/Mouse"
import SubHead from "../public/components/subheader"
import emailjs from '@emailjs/browser'
import me from "../public/me.png"
import Image from 'next/image'
import SubFooter from '../public/components/subfooter';
import Head from 'next/head';
import IconButton from './../public/components/IconButton';
import Alert from "../public/components/Alert";
import Button from '../public/components/Button';
import Input from '../public/components/input';
import Textarea from '../public/components/textarea';


function Contact(){
  const [customButtonTypeState, setcustomButtonTypeState]=useState('alternate')
  const [formButtonLabelState, setformButtonLabelState]=useState('Send Message')
  const [alertIconState,setAlertIcon]=useState('')
  const [alertState, setAlertState] = useState('')
  const [alertMessage, setAlertMessage] = useState(''); // State for the alert message
  const [viewWidth, setViewWidth] = useState(0);
  const [showAlertMessage, showAlert] = useState(false); // New state for success message
  const [formSubmitted, setFormSubmitted] = useState(false);


  useEffect(() => {
    const handleResize = () => {
      setViewWidth(window.innerWidth);
    };
    

    handleResize();

    window.addEventListener('resize', handleResize);
    return () => {
      window.removeEventListener('resize', handleResize);

    };
    
  }, []);

  let classs='col'

if(viewWidth<768){
classs='col-12'
}
if(viewWidth>768){
  classs='col-4'
  }
  const divClassName = classs

  //form request

    const formref=useRef();
  const [form, setForm]=useState({
    name:'',
    email:'',
    message:''
  })

  const [loaded, setLoaded]=useState(false)

  const [loading, setLoading]= useState(false)    ;
const handleChange=(e) =>{
const {name,value}=e.target;
setForm({...form,[name]:value})
}


//SzlVDNiBR3_3JB8YE
//template_5wew57s
//service_395olyt

const handleSubmit = (e) => {
  e.preventDefault(); // Prevents the default form submission behavior

  setFormSubmitted(true);


   // Checking if any of the fields are empty before sending the email
   if (!form.name || !form.email || !form.message) {
    showAlert(true);
    setAlertState('error');
    setAlertIcon(
      <svg
      xmlns="http://www.w3.org/2000/svg"
      width={16}
      height={16}
      fill="currentColor"
      className="bi bi-exclamation-octagon"
      viewBox="0 0 16 16"
    >
      <path d="M4.54.146A.5.5 0 0 1 4.893 0h6.214a.5.5 0 0 1 .353.146l4.394 4.394a.5.5 0 0 1 .146.353v6.214a.5.5 0 0 1-.146.353l-4.394 4.394a.5.5 0 0 1-.353.146H4.893a.5.5 0 0 1-.353-.146L.146 11.46A.5.5 0 0 1 0 11.107V4.893a.5.5 0 0 1 .146-.353L4.54.146zM5.1 1 1 5.1v5.8L5.1 15h5.8l4.1-4.1V5.1L10.9 1z" />
      <path d="M7.002 11a1 1 0 1 1 2 0 1 1 0 0 1-2 0zM7.1 4.995a.905.905 0 1 1 1.8 0l-.35 3.507a.552.552 0 0 1-1.1 0z" />
    </svg>
      
    )
    setAlertMessage('Please fill in all fields');
    // Hide  message after 3 seconds
    setTimeout(() => {
      showAlert(false);
    }, 3000);
    return;
  }

  setLoading(true);
  setcustomButtonTypeState('loading')
  setformButtonLabelState('Sending Message...'); // Update the button label to "Sending..."
  setLoaded(true);

  emailjs
    .send('service_50n9tf3', 'template_5wew57s', {
      from_name: form.name,
      to_name: 'Shirish',
      from_email: form.email,
      to_email: 'shirish.shakya5@gmail.com',
      message: form.message,
    }, 'SzlVDNiBR3_3JB8YE')
    .then((response) => {
      console.log('Email sent!', response);
      // Show success message after successful submission
      showAlert(true);
      setcustomButtonTypeState('alternate')
      setformButtonLabelState('Send Message'); // Update the button label back to "Send" after sending
      setAlertState('success')
      setAlertIcon(
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
        <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75L11.25 15 15 9.75M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
        </svg>
      )
      setformButtonLabelState('Send Message'); // Update the button label back to "Send" after sending

      setAlertMessage('Message Sent Successfully');
      setLoading(false);
      
      setForm({ name: '', email: '', message: '' }); // Optionally reset the form fields

      // Hide success message after 3 seconds
      setTimeout(() => {
        showAlert(false);
      }, 3000);
    })
    .catch((error) => {
      console.error('Error sending email:', error);
      showAlert(true);

      // Handle error scenarios here
      setAlertState('error')
      setAlertIcon(
        <svg
        xmlns="http://www.w3.org/2000/svg"
        width={16}
        height={16}
        fill="currentColor"
        className="bi bi-wifi-off"
        viewBox="0 0 16 16"
      >
        <path d="M10.706 3.294A12.545 12.545 0 0 0 8 3C5.259 3 2.723 3.882.663 5.379a.485.485 0 0 0-.048.736.518.518 0 0 0 .668.05A11.448 11.448 0 0 1 8 4c.63 0 1.249.05 1.852.148l.854-.854zM8 6c-1.905 0-3.68.56-5.166 1.526a.48.48 0 0 0-.063.745.525.525 0 0 0 .652.065 8.448 8.448 0 0 1 3.51-1.27zm2.596 1.404.785-.785c.63.24 1.227.545 1.785.907a.482.482 0 0 1 .063.745.525.525 0 0 1-.652.065 8.462 8.462 0 0 0-1.98-.932zM8 10l.933-.933a6.455 6.455 0 0 1 2.013.637c.285.145.326.524.1.75l-.015.015a.532.532 0 0 1-.611.09A5.478 5.478 0 0 0 8 10m4.905-4.905.747-.747c.59.3 1.153.645 1.685 1.03a.485.485 0 0 1 .047.737.518.518 0 0 1-.668.05 11.493 11.493 0 0 0-1.811-1.07zM9.02 11.78c.238.14.236.464.04.66l-.707.706a.5.5 0 0 1-.707 0l-.707-.707c-.195-.195-.197-.518.04-.66A1.99 1.99 0 0 1 8 11.5c.374 0 .723.102 1.021.28zm4.355-9.905a.53.53 0 0 1 .75.75l-10.75 10.75a.53.53 0 0 1-.75-.75z" />
      </svg>
      
        
      )
      setAlertMessage('Failed to send message, please check your internet connection'); // Update alert message for failure
      setLoading(false);
    });
};

const [isCopied, setIsCopied] = useState(false);

const handleCopyClick = () => {
  // Logic to copy the email to the clipboard
  const emailElement = document.getElementById('email');
  if (emailElement) {
    const range = document.createRange();
    range.selectNode(emailElement);
    window.getSelection().removeAllRanges();
    window.getSelection().addRange(range);
    document.execCommand('copy');
    window.getSelection().removeAllRanges();
    setIsCopied(true);
    //  Reset the "Copied!" message after a delay (e.g., 3 seconds)
     setTimeout(() => {
      setIsCopied(false);
    }, 2000)
  }
  
};
  return(
        <>
        <Head>
          <title>
            Contact
          </title>
        </Head>
        <Mouse/>
        <m.div>
        <Alert
        message={alertMessage}
        type={alertState} 
        lefticon={
          alertIconState
        } className={showAlertMessage ?'alertMessageActive' : ''}/>

        <SubHead></SubHead>
       
        <main>
        
          <section className='contact-section'> 
            <div style={{paddingTop:"6rem"}} className='container d-flex flex-column gap-5'>

              <div className='headingContainer position-relative'>
              <h1>LETS WORK TOGETHER</h1>
              <Image alt="me" src={me} className="position-absolute"></Image >
              </div>
            
            <div className='contact row d-flex flex-row'>
              <div className={`${divClassName} d-flex flex-column gap-4`}>
              <Image src={me} alt="me" className="me-large"></Image >

             <div className='d-flex flex-column GAPm'>
              <span>Contact Details</span>
              <div className='d-flex flex-column GAPxs'>
              <div className='d-flex flex-row GAPm align-items-center'>
              <span className="FONTNEXA SIZEF8 TXTNaturalWhite100">Email:</span>
              <p id="email" className='TXTTailwindGray400 '>shirish.shakya5@gmail.com</p>
              <div className='position-relative'>

                <IconButton 
                onClick={handleCopyClick}
                icon=
                {isCopied ? 
                  <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-clipboard-check-fill" viewBox="0 0 16 16">
                  <path d="M6.5 0A1.5 1.5 0 0 0 5 1.5v1A1.5 1.5 0 0 0 6.5 4h3A1.5 1.5 0 0 0 11 2.5v-1A1.5 1.5 0 0 0 9.5 0h-3Zm3 1a.5.5 0 0 1 .5.5v1a.5.5 0 0 1-.5.5h-3a.5.5 0 0 1-.5-.5v-1a.5.5 0 0 1 .5-.5h3Z"/>
                  <path d="M4 1.5H3a2 2 0 0 0-2 2V14a2 2 0 0 0 2 2h10a2 2 0 0 0 2-2V3.5a2 2 0 0 0-2-2h-1v1A2.5 2.5 0 0 1 9.5 5h-3A2.5 2.5 0 0 1 4 2.5v-1Zm6.854 7.354-3 3a.5.5 0 0 1-.708 0l-1.5-1.5a.5.5 0 0 1 .708-.708L7.5 10.793l2.646-2.647a.5.5 0 0 1 .708.708Z"/>
                </svg>
                : 
                  <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-clipboard" viewBox="0 0 16 16">
                  <path d="M4 1.5H3a2 2 0 0 0-2 2V14a2 2 0 0 0 2 2h10a2 2 0 0 0 2-2V3.5a2 2 0 0 0-2-2h-1v1h1a1 1 0 0 1 1 1V14a1 1 0 0 1-1 1H3a1 1 0 0 1-1-1V3.5a1 1 0 0 1 1-1h1v-1z"/>
                  <path d="M9.5 1a.5.5 0 0 1 .5.5v1a.5.5 0 0 1-.5.5h-3a.5.5 0 0 1-.5-.5v-1a.5.5 0 0 1 .5-.5h3zm-3-1A1.5 1.5 0 0 0 5 1.5v1A1.5 1.5 0 0 0 6.5 4h3A1.5 1.5 0 0 0 11 2.5v-1A1.5 1.5 0 0 0 9.5 0h-3z"/>
                  </svg>
                  }
                />
             
              {isCopied && <div style={{top:'-100%',left:'-50%'}} className='position-absolute FONTNEXA BGBrandBlack300 BDR4 PLm PTxs PBxs PRm TXTNaturalWhite100'>Copied!</div>}
              </div>
              </div>
              <div className='d-flex flex-row GAPm'>
              <span className="FONTNEXA SIZEF8 TXTNaturalWhite100">Mobile:</span>
              <p className='TXTTailwindGray400 FONTNEXA'>+977 9869134750</p>
              </div>
              </div>
              </div> 

              <div className='d-flex flex-column GAPm'>
              <span>Socials </span>
              <ul className="contact d-flex flex-column gap-2" >
                        <li ><a className='TXTBrandOrange500' href="https://www.linkedin.com/in/shirish-shakya-0bb39a293">Linkedin</a></li>
                        <li><a className='TXTBrandOrange500' href="https://www.behance.net/shirishshakya">Behance</a></li>
                        <li><a className='TXTBrandOrange500' href="https://www.instagram.com/shakyastagram/?hl=en">Instagram</a></li>
                      </ul>

              </div> 
              </div>

              <div className='col'> 
              <form 
              className='d-flex flex-column gap-5'
              ref={formref}
              onSubmit={handleSubmit}
              method="post" // Add method="post" to use POST request

              >
                  <ul  className='d-flex flex-column GAPxxl'>
                    <li>
        <Input
          InputLabel="What is your name?"
          type='text'
          name='name'
          value={form.name}
          handleChange={handleChange}
          placeholder='e.g. Mike'
          required
          errorMessage="Please enter your name"
          formSubmitted={formSubmitted}
        />
        </li><li>
        <Input
          InputLabel="What is your email?"
          type='email'
          name='email'
          value={form.email}
          handleChange={handleChange}
          placeholder='e.g. Mike@gmail.com'
          required
          errorMessage="Please enter a valid email"
          formSubmitted={formSubmitted}

        /></li><li>
        <Textarea
          InputLabel="Your Message"
          name='message'
          rows={10}
          value={form.message}
          handleChange={handleChange}
          placeholder='Your Message Here'
          required
          errorMessage="Please enter your message"
          formSubmitted={formSubmitted}

        /></li>
      </ul>

                <Button
                customButtonType=
                {customButtonTypeState} // Set the customButtonType prop
                size="medium"
                label={formButtonLabelState}
                onClick={handleSubmit}
                type="submit" // Set the type attribute for form submission
                leftIcon=
                {
                <svg
  xmlns="http://www.w3.org/2000/svg"
  width={16}
  height={16}
  fill="currentColor"
  className="bi bi-send"
  viewBox="0 0 16 16"
>
  <path d="M15.854.146a.5.5 0 0 1 .11.54l-5.819 14.547a.75.75 0 0 1-1.329.124l-3.178-4.995L.643 7.184a.75.75 0 0 1 .124-1.33L15.314.037a.5.5 0 0 1 .54.11ZM6.636 10.07l2.761 4.338L14.13 2.576zm6.787-8.201L1.591 6.602l4.339 2.76 7.494-7.493Z" />
</svg>

              }
              />
              
              </form>
              </div>

            </div>
              
            </div>
          </section>
          <SubFooter> </SubFooter>

          </main>
        </m.div>
        </>

        
    )

    
    
}

export default Contact;
