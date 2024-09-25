import Navbar from './components/modules/NavBar/navBar.tsx';
import './App.css';
import Cadastro from './components/pages/Cadastro/cadastro.tsx';
import Login from './components/pages/Login/login.tsx';

// criar tela pra exibir cada um separadamente

function App() {
  return (
    <div>
      <Navbar />
      <Cadastro /> 
    </div>
  );
}

export default App;
