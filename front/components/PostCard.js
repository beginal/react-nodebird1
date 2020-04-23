import React, { useCallback, useEffect, useState } from 'react';
import { Avatar, Button, Card, Comment, Form, Input, List } from 'antd';
import PropTypes from 'prop-types';
import { useDispatch, useSelector } from 'react-redux';
import { ADD_COMMENT_REQUEST } from '../reducers/post';

const PostCard = ({ post }) => {
  const [commentFormOpened, setCommentFormOpened] = useState(false);
  const [commentText, setCommentText] = useState('');
  const { me } = useSelector(state => state.user);
  const { commentAdded, isAddingComment } = useSelector(state => state.post);
  const dispatch = useDispatch();

  const onToggleComment = useCallback(() => {
    setCommentFormOpened(prev => !prev);
  }, []);

  const onSubmitComment = useCallback((e) => {
    if (!me) {
      return alert('로그인이 필요합니다.');
    }
    return dispatch({
      type: ADD_COMMENT_REQUEST,
      data: {
        postId: post.id,
      },
    });
  }, [me && me.id]);

  useEffect(() => {
    setCommentText('');
  }, [commentAdded === true]);

  const onChangeCommentText = useCallback((e) => {
    setCommentText(e.target.value);
  }, []);

  return (
    <div>
      <Card
        key={+post.createdAt}
        cover={post.img && <img alt="example" src={post.img} />}
        actions={[
                <div key="following">follow<br /></div>,
                <div key="Heart">Heart<br /></div>,
                <div key="comment" onClick={onToggleComment}>comment<br /></div>,
              ]}
              extra={<Button>팔로우</Button>}
            >
              <Card.Meta
                avatar={<Avatar>{post.User.nickname[0]}</Avatar>}
                title={post.User.nickname}
                description={post.content}
              />
            </Card>
            {commentFormOpened && (
              <>
                
                <List
                  header={`${post.Comments ? post.Comments.length : 0} 댓글`}
                  itemLayout="horizontal"
                  dataSource={post.Comments || []}
                  renderItem={item => (
                    <li>
                      <Comment
                        author={item.User.nickname}
                        avatar={<Avatar>{item.User.nickname[0]}</Avatar>}
                        content={item.content}
                      />
                    </li>
                  )}
                />
                <Form onFinish={onSubmitComment}>
                  <Form.Item>
                    <Input.TextArea rows={4} value={commentText} onChange={onChangeCommentText} />
                  </Form.Item>
                  <Button type="primary" htmlType="submit" loading={isAddingComment}>삐약</Button>
                </Form>
              </>
            )}
          </div>
        );
      };
      
      PostCard.propTypes = {
        post: PropTypes.shape({
          User: PropTypes.object,
          content: PropTypes.string,
          img: PropTypes.string,
          createdAt: PropTypes.object,
        }),
      };
      
      export default PostCard;