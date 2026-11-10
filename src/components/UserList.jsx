import { connect } from 'react-redux';
import { setFilter } from '../redux/actions.js';
import UserItem from './UserItem.jsx';
import styles from '../styles/UserList.module.css';

function UserList({ users, filter, setFilter }) {
  const filteredUsers = users.filter((user) =>
    user.name.toLowerCase().includes(filter.trim().toLowerCase())
  );

  if (filteredUsers.length === 0) {
    return (
      <div className={styles.empty}>
        <p>Никого не нашли по запросу «{filter}»</p>
        <button className={styles.reset} onClick={() => setFilter('')}>
          Сбросить фильтр
        </button>
      </div>
    );
  }

  return (
    <>
      <p className={styles.count}>
        Найдено: {filteredUsers.length} из {users.length}
      </p>
      <ul className={styles.list}>
        {filteredUsers.map((user) => (
          <UserItem key={user.id} user={user} />
        ))}
      </ul>
    </>
  );
}

const mapStateToProps = (state) => ({
  users: state.users,
  filter: state.filter,
});

const mapDispatchToProps = {
  setFilter,
};

export default connect(mapStateToProps, mapDispatchToProps)(UserList);
