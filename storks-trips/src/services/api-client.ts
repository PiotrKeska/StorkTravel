import axios from "axios"

interface Response {
    result: []
}

const API = axios.get<Response>('../../db/db.json')
.then((res) => res.data)
.catch(() => console.log('error')
)


export default API;