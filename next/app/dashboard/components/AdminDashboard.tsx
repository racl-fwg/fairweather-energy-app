// app/dashboard/components/AdminDashboard.tsx

import dynamic from 'next/dynamic'
import { Chart as ChartJS, CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend } from 'chart.js'
import SelfCheckFormsAdmin from './SelfCheckFormsAdmin'

// Register the required components for Chart.js
ChartJS.register(CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend)

// Dynamic import of Chart component from react-chartjs-2
const Chart = dynamic(() => import('react-chartjs-2').then(mod => mod.Chart), { ssr: false })

export default function AdminDashboard() {
  return (
    <div>
      <h1>Admin Dashboard</h1>
      <div style={{ width: '500px', height: '300px' }}>
        {/* Example bar chart */}
        <Chart
          type="bar"
          data={{
            labels: ['Installer 1', 'Installer 2', 'Installer 3'],
            datasets: [
              {
                label: 'Form Submission Status',
                data: [10, 5, 7],
                backgroundColor: ['#61dafb', '#21a1f1', '#2ec4b6'],
              },
            ],
          }}
        />
      </div>
      <SelfCheckFormsAdmin />
    </div>
  )
}
