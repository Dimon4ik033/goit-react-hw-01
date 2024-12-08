import css from "./FriendListItem.module.css";

export default function FriendListItem({ friend }) {
    return (
        <div className={css.itemContainer}>
            <img src={friend.avatar} alt="Avatar" width="48" />
            <p className={css.text}>{friend.name}</p>
            <p className={`${css.text} ${friend.isOnline ? css.online : css.offline}`}>{friend.isOnline ? 'Online' : 'Offline'}</p>
        </div>
    );
};