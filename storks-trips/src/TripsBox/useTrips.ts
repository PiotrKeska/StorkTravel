
import { useQuery } from "@tanstack/react-query";
import useTripsSelector from "./store";
import axios from "axios";



interface Response <T>{
    result: T[];
}

interface Details {
    NumOfMembers: number;
    Price: string;
}
export interface Trip {
    TripId: number;
    Country: string;
    Details: Details;
}

const useTrips = () => {
    // const tripFilters = useTripsSelector((s) => s.tripFilters);
    return useQuery<Response<Trip>>({
        queryKey: ['trips'],
        queryFn: () => axios.get("../../db/db.json").then((res)=> res.data),
    })
}

export default useTrips;


