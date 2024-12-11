import NavbarComponent from './components/NavbarComponent';
import HeaderComponent from './components/HeaderComponent';
import AboutComponent from './components/AboutComponent';
import ProductsComponent from './components/ProductsComponent';
import ContactComponent from './components/ContactComponent';
import "./css/style.css";


function App() {
  return (
    <div className="App">
      <NavbarComponent/>
      <HeaderComponent/>
      <AboutComponent/>
      <ProductsComponent/>
      <ContactComponent/>
    </div>
  );
}

export default App;
