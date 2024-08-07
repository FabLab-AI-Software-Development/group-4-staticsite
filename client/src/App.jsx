import './App.css';
// import ZipCodeSearch from './components/Zip_code/Ziplocate.jsx';
// import fetchUsers from './routes/api.js';
//import Chatbot from './components/Chatbot.jsx';

import Header from './components/header';
import Home from './components/home';
import Footer from './components/footer';


function App() {
  return (
    <div className="App">
     <Header />
     <Home />
     <Footer /> 
        {/* <ZipCodeSearch />    */}

    </div>
  );
}

export default App;