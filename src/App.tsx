// components
import Footer from "./components/Footer";
import Header from "./components/Header";
// css styles modules
import styles from "./App.module.css";

function App() {
  return (
    <div>
      <Header />
      <main className={styles.main}>
        <div>
          <h2> O que você vai fazer?</h2>
          <p>formulário</p>
        </div>
        <div>
          <h2>Suas Tarefas</h2>
          <p>lista</p>
        </div>
      </main>
      <Footer />
    </div>
  );
}

export default App;
