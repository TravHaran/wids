"use client";
import Image from "next/image";
import styles from "./page.module.css";
import WareHouseItem from "../../../components/warehouse/WareHouseItem";
import { useState } from "react";
import Navbar from "../../../components/navbar/navbar";

const myWarehouses = [
  {
    id: 1,
    name: "Nike Canada DC",
    description: "Nike Canada Distribution Centre",
    location: "260 Brimley Rd, Scarborough, ON M1M 3H8, Canada",
    img: "https://utfs.io/f/b8408518-24d2-4d67-8e71-c9b64671fe59-tfahde.jpg"
  },
  {
    id: 2,
    name: "Nike US DC",
    description: "Nike US Distribution Centre",
    location: "5155 Lamar Ave, Memphis, TN 38118, United States",
    img: "https://utfs.io/f/bb7fa03c-67a4-4bcc-9467-247864414498-shjp2x.jpg"
  },
];

export default function Home() {
  /********************** HOOKS **********************/
  const [warehouses, setWarehouses] = useState(myWarehouses);
  /********************** HELPER FUNCTIONS **********************/
  function getPaths() {
    const localValue = localStorage.getItem("PATHS")
    if (localValue == null) return []
    return JSON.parse(localValue)
  }
  return (
    <div className={styles.body}>
      <main className={styles.main}>
        <Navbar paths={getPaths()}/>
        <h2 className={styles.warehouseTitle}>WareHouses</h2>
        <div className={styles.gridContainer}>
          <div className={styles.grid}>
            {warehouses.length === 0 && "No WareHouses"}
            {warehouses.map((warehouse) => {
              return <WareHouseItem key={warehouse.id} {...warehouse} />;
            })}
          </div>
        </div>
      </main>
    </div>
  );
}
