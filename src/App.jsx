import { Outlet } from 'react-router-dom';
import Header from "./components/ui/Header";
import Footer from './components/ui/Footer';
const App = () => {
  <>
    <Header />
    <Outlet />
    <Footer />
  </>
};

export default App;
