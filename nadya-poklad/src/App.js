
import './styles/App.css'
import Generic from './routes/Generic'
import { Header, Footer } from './components/home';
import { Home } from './pages/Home'
import  {UserAuthContextProvider}  from './context/UserAuthContext';

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
