import { useEffect, useState } from 'react';
import './App.scss'
import { Outlet, useNavigate } from 'react-router-dom';

export function MultistepFormContainerComponent() {
    const stepper_option = ['YOUR INFO','SELECT PLAN','ADD-ONS','SUMMARY'];

    const route = useNavigate();

    function handleStepper(index: any) {
        setSlide(index);

        if (index === 0) {
            route("/personal-info")
        } else if(index === 1) {
            route("/user-plan")
        } else if (index === 2) {
            route("/add-on")   
        } else if(index === 3) {
            route("/payment-summary")
        }
    }

    const [slide, setSlide] = useState(0);

    useEffect(() => {
        if (slide === 0) {
            route("/personal-info")
        } else if(slide === 1) {
            route("/user-plan")
        } else if (slide === 2) {
            route("/add-on")
        } else if(slide === 3) {
            route("/payment-summary")
        }
    }, [slide])

    function handleForm(action: any) {
        if (action === "next" && slide < 3) {
            setSlide(prevSlide => prevSlide + 1); 
        } else if (action === "back" && slide > 0) {
            setSlide(prevSlide => prevSlide - 1); 
        } else if(slide >= 3) {
            setSlide(0);
        }
    } 

    return (
        <>
            <div className="pagination-container">
                <div className='stepper-container'>
                {
                    stepper_option.map((item, index)=> {
                        return (
                            <div className="stepper" key={index}>
                                <div className={index === slide ?'index-selected' :'index'} onClick={() => handleStepper(index)}>{index + 1}</div>
                                <div className="stepper_content">
                                    <div className='step'>STEP {index + 1}</div>
                                    <div>{item}</div>
                                </div>
                            </div>
                        );
                    })
                }
                </div>
            </div>


            <div className='form-container'>
                <div className='form-cont1'>
                    <Outlet />
                </div>

                <div className='form-cont2'>
                    <div><button className='form-backBtn' onClick={() => handleForm("back")}>Go Back</button></div>
                    <div><button className="form-btn" onClick={() => handleForm("next")}>{slide === 3 ?"Confirm" :"Next Step"}</button></div>
                </div>
            </div>
        </>
    );
}