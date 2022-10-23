import React, {useState} from "react";

export default function MyComponent(){

    const[temp, setTemp] = useState(15)
    const[modes, setModes] = useState("Cold")
    const [degree, setDegree] = useState("C")

    function convertdegree(){
        if (degree === "C"){
            setTemp((temp*1.8)+32) 
            
        }
        if (degree === "F"){
            setTemp((temp-32)/1.8)
            
        }

        
    }
    return(
        <div>
            
            <h1>{temp}</h1> 
             
            <button onClick={() => {setTemp(temp+1)}}>+</button>
            <button onClick={() => {setTemp(temp-1)}}>-</button>
            <hr />
            <br />
            <h1>{modes}</h1> 
            <button onClick={() =>{setModes("Cold")}}>Cold</button>
            <button onClick={() =>{setModes("Hot")}}>Hot</button>
            <button onClick={() =>{setModes("Auto")}}>Auto</button>
            <br />
            <hr />
            <br />
            <h1>{temp} &#176; {degree}</h1>
            <button onClick={() =>{setDegree("C")}}>C</button>
            <button onClick={() =>{setDegree("F")}}>F</button>
            <button onClick={() =>{convertdegree()}}>Convert</button>
            </div>
    )
}