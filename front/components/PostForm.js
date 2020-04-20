import React, { useCallback, useState, useEffect } from 'react'
import { Button, Input, Form} from 'antd'
import { useSelector, useDispatch } from 'react-redux';
import { ADD_POST_REQUEST } from '../reducer/post';

function PostForm() {
  const dispatch = useDispatch();
  const [ text, setText ]  = useState('');
  const { imagePaths, isAddingPost, postAdded } = useSelector(state => state.post)
  
  useEffect(() => {
    setText('');
  }, [postAdded === true])
  
  const onSubmitForm = useCallback(() => {
    dispatch({
      type: ADD_POST_REQUEST,
      data: {
        text,
      }
    })
  },[])

  const onChangeText = useCallback((e) => {
    setText(e.target.value);
  }, [])
  return (
    <div>
      <Form onFinish={onSubmitForm} style={{ margin:'10px 0 20px'}} encType="multpart/form-data">
        <Input.TextArea maxLength={140} placeholder="어떤 일이 있었나요?" value={text} onChange={onChangeText} />
        <div>
          <Input type="file" multiple hidden />
          <Button>이미지 업로드</Button>
          <Button type="primary" style={{ float: 'right'}}  htmlType="submit" loading={isAddingPost}>짹짹</Button>
        </div>
        <div>
          {imagePaths.map((v) => (
              <div key ={v} style={{ display: 'inline-block'}}>
                <img src={`http://localhost:3000/${v}`} style={{ width: "200px"}} alt="" />
                <div>
                  <Button>Delete</Button>
                </div>
              </div>
            ))}
        </div>
        </Form>
    </div>
  )
}

export default PostForm;
