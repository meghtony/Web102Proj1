import React from "react";
import Card from "./Card";

const events = [
  {
    id: 1,
    title: "Farmers Market",
    date: "2025-06-15",
    location: "Main Street Park",
    image: "https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=400&q=80",
    description: "Fresh produce, crafts, and live music every Sunday morning.",
  },
  {
    id: 2,
    title: "Outdoor Movie Night",
    date: "2025-06-20",
    location: "Community Center Lawn",
    image: "https://images.unsplash.com/photo-1464983953574-0892a716854b?auto=format&fit=crop&w=400&q=80",
    description: "Bring a blanket and enjoy a family-friendly movie under the stars.",
  },
  {
    id: 3,
    title: "Yoga in the Park",
    date: "2025-06-18",
    location: "Riverside Park",
    image: "https://images.unsplash.com/photo-1515378791036-1b14b8b1c8f8?auto=format&fit=crop&w=400&q=80",
    description: "Free yoga session for all levels. Mats provided.",
  },
  {
    id: 4,
    title: "Art Walk",
    date: "2025-06-22",
    location: "Downtown Arts District",
    image: "https://images.unsplash.com/photo-1506748686214-e9df14d4d9d0?auto=format&fit=crop&w=400&q=80",
    description: "Explore local galleries and meet the artists.",
  },
  {
    id: 5,
    title: "Food Truck Festival",
    date: "2025-06-25",
    location: "City Square",
    image: "https://images.unsplash.com/photo-1506748686214-e9df14d4d9d0?auto=format&fit=crop&w=400&q=80",
    description: "Sample dishes from the best food trucks in town.",
  },
  {
    id: 6,
    title: "Book Swap",
    date: "2025-06-27",
    location: "Public Library",
    image: "https://images.unsplash.com/photo-1506748686214-e9df14d4d9d0?auto=format&fit=crop&w=400&q=80",
    description: "Exchange your favorite reads with neighbors.",
  },
  {
    id: 7,
    title: "Charity Fun Run",
    date: "2025-06-30",
    location: "Lakeview Trail",
    image: "https://images.unsplash.com/photo-1506748686214-e9df14d4d9d0?auto=format&fit=crop&w=400&q=80",
    description: "5K run to support local charities. All ages welcome.",
  },
  {
    id: 8,
    title: "Community Potluck",
    date: "2025-07-02",
    location: "Recreation Hall",
    image: "https://images.unsplash.com/photo-1506748686214-e9df14d4d9d0?auto=format&fit=crop&w=400&q=80",
    description: "Share your favorite dish and meet new friends.",
  },
  {
    id: 9,
    title: "Tech Workshop",
    date: "2025-07-05",
    location: "Innovation Hub",
    image: "https://images.unsplash.com/photo-1506748686214-e9df14d4d9d0?auto=format&fit=crop&w=400&q=80",
    description: "Learn about the latest tech trends and tools.",
  },
  {
    id: 10,
    title: "Gardening Club Meetup",
    date: "2025-07-08",
    location: "Botanical Gardens",
    image: "https://images.unsplash.com/photo-1506748686214-e9df14d4d9d0?auto=format&fit=crop&w=400&q=80",
    description: "Tips and tricks for a thriving garden.",
  },
];

function CardList() {
  return (
    <div className="card-list">
      {events.map(event => (
        <Card
          key={event.id}
          title={event.title}
          date={event.date}
          location={event.location}
          image={event.image}
          description={event.description}
        />
      ))}
    </div>
  );
}

export default CardList;