import styles from "./warehouse.module.css";
import Image from "next/image";

export default function WareHouseItem({ name, id, description, location, img }) {
  return (
    <div
      onClick={() => localStorage.setItem("warehouse", name)}
      href="warehouses"
      className={styles.card}
    >
      <div className={styles.cardContainer}>
        <Image 
            src={img}
            width={0}
            height={0}
            sizes="100vw"
            style={{ width: '100%', height: '200px', objectFit: 'cover', display: 'block', borderRadius: '20px 20px 0 0', overflow: 'hidden'}} // optional
        />
      </div>
      <div className={styles.cardDetails}>
        <h2>
          {name}
        </h2>
        <p>{location}</p>
      </div>
    </div>
  );
}
