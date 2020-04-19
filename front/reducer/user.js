const dummyUser = {
  nickname: '준호',
  Post: [],
  Followings: [],
  Followers: [],
};

export const initialState = {
  isLoggedIn: false,
  user: null,
  signUpDate: {},
  loginDate: {},
}

export const LOG_IN_REQUEST = 'LOG_IN_REQUEST';
export const LOG_IN_SUCCESS = 'LOG_IN_SUCCESS';
export const LOG_IN_FAILURE = 'LOG_IN_FAILURE';

export const LOG_OUT = 'LOG_OUT REQUEST';
export const LOG_OUT = 'LOG_OUT SUCCESS';
export const LOG_OUT = 'LOG_OUT FAILURE';

export const signUpActuon = (data) => {
  return {
    type: SIGN_UP,
    data: data,
  }
}

export const loginAction = (data) => {
  return {
    type: LOG_IN_REQUEST,
    data,
  }
};

export const logOutAction = {
  type: LOG_OUT,
}



export default (state = initialState, action) => {
  switch (action.type) {
    case LOG_IN_REQUEST: {
      return {
        ...state,
        loginData: action.data,
        isLoading: true,
      }
    }
    case LOG_IN_SUCCESS: {
      return {
        ...state,isLoggedIn: true,
        user: dummyUser,
        isLoading: false,
      }
    }
    case LOG_OUT_REQUEST: {
      return {
        ...state,
        isLoggedIn: false,
        user: null,
      }
    }
    case SIGN_UP_REQUEST: {
      return {
        ...state,
        isLoggedIn: false,
      }
    }
    default: {
      return {
        ...state,
      }
    }
  }
};
