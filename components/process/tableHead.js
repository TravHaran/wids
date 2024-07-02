import styles from "./process.module.css"


export default function TableHead() {
    return (
        <thead>
            <tr>
                <th></th>
                <th className={styles.tableHead_time}>TIME</th>
                <th className={styles.tableHead_destination}>DESTINATION</th>
                <th className={styles.tableHead_flight}>FLIGHT</th>
                <th className={styles.tableHead_gate}>GATE</th>
                <th className={styles.tableHead_remarks}>REMARKS</th>
            </tr>
        </thead>
    )
};