const initialValue = {
  loading: true,
};

const userReducer = (state = initialValue, action) => {
  switch (action.type) {
    case 'LOADING':
      return {
        ...state,
        loading: action.payload,
      };

    default:
      return state;
  }
};

export default userReducer;
