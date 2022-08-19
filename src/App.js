import { Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Book from './components/pages/Book';
import Cartegories from './components/pages/Cartegories';

const books = [
  {
    id: '1',
    title: 'The Alchemist',
    author: 'Paolo Cohelho',
  },
  {
    id: '2',
    title: 'The Dummy Accountant',
    author: 'Math Zeus',
  },
  {
    id: '3',
    title: 'Big Elephant Ego',
    author: 'Madame Careless',
  },
];

function App() {
  return (
    <div>
      <Navbar />
      <Routes>
        <Route path="/" element={<Book bookItem={books} />} />
        <Route path="/cartegories" element={<Cartegories />} />
      </Routes>
    </div>
  );
}

export default App;
