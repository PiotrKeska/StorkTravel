import useTrips from "../useTrips"





const useCountry = () => {
    const {data} = useTrips();
    const countries = data?.results.map((el) => el.Country);
    const countriesToResponse = countries?.concat('All').sort();
    const setCountrys = [... new Set(countriesToResponse)];

    return setCountrys;
}


export default useCountry;