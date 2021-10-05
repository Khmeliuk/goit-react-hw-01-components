import Profile from "./components/profile/Profile";
import user from "./data/user.json";
import stData from "./data/statistical-data.json";
import transAction from "./data/transactions.json";
import TransactionHistory from "./components/trasAction/TransactionHistory";
import friends from "./data/friends.json";
import Statistics from "./components/statistic/Statistics";
import FriendList from "./components/friendListItem/FriendList";

export default function App() {
  return (
    <div>
      <Profile
        name={user.name}
        tag={user.tag}
        location={user.location}
        avatar={user.avatar}
        stats={user.stats}
      />
      <Statistics stats={stData} title={"Upload stats"} />
      <FriendList friends={friends} />
      <TransactionHistory items={transAction} />
    </div>
  );
}
