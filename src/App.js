import logo from './logo.svg';
import './App.css';
import store from './app/store';
import { Provider } from 'react-redux';
import { Todo } from './todo';

function App() {
  return (
    <Provider store={store}>


       <div className="App">
         <Todo />
    
    </div>
    </Provider>
   
  );
}

export default App;
