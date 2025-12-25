import express from "express";
import dotenv, { config } from "dotenv";
import cors from "cors";
import { GoogleGenAI } from "@google/genai";

dotenv.config();

const app = express();
const PORT = 5000;

app.use(cors());
app.use(express.json());
const ai = new GoogleGenAI({ apiKey: process.env.GEMINI_API_KEY });

app.get("/", (req, res) => {
  res.send("Incorrect path");
});
app.post("/api/iternary", async (req, res) => {
  const { formData } = req.body;
  const { location, noOfDays, people, budget } = formData;

  const AI_PROMPT = `Generate Travel Plan for Location: ${location}, for ${noOfDays} Days for ${people} with ${budget},Give me a Hotels options list with HotelName, Hotel address, Price, hotel image url, geo coordinates, rating, descriptions and suggest itinerary with placeName, Place Details, Place Image Url, Geo Coordinates, ticket Pricing, rating, Time travel each of the location for 3 days with each day plan with best time to visit in JSON format.`;
  try {
    const result = await ai.models.generateContent({
      model: "gemini-2.5-flash",
      contents: AI_PROMPT,
      config: {
        systemInstruction: `You are a professional travel guide. Output daily itineraries in JSON format. keep it in this format only and no changes in name keep currency in dollar { travelPlan: {
    location: "UAE",
    durationDays: 4,
    numberOfPeople: 2,
    budget: "Cheap",
    notes:
      "This itinerary focuses on budget-friendly activities, leveraging public transportation (Dubai Metro, buses) and free attractions. Food recommendations lean towards local eateries and street food to keep costs low. Prices are approximate and subject to change.",
    hotelsOptions: [
      {
        hotelName: "Gateway Hotel",
        hotelAddress: "Naif Road, Deira, Dubai, UAE",
        pricePerNight: "150-250 (Approx. for 2 people)",
        hotelImageUrl: "https://example.com/gateway-hotel.jpg",
        geoCoordinates: {
          latitude: 25.2758,
          longitude: 55.3059,
        },
        rating: 7.0,
        description:
          "A popular budget-friendly hotel in the heart of Deira, offering basic amenities and easy access to metro stations, souks, and local eateries. Ideal for travelers on a tight budget looking for a convenient base.",
      },...
    ],
    itinerary: [
      {
        day: 1,
        theme: "Old Dubai Charm & Creek Exploration",
        bestTimeToVisit:
          "Morning for cooler temperatures and fewer crowds in the souks, late afternoon for a pleasant Abra ride and sunset.",
        plan: [
          {
            placeName: "Al Fahidi Historical Neighbourhood (Al Bastakiya)",
            placeDetails:
              "Explore the narrow lanes, wind-tower architecture, and traditional houses of one of Dubai's oldest heritage sites. Visit the Dubai Museum (located in Al Fahidi Fort) for a glimpse into the city's past.",
            placeImageUrl: "https://example.com/al-fahidi.jpg",
            geoCoordinates: {
              latitude: 25.2652,
              longitude: 55.2973,
            },
            ticketPricing: {
              dubaiMuseum: "3 per person",
              neighborhoodEntry: "Free",
            },
            rating: 8.5,
            timeSpent: "2-3 hours",
          },...
      },
    ],
  }`,
        temperature: 1,
        topP: 0.95,
        topK: 40,
        maxOutputTokens: 8192,
        response_mime_type: "application/json",
      },
    });

    let text = result.text;

    text = text
      .replace(/```json/g, "")
      .replace(/```/g, "")
      .trim();

    const parsed = JSON.parse(text);
    res.json(parsed);
  } catch (err) {
    console.log("Error Occured: ", err);
    res.status(500).json({ error: "Something went wrong." });
  }
});

app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});
