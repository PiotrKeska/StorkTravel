
import { useQuery } from "@tanstack/react-query";
import axios from "axios";





interface Details {
    NumOfMembers: number | string;
    Price: number;
    Currency: string
}
export interface Trip {
    TripId: number;
    Country: string;
    Details: Details;
}

interface Response{
    results: Trip[];
}

const fetchData = () => {
    return axios.get("../../db/db.json").then((res)=> res.data)
}

const useTrips = () => {
    return useQuery<Response>({
        queryKey: ['trips'],
        queryFn: fetchData ,
        staleTime: 5 * 60 * 1000, //5min
    })
}

export default useTrips;


