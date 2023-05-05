import CountryFilter from "./Filters/CountryFilter";
import MemberFilter from "./Filters/MemberFilter";
import ScopeFilter from "./Filters/ScopeFilter";

const TripsSelector = () => {
  return (
    <>
      <CountryFilter />
      <MemberFilter />
      <ScopeFilter />
    </>
  );
};

export default TripsSelector;
