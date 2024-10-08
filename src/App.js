
import { Provider } from 'react-redux';
import './App.css';
import Body from './components/Body';
import store from './utils/store';

function App() {
  return (
    <div className="">
      <Provider store={store}>
      <Body/>
      </Provider> 
    </div>
  );
}

export default App;
