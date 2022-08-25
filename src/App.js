import { Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Book from './components/pages/Book';
import Cartegories from './components/pages/Cartegories';

function App() {
  return (
    <div>
      <Navbar />
      <Routes>
        <Route path="/" element={<Book />} />
        <Route path="/cartegories" element={<Cartegories />} />
      </Routes>
    </div>
  );
}

export default App;
