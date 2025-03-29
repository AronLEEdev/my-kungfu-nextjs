"use client";
import CopyrightIcon from "@mui/icons-material/Copyright";
import GitHubIcon from "@mui/icons-material/GitHub";
import EmailIcon from "@mui/icons-material/Email";
import styles from "../app/page.module.css";
export function Footer() {
  return (
    <footer className={styles.footer}>
      <div className="flex justify-between items-center">
        <CopyrightIcon />
        <span>2025 My-KungFu</span>
      </div>
      <div className="flex items-center gap-4">
        <GitHubIcon />
        <EmailIcon />
      </div>
    </footer >
  );
}
