import './App.css';
import {BrowserRouter} from 'react-router-dom'
import CustomRoutes from './allRouters/CustomRoutes';

function App() {
  return (
    <BrowserRouter>
       <div>
        <CustomRoutes/>
       </div>
       </BrowserRouter>
   
  );
}


export default App;
