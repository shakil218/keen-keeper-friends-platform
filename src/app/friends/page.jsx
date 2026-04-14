import React from 'react';
import AllFriendsClient from './allFriendsClientComponent/AllFriendsClient';

const friendsPromise = async function () {
  const res = await fetch("https://keen-keeper-friends-platform.vercel.app/friends.json");
  const data = await res.json();
  return data;
};

const AllFriendsPage = async () => {
  const friends = await friendsPromise();
  return (
    <div>
        <AllFriendsClient friends={friends} />
    </div>
  );
};

export default AllFriendsPage;