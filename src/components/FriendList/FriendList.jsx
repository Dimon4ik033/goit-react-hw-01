import css from "./FriendList.module.css";

function FriendListItem({ friend }) {
    return (
        <div className={css.itemContainer}>
            <img src={friend.avatar} alt="Avatar" width="48" />
            <p className={css.text}>{friend.name}</p>
            <p className={`${css.text} ${friend.isOnline ? css.online : css.offline}`}>{friend.isOnline ? 'Online' : 'Offline'}</p>
        </div>
    );
};

export default function FriendList({ friends }) {
    return (
    <ul className={css.list}>
      {friends.map(friend => (
        <li key={friend.id} className={css.item}>
          <FriendListItem friend={friend} />
        </li>
      ))}
    </ul>
  );
};
