import React from 'react';
import AllFriends from './allFriends/AllFriends';
import getFriends from '@/lib/getFriends';

export const metadata = {
  title: "All Friends | Keen Keeper",
  description: "",
};

const AllFriendsPage = async () => {
  const friends = await getFriends();
  return (
    <div>
        <AllFriends friends={friends} />
    </div>
  );
};

export default AllFriendsPage;