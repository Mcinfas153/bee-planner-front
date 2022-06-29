import './App.css';
import BottomNav from './components/BottomNav';
import Home from './components/Home';

function App() {
  return (
    <div className="App min-h-screen bg-hero-pattern px-5 py-3">
      <Home />
      <BottomNav />
    </div>
  );
}

export default App;
