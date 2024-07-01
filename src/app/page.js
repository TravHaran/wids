"use client";
import Image from "next/image";
import styles from "./page.module.css";
// import WareHouses from "../../components/warehouses";
import WareHouseItem from "../../components/warehouse/WareHouseItem";
import { useState } from "react";
import Navbar from "../../components/navbar/navbar";

const myWarehouses = [
  {
    id: crypto.randomUUID(),
    name: "Nike Canada DC",
    description: "Nike Canada Distribution Centre",
    location: "260 Brimley Rd, Scarborough, ON M1M 3H8, Canada",
    img: "https://utfs.io/f/b8408518-24d2-4d67-8e71-c9b64671fe59-tfahde.jpg",
  },
  {
    id: crypto.randomUUID(),
    name: "Nike US DC",
    description: "Nike US Distribution Centre",
    location: "5155 Lamar Ave, Memphis, TN 38118, United States",
    img: "https://utfs.io/f/bb7fa03c-67a4-4bcc-9467-247864414498-shjp2x.jpg",
  },
];

export default function Home() {
  /********************** HOOKS **********************/
  const [warehouses, setWarehouses] = useState(myWarehouses);
  /********************** HELPER FUNCTIONS **********************/

  return (
    <div className={styles.mainContainer}>
      <div className={styles.titleContainer}>
        <div>WIDS</div>
      </div>
      <div>WareHouse Information Display System</div>
      <div className={styles.buttonContainer}>
        <a href="warehouses">
          <button className={styles.inputButton} type="button">
            login
          </button>
        </a>
      </div>
    </div>
  );
}
