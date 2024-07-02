import styles from "./metrics.module.css"
import { Pie } from 'react-chartjs-2'
import { 
    Chart as ChartJS,
    ArcElement,
    Title,
    Tooltip,
    Legend,
 } from 'chart.js'
 import { pieChartData } from './fake_data';

ChartJS.register(
    ArcElement,
    Title,
    Tooltip,
    Legend,
);

export default function PieChart() {
    const options = {
        responsive: true,
        plugins: {
            legend: {
                position: "bottom",
            },
            title: {
                display: true,
                text: "Annual Metric"
            }
        },
    };

    return (
        <div className={styles.pieChartContainer}>
            <Pie options={options} data={pieChartData} />
        </div>
    )
}