import './App.css';
import Movie from './components/Movie';
import Detail from './components/Detail';
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Link
} from "react-router-dom";

function App() {
  return (
    <Router>
    <div className="App">
        <Routes>
          <Route path="/" element={<Movie />}></Route>
          <Route path="/detail" element={<Detail/>}></Route>
        </Routes>
    </div>
  </Router>
  );
}

export default App;
