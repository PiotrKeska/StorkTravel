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


const scopeFilter = () => {
    const afterMembFilter = membersFilter();
    const selectedScope = useTripsSelector((s) => s.tripFilters.scope);

    switch (selectedScope) {
        case 100:
            return afterMembFilter?.filter((el) => el.Details.Price < 101)
        case 200:
            return afterMembFilter?.filter((el) => el.Details.Price < 201)
        case 300:
            return afterMembFilter?.filter((el) => el.Details.Price < 301)
        case 400:
            return afterMembFilter;
    
    }


}

export default scopeFilter;