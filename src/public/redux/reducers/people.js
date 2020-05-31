const initialValue = {
  errMsg: [],
  isPending: false,
  isRejected: false,
  isFulfilled: false,
  dataPeople: [],
};

const peopleReducer = (state = initialValue, action) => {
  switch (action.type) {
    case 'GET_PEOPLE_PENDING':
      return {
        ...state,
        isPending: true,
        isRejected: false,
        isFulfilled: false,
      };
    case 'GET_PEOPLE_REJECTED':
      return {
        ...state,
        isPending: false,
        isRejected: true,
        errMsg: action.payload.message,
      };
    case 'GET_PEOPLE_FULFILLED':
      return {
        ...state,
        isPending: false,
        isFulfilled: true,
        dataPeople: action.payload.data,
      };

    default:
      return state;
  }
};

export default peopleReducer;
