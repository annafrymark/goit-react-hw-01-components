import { Profile } from './profile/Profile';
import { Statistics } from './statistics/Statistics';
import { FriendList, FriendListItem } from './friends/FriendList';
import { TransactionHistory } from './transactions/Transactions';
import user from 'data/user.json';
import data from 'data/data.json';
import friends from 'data/friends.json';
import transactions from 'data/transactions.json'

export const App = () => {
  return (
    <>
      <Profile
        username={user.username}
        tag={user.tag}
        location={user.location}
        avatar={user.avatar}
        stats={user.stats}
      />
      <Statistics title="Upload stats" stats={data} />
      <FriendList>
        <FriendListItem friends={friends} />
      </FriendList>
      <TransactionHistory items={transactions} />
    </>
  );
};

