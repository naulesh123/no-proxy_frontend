import React, { useState } from 'react';
import axios from 'axios';
import { ResponsiveContainer, BarChart, Bar, XAxis, YAxis, Tooltip } from 'recharts';
import D_navbar from './D_navbar';


export default function D_check() {
  const [chartData, setChartData] = useState([]);
  const [chart_wala_div, setchart_wala_div] = useState()


  const chart = async () => {
    var roll = document.getElementById('input').value;
    try {
      const response = await axios.post('http://localhost:5000/chart_data', { roll });
      const { PED_LAB, TP, PDC, PI, BRM } = response.data;

      const updatedChartData = [
        { sub: 'PED_LAB', val: PED_LAB },
        { sub: 'TP', val: TP },
        { sub: 'PI', val: PI },
        { sub: 'PDC', val: PDC },
        { sub: 'BRM', val: BRM },
      ];

      setChartData(updatedChartData);

setchart_wala_div(<div style={{ width: '60%', height: '400px' }}>
<ResponsiveContainer>
  <BarChart data={chartData}>
    <XAxis dataKey="sub" />
    <YAxis />
    <Tooltip />
    <Bar dataKey="val" fill="green" />
  </BarChart>
</ResponsiveContainer>
</div>)



    } catch (err) {
      console.log(err);
    }
  };


// const [chart_wala_div, setchart_wala_div] = useState()





  return (
    <>
    <D_navbar></D_navbar>
      <form>
        <div className="form-row">
          <div className="col" style={{ display: 'flex', gap: '20px' }}>
            <input
              id="input"
              style={{ marginLeft: '36%', width: '400px', marginTop: '70px', paddingRight: '30px' }}
              type="text"
              className="form-control"
              placeholder="Enter Roll number of the Student"
            />
            <button style={{ height: '50px', marginTop: '70px' }} type="button" className="btn btn-success" onClick={chart}>
              Submit
            </button>
          </div>
        </div>
      </form>




      <div style={{ width: '60%', height: '400px' }}>
       <div>Graph will be displayed here</div>

        <ResponsiveContainer>

          
          <BarChart data={chartData}>
            <XAxis dataKey="sub" />
            <YAxis />
            <Tooltip />
            <Bar dataKey="val" fill="green" />
          </BarChart>
        </ResponsiveContainer>
      </div>
    </>
  );
}

