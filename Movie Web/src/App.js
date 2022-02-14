import {
  BrowserRouter as Router,
  Routes,
  Route,
} from "react-router-dom";

import Detail from "./routes/Detail";
import Home from "./routes/Home";
import Nav from "./routes/Nav";

function App() {
  return (
    <Router>
      <Nav />
      <Routes>
        <Route path="/movie/:id" element={<Detail />}  />
        <Route path="/" element={<Home />} />
      </Routes>
    </Router>
  );
}

export default App;