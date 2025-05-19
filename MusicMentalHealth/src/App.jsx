import { useState } from 'react'
import { Chart as ChartJS } from "chart.js/auto";
import { Bar } from "react-chartjs-2";
import './App.css'

function App() {

  return (
    <>
    <h1>MusicxMentalHealth</h1>
    <div className="dataCard">
    <Bar
      data={{
        labels: ["0-2.40", "2.40-4.80", "4.80-7.20", "7.20-9.60", "9.60-12", "12-14.40", "14.40-16.80", "16.80-19.20", "19.20-21.60", "21.60-24"],
        datasets: [
          {
            label: "Hours Played Per Day",
            data: [338, 210, 116, 32, 21, 11, 3, 0, 0, 3],
        },
      ],
      }}
      />
      <Bar
        data={{
          labels: ["0-1", "1-2", "2-3", "3-4", "4-5", "5-6", "6-7", "7-8", "8-9", "9-10"],
          datasets: [
            {
              label: "Self-Reported Depression, on a scale of 0-10",
              data: [84, 40, 93, 61, 58, 56, 88, 96, 77, 83],
          },
        ],
        }}
      />
      </div>
    </>
  )
}

export default App
