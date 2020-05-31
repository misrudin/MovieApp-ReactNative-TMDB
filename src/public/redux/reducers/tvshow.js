const initialValue = {
  errMsg: [],
  isPending: false,
  isRejected: false,
  isFulfilled: false,
  datatv: [],
  tvvideo: [],
  tvdetail: [],
  tvcast: [],
  tipe: 'popular',
};

const tvshowReducer = (state = initialValue, action) => {
  switch (action.type) {
    case 'GET_TV_PENDING':
      return {
        ...state,
        isPending: true,
        isRejected: false,
        isFulfilled: false,
      };
    case 'GET_TV_REJECTED':
      return {
        ...state,
        isPending: false,
        isRejected: true,
        errMsg: action.payload.message,
      };
    case 'GET_TV_FULFILLED':
      return {
        ...state,
        isPending: false,
        isFulfilled: true,
        datatv: action.payload.data,
      };
    case 'GET_TV_VIDEO_PENDING':
      return {
        ...state,
        isPending: true,
        isRejected: false,
        isFulfilled: false,
      };
    case 'GET_TV_VIDEO_REJECTED':
      return {
        ...state,
        isPending: false,
        isRejected: true,
        errMsg: action.payload.message,
      };
    case 'GET_TV_VIDEO_FULFILLED':
      return {
        ...state,
        isPending: false,
        isFulfilled: true,
        tvvideo: action.payload.data,
      };
    case 'GET_TV_DETAIL_PENDING':
      return {
        ...state,
        isPending: true,
        isRejected: false,
        isFulfilled: false,
      };
    case 'GET_TV_DETAIL_REJECTED':
      return {
        ...state,
        isPending: false,
        isRejected: true,
        errMsg: action.payload.message,
      };
    case 'GET_TV_DETAIL_FULFILLED':
      return {
        ...state,
        isPending: false,
        isFulfilled: true,
        tvdetail: action.payload.data,
      };
    case 'GET_TV_CAST_PENDING':
      return {
        ...state,
        isPending: true,
        isRejected: false,
        isFulfilled: false,
      };
    case 'GET_TV_CAST_REJECTED':
      return {
        ...state,
        isPending: false,
        isRejected: true,
        errMsg: action.payload.message,
      };
    case 'GET_TV_CAST_FULFILLED':
      return {
        ...state,
        isPending: false,
        isFulfilled: true,
        tvcast: action.payload.data,
      };

    case 'SET_TIPE_TV':
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

export default tvshowReducer;
