import useTripsSelector from "../TripsBox/store";
import useTrips from "../TripsBox/useTrips"




const countryFilter = () => {
    const {data} = useTrips();
    const selectedCountry = useTripsSelector((s) => s.tripFilters.country)

    const rArr = data?.results.map((el) => el);

    if(selectedCountry !== 'All'){
        return rArr?.filter((el) => el.Country === selectedCountry)
    } 

    return rArr;
}
export default countryFilter;