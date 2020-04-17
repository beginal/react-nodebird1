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

export const LOG_IN = 'LOG_IN' // 액션의 이름
export const LOG_OUT = 'LOG_OUT'

export const loginAction = (data) => {
  return {
    type: LOG_IN,
    data,
  }
};

export const logOutAction = {
  type: LOG_OUT,
}

export default (state = initialState, action) => {
  switch (action.type) {
    case LOG_IN: {
      return {
        ...state,
        isLoggedIn: true,
        user: dummyUser,
        loginData: action.data,
      }
    }
    case LOG_OUT: {
      return {
        ...state,
        isLoggedIn: false,
        user: null,
      }
    }
    default: {
      return {
        ...state,
      }
    }
  }
};