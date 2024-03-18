import Image from "next/image";
import NotFoundImage from "@/app/assets/not-found.svg";
import styles from "@/app/not-found.module.scss";
export default function NotFound() {
  return (
    <div className={styles["not-found"]}>
      <Image src={NotFoundImage} alt="not found" />
      <h1>404 - Página não encontrada</h1>
    </div>
  );
}
