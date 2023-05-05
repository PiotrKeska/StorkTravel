import axios from "axios"

 export interface Response {
    result: []
}


const fetchData = () => {

    return axios.get<Response>('../../db/db.json')
    .then((res) => res.data)
    .catch(() => console.log('error')
    )
}


export default fetchData;