// app/dashboard/components/ClientDashboard.tsx

import dynamic from 'next/dynamic'
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from 'chart.js'

// Register the required components for Chart.js
ChartJS.register(ArcElement, Tooltip, Legend)

// Dynamic import of Chart component from react-chartjs-2
const Chart = dynamic(() => import('react-chartjs-2').then(mod => mod.Chart), { ssr: false })

export default function ClientDashboard() {
  return (
    <div>
      <h1>Client Dashboard</h1>
      <div style={{ width: '500px', height: '300px' }}>
        {/* Example doughnut chart */}
        <Chart
          type="doughnut"
          data={{
            labels: ['Energy Saved', 'Energy Used'],
            datasets: [
              {
                data: [30, 70],
                backgroundColor: ['#61dafb', '#21a1f1'],
              },
            ],
          }}
        />
      </div>
    </div>
  )
}
