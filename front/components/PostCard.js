import React from 'react';
import { Card, Button, Avatar } from 'antd';
import PropTypes from 'prop-types';

const PostCard = ({ post }) => {
  return (
    <div>
      <Card
              key={+post.createdAt}
              cover={post.img && <img alt="example" src={post.img} />}
              actions= {[
                <div key="following">follow<br /></div>,
                <div key="Heart">Heart<br /></div>,
                <div key="comment">comment<br /></div>,
              ]}
              extra={<Button>팔로우</Button>}
            >
              <Card.Meta
                avatar={<Avatar>{post.User.nickname[0]}</Avatar>}
                title={post.User.nickname}
                description={post.content}
              />
            </Card>
    </div>
  )
}
PostCard.propTypes = {
  post: PropTypes.shape({
    User: PropTypes.object,
    content: PropTypes.string,
    img: PropTypes.string,
    createAt:PropTypes.object,
  }),
}
export default PostCard
