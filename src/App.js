import './App.css';
import Header from './components/Header';
import TodoList from './components/TodoList';
import Footer from './components/footer/Footer';

function App() {
  return (
    <div className="App">
      <nav><section><h1>Redux ToDo</h1></section></nav>
      <main>
        <section className="medium-container">
          <h2>Todos</h2>
          <div className="todoapp">
            <Header />
            <TodoList />
            <Footer />
          </div>
        </section>
      </main>
    </div>
  );
}

export default App;
