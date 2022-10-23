import React, {useState} from "react";
import { Divider, List, Typography } from 'antd';
import { FcClapperboard, FcCalendar } from "react-icons/fc";

export default function Movie(props){
    const[age, setAge] = useState(2022-props.year)
    return (
       
    <div>
       <h2><FcClapperboard /> {props.title}</h2>
        <h2><FcCalendar />{props.year}</h2>
        <h2>{age}</h2>
        <h2>{props.genre}</h2>
        <h2>{props.director}</h2>
        <hr />
       </div>
        
    
    )

}