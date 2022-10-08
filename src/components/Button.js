import React from "react";
export default function Button(props){
    return(
        <div>
            <button className = "Button" 
            style={{backgroundColor : "yellow",
            fontSize : "25px", 
            borderColor : "yellow"}}
            >
                {props.val}
            </button>
        </div>
    )
}