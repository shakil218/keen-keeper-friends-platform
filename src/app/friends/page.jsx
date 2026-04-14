import React from 'react';
import AllFriends from './allFriends/AllFriends';
import getFriends from '@/lib/getFriends';

// const friendsPromise = async function () {
//   const res = await fetch("http://localhost:3000/friends.json");
//   const data = await res.json();
//   return data;
// };

const AllFriendsPage = async () => {
  const friends = await getFriends();
  return (
    <div>
        <AllFriends friends={friends} />
    </div>
  );
};

export default AllFriendsPage;