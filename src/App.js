import { BrowserRouter } from 'react-router-dom';
import Header from './components/Header';
import Nav from './components/Nav';
import Main from './components/Main';
import Footer from './components/Footer';
import './App.css';

function App() {
  return (
      <BrowserRouter>
      <Header />
      <Nav />
      <Main />
      <Footer />
      </BrowserRouter>
  );
}

export default App;
