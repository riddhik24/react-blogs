export const SelectTravelerList=[
    {
        id:1,
        title:'Just Me',
        desc:'Travelling Solo',
        icon:'😎',
        people:'1'
    },
    {
        id:2,
        title:'Couple',
        desc:'Travelling with partner',
        icon:'👫',
        people:'2 people'
    },
    {
        id:3,
        title:'Family',
        desc:'Group of fun loving adv',
        icon:'👨‍👩',
        people:'3 to 5 people'
    },  
    {
        id:4,
        title:'Friends',
        desc:'A bunch of thrill-seeks',
        icon:'🫂',
        people:'5 to 10 people'
    },
    

]

export const SelectBudgetOptions=[
    {
        id:1,
        title:'Cheap',
        desc:'Stay consious of cost',
        icon:'💵',
    },
    {
        id:2,
        title:'Moderate',
        desc:'Keep cost on a average side',
        icon:'💰',
    },
    {
        id:3,
        title:'Luxury',
        desc:'Dont worry about cost',
        icon:'💸',
    },
]

export const AI_PROMPT="Generate Travel Plan for Location: {location}, for {noOfDays} Days for {traveler} with {budget},Give me a Hotels options list with HotelName, Hotel address, Price, hotel image url, geo coordinates, rating, descriptions and suggest itinerary with placeName, Place Details, Place Image Url, Geo Coordinates, ticket Pricing, rating, Time travel each of the location for 3 days with each day plan with best time to visit in JSON format."