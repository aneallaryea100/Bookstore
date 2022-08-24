const CHECK_STATUS = 'BOOKSTORE/categories/CHECK_STATUS';

const checkReducer = (state = [], action) => {
  switch (action.type) {
    case CHECK_STATUS:
      return 'under construction';
    default:
      return state;
  }
};

export const checkStatus = () => ({
  type: CHECK_STATUS,
});

export default checkReducer;
