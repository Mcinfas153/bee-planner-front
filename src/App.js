import './App.css';
import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";
import BottomNav from './components/BottomNav';
import Home from './components/Home';
import Transactions from './components/Transactions';
import Profits from './components/Profits';

function App() {
  return (
    <BrowserRouter>
      <div className="App min-h-screen bg-hero-pattern py-3">
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/transactions' element={<Transactions />} />
          <Route path='/profits' element={<Profits />} />
        </Routes>
        <BottomNav />
      </div>
    </BrowserRouter>
  );
}

export default App;
