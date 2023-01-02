
import './styles/App.css'
import Generic from './routes/Generic'
import Header from './components/home/Header';
import Footer from './components/home/Footer';
import Home from './components/home/Home';


function App() {
  return (
    <>
        <Header />
          <Generic>
                <Home />
          </Generic>
        <Footer />
   
    </>
  );
}

export default App;
