import styles from '../styles/UserItem.module.css';

function UserItem({ user }) {
  return (
    <li className={styles.item}>
      <span className={styles.avatar}>{user.name[0]}</span>
      <span className={styles.name}>{user.name}</span>
    </li>
  );
}

export default UserItem;
