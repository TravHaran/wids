"use client";
import Image from "next/image";
import styles from "./page.module.css";
import WareHouseItem from "../../../components/warehouse/warehouse";
import { useState, useEffect, Fragment } from "react";
import Navbar from "../../../components/navbar/navbar";
import { Sidebar, Menu, MenuItem, SubMenu } from "react-pro-sidebar";
import Overview from "../../../components/overview/overview";
import Process from "../../../components/process/process";
import InsightsIcon from '@mui/icons-material/Insights';
import TravelExploreIcon from '@mui/icons-material/TravelExplore';
import EngineeringIcon from '@mui/icons-material/Engineering';

const myWarehouses = [
  {
    id: 1,
    name: "Nike Canada DC",
    description: "Nike Canada Distribution Centre",
    location: "260 Brimley Rd, Scarborough, ON M1M 3H8, Canada",
    img: "https://utfs.io/f/b8408518-24d2-4d67-8e71-c9b64671fe59-tfahde.jpg",
  },
  {
    id: 2,
    name: "Nike US DC",
    description: "Nike US Distribution Centre",
    location: "5155 Lamar Ave, Memphis, TN 38118, United States",
    img: "https://utfs.io/f/bb7fa03c-67a4-4bcc-9467-247864414498-shjp2x.jpg",
  },
];

const CONTENT = {
  0 : "overview",
  1 : "process",
  2 : "metrics"
}

export default function Home() {
  /********************** HOOKS **********************/
  const [warehouseItem, setWarehouseItem] = useState({});
  const [content, setContent] = useState(0);
  const [process, setProcess] = useState("")

  /********************** HELPER FUNCTIONS **********************/
  function getWarehouse() {
    const id = localStorage.getItem("WAREHOUSE_ID");
    myWarehouses.forEach((warehouse) => {
      if (id == warehouse.id) {
        setWarehouseItem(warehouse);
      }
    });
  }

  function getPaths() {
    const localValue = localStorage.getItem("PATHS");
    if (localValue == null) return [];
    return JSON.parse(localValue);
  }


  useEffect(() => {
    getWarehouse();
  }, []);

  return (
    <div
      className={styles.body}
    >
      <main className={styles.main}>
        <Navbar paths={
          [
            {id: crypto.randomUUID(), name: "WIDS", loc:"warehouses"},
            {id: crypto.randomUUID(), name: warehouseItem.name, loc:"dashboard"}
          ]
        } />
        {/* <h2 className={styles.warehouseTitle}>{warehouseItem.name}</h2> */}
      </main>
      <div className={styles.contentContainer}>
        <Sidebar
          style={{ height: "95%", background: "#312c4a" }}
          rootStyles={{
            "& .ps-sidebar-container": {
              backgroundColor: "transparent !important",
            },
          }}
          className={styles.sidebar}
        >
          <Menu
            menuItemStyles={{
              button: {
                borderBottom: "1px solid rgba(21, 19, 32, 0.5)",
                backgroundColor: "#312c4a",
                "&:hover": {
                  backgroundColor: "#151320",
                },
              },
            }}
          >
            <MenuItem
              onClick={() => {setContent(0)}}
              icon={<TravelExploreIcon />}
              // active={true}
            >
              Overview
            </MenuItem>
            <SubMenu 
              label="Operations"
              icon={<EngineeringIcon />}
            >
              <MenuItem onClick={() => {setContent(1); setProcess("Inbound");}}> Inbound </MenuItem>
              <MenuItem onClick={() => {setContent(1); setProcess("Receiving");}}> Receiving </MenuItem>
              <MenuItem onClick={() => {setContent(1); setProcess("Picking");}}> Picking </MenuItem>
              <MenuItem onClick={() => {setContent(1); setProcess("Sorting");}}> Sorting </MenuItem>
              <MenuItem onClick={() => {setContent(1); setProcess("Shipping");}}> Shipping </MenuItem>
              <MenuItem onClick={() => {setContent(1); setProcess("Outbound");}}> Outbound </MenuItem>
            </SubMenu>
            <MenuItem 
              onClick={() => {setContent(2)}}
              icon={<InsightsIcon />}
            > Metrics </MenuItem>
          </Menu>
        </Sidebar>
        {content === 0 && (
          <div className={styles.content}>
            <Overview/>
          </div>
        )}
        {content === 1 && (
          <div className={styles.content2}>
            <a key={process}>
              <Process name={process}/>
            </a>
          </div>
        )}
      </div>
    </div>
  );
}
