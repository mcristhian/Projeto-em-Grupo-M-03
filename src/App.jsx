import './App.css';
import Create from './components/create';
import Read from './components/read';
import Update from './components/update';
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';

function App() {
  return (
    <Router>
      <div className="main">
        <h2 className="main-header">Transportadora</h2>
        <nav>
          <ul>
            <li>
              <Link to='/read'>Visualizar, atualizar e excluir rotas</Link>
            </li>
            <li>
              <Link to='create'>Adicionar rotas</Link>
            </li>
            <li>
              <Link to='/'>Página inicial</Link>
            </li>
          </ul>
        </nav>
        <p></p>
        <div>
          <Routes>
          <Route path="/create" element={<Create />} > </Route>
          </Routes>
        </div>
        <div style={{ marginTop: 20 }}>
          <Routes>
          <Route path="/read" element={<Read />} > </Route>
          </Routes>
        </div>
        <Routes>
        <Route path="/update" element={<Update />} > </Route>
        </Routes>
      </div>
    </Router>
  );
}

export default App;
