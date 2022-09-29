import React, { useState } from "react"

function SampleCode(props) {
    return <div><h1>Hello {props.name}!  Welcom to the React App.</h1>
        <h2>Please Check Your Age is : {props.age}</h2></div>
}
function Second(props) {

    // variable & 2nd is Function.
    var [num, changenum] = useState(1)
    {

    }
    // State is used to contain data about the component.
    return <div><h1>{num}</h1><button onClick={() => { changenum(num++) }}>Click Me!</button></div>
}
function Third() {
    return <h1>How are You?</h1>
}

export default SampleCode
export { Second, Third }
