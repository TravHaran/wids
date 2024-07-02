"use client";
import styles from "./page.module.css";
// import WareHouses from "../../components/warehouses";
import WareHouseItem from "@/components/warehouse/warehouse";
import { useState } from "react";
import Navbar from "@/components/navbar/navbar";

const myWarehouses = [
  {
    id: crypto.randomUUID(),
    name: "Brimley DC",
    description: "Nike Canada Distribution Centre"
  },
  {
    id: crypto.randomUUID(),
    name: "Memphis DC",
    description: "Nike US Distribution Centre"
  }
]

export default function Home() {
  /********************** HOOKS **********************/
  const [warehouses, setWarehouses] = useState(myWarehouses)
  /********************** HELPER FUNCTIONS **********************/

  return (
    <main className={styles.main}>
      <Navbar />
      <h2 className={styles.warehouseTitle}>WareHouses</h2>
      <div className={styles.gridContainer}>
        <div className={styles.grid}>
          {warehouses.length === 0 && "No WareHouses"}
          {warehouses.map(warehouse => {
            return (
                <WareHouseItem key={warehouse.id}
                  {...warehouse}
                />

            )
          })}
        </div>
      </div>
    </main>
  );
}