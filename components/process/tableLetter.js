import styles from "./process.module.css"
import { useState } from "react"

export default function TableLetter({ letter, index}) {
    const [flip, setFlip] = useState(false)

    setTimeout(() => {
        setFlip(true)
    }, 100 * index)

    return (
        <div className={flip? styles.flip : styles.letter}>
            {flip? letter : null}
        </div>
    )
}