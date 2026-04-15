import FriendsDetailsClients from "./FriendsDetailsClients";

const FriendDetailePage = async ({ params }) => {
  const { id } = params;

  const url = process.env.NEXT_PUBLIC_BASE_URL || "http://localhost:3000";

  const res = await fetch(`${url}/friends.json`);
  const friends = await res.json();

  console.log(friends);

  return <div>
    <FriendsDetailsClients friends ={friends}/>
  </div>;
};

export default FriendDetailePage;
