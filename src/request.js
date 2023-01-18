import axios from "axios"

async function Refresh () {
    await axios.get('http://uni-team-inc.online:8080/update', 
        {
            headers:{
                'X-Refresh' : `Bearer ${localStorage.getItem("refresh")}`
            }
        }
    )
    .then(data => {
        localStorage.setItem('access', data.data.access)
        localStorage.setItem('refresh', data.data.refresh)
    })
}

export default Refresh