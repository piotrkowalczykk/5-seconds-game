import styles from "./App.module.css";
import Home from './pages/home/Home';
import Options from "./pages/options/Options";
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<div className={styles.container}><Home /></div>} />
        <Route path="/options" element={<Options />} />
      </Routes>
    </Router>
  );
}

export default App;