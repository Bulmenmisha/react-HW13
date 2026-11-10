import { SET_FILTER } from './actions.js';

const initialState = {
  users: [
    { id: 1, name: 'Иван Петров' },
    { id: 2, name: 'Мария Смирнова' },
    { id: 3, name: 'Алексей Иванов' },
    { id: 4, name: 'Марина Кузнецова' },
    { id: 5, name: 'Дарья Соколова' },
    { id: 6, name: 'Глеб Попов' },
    { id: 7, name: 'Дмитрий Лебедев' },
    { id: 8, name: 'Григорий Козлов' },
    { id: 9, name: 'Серафим Новиков' },
    { id: 10, name: 'Анна Морозова' },
  ],
  filter: '',
};

function reducer(state = initialState, action) {
  switch (action.type) {
    case SET_FILTER:
      return { ...state, filter: action.payload };
    default:
      return state;
  }
}

export default reducer;
