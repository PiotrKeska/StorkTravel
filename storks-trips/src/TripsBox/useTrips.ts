
import { useQuery } from "@tanstack/react-query";
import useTripsSelector from "./store";
import fetchData from "../services/api-client";



interface Details {
    NumOfMembers: number;
    Price: string;
}
interface Trip {
    TripId: number;
    Country: string;
    Details: Details;
}

const useTrips = () => {
    const tripFilters = useTripsSelector((s) => s.tripFilters);
    return useQuery({
        queryKey: ['trips', tripFilters],
        queryFn: () => fetchData(),
    })
}

export default useTrips;