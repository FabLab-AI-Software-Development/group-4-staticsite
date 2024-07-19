import './App.css';
import Nav from './components/nav/nav.jsx';

function App() {
  return (
    <div className="App">
      <Nav />
        <section id="home">
            <div class="container">
            <h2>Home</h2>
            <p>The place we call home.</p>
            
            {/* <img src="https://lp-cms-production.imgix.net/2019-06/GettyImages-184106738_high.jpg" alt="Image of Downtown El Paso" width = 500 /> */}
            </div>
        </section>

      
    </div>
  );
}

export default App;
