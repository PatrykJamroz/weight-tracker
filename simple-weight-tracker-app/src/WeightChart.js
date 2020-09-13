import React from "react"
import { LineChart, Line, CartesianGrid, XAxis, YAxis, Tooltip } from '../node_modules/recharts';


function WeightChart(props) {
    const renderLineChart = (
        <LineChart width={600} height={300} data={props.data} margin={{ top: 5, right: 20, bottom: 5, left: 0 }}>
          <Line type="monotone" dataKey="weight" stroke="#8884d8" />
          <CartesianGrid stroke="#ccc"  strokeDasharray="5 5"/>
          <XAxis dataKey="date" />
          <YAxis type = "number" domain = {['dataMin -1', 'dataMax + 1']} />
          <Tooltip />
        </LineChart>
      );
    return (
        <div>
            {renderLineChart}
        </div>
    )
}

export default WeightChart