import React from 'react';
import { Link } from 'react-router-dom';

export default function Navbar() {
   return (
      <div>
         <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
            <div
               className="navteste container-fluid"
               style={{
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'space-evenly',
               }}
            >
               <Link className="navbar-brand" to="/">
                  Springboot Rest API with React
               </Link>
               <button
                  className="navbar-toggler"
                  type="button"
                  data-bs-toggle="collapse"
                  data-bs-target="#navbarSupportedContent"
                  aria-controls="navbarSupportedContent"
                  aria-expanded="false"
                  aria-label="Toggle navigation"
               >
                  <span className="navbar-toggler-icon"></span>
               </button>

               <Link className="btn btn-outline-light" to="/addPessoa">
                  Adicionar Pessoa
               </Link>
            </div>
         </nav>
      </div>
   );
}
