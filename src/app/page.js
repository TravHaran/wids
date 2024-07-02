"use client";
import styles from "./page.module.css";
// import WareHouses from "../../components/warehouses";
import { useState, useEffect } from "react";

export default function Home() {
  /********************** HOOKS **********************/
  const [paths, setPaths] = useState(() => {
    const localValue = localStorage.getItem("PATHS")
    if (localValue == null) return []
    return JSON.parse(localValue)
  });

  useEffect(() => {
    localStorage.setItem("PATHS", JSON.stringify(paths))
  }, [paths])
  /********************** HELPER FUNCTIONS **********************/
  function addPath(name, loc) {
    setPaths((currentPaths) => {
      return [
        ...currentPaths,
        {id: crypto.randomUUID(), name, loc}
      ]
    })
  }

  function initPath(name, loc){
    setPaths(() => {
      return [
        {id: crypto.randomUUID(), name, loc}
      ]
    })
  }


  return (
    <div className={styles.mainContainer}>
      <div className={styles.titleContainer}>
        <div>WIDS</div>
      </div>
      <div>Warehouse Information Display System</div>
      <div className={styles.buttonContainer}>
        <a href="warehouses">
          <button className={styles.inputButton} type="button" onClick={() => initPath("WIDS", "warehouses")}>
            login
          </button>
        </a>
      </div>
    </div>
  );
}
