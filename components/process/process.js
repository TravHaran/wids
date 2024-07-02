import styles from "./process.module.css"
import WebFont from "webfontloader"

WebFont.load({
   google: {
     families: ['Ubuntu Condensed:400']
   }
});

import Table from "./table"

export default function Process({name}) {
    return (

        <div className={styles.departures}>
            <header>{name}</header>
            <Table>

            </Table>

        </div>
    )
};