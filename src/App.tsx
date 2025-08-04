// components
import Footer from "./components/Footer";
import Header from "./components/Header";
// css styles modules
import styles from "./styles/App.module.css";

function App() {
  return (
    <div>
      <Header />
      <main className={styles.main}>
        <h1>Conteúdo...</h1>
      </main>
      <Footer />
    </div>
  );
}

export default App;
