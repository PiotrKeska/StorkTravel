

import useTrips from "../useTrips"





const useMembers = () => {
    const {data} = useTrips();
    const members = data?.results.map((el) => el.Details.NumOfMembers);
    const setMembers = [... new Set(members)];

    return setMembers;
}


export default useMembers;