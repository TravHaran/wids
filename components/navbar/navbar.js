import styles from "./navbar.module.css";
import Image from "next/image";
import * as MdIcons from "react-icons/md";
import NavbarPath from "../navbar_path/navbar_path";

const Navbar = ({paths}) => {
  return (
    <div className={styles.navBarContainer}>
      <div className={styles.navBarLeft}>
        <a href="/">
          <MdIcons.MdWarehouse className={styles.homeIcon} />
        </a>
        <NavbarPath paths={paths}></NavbarPath>
      </div>
      <div className={styles.navBarRight}>
        <Image width={62} height={33} src={"/swoosh.png"} />
      </div>
    </div>
  )
};

export default Navbar;
