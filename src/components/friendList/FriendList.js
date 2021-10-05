import PropTypes from "prop-types";
import s from "./friends.module.css";
import FriendListItem from "./friendListItem/FriendListItem";
export default function FriendList({ friends }) {
  return (
    <ul className={s.friendList}>
      {" "}
      {friends.map((friend) => (
        <FriendListItem
          avatar={friend.avatar}
          name={friend.name}
          isOnline={friend.isOnline}
          key={friend.id}
        />
      ))}
    </ul>
  );
}
FriendList.prototype = {
  friends: PropTypes.arrayOf(
    PropTypes.shape({ id: PropTypes.string.isRequired })
  ),
};
