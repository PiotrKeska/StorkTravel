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

const membersFilter = () => {
    const countriesFilter = countryFilter();
    const selectedMembers = useTripsSelector((s) => s.tripFilters.members)

    if(selectedMembers !== 'All'){
        return countriesFilter?.filter((el) => el.Details.NumOfMembers === selectedMembers);
    }

    return countriesFilter;

}

export default membersFilter;