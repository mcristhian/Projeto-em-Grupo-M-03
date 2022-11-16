import Axios from 'axios';

// export default function() {
//   Axios.get('https://projetoemgrupom03.herokuapp.com/planos/')
//   .then((res) => {
//     console.log(res)
//   })
//   .catch((error) => {
//     console.log(error)
//   })
// }

export default function() {
  Axios.post('https://projetoemgrupom03.herokuapp.com/planos', {
    name: 'Test',
    description: 'Test',
    price: 'Test'
  })
}

// export default function() {
//   Axios.put('https://projetoemgrupom03.herokuapp.com/planos/6', {
//     name: 'Novo plano',
//     description: 'Plano número 6',
//     price: 'R$ 1.000,00'
//   })
// }

// export default function() {
//   Axios.delete('https://projetoemgrupom03.herokuapp.com/planos/5')
//   .then((res) => {
//     console.log('Deletado.')
//   })
//   .catch((error) => {
//     console.log('Erro.')
//   })
// }
