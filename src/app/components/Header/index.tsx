import React from "react";
import Image from "next/image";

import Logo from "@/app/assets/logo.svg";

import styles from "./styles.module.scss";
import Link from "next/link";
export default function Header() {
  return (
    <header className={styles.header}>
      <Link href="/">
        <Image src={Logo} height={48} width={223} alt="Logo" />
      </Link>
    </header>
  );
}
