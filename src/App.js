import logo from './logo.svg';
import './App.css';
import Counter from './components/counter';
import {Provider} from 'react-redux'
import { Store } from './components/Store';
import Cart from './components/Cart';

function App() {
  return (
    <Provider store={Store}>
    <Cart/>
    </Provider>
  );
}

export default App;
