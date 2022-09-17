import './App.css';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';

import Navbar from './components/pages/Navbar';
import Home from './components/pages/Home';
import AddPessoa from './components/pessoas/AddPessoa';
import UpdatePessoa from './components/pessoas/UpdatePessoa';
import ViewPessoa from './components/pessoas/ViewPessoa';

import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

function App() {
   return (
      <div className="App">
         <Router>
            <Navbar />

            <Routes>
               <Route exact path="/" element={<Home />} />
               <Route exact path="/addPessoa" element={<AddPessoa />} />
               <Route exact path="/viewPessoa/:id" element={<ViewPessoa />} />
               <Route
                  exact
                  path="/updatePessoa/:id"
                  element={<UpdatePessoa />}
               />
            </Routes>
         </Router>
      </div>
   );
}

export default App;
