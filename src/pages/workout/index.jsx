import Buttons from "../../components/button";
import DisplayedTaskBox from "../../components/diplayedTaskBox";
import { useState, useEffect } from "react";


const Workout=()=>{
    const [count,setCount]=useState(0);
    const instructionArray=[
        {
            heading:"We Will do 3 things Today .",
            subHeading:"lets get started ."
        },
        {
            heading:"First Push-ups .",
            subHeading:"3 rounds of pushups. 10 pushups in a rep. "
        
        },
        {
            heading:"Second, Pull-Ups .",
            subHeading:"3 rounds of Pullups . 5 pullUps in a rep."
        
        },
        {
            heading:"Third, Butterfly .",
            subHeading:"3 rounds of Butterfly. 10 Butterfly in a rep. "
        }
    ];
    useEffect(()=>{
        // console.log('count :>> ', count);
        // console.log('instructionArray.length', instructionArray.length)
        if(count>=instructionArray.length){
            setCount(instructionArray.length-1);
        }
        
    },[count])
  
    const actionButtonClickHandler=(buttonName)=>{
        // buttonName==="start"?setCount(1):buttonName==="reset"?setCount(0):buttonName==="prev"?setCount(count-1):buttonName==="next"?setCount(count+1):null;
        if(buttonName==="start"){
            setCount(1);
        }
        else if(buttonName==="reset"){
            setCount(0);
        }
        else if(buttonName==="prev"){
            setCount(count-1);
        }
        else{
            setCount(count+1);
        }
    }
    return(
        <div>
            {count===0?<Buttons buttonNames={"Start"} getClicks={()=>actionButtonClickHandler("start")}/>:count>=2?
            <div style={{display:'flex',justifyContent:"space-evenly"}}>
            <Buttons buttonNames={"Reset"} getClicks={()=>actionButtonClickHandler("reset")}/>
            <Buttons buttonNames={"prev"} getClicks={()=>actionButtonClickHandler("prev")}/>
            <Buttons buttonNames={"Next"} getClicks={()=>actionButtonClickHandler("next")}/>
            </div>:<div style={{display:'flex',justifyContent:"space-evenly"}}>
            <Buttons buttonNames={"Reset"} getClicks={()=>actionButtonClickHandler("reset")}/>
            <Buttons buttonNames={"Next"} getClicks={()=>actionButtonClickHandler("next")}/>
            </div>}
            <DisplayedTaskBox count={count} instructionArray={instructionArray}/>
        </div>
    );
}
export default Workout;