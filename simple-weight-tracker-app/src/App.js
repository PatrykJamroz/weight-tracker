import React, {useState} from "react";
import Header from "./Header"
import WeightChart from "./WeightChart"
import WeightHistory from "./WeightHistory"


function App() {

  const [weightInput, setWeightInput] = useState('')
  const [dateInput, setDateInput] = useState('')

  const [weightData, setWeightData] = useState([
    /*{
        weight: 84,
        date: "Mar 12 2020",
    },
    {
        weight: 82,
        date: "Feb 15 2020",
    }*/
])

  const addWeightData = (props) => {
    const updatedWeightData = [...weightData, {weight: weightInput, date: dateInput}].sort((a,b) => Date.parse(a.date) - Date.parse(b.date))
    setWeightData(updatedWeightData)
  }

  /*function sortByDate(updatedWeightData) {
      return updatedWeightData.sort((a,b) => b.date - a.date)
  }*/
  

  const handleSubmit = e => {
    e.preventDefault()
    addWeightData(weightInput, dateInput)
    console.log(dateInput)
    
  }

  function handleWeightChange(event) {
    setWeightInput(event.target.value)
  }

  function handleDateChange(event) {
    setDateInput(event.target.value)
  }

  

  return (
    
    <div className="App">
      <Header />
      <form onSubmit={handleSubmit}>
            <label>
                Your weight:
                <br />
                <input
                    type = "number"
                    name = "weight"
                    placeholder = "Type your weight here"
                    value = {weightInput}
                    onChange = {handleWeightChange}
                    required
                />
            </label><br />
            <label>
                Date:
                <br />
                <input
                    type = "date"
                    name = "date"
                    value = {dateInput}
                    onChange = {handleDateChange}    
                    required                
                />
            </label><br />
            <button>Add!</button>
        </form>
      <WeightChart />
      {weightData.map((input, index) => <WeightHistory key={index} index = {index} input = {input} />)}
    </div>
  );
}

export default App;

