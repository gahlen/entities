import React from "react"


const Detail = (props) => {
    console.log("detail",props)
    let displayText = "Select a Senator"
    if (props.data.state) {
        displayText = `${props.data.first_name} ${props.data.last_name}, ${props.data.state}, ${props.data.party}`
    }
    return <p className="detPos">{displayText}</p>
}

export default Detail