import React, {useState} from "react"

function NewMeasurement() {

    

    return (
        <form>
            <label>
                Your weight:
                <br />
                <input
                    type = "text"
                    name = "weight"
                    placeholder = "Type your weight here"
                    value = {value}
                />
            </label><br />
            <label>
                Date:
                <br />
                <input
                    type = "date"
                    name = "date"
                />
            </label><br />
            <button>Add!</button>
        </form>
    )
}

export default NewMeasurement