"use client";

import { useEffect, useState } from "react";
import toast from "react-hot-toast";
import {
  BellRing,
  Archive,
  Trash2,
  Phone,
  MessageSquare,
  Video,
  Pencil,
  History,
} from "lucide-react";

const statusStyle = {
  overdue: "bg-red-100 text-red-600",
  "almost due": "bg-yellow-100 text-yellow-700",
  "on-track": "bg-green-100 text-green-700",
};

const statusText = {
  overdue: "Overdue",
  "almost due": "Almost Due",
  "on-track": "On Track",
};

const cardStyle = "rounded-2xl border border-gray-200 bg-white p-6 shadow-sm";
const actionBtn =
  "flex w-full items-center justify-center gap-2 rounded-xl border border-gray-200 bg-white py-3 text-gray-700 hover:bg-gray-50";
const quickBtn =
  "flex flex-col items-center gap-3 rounded-xl border border-gray-200 bg-white py-8 hover:bg-gray-50";
const smallBtn =
  "flex items-center gap-2 rounded-lg border border-gray-200 bg-white px-4 py-2 text-gray-700 hover:bg-gray-50";

export default function FriendDetailsClient({ friend }) {
  const [timeline, setTimeline] = useState([]);

  useEffect(() => {
    const savedTimeline = JSON.parse(localStorage.getItem("timeline")) || [];
    const myTimeline = savedTimeline.filter(
      (item) => item.friendId === friend.id,
    );
    setTimeline(myTimeline);
  }, [friend.id]);

  const handleCheckIn = (type) => {
    const newItem = {
      id: Date.now(),
      friendId: friend.id,
      friendName: friend.name,
      type,
      title: `${type} with ${friend.name}`,
      date: new Date().toLocaleDateString("en-US", {
        year: "numeric",
        month: "short",
        day: "numeric",
      }),
    };

    const savedTimeline = JSON.parse(localStorage.getItem("timeline")) || [];
    const updatedTimeline = [newItem, ...savedTimeline];

    localStorage.setItem("timeline", JSON.stringify(updatedTimeline));
    setTimeline(updatedTimeline.filter((item) => item.friendId === friend.id));

    toast.success(`${type} added`);
  };

  return (
    <div className="mx-auto max-w-7xl px-4 py-10">
      <div className="grid grid-cols-1 gap-6 lg:grid-cols-3">
        {/* Left Side */}
        <div className="space-y-4">
          <div className={`${cardStyle} text-center`}>
            <img
              src={friend.picture}
              alt={friend.name}
              className="mx-auto h-20 w-20 rounded-full object-cover"
            />

            <h2 className="mt-4 text-2xl font-bold text-gray-900">
              {friend.name}
            </h2>

            <span
              className={`mt-3 inline-block rounded-full px-3 py-1 text-xs font-semibold ${
                statusStyle[friend.status]
              }`}
            >
              {statusText[friend.status]}
            </span>

            <div className="mt-4 flex flex-wrap justify-center gap-2">
              {friend.tags?.map((tag, index) => (
                <span
                  key={index}
                  className="rounded-full border border-gray-200 px-3 py-1 text-xs text-green-700"
                >
                  {tag}
                </span>
              ))}
            </div>

            <p className="mt-4 text-sm italic text-gray-500">{friend.bio}</p>
            <p className="mt-2 text-sm text-gray-500">{friend.email}</p>
          </div>

          <button className={actionBtn}>
            <BellRing size={18} />
            Snooze 2 Weeks
          </button>

          <button className={actionBtn}>
            <Archive size={18} />
            Archive
          </button>

          <button className="flex w-full items-center justify-center gap-2 rounded-xl border border-gray-200 bg-white py-3 text-red-500 hover:bg-red-50">
            <Trash2 size={18} />
            Delete
          </button>
        </div>

        {/* Right Side */}
        <div className="space-y-6 lg:col-span-2">
          <div className="grid grid-cols-1 gap-4 sm:grid-cols-3">
            <div className={`${cardStyle} text-center`}>
              <h3 className="text-3xl font-bold text-green-900">
                {friend.days_since_contact}
              </h3>
              <p className="mt-2 text-gray-500">Days Since Contact</p>
            </div>

            <div className={`${cardStyle} text-center`}>
              <h3 className="text-3xl font-bold text-green-900">
                {friend.goal}
              </h3>
              <p className="mt-2 text-gray-500">Goal (Days)</p>
            </div>

            <div className={`${cardStyle} text-center`}>
              <h3 className="text-xl font-bold text-green-900">
                {new Date(friend.next_due_date).toLocaleDateString("en-US", {
                  month: "short",
                  day: "numeric",
                  year: "numeric",
                })}
              </h3>
              <p className="mt-2 text-gray-500">Next Due</p>
            </div>
          </div>

          <div className={`${cardStyle} flex items-start justify-between`}>
            <div>
              <h3 className="text-2xl font-semibold text-green-900">
                Relationship Goal
              </h3>
              <p className="mt-3 text-gray-600">
                Connect every{" "}
                <span className="font-bold">{friend.goal} days</span>
              </p>
            </div>

            <button className={smallBtn}>
              <Pencil size={16} />
              Edit
            </button>
          </div>

          <div className={cardStyle}>
            <h3 className="mb-5 text-2xl font-semibold text-green-900">
              Quick Check-In
            </h3>

            <div className="grid grid-cols-1 gap-4 sm:grid-cols-3">
              <button
                onClick={() => handleCheckIn("Call")}
                className={quickBtn}
              >
                <Phone size={30} />
                <span>Call</span>
              </button>

              <button
                onClick={() => handleCheckIn("Text")}
                className={quickBtn}
              >
                <MessageSquare size={30} />
                <span>Text</span>
              </button>

              <button
                onClick={() => handleCheckIn("Video")}
                className={quickBtn}
              >
                <Video size={30} />
                <span>Video</span>
              </button>
            </div>
          </div>

          <div className={cardStyle}>
            <div className="mb-5 flex items-center justify-between">
              <h3 className="text-2xl font-semibold text-green-900">
                Recent Interactions
              </h3>

              <button className={smallBtn}>
                <History size={16} />
                Full History
              </button>
            </div>

            {timeline.length === 0 ? (
              <p className="rounded-xl border border-gray-200 py-6 text-center text-gray-500">
                No interactions yet.
              </p>
            ) : (
              <div className="space-y-4">
                {timeline.map((item) => (
                  <div
                    key={item.id}
                    className="flex items-center justify-between rounded-xl border border-gray-200 p-3"
                  >
                    <div>
                      <h4 className="font-medium text-gray-900">
                        {item.title}
                      </h4>
                      <p className="text-sm text-gray-500">{item.type}</p>
                    </div>

                    <p className="text-sm text-gray-400">{item.date}</p>
                  </div>
                ))}
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
