import React from "react"


const Detail = (props) => {
    let displayText = ["Select a Senator or Search"]
    if (props.data.state) {
        let displayArray = `Name: ${props.data.first_name}  ${props.data.last_name} 
        \n Gender: ${props.data.gender} \n Party: ${props.data.party} \n State: ${props.data.state}`
         displayText = displayArray.split('\n').map(i => {
            return <p>{i}</p>         

        });
    }
    return <p className="detPos">{displayText}</p>
}

export default Detail