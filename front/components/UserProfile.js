import React from 'react';
import { Avatar, Card} from 'antd';

const dummy = {
  nickname: '준호',
  Post: [],
  Following: [],
  Follower: [],
  isLoggedIn: false,
}

const UserProfile = () => {
  return (
    <div>
      <Card
          actions={[
            <div key="twit">짹짹<br /> {dummy.Post.length}</div>,
            <div key="following">팔로잉<br /> {dummy.Following.length}</div>,
            <div key="follower">팔로워<br /> {dummy.Follower.length}</div>
          ]}
          > 
          <Card.Meta 
            avatar={<Avatar>{dummy.nickname[0]}</Avatar>}
            title={dummy.nickname}
            />
          </Card>
    </div>
  )
}

export default UserProfile
