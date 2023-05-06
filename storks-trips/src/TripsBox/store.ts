import { create } from "zustand";



interface TripFilters {
    country?: string;
    members?: number | string;
    scope?: number;
}

interface TripsFilterStore {
    tripFilters: TripFilters,
    setCountry: (country: string) => void;
    setMembers: (members: number) => void;
    setScope: (scope: number) => void;
}


const useTripsSelector = create<TripsFilterStore>(set => ({
    tripFilters: {country: 'All', members: 'All', scope: 400},
    setCountry: (country) => set(store => ({tripFilters: {...store.tripFilters, country}})),
    setMembers: (members) => set(store =>({tripFilters: {...store.tripFilters, members}})),
    setScope: (scope) => set(store => ({tripFilters: {...store.tripFilters, scope}}))
}))

export default useTripsSelector;