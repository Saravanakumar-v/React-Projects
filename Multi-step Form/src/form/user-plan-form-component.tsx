import { useState } from "react";
import arcade from '../assets/icon-arcade.svg';
import advanced from '../assets/icon-advanced.svg';
import pro from '../assets/icon-pro.svg';
import { Switch } from "@mui/material";

export function UserPlanFormComponent() {
    const monthly_plan = [
        {id:0,plan_name:"Arcade",plan_price: 9,plan_logo: arcade},
        {id:1,plan_name:"Advanced",plan_price: 12,plan_logo: advanced},
        {id:2,plan_name:"Pro",plan_price: 15, plan_logo: pro}
    ];
    const [planType, setPlanType] = useState(true);
    const [selectedPlan, setPlan] = useState(0);

    function handleSelectedPlan(index: any) {
        setPlan(index);
    }

    return (
        <>
            <div className="user-plan-container">
                <div className="user-plan-container_header">
                    <h1>Select your plan</h1>
                    <div>You have the option of monthly or yearly billing</div>
                </div>

                <div className="user-plan-container_options">
                    {
                        monthly_plan.map((item, index) => {
                            return (
                                <div className={selectedPlan === item.id ?'plan-card-selected' :'plan-card'} key={item.id} onClick={() => handleSelectedPlan(index)}>
                                    <div className="card1"><img src={item.plan_logo} alt="plan-logo"></img></div>
                                    <div className="card2">
                                        <div>{item.plan_name}</div>
                                        {planType ?<div className="price">${item.plan_price}/mo</div> :<div className="price">${item.plan_price * 10}/yr</div>}
                                        {planType ?null :<div className="yearly-pack">2 months free</div>}
                                    </div>
                                </div>
                            );
                        })
                    }
                </div>

                <div className="user-plan-container_validity">
                    <div className={planType ?'selected' :''}>Monthly</div>
                    <Switch onClick={() => setPlanType(!planType)}/>
                    <div className={planType === false ?'selected' :''}>Yearly</div>
                </div>
            </div>
        </>
    );
}