import { connect } from 'react-redux';
import { setFilter } from '../redux/actions.js';
import styles from '../styles/Filter.module.css';

function Filter({ filter, setFilter }) {
  return (
    <div className={styles.filter}>
      <input
        className={styles.input}
        type="text"
        value={filter}
        onChange={(e) => setFilter(e.target.value)}
        placeholder="Поиск по имени..."
      />
      {filter && (
        <button className={styles.clear} onClick={() => setFilter('')}>
          ✕
        </button>
      )}
    </div>
  );
}

const mapStateToProps = (state) => ({
  filter: state.filter,
});

const mapDispatchToProps = {
  setFilter,
};

export default connect(mapStateToProps, mapDispatchToProps)(Filter);
