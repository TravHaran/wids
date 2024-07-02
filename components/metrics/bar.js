import styles from "./metrics.module.css"
import { Bar } from 'react-chartjs-2'
import { 
    Chart as ChartJS,
    CategoryScale,
    LinearScale,
    BarElement,
    Title,
    Tooltip,
    Legend,
 } from 'chart.js'
 import { barChartData } from './fake_data';

ChartJS.register(
    CategoryScale,
    LinearScale,
    BarElement,
    Title,
    Tooltip,
    Legend,
);

export default function BarGraph() {
    const options = {
        responsive: true,
        plugins: {
            legend: {
                position: "bottom",
            },
            title: {
                display: true,
                text: "Quarterly Metric"
            }
        },
    };

    return (
        <div className={styles.barGraphContainer}>
            <Bar options={options} data={barChartData}/>
        </div>
    )
}