import BarGraph from "./bar";
import LineGraph from "./line";
import PieChart from "./pie";
import styles from "./metrics.module.css"

export default function Metrics() {
    return (
        <div className={styles.metricsContainer}>
            <LineGraph/>
            <BarGraph />
            <PieChart />
        </div>
    )
}