//Caren's masterpiece
//8.9.24 added Person component and Gallery page
import './style/app.css';
import Header from './components/header';
import Home from './components/home';
import Footer from './components/footer';
import Gallery from './pages/gallery';
import { Person } from './pages/user';

function App() {
  return (
    <div className="App">
     < Header />
     < Home />
     < Person />
     < Gallery/>
     < Footer /> 
    </div>
  );
}

export default App;