import styles from "./page.module.css";
import Counter from "./components/Counter"
import GitHubCitation from "./components/GithubCitation";
import FakeStore from "./components/FakeStore";

export default function Home() {
  return (
    <div className={styles.page}>
      <main className={styles.main}>
        <h1>Welcome to Scamazon</h1>
        <p>Scamming the world, one grandma at a time...</p>
        <h2>Please list how many grandchildren you have:</h2>
        <Counter incrementBy={1} buttonColor="lightpink" />
        <Counter incrementBy={2} buttonColor="lightblue" />
        <FakeStore />
        <GitHubCitation />
      </main>
    </div>
  );
}
