import logo from "./logo.svg";
import "./App.css";
import { fakeDate, data } from "./Arrays";
import ListArticles from "./components/ListArticles";
import ListPizzas from "./components/ListPizzas";
import TestComponent from "./components/TestComponent";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

let point = 0;

const addSomePoint = () => {
  point = point + 10;
  console.log(point);
};

function App() {
  return (
    <Router>
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <p>
            Edit <code>src/App.js</code> and save to reload.
            <Routes>
              <Route path="List" element={<ListArticles articles={fakeDate} />}></Route>
              <Route path="Test" element={<TestComponent functionClick={addSomePoint} />}></Route>
              <Route path="Pomme" element={<h1>Quelle idée, une pomme sur une pizza !!!</h1>} ></Route>
              <Route path="Pizza" element={<ListPizzas elements={ data.filter((item)=>item.category === 'Pizza') }/>}></Route>
              <Route path="Variant" element={<ListPizzas elements={ data.filter((item)=>item.category === 'variant') }/>}></Route>
              <Route path="Boissons" element={<ListPizzas elements={ data.filter((item)=>item.category === 'Boisson') }/>}></Route>
            </Routes>
          </p>
          <a
            className="App-link"
            href="https://reactjs.org"
            target="_blank"
            rel="noopener noreferrer"
          >
            Learn React
          </a>
        </header>
      </div>
    </Router>
  );
}

export default App;
