import './App.scss';
import Home from './components/Home/Home';
import PageRoutes from './routes/routes';
import Navbar from './components/Navbar/Navbar';
import Footer from './components/Footer/Footer';

function App() {
  return (
    <div className='app'>
      <Navbar />
      <PageRoutes />
      <Footer />
    </div>
  );
}

export default App;
