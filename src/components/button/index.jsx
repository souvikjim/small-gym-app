const Buttons=(props)=>{
    return(
        <button onClick={(e)=>props.getClicks(e)}>{props.buttonNames}</button>
    );
}
export default Buttons;