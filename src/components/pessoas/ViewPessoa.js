import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { Link, useParams } from 'react-router-dom';

import { dateFormatter } from '../../utils/DateFormatter';

export default function ViewPessoa() {
   const [pessoa, setPessoa] = useState({
      nome: '',
      email: '',
      cpf: '',
      dataNascimento: '',
   });

   const { id } = useParams();

   useEffect(() => {
      loadPessoa();
   }, []);

   const loadPessoa = async () => {
      const result = await axios.get(`http://localhost:8080/pessoas/${id}`);
      setPessoa(result.data);
   };

   return (
      <div className="container">
         <div className="row">
            <div className="col-md-6 offset-md-3 border rounded p-4 mt-2 shadow">
               <h2 className="text-center m-4">Detalhes da Pessoa</h2>
               <div className="card">
                  <div className="card-header">
                     <h6>Detalhes da Pessoa com ID : {pessoa.id}</h6>
                     <div style={{ marginTop: '10px' }}>
                        <ul className="list-group list-group-flush">
                           <li className="list-group-item">
                              <b>Nome: </b>
                              {pessoa?.nome}
                           </li>

                           <li className="list-group-item">
                              <b>Email: </b>
                              {pessoa?.email}
                           </li>
                           <li className="list-group-item">
                              <b>CPF: </b>
                              {pessoa?.cpf}
                           </li>
                           <li className="list-group-item">
                              <b>Data Nascimento: </b>
                              {dateFormatter(pessoa?.dataNascimento)}
                           </li>
                        </ul>
                     </div>
                  </div>
               </div>
               <Link className="btn btn-primary my-2" to={'/'}>
                  Voltar pro início
               </Link>
            </div>
         </div>
      </div>
   );
}
