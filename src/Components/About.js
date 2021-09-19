import React from 'react';
import "./about.css";
import Header from './Header';
import Vision from './Vision';
function About(props)
{
    return(
        <>
        <Header props={props} />
        <div className="aboutBg">
            <section className="py-8 ">
            <div className="container">
                    <div className="row">
                        <div className="col-md-4 my-auto">
                            <h1> About US</h1>

                            </div>
                            
                        
  

                     </div>
             </div>

            </section>
        
    
            <section className="section bg-c-light">
            <div className="container">
                    
                        

                            <h3 className="main-heading">
                                Our Company
                            </h3>
                            <div className="underline mx-auto"></div>
                            <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.</p>

                          

                     
             </div>

            </section>
        
     
           <Vision/>
       
        </div>
</>
       
    )
}
export default About;