import React,{useState} from "react"

const TrafficLight =() =>{
    const [ color, setColor] = useState("red");
    return (
    <div className="d-flex flex-column justify-content-center align-items-center">
        <div className="bg-dark" style={{width:"30px", height:"200px"}}></div>
        <div className="bg-dark rounded-5  d-flex justify-content-evenly flex-column align-items-center" style={{width:"200px", height:"400px"}}>
            <div onClick={()=>{
                setColor("red")
            }} className={"bg-danger rounded-circle " + (color=="red"? "onLightRed":"")} style={{width:"115px", height:"115px"}}></div>
            <div onClick={()=>{
                setColor("yellow")
            }} className={"bg-warning rounded-circle " + (color=="yellow"? "onLightYellow":"")} style={{width:"115px", height:"115px"}}></div>
            <div onClick={()=>{
                setColor("green")
            }}className={"bg-success rounded-circle " + (color=="green"? "onLightGreen":"")} style={{width:"115px", height:"115px"}}></div>
        </div> 
    </div>
)
}


export default TrafficLight;