import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { Link, useParams } from 'react-router-dom';

import { dateFormatter } from '../../utils/DateFormatter';

export default function Home() {
   const [pessoas, setPessoas] = useState([]);

   const { id } = useParams();

   useEffect(() => {
      loadPessoas();
   }, []);

   const loadPessoas = async () => {
      const result = await axios.get('http://localhost:8080/pessoas');
      setPessoas(result.data);
   };

   const deletePessoa = async (id) => {
      await axios.delete(`http://localhost:8080/pessoas/${id}`);
      loadPessoas();
   };

   return (
      <div className="container">
         <div className="py-4">
            <table className="table border shadow">
               <thead>
                  <tr>
                     <th scope="col">ID</th>
                     <th scope="col">Nome</th>
                     <th scope="col">Email</th>
                     <th scope="col">CPF</th>
                     <th scope="col">Data Nascimento</th>
                  </tr>
               </thead>
               <tbody>
                  {pessoas.map((pessoa, index) => (
                     <tr>
                        <th scope="row" key={index}>
                           {index + 1}
                        </th>
                        <td>{pessoa?.nome}</td>
                        <td>{pessoa?.email}</td>
                        <td>{pessoa?.cpf}</td>
                        <td>{dateFormatter(pessoa?.dataNascimento)}</td>
                        <td>
                           <Link
                              className="btn btn-primary mx-2"
                              to={`/viewPessoa/${pessoa?.id}`}
                           >
                              View
                           </Link>
                           <Link
                              className="btn btn-outline-primary mx-2"
                              to={`/updatePessoa/${pessoa?.id}`}
                           >
                              Editar
                           </Link>
                           <button
                              className="btn btn-danger mx-2"
                              onClick={() => deletePessoa(pessoa?.id)}
                           >
                              Deletar
                           </button>
                        </td>
                     </tr>
                  ))}
               </tbody>
            </table>
         </div>
      </div>
   );
}
