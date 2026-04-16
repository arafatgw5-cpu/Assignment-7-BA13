"use client";

import { useEffect, useState } from "react";
import { Phone, MessageSquare, Video, Users } from "lucide-react";

export default function TimelinePage() {
  const [timeline, setTimeline] = useState([]);
  const [filter, setFilter] = useState("All");

  useEffect(() => {
    const data = JSON.parse(localStorage.getItem("timeline")) || [];
    setTimeline(data);
  }, []);

  const filtered =
    filter === "All"
      ? timeline
      : timeline.filter((item) => item.type === filter);

  const getIcon = (type) => {
    if (type === "Call") return <Phone size={20} />;
    if (type === "Text") return <MessageSquare size={20} />;
    if (type === "Video") return <Video size={20} />;
    return <Users size={20} />;
  };

  return (
    <div className="min-h-screen bg-gray-50 p-6">
      <div className="mx-auto max-w-3xl rounded-xl border border-gray-200 bg-white p-6">
        <h1 className="mb-6 text-3xl font-bold">Timeline</h1>

        <select
          value={filter}
          onChange={(e) => setFilter(e.target.value)}
          className="mb-6 rounded-lg border border-gray-200 bg-white px-3 py-2"
        >
          <option>All</option>
          <option>Call</option>
          <option>Text</option>
          <option>Video</option>
        </select>

        {filtered.length === 0 ? (
          <p className="text-gray-500">No data</p>
        ) : (
          <div className="space-y-4">
            {filtered.map((item) => (
              <div
                key={item.id}
                className="flex items-center gap-4 rounded-lg border border-gray-200 p-4"
              >
                <div className="text-green-600">{getIcon(item.type)}</div>

                <div>
                  <p className="font-medium">
                    {item.type} with {item.friendName}
                  </p>
                  <p className="text-sm text-gray-500">{item.date}</p>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
}
