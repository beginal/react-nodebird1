import React from 'react';
import PostForm from '../components/PostForm';
import PostCard from '../components/PostCard';
const dummy = {
  isLoggedIn: true,
  imagePaths: [],
  mainPosts: [{
    User: {
      id: 1,
      nickname: '준호',
    },
    content: '히카리는 이쁘다',
    img: 'https://img1.daumcdn.net/thumb/R800x0/?scode=mtistory2&fname=https%3A%2F%2Fk.kakaocdn.net%2Fdn%2FJZXpX%2FbtqyZuhiIBl%2F4sQwyx0JtKHVffTwpyAsgK%2Fimg.png'
  }],
};

const Home = () => {
  return (
    <div>
      {dummy.isLoggedIn && <PostForm />}
        {dummy.mainPosts.map((c) => {
          return (
            <PostCard key={c} post={c} />
          )
        })}
    </div>
  ); 
};

export default Home;