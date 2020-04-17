import React from 'react';
import { Avatar, Card, Button } from 'antd';
import { useSelector, useDispatch } from 'react-redux';
import { logOutAction } from '../reducer/user';


const UserProfile = () => {
  const { user } = useSelector(state => state.user)
  const dispatch = useDispatch();
  const onLogout = useCallback(() => {
      dispatch(logOutAction)
    },[])
  return (
    <div>
      <Card
          actions={[
            <div key="twit">짹짹<br /> {user.Post.length}</div>,
            <div key="following">팔로잉<br /> {user.Following.length}</div>,
            <div key="follower">팔로워<br /> {user.Follower.length}</div>
          ]}
          > 
          <Card.Meta 
            avatar={<Avatar>{user.nickname[0]}</Avatar>}
            title={user.nickname}
            />
            <Button onClick={onLogout}>Logout</Button>
          </Card>
    </div>
  )
}

export default UserProfile;
