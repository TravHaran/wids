import styles from "./process.module.css";
import WebFont from "webfontloader";
import {useCallback} from "react";
import { FullScreen, useFullScreenHandle } from "react-full-screen";
import OpenInFullIcon from '@mui/icons-material/OpenInFull';

WebFont.load({
  google: {
    families: ["Ubuntu Condensed:400"],
  },
});

import Table from "./table";

export default function Process({ name }) {

  const handle = useFullScreenHandle();

  return (
    <div className={styles.tableContainer}>
        <div className={styles.tableHead}>
            <header className={styles.tableLeft}>{name}</header>
            <button className={styles.tableRight} onClick={handle.enter}>
                <OpenInFullIcon/>
            </button>
      </div>
      <FullScreen handle={handle}>
        <Table className={styles.fullscreenTable}></Table>
      </FullScreen>
      
      
    </div>
  );
}
