import api from './api';
import axios from 'axios';

function App() {

      const adminCreateToy = "http://uni-team-inc.online:8000/admin/create"
      const allToysView = "http://uni-team-inc.online:8000/see?archive=true"  // true - не видна, false - видна
      const archiveToy = "http://uni-team-inc.online:8000/admin/archive/1"  // Архивируем игрушка
      const oneToy = "http://uni-team-inc.online:8000/see/1"

      const handlerReg = async() => {
          await axios.post('http://uni-team-inc.online:8080/register', 
              JSON.stringify({
                name:"Leo11ni1d3311212m3412das12133123101",
                email:"Leonid@yandex.ru",
                password:"Leonid"
              })
            )
            .then((data) => {
              localStorage.setItem("access", data.data.access)
              localStorage.setItem("refresh", data.data.refresh)
            })
      }

      const handlerKnock = () => {
         api.get('http://uni-team-inc.online:8080/authorized')}

  return (
    <div className="App">
        <button onClick={() => handlerReg()}>Регистрация</button>
        <button onClick={() => handlerKnock()}>Постучаться</button>
    </div>
  );
}

export default App;
