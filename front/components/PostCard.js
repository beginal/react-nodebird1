import React, { useCallback, useEffect, useState } from 'react';
import { Avatar, Button, Card, Comment, Form, Input, List } from 'antd';
import PropTypes from 'prop-types';
import Link from 'next/link';
import { useDispatch, useSelector } from 'react-redux';
import { ADD_COMMENT_REQUEST , LOAD_COMMENTS_REQUEST } from '../reducers/post';

const PostCard = ({ post }) => {
  const [commentFormOpened, setCommentFormOpened] = useState(false);
  const [commentText, setCommentText] = useState('');
  const { me } = useSelector(state => state.user);
  const { commentAdded, isAddingComment } = useSelector(state => state.post);
  const dispatch = useDispatch();

  const onToggleComment = useCallback(() => {
    setCommentFormOpened(prev => !prev);
    if(!commentFormOpened) {
      dispatch({
        type: LOAD_COMMENTS_REQUEST,
        data: post.id,
      });
    }
  }, []);

  const onSubmitComment = useCallback((e) => {
    if (!me) {
      return alert('로그인이 필요합니다.');
    }
    return dispatch({
      type: ADD_COMMENT_REQUEST,
      data: {
        postId: post.id,
        content: commentText,
      },
    });
  }, [me && me.id, commentText]);

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
                avatar={
                <Link 
                href={{pathname: '/user', query: {id: post.User.id} }} 
                as={`/user/${post.User.id}`}
                >
                  <a><Avatar>{post.User.nickname[0]}</Avatar></a>
                  </Link>
              }
                title={post.User.nickname}
                description={(
                <div>{post.content.split(/(#[^\s]+)/g).map((v) => {
                  if (v.match(/#[^\s]+/)) {
                    return (
                      <Link
                      href={{ pathname: '/hashtag', query: { tag: v.slice(1) } }}
                      as={`/hashtag/${v.slice(1)}`}
                      key={v}
                    >
                      <a>{v}</a>
                    </Link>
                    );
                  }
                  return v;
                  })}</div>
                )}
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
                        avatar={
                        <Link 
                        href= {{pathname: '/user', query: {id:post.User.id} }}
                        as= {`/users/${item.User.id}`}
                        >
                          <a><Avatar>{item.User.nickname[0]}</Avatar></a>
                          </Link>
                          }
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
        }).isRequired,
      };
      
      export default PostCard;