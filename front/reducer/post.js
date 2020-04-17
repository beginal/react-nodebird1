export const initialState = {  
  mainPosts: [{
    User: {
      id: 1,
      nickname: '준호',
    },
    content: '히카리는 이쁘다',
    img: 'https://img1.daumcdn.net/thumb/R800x0/?scode=mtistory2&fname=https%3A%2F%2Fk.kakaocdn.net%2Fdn%2FJZXpX%2FbtqyZuhiIBl%2F4sQwyx0JtKHVffTwpyAsgK%2Fimg.png'
  }],
  imagePaths: [],
};

const ADD_POST = 'ADD_POST';
const ADD_DUMMY = 'ADD_DUMMY';

const addPost = {
  type: ADD_POST,
}

const addDummy = {
  type: ADD_DUMMY,
  data: {
    content: 'Hello',
    UserId: 1,
    User: {
      nickname: '준호',
    }
  }
}

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_POST: {
      return {
        ...state,
      }
    }
    case ADD_DUMMY: {
      return {
        ...state,
        mainPosts: [action.data, ...state.mainPosts]
      }
    }
    default: {
      return {
        ...state,
      }
    }
  }
}


export default reducer;