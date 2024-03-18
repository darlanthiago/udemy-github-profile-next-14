import React from "react";
import styles from "./styles.module.scss";

export default function Loading() {
  return (
    <div className={styles.container}>
      <span className={styles.loader}></span>
    </div>
  );
}
