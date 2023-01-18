import api from './api';
import axios from 'axios';

function App() {

      const adminCreateToy = "http://uni-team-inc.online:8000/admin/create"   // Создать игрушку(title, description, price)
      const allToysView = "http://uni-team-inc.online:8000/see?archive="      // true - не видна, false - видна
      const archiveToy = "http://uni-team-inc.online:8000/admin/archive/1"    // Архивируем игрушка
      const oneToy = "http://uni-team-inc.online:8000/see/1"                  // Посмотреть 1 игрушку по id



      const adminCreateHandler = async(url) => {
        await api.post(url,
            JSON.stringify({
              title: "",
              description:"",
              price:""
            })
          )
            .then(data => {
              console.log(data.data)
            })
        }


          const allToysHandler = async(url) => {
            await api.get(`${url + false}`)
            .then(data => {
              console.log(data.data)
            })
          }


          const archiveToyHandler = async(url, toyId) => {
            await api.get(`${url + toyId}`)
          }

          
          const getOneToyHandler = async(url, toyID) => {
            await api.get(`${url + toyID}`)
            .then(data => {
              console.log(data.data)
            })
          }


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

        <button onClick={() => adminCreateHandler(adminCreateToy)}>Создать игрушку</button>
        <button onClick={() => allToysHandler(allToysView)}>Вывести все игрушки</button>
        <button onClick={() => archiveToyHandler(archiveToy, 1)}>Архивировать игрушку по id</button>
        <button onClick={() => getOneToyHandler(oneToy, 1)}>Получить игрушку по id</button>
    </div>
  );
}

export default App;
