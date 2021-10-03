import FriendItem from "./friendListItem";
import friends from "../../Data/friends.json";
import PropTypes from "prop-types";
import s from "./friends.module.css";
export default function FriendList() {
  return (
    <ul className={s.friendList}>
      <FriendItem friends={friends} />
    </ul>
  );
}
FriendList.prototype = {
  friends: PropTypes.arrayOf(PropTypes.shape()),
};
