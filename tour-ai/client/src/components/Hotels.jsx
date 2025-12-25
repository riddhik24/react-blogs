import image from "../assets/image.png";

export const Hotels = ({item,index}) => {
  return (
    <div key={index} className="m-4 w-150 rounded-lg shadow-2xl">
                  <img className="rounded-2xl p-4" src={image} alt="hotel image" />
                  <h1 className="font-bold mx-4 text-lg">{item?.hotelName}</h1>
                  <h1 className="font-medium mx-4 text-md">{item?.hotelAddress}</h1>
                  <h1 className="font-medium mx-4 text-md my-1 text-gray-500">
                    {item?.description}
                  </h1>
                  <h1 className="font-medium mx-4 text-md">
                    Cost: {item?.pricePerNight}
                  </h1>
                  <h1 className="font-medium mx-4 text-md mb-2">
                    Rating: ⭐{item?.rating}
                  </h1>
                </div>
  )
}
