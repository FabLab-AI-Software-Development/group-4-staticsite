import './App.css';
import Nav from './components/nav/nav.jsx';
import Home from './pages/home.jsx';  // Import the Home component

function App() {
  return (
    <div className="App">
      <Nav />
      <main>
        <Home />  {/* Use the Home component here */}
      </main>
    </div>
  );
}

export default App;