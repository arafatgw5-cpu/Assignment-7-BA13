"use client";

import { useEffect, useState } from "react";
import {
  PieChart,
  Pie,
  Cell,
  ResponsiveContainer,
  Tooltip,
  Legend,
} from "recharts";

export default function StatsPage() {
  const [timeline, setTimeline] = useState([]);

  useEffect(() => {
    const storedTimeline = JSON.parse(localStorage.getItem("timeline")) || [];
    setTimeline(storedTimeline);
  }, []);

  const textCount = timeline.filter((item) => item.type === "Text").length;
  const callCount = timeline.filter((item) => item.type === "Call").length;
  const videoCount = timeline.filter((item) => item.type === "Video").length;

  const data = [
    { name: "Text", value: textCount },
    { name: "Call", value: callCount },
    { name: "Video", value: videoCount },
  ];

  const COLORS = ["#7C3AED", "#245443", "#3FA66B"];

  return (
    <div className="min-h-screen bg-[#F8FAFC]">
      <div className="mx-auto max-w-6xl px-6 py-12 md:px-8 lg:px-10">
        <h1 className="text-[64px] leading-none font-bold tracking-[-0.03em] text-[#1E293B]">
          Friendship Analytics
        </h1>

        <div className="mt-10 rounded-2xl border border-[#E5E7EB] bg-white px-8 py-8 shadow-sm">
          <h2 className="text-[20px] font-semibold text-[#245443]">
            By Interaction Type
          </h2>

          <div className="mt-6 h-[420px] w-full">
            <ResponsiveContainer width="100%" height="100%">
              <PieChart>
                <Pie
                  data={data}
                  dataKey="value"
                  nameKey="name"
                  innerRadius={78}
                  outerRadius={118}
                  paddingAngle={8}
                  cornerRadius={8}
                  cx="50%"
                  cy="45%"
                >
                  {data.map((entry, index) => (
                    <Cell
                      key={entry.name}
                      fill={COLORS[index % COLORS.length]}
                      stroke="none"
                    />
                  ))}
                </Pie>

                <Tooltip />
                <Legend
                  verticalAlign="bottom"
                  align="center"
                  iconType="circle"
                  wrapperStyle={{
                    paddingTop: "10px",
                    color: "#64748B",
                    fontSize: "16px",
                  }}
                />
              </PieChart>
            </ResponsiveContainer>
          </div>
        </div>
      </div>
    </div>
  );
}
