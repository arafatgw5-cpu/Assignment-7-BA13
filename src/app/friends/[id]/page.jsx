import FriendDetailsClient from "./FriendsDetailsClients";

const FriendDetailePage = async ({ params }) => {
  const { id } = await params;

  const url = process.env.NEXT_PUBLIC_BASE_URL || "http://localhost:3000";

  const res = await fetch(`${url}/friends.json`);
  const friends = await res.json();

  const friend = friends.find((item) => item.id === parseInt(id));

  return (
    <div>
      <FriendDetailsClient friend={friend} />
    </div>
  );
};

export default FriendDetailePage;
