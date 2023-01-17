import './App.css';
import api from './api';
import axios from 'axios';


function App() {

      const handlerReg = async() => {
          await axios.post('http://uni-team-inc.online:8080/register', 
              JSON.stringify({
                name:"Leonid2",
                email:"Leonid@yandex.ru",
                password:"Leonid"
              })
            )
            .then((data) => {
              localStorage.setItem("access", data.data.access)
              localStorage.setItem("refresh", data.data.refresh)
            })
      }

      const handlerKnock = async() => {
        await api.get('http://uni-team-inc.online:8080/authorized')}

  return (
    <div className="App">
        <button onClick={() => handlerReg()}>Регистрация</button>
        <button onClick={() => handlerKnock()}>Постучаться</button>
    </div>
  );
}

export default App;
