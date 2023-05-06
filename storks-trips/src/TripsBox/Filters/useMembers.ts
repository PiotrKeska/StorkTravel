

import useTrips from "../useTrips"





const useMembers = () => {
    const {data} = useTrips();
    const members = data?.results.map((el) => el.Details.NumOfMembers);
    const finalMembers = members?.concat('All').sort()
    const setMembers = [... new Set(finalMembers)];

    return setMembers;
}


export default useMembers;