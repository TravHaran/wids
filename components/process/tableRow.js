import styles from "./process.module.css"
import TableCell from "./tableCell"


export default function TableRow({ flight }) {
    const words = Object.values(flight)
    return (
        <tr>
            <td className={styles.tableIcon}>✈</td>
            {words?.map((word, _index) => (
            <TableCell key={_index} word={word} />))}
        </tr>
    )
};