import './App.css';
import ZipCodeSearch from './components/Zip_code/Ziplocate.jsx';
import Home from './pages/home.jsx';  // Import the Home component
// import Favorite from './components/favorite.jsx'

function App() {
  return (
    <div className="App">
        <Home /> 
        <ZipCodeSearch /> 
            
            {/* <img src="https://lp-cms-production.imgix.net/2019-06/GettyImages-184106738_high.jpg" alt="Image of Downtown El Paso" width = 500 /> */}
    </div>
  );
}

export default App;