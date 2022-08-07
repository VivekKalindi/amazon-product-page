import logo from './logo.svg';
import './App.css';

import ProductList from './components/ProductList';

function App() {
  return (
    <div className="container">
      <h3 className='text-danger' >Product list</h3>
      <ProductList/>
    </div>
  );
}

export default App;
