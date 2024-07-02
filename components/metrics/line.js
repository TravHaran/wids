import styles from "./metrics.module.css"
import { Line } from 'react-chartjs-2'
import { 
    Chart as ChartJS,
    CategoryScale,
    LinearScale,
    PointElement,
    LineElement,
    Title,
    Tooltip,
    Legend,
 } from 'chart.js'
 import { lineChartData } from './fake_data';

ChartJS.register(
    CategoryScale,
    LinearScale,
    PointElement,
    LineElement,
    Title,
    Tooltip,
    Legend
);

export default function LineGraph() {
    const options = {
        responsive: true,
        plugins: {
            legend: {
                position: "bottom",
            },
            title: {
                display: true,
                text: "Weekly Metric"
            }
        },
    };

    const data = {};

    return (
        <div className={styles.lineGraphContainer}>
            <Line options={options} data={lineChartData} />
        </div>
    )
}