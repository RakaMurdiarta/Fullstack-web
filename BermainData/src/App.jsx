import { useState } from 'react'
// import Fetching from './hooks/Fetching'

// import {
//   Chart as ChartJS,
//   CategoryScale,
//   LinearScale,
//   BarElement,
//   Title,
//   Tooltip,
//   Legend,
// } from 'chart.js';
// import { Bar } from 'react-chartjs-2';

// ChartJS.register(
//   CategoryScale,
//   LinearScale,
//   BarElement,
//   Title,
//   Tooltip,
//   Legend
// );

// export const options = {
//   responsive: true,
//   plugins: {
//     legend: true,
//     title: {
//       display: true,
//       text: 'Countries of Population',
//       font: {
//         size: 20
//       }
//     },
//   },
// };

// const dataPush = []

// const data = {
//   key: 1,
//   data: 'string'
// }

// dataPush.push(data)
// dataPush.push(data)


// console.log(`push`, dataPush);



// function App() {

//   const [datawes] = Fetching(`https://countriesnow.space/api/v0.1/countries/population/cities`)
//   console.log('ds', datawes.map((set) => set.country));

//   const dataFilter = []

//   datawes.filter((set) => set.country === "Portugal").map((set) => {
//     dataFilter.push({
//       labels: set.city,
//       values: set.populationCounts.map((v) => parseInt(v.value)).reduce((total, curr) => total + curr, 0),

//     })
//   })


//   const Tambah = dataFilter.map((set) => ({
//     label: set.labels,
//     data: [{
//       x: set.labels,
//       y: set.values
//     }],
//     backgroundColor: `#` + Math.floor(Math.random() * 16777215).toString(16)
//   }))
//   console.log('tambah', Tambah);

//   const labels = dataFilter.map((set) => set.labels)

//   const data = {
//     labels,
//     datasets: Tambah
//   }

//   console.log(data);

//   const wes = [

//     {
//       label: 'Dataset 1',
//       data: [
//         {
//           x: 's',
//           y: 7,
//         },
//         {
//           x: 'k',
//           y: 3,
//         },
//         {
//           x: 'hu',
//           y: 11,
//         },
//         {
//           x: 'y',
//           y: 2,
//         },
//         {
//           x: '2k',
//           y: 3,
//         },
//       ],
//       backgroundColor: 'rgba(255, 99, 132, 0.5)',
//     },
//     {
//       label: 'Dataset 2',
//       data: [
//         {
//           x: 'hu',
//           y: 1,
//         },
//         {
//           x: 'k   ',
//           y: 6,
//         },
//         {
//           x: 's',
//           y: 1,
//         },
//         {
//           x: 'y',
//           y: 2,
//         },
//       ],
//       backgroundColor: 'rgba(53, 162, 235, 0.5)',
//     },
//   ]

//   console.log(`wes`, wes);





//   return (
//     <div style={{ width: '100vw', height: '100vh' }}>

//       <Bar data={data} options={options} />

//     </div>




//   )
// }

// export default App


import React from 'react'
import Push from './components/Push'

const App = () => {
  return (
    <div>
      <Push/>
    </div>
  )
}

export default App
