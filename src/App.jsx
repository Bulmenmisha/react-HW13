import { connect } from 'react-redux';
import Filter from './components/Filter.jsx';
import UserList from './components/UserList.jsx';
import styles from './styles/App.module.css';

function App({ total }) {
  return (
    <div className={styles.app}>
      <div className={styles.container}>
        <h1 className={styles.title}>Пользователи ({total})</h1>
        <Filter />
        <UserList />
      </div>
    </div>
  );
}

const mapStateToProps = (state) => ({
  total: state.users.length,
});

export default connect(mapStateToProps)(App);
