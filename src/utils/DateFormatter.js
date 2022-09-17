export const dateFormatter = (date) => {
   const ano = date.split('-')[0];
   const mes = date.split('-')[1];
   const dia = date.split('-')[2];
   return `${dia}/${mes}/${ano}`;
};
