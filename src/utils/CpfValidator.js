import { validate } from 'gerador-validador-cpf';

export const validateCPF = () => {
   let input = document.getElementById('cpf');
   if (input.value.length >= 14 && validate(input.value)) {
      input.setAttribute('style', 'border-color: none;');
   } else {
      input.setAttribute('style', 'border-color: red;');
   }
};
