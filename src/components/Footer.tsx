"use client";
import CopyrightIcon from "@mui/icons-material/Copyright";
import styles from "../app/page.module.css";
import { Contact } from "./Contact";
export function Footer() {
  return (
    <footer className={styles.footer}>
      <div className="flex justify-between items-center">
        <CopyrightIcon />
        <span>2025 My-KungFu</span>
      </div>
      <Contact />
    </footer>
  );
}
