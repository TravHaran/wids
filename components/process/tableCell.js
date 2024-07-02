import styles from "./process.module.css"
import TableLetter from "./tableLetter"


export default function TableCell({ word, index }) {
    
    return (
        <td>
            {Array.from(word).map((letter, index) => 
                <TableLetter key={index} letter={letter} index={index}/>
            )}
        </td>
    )
};