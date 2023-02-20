
import './styles/App.css'
import Generic from './routes/Generic'
import { Header, Home, Footer } from './components/home';
import  {UserAuthContextProvider}  from './context/UserAuthContext';
// import Footer from './components/home/Footer';
// import Home from './components/home/Home';

function App() {
  return (
    <>
    <UserAuthContextProvider>
        <Header />
          <Generic>
            <Home />      
          </Generic>
        <Footer />
    </UserAuthContextProvider>
    </>
  );
}

export default App;
