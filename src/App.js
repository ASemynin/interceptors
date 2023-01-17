import './App.css';
import api from './api';
import axios from 'axios';


function App() {

      const handlerReg = async() => {
          await axios.post('http://uni-team-inc.online:8080/register', 
              JSON.stringify({
                name:"Leonid",
                email:"Leonid@.ru",
                password:"Leonid",
              })
            )
      }

      const handler = async() => {
        
      }

  return (
    <div className="App">
        <button onClick={() => handlerReg()}>Регистрация</button>
        <button>Переход на страницу</button>
    </div>
  );
}

export default App;
