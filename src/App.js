import './App.css';
import Home from './container/Home';
import Routerss from './routes';
import 'bootstrap/dist/css/bootstrap.min.css'
import store from './redux/store';
import { Provider } from 'react-redux';

function App() {
  return (
    <Provider store={store}>
           <div className="App">
      
              <Routerss/>
     
           </div>

    </Provider>
  
  );
}

export default App;
