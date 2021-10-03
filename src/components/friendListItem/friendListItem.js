import s from "./friends.module.css";
export default function FriendItem({ friends }) {
  return friends.map(({ avatar, name, isOnline, id }) => (
    <li key={id} className={s.item}>
      <span className={s.status} style={{ color: isOnline ? "green" : "red" }}>
        &bull;
      </span>
      <img className={s.avatar} src={avatar} alt={name} width="48" />
      <p className={s.name}>{name}</p>
    </li>
  ));
}
