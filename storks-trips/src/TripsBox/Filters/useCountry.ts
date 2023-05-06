import useTrips from "../useTrips"





const useCountry = () => {
    const {data} = useTrips();
    const countrys = data?.results.map((el) => el.Country);
    const setCountrys = [... new Set(countrys)];

    return setCountrys;
}


export default useCountry;