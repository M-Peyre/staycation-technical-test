import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Hotels from "./Components/Hotels";

const NotFound = () => <h1>Not Found</h1>;

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Hotels />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </Router>
  );
}

export default App;
