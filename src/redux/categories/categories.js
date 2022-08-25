const CHECK_STATUS = 'BOOKSTORE/categories/CHECK_STATUS';

export const checkReducer = (state = [], action) => {
  switch (action.type) {
    case CHECK_STATUS:
      return action.payload;
    default:
      return state;
  }
};

export const checkStatus = () => ({
  type: CHECK_STATUS,
  payload: 'under construction',
});
