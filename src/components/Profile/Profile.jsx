import css from "./Profile.module.css";

export default function Profile(props) {
    return (
    <div className={css.profileContainer}>
            <div className={css.profileTop}>
            <img src={props.image} alt="User avatar" className={css.img} />
                <p className={css.name}>{props.name}</p>
                <p className={css.nickName}>@{props.tag}</p>
                <p className={css.location}>{props.location}</p>
            </div>
            <ul className={css.list}>
                <li className={css.item}>
                    <span>Followers</span>
                    <span>{props.stats.followers}</span>
                </li>
                <li className={css.item}>
                    <span>Views</span>
                    <span>{props.stats.views}</span>
                </li>
                <li className={css.item}>
                    <span>Likes</span>
                    <span>{props.stats.likes}</span>
                </li>
            </ul>
        </div>
    );
};