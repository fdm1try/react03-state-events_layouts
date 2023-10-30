import './App.css';
import { products } from './data';
import { Store } from './components/Store';

function App() {
  const items = products.map((product, index) => ({...product, id: index}));
  return (
    <Store items={items} />
  )
}

export default App
