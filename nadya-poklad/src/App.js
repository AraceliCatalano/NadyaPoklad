
import Header from './components/home/Header';
import Home from './components/home/Home';
import Generic from './routes/Generic'
import Footer from './components/home/Footer';
import './styles/App.css'

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
