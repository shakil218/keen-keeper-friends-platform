import getFriends from "@/lib/getFriends";
import Friend from "./Friend";

// const friendsPromise = async function () {
//   const res = await fetch("http://localhost:3000/friends.json");
//   const data = await res.json();
//   return data;
// };

const FriendDetailsPage = async ({ params }) => {
  const friends = await getFriends();
  const {id} = await params;
  const friend = friends.find((f) => f.id === Number(id));

  if (!friend) {
    return <div className="p-10 text-center">Friend not found</div>;
  }

  return <Friend friend={friend} />;
};

export default FriendDetailsPage;
