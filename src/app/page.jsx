"use client";

import { useEffect, useState } from "react";

import FriendCard from "./components/FriendCard";
import Banner from './components/Banner';


export default function HomePage() {
  const [friends, setFriends] = useState([]);
  const [interactions, setInteractions] = useState(0);

  useEffect(() => {
    fetch("/friends.json")
      .then((res) => res.json())
      .then((data) => setFriends(data));

    const storedTimeline = JSON.parse(localStorage.getItem("timeline")) || [];
    setInteractions(storedTimeline.length);
  }, []);

  const totalFriends = friends.length;
  const onTrack = friends.filter(
    (friend) => friend.status === "on-track",
  ).length;
  const needAttention = friends.filter(
    (friend) => friend.status === "overdue" || friend.status === "almost due",
  ).length;

  return (
    <div className="max-w-7xl mx-auto px-4 py-10">
      {/* Banner */}
      <Banner />

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mt-8 ">
        <div className="border-gray-400 bg-white p-6 rounded-xl py-8 text-center shadow-sm">
          <h2 className="text-3xl font-bold text-green-700">{totalFriends}</h2>
          <p className="text-gray-500 mt-1">Total Friends</p>
        </div>

        <div className="border-gray-400 bg-white p-6 rounded-xl py-8 text-center shadow-sm">
          <h2 className="text-3xl font-bold text-green-700">{onTrack}</h2>
          <p className="text-gray-500 mt-1">On Track</p>
        </div>

        <div className="border-gray-400 bg-white p-6 rounded-xl py-8 text-center shadow-sm">
          <h2 className="text-3xl font-bold text-green-700">{needAttention}</h2>
          <p className="text-gray-500 mt-1">Need Attention</p>
        </div>

        <div className="border-gray-400 bg-white p-6 rounded-xl py-8 text-center shadow-sm">
          <h2 className="text-3xl font-bold text-green-700">{interactions}</h2>
          <p className="text-gray-500 mt-1">Interactions This Month</p>
        </div>
      </div>

      <div className="border-t my-10"></div>

      <h2 className="text-2xl font-semibold mb-6">Your Friends</h2>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {friends.map((friend) => (
          <FriendCard key={friend.id} friend={friend} />
        ))}
      </div>
    </div>
  );
}
