import './App.css';
import {BrowserRouter} from 'react-router-dom'
import CustomRoutes from './allRouters/CustomRoutes';
import { Provider } from 'react-redux'
import store from './utils/store';

function App() {
  return (
        <Provider store={store}>
       <div>
        <CustomRoutes/>
       </div>
       </Provider>
   
  );
}


export default App;
