import getFriends from "@/lib/getFriends";
import Friend from "./Friend";

export async function generateMetadata({ params }) {
  const friends = await getFriends();
  const { id } = await params;

  const friend = friends.find(
    (f) => f.id === Number(id)
  );
console.log(friend);
  return {
    title: friend
      ? `${friend.name} | Keen Keeper`
      : "Friend Details | Keen Keeper",

    description: friend
      ? `View timeline and interactions with ${friend.name}`
      : "Friend details page",
  };
}

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
