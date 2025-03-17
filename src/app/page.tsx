import styles from "./page.module.css";
export default async function Home() {
  return (
    <div className={styles.page}>
      <main className={styles.main}>
       <h1>Hello world</h1>
      </main>
    </div>
  );
}
