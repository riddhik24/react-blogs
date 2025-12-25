import image from "../assets/image.png";

const Itinerary = ({iter,index}) => {
  return (
    <div key={index} className="m-4">
      <h1 className="font-bold text-2xl">Day - {iter?.day}</h1>
      <h1>
        <span className="font-bold">Theme:</span> {iter?.theme}
      </h1>
      <h1>
        <span className="font-bold">Best time to visit: </span>
        {iter?.bestTimeToVisit}
      </h1>
      <div>
        <h1 className="mt-6 mx-2 font-bold text-2xl text-center">Plan</h1>
        {iter?.plan ? (
          <div className="flex">
            {iter?.plan.map((item, index) => (
              <div key={index} className="m-4 w-150 rounded-lg shadow-2xl">
                <img
                  className="rounded-2xl p-4"
                  src={image}
                  alt="hotel image"
                />
                <h1 className="font-bold mx-4 text-lg">{item?.placeName}</h1>
                <h1 className="font-medium mx-4 text-gray-500 text-md">
                  {item?.placeDetails}
                </h1>
                <h1 className="font-medium mx-4 text-md">
                  Cost: {item?.ticketPricing}
                </h1>
                {/* <h1 className="font-medium mx-4 text-md">
                  Cost: {item?.ticketPricing?.[1]}{" "}
                  {`(Neighborhood Entry)`}
                </h1> */}
                <h1 className="font-medium mx-4 text-md mb-2">
                  Time: {item?.timeSpent}
                </h1>
                <h1 className="font-medium mx-4 text-md mb-2">
                  Rating: ⭐{item?.rating}
                </h1>
              </div>
            ))}
          </div>
        ) : (
          <h1 className="text-xl font-bold text-center">No Plan Found.</h1>
        )}
      </div>
    </div>
  );
};

export default Itinerary;
