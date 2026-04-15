import Link from "next/link";

const getStatusStyle = (status) => {
  if (status === "overdue") return "bg-red-100 text-red-600";
  if (status === "almost due") return "bg-yellow-100 text-yellow-700";
  return "bg-green-100 text-green-700";
};

const formatStatus = (status) => {
  if (status === "on-track") return "On Track";
  if (status === "almost due") return "Almost Due";
  return "Overdue";
};

export default function FriendCard({ friend }) {
  return (
    <Link href={`/friends/${friend.id}`}>
      <div className="rounded-[22px] border border-gray-200 bg-white p-6 text-center shadow-sm transition hover:-translate-y-1 hover:shadow-md">
        <div className="flex justify-center">
          <img
            src={friend.picture}
            alt={friend.name}
            className="h-[72px] w-[72px] rounded-full object-cover"
          />
        </div>

        <h3 className="mt-4 text-lg font-semibold text-gray-900">
          {friend.name}
        </h3>

        <p className="mt-1 text-sm text-gray-400">
          {friend.days_since_contact}d ago
        </p>

        <div className="mt-3 flex flex-wrap justify-center gap-2">
          {friend.tags?.map((tag, index) => (
            <span
              key={index}
              className="rounded-full bg-green-100 px-3 py-1 text-[11px] font-medium text-green-700"
            >
              {tag.toUpperCase()}
            </span>
          ))}
        </div>

        <p
          className={`mt-4 inline-block rounded-full px-3 py-1 text-xs font-semibold ${getStatusStyle(
            friend.status,
          )}`}
        >
          {formatStatus(friend.status)}
        </p>
      </div>
    </Link>
  );
}
