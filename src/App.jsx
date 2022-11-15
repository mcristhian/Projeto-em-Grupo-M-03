import Axios from 'axios';

export default function() {
  Axios.get('http://localhost:3000/planos/')
  .then((res) => {
    console.log(res)
  })
  .catch((error) => {
    console.log(error)
  })
}

// export default function() {
//   Axios.post('http://localhost:3000/planos', {
//     name: 'Test',
//     description: 'Test',
//     price: 'Test'
//   })
// }

// export default function() {
//   Axios.put('http://localhost:3000/planos/6', {
//     name: 'Novo plano',
//     description: 'Plano número 6',
//     price: 'R$ 1.000,00'
//   })
// }

// export default function() {
//   Axios.delete('http://localhost:3000/planos/5')
//   .then((res) => {
//     console.log('Deletado.')
//   })
//   .catch((error) => {
//     console.log('Erro.')
//   })
// }
