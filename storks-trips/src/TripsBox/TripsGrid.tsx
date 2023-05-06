import React from "react";
import useTrips from "./useTrips";
import scopeFilter from "../utils/filters";

const TripsGrid = () => {
  const { data, isLoading, error } = useTrips();
  const arr = scopeFilter();

  if (error) return null;
  if (isLoading) return <div>Loading....</div>;

  return (
    <>
      {/* {data?.results.map((el) => (
        <React.Fragment key={el.TripId}>
          <h4>Destination: {el.Country}</h4>
          <p>Number of members: {el.Details.NumOfMembers}</p>
          <p>Price: {el.Details.Price}</p>
          <hr></hr>
        </React.Fragment>
      ))} */}
      {arr?.map((el) => (
        <React.Fragment key={el.TripId}>
          <h4>Destination: {el.Country}</h4>
          <p>Number of members: {el.Details.NumOfMembers}</p>
          <p>Price: {el.Details.Price}</p>
          <hr></hr>
        </React.Fragment>
      ))}
    </>
  );
};

export default TripsGrid;
