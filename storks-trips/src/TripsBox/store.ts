import { create } from "zustand";



interface TripFilters {
    country?: string;
    members?: number;
    scope?: string;
}

interface TripsFilterStore {
    tripFilters: TripFilters,
    setCountry: (country: string) => void;
    setMembers: (members: number) => void;
    setScope: (scope: string) => void;
}


const useTripsSelector = create<TripsFilterStore>(set => ({
    tripFilters: {country: 'All'},
    setCountry: (country) => set(store => ({tripFilters: {...store.tripFilters, country}})),
    setMembers: (members) => set(store =>({tripFilters: {...store.tripFilters, members}})),
    setScope: (scope) => set(store => ({tripFilters: {...store.tripFilters, scope}}))
}))

export default useTripsSelector;