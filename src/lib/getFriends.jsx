const getFriends = async function () {
  const res = await fetch("https://keen-keeper-friends-platform.vercel.app/friends.json");
  const data = await res.json();
  return data;
};

export default getFriends;