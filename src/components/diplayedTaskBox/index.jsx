const DisplayedTaskBox=(props)=>{
    console.log('props.count :>> ', props.count);
  return(<div style={{border:"2px solid blue",margin:"10px",borderRadius:"7px"}}>
        
        <h1>
            {props.instructionArray[props.count]?.heading}
        </h1>
        <h1>
            {props.instructionArray[props.count]?.subHeading}
        </h1>
    </div>);
    }

export default DisplayedTaskBox;