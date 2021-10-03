import Profile from "./components/profile/Profile";
import user from "./Data/user.json";
import stData from "./Data/statistical-data.json";
import transAction from "./Data/transactions.json";
import TransactionHistory from "./components/trasAction/TransactionHistory";

import Statistics from "./components/statistic/Statistics";
import FriendList from "./components//friendListItem/FriendList";
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
      <FriendList />
      <TransactionHistory items={transAction} />
    </div>
  );
}
