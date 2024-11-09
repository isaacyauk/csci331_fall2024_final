import styles from "./page.module.css";
import Counter from "./components/Counter"

export default function Home() {
  return (
    <div className={styles.page}>
      <main className={styles.main}>
        <h1>DOES THIS WORK??</h1>
        <p>Welcome to your Next.js application.</p>
        <Counter incrementBy={1} buttonColor="lightblue" />
        <Counter incrementBy={2} buttonColor="lightgreen" />
      </main>
    </div>
  );
}
