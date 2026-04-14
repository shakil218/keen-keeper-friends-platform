const getFriends = async function () {
  const res = await fetch("http://localhost:3000/friends.json");
  const data = await res.json();
  return data;
};

export default getFriends;