import styles from "./navbar.module.css";
import Image from "next/image";
import * as MdIcons from "react-icons/md";

const Navbar = () => {
  return (
    <div className={styles.navBarContainer}>
      <div className={styles.navBarLeft}>
        <a href="/">
          <MdIcons.MdWarehouse className={styles.homeIcon} />
        </a>
        
        <a href="/">
          <h2>WIDS</h2>
        </a>
      </div>
      <div className={styles.navBarRight}>
        <Image width={62} height={33} src={"/swoosh.png"} />
      </div>
    </div>
  );
};

export default Navbar;
