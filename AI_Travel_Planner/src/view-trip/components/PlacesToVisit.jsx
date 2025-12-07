import PlaceCardItem from "./PlaceCardItem";

function PlacesToVisit({ trip }) {
  if (!trip?.tripData?.itinerary) {
    return <div>No itinerary data available.</div>;
  }

  const itineraryDays = Object.values(trip?.tripData?.itinerary);

  return (
    <div>
      <h2 className="font-bold text-lg mt-2">Places to Visit</h2>
      <div>
        {itineraryDays.map((day, index) => (
          <div key={index} className="mt-5">
            <h2 className="font-medium text-lg">Day {index + 1}: {day.theme}</h2>
            <div className="grid md:grid-cols-2 gap-5">
            {day?.plan?.map((place, index) => (
              <div className="my-3" key={place.placeName}>
                <h2 className="font-medium text-sm text-orange-400">Best time to Visit: {place.bestTimeToVisit}</h2>
                  <PlaceCardItem place={place} />
               
              </div>
            ))}
          </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default PlacesToVisit;