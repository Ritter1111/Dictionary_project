import "./App.css";
import Dictionary from "./Dictionary";
import "bootstrap/dist/css/bootstrap.min.css";

function App() {
  return (
    <div className="App">
      <div className="container">
        <header className="App-header"></header>
        <main>
          <div className="main">React Dictionary</div>
          <Dictionary defaultKeyword="night" />
        </main>
        <footer className="App-footer">
          codded by Angelina
          <a href="https://github.com/Ritter1111"> my_github</a>
        </footer>
      </div>
    </div>
  );
}

export default App;
