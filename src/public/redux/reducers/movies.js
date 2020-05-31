const initialValue = {
  errMsg: [],
  isPending: false,
  isRejected: false,
  isFulfilled: false,
  popular: [],
  tipe: 'popular',
  video: [],
  detail: [],
  cast: [],
};

const moviesReducer = (state = initialValue, action) => {
  switch (action.type) {
    case 'GET_MOVIES_POPULAR_PENDING':
      return {
        ...state,
        isPending: true,
        isRejected: false,
        isFulfilled: false,
      };
    case 'GET_MOVIES_POPULAR_REJECTED':
      return {
        ...state,
        isPending: false,
        isRejected: true,
        errMsg: action.payload.message,
      };
    case 'GET_MOVIES_POPULAR_FULFILLED':
      return {
        ...state,
        isPending: false,
        isFulfilled: true,
        popular: action.payload.data,
      };
    case 'GET_VIDEO_PENDING':
      return {
        ...state,
        isPending: true,
        isRejected: false,
        isFulfilled: false,
      };
    case 'GET_VIDEO_REJECTED':
      return {
        ...state,
        isPending: false,
        isRejected: true,
        errMsg: action.payload.message,
      };
    case 'GET_VIDEO_FULFILLED':
      return {
        ...state,
        isPending: false,
        isFulfilled: true,
        video: action.payload.data,
      };
    case 'GET_DETAIL_PENDING':
      return {
        ...state,
        isPending: true,
        isRejected: false,
        isFulfilled: false,
      };
    case 'GET_DETAIL_REJECTED':
      return {
        ...state,
        isPending: false,
        isRejected: true,
        errMsg: action.payload.message,
      };
    case 'GET_DETAIL_FULFILLED':
      return {
        ...state,
        isPending: false,
        isFulfilled: true,
        detail: action.payload.data,
      };
    case 'GET_CAST_PENDING':
      return {
        ...state,
        isPending: true,
        isRejected: false,
        isFulfilled: false,
      };
    case 'GET_CAST_REJECTED':
      return {
        ...state,
        isPending: false,
        isRejected: true,
        errMsg: action.payload.message,
      };
    case 'GET_CAST_FULFILLED':
      return {
        ...state,
        isPending: false,
        isFulfilled: true,
        cast: action.payload.data,
      };
    case 'SET_TIPE':
      return {
        ...state,
        isPending: false,
        isFulfilled: true,
        tipe: action.payload,
      };

    default:
      return state;
  }
};

export default moviesReducer;
