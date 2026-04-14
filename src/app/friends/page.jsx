import React from 'react';
import AllFriends from './allFriends/AllFriends';
import getFriends from '@/lib/getFriends';


const AllFriendsPage = async () => {
  const friends = await getFriends();
  return (
    <div>
        <AllFriends friends={friends} />
    </div>
  );
};

export default AllFriendsPage;