import useTrips from "./useTrips";

interface Trip {
  trip: Trip;
}

const TripsGrid = () => {
  const { data } = useTrips();
  console.log(data);

  return (
    <>
      {/* {data?.result.map((trip) => (
        <div key={trip.TripId}>
          <p>{trip.Country}</p>
          <p>{trip.Details.NumOfMembers}</p>
          <p>{trip.Details.Price}</p>
        </div>
      ))} */}
      <p></p>
      <p>Destination</p>
      <p>Number of members</p>
      <p>Price</p>
    </>
  );
};

export default TripsGrid;
