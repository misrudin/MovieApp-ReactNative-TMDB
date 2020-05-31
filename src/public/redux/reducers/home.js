const initialValue = {
  errMsg: [],
  isPending: false,
  isRejected: false,
  isFulfilled: false,
  homePopular: [],
  homeTv: [],
  trending: [],
};

const homeReducer = (state = initialValue, action) => {
  switch (action.type) {
    case 'GET_HOME_POPULAR_PENDING':
      return {
        ...state,
        isPending: true,
        isRejected: false,
        isFulfilled: false,
      };
    case 'GET_HOME_POPULAR_REJECTED':
      return {
        ...state,
        isPending: false,
        isRejected: true,
        errMsg: action.payload.message,
      };
    case 'GET_HOME_POPULAR_FULFILLED':
      return {
        ...state,
        isPending: false,
        isFulfilled: true,
        homePopular: action.payload.data,
      };
    case 'GET_HOME_TV_POPULAR_PENDING':
      return {
        ...state,
        isPending: true,
        isRejected: false,
        isFulfilled: false,
      };
    case 'GET_HOME_TV_POPULAR_REJECTED':
      return {
        ...state,
        isPending: false,
        isRejected: true,
        errMsg: action.payload.message,
      };
    case 'GET_HOME_TV_POPULAR_FULFILLED':
      return {
        ...state,
        isPending: false,
        isFulfilled: true,
        homeTv: action.payload.data,
      };
    case 'GET_HOME_TRENDING_PENDING':
      return {
        ...state,
        isPending: true,
        isRejected: false,
        isFulfilled: false,
      };
    case 'GET_HOME_TRENDING_REJECTED':
      return {
        ...state,
        isPending: false,
        isRejected: true,
        errMsg: action.payload.message,
      };
    case 'GET_HOME_TRENDING_FULFILLED':
      return {
        ...state,
        isPending: false,
        isFulfilled: true,
        trending: action.payload.data,
      };

    default:
      return state;
  }
};

export default homeReducer;
