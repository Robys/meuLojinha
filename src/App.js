import {BrowserRouter,Routes,Route} from 'react-router-dom'

import Home from './views/Home'
import Product from './views/Product'
import NavBar from './components/NavBar';

function App() {
  return (
    <div className="App">
      <NavBar/>
      
      <BrowserRouter>
        <Routes>
          <Route path="/" Component={Home} />
          <Route path="/product/:id" Component={Product} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
