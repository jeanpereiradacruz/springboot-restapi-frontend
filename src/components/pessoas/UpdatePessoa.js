import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { Link, useNavigate, useParams } from 'react-router-dom';

import { validateCPF } from '../../utils/CpfValidator';
import { cpfFormatter } from '../../utils/CpfMask';

export default function UpdatePessoa() {
   let navigate = useNavigate();

   const { id } = useParams();

   const [pessoa, setPessoa] = useState({
      nome: '',
      email: '',
      cpf: '',
      dataNascimento: '',
   });

   const { nome, cpf, email, dataNascimento } = pessoa;

   const onInputChange = (e) => {
      setPessoa({
         ...pessoa,
         [e.target.name]:
            e.target.name !== 'cpf'
               ? e.target.value
               : cpfFormatter(e.target.value),
      });
   };

   useEffect(() => {
      loadPessoa();
      // eslint-disable-next-line react-hooks/exhaustive-deps
   }, []);

   const onSubmit = async (e) => {
      e.preventDefault();
      if (!nome || !cpf || !email || !dataNascimento) {
         alert('Todos os campos devem ser devidamente preenchidos.');
         return;
      }
      try {
         await axios.put(`http://localhost:8080/pessoas/${id}`, pessoa);
         navigate('/');
      } catch (error) {
         if (error.response.data.cpf) {
            alert('CPF não é válido.');
         } else if (error.response.data.email) {
            alert('Email não é válido');
         }
         console.log({ error });
      }
   };

   const loadPessoa = async () => {
      const result = await axios.get(`http://localhost:8080/pessoas/${id}`);
      setPessoa(result.data);
   };

   return (
      <div className="container">
         <div className="row">
            <div className="col-md-6 offset-md-3 border rounded p-4 mt-2 shadow">
               <h2 className="text-center m-4">Editar Pessoa</h2>

               <form onSubmit={(e) => onSubmit(e)}>
                  <div className="mb-3">
                     <label htmlFor="Name" className="form-label">
                        Nome
                     </label>
                     <input
                        type={'text'}
                        className="form-control"
                        placeholder="Preencha seu nome"
                        name="nome"
                        value={nome}
                        onChange={(e) => onInputChange(e)}
                     />
                  </div>
                  <div className="mb-3">
                     <label htmlFor="Email" className="form-label">
                        E-mail
                     </label>
                     <input
                        type={'text'}
                        className="form-control"
                        placeholder="Preencha seu e-mail"
                        name="email"
                        value={email}
                        onChange={(e) => onInputChange(e)}
                     />
                  </div>

                  <div className="mb-3">
                     <label htmlFor="CPF" className="form-label">
                        CPF
                     </label>
                     <input
                        id="cpf"
                        type={'text'}
                        className="form-control"
                        placeholder="Preencha seu CPF"
                        name="cpf"
                        value={cpf}
                        onChange={(e) => {
                           onInputChange(e);
                           validateCPF();
                        }}
                     />
                  </div>

                  <div className="mb-3">
                     <label htmlFor="Data Nascimento" className="form-label">
                        Data de Nascimento
                     </label>
                     <input
                        type={'date'}
                        className="form-control"
                        placeholder="Preencha sua data de nascimento"
                        name="dataNascimento"
                        value={dataNascimento}
                        onChange={(e) => onInputChange(e)}
                     />
                  </div>

                  <button type="submit" className="btn btn-outline-primary">
                     Submit
                  </button>
                  <Link className="btn btn-outline-danger mx-2" to="/">
                     Cancel
                  </Link>
               </form>
            </div>
         </div>
      </div>
   );
}
