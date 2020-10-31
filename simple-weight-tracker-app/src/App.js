import React, { useState, useEffect } from "react";
import Header from "./Header";
import WeightChart from "./WeightChart";
import WeightHistory from "./WeightHistory";

function App() {
  const [weightInput, setWeightInput] = useState("");
  const [dateInput, setDateInput] = useState("");

  const [weightData, setWeightData] = useState([
    //some inputs for testing
    {
      weight: 86,
      date: "2020-01-01",
    },
    {
      weight: 82,
      date: "2020-02-01",
    },
    {
      weight: 83,
      date: "2020-03-01",
    },
    {
      weight: 80,
      date: "2020-04-01",
    },
    {
      weight: 78,
      date: "2020-05-01",
    },
    {
      weight: 72,
      date: "2020-07-01",
    },
  ]);

  const addWeightData = (props) => {
    const updatedWeightData = [
      ...weightData,
      { weight: weightInput, date: dateInput },
    ].sort((a, b) => Date.parse(a.date) - Date.parse(b.date));
    setWeightData(updatedWeightData);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    addWeightData(weightInput, dateInput);
    //console.log(dateInput)
  };

  function handleWeightChange(event) {
    setWeightInput(event.target.value);
  }

  function handleDateChange(event) {
    setDateInput(event.target.value);
  }

  useEffect(() => {
    localStorage.setItem("weightData", weightData);
  }, [weightData]);

  return (
    <div className="App">
      <Header />
      <form onSubmit={handleSubmit}>
        <label>
          Your weight:
          <br />
          <input
            type="number"
            name="weight"
            placeholder="Type your weight here"
            value={weightInput}
            onChange={handleWeightChange}
            required
          />
        </label>
        <br />
        <label>
          Date:
          <br />
          <input
            type="date"
            name="date"
            value={dateInput}
            onChange={handleDateChange}
            required
          />
        </label>
        <br />
        <button>Add!</button>
      </form>
      <WeightChart data={weightData} />
      {weightData.map((input, index) => (
        <WeightHistory key={index} index={index} input={input} />
      ))}
    </div>
  );
}

export default App;
