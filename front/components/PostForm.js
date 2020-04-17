import React from 'react'
import { Button, Input, Form} from 'antd'
import { useSelector } from 'react-redux';

function PostForm() {
  const { imagePaths } = useSelector(state => state.post)
  return (
    <div>
      <Form style={{ margin:'10px 0 20px'}} encType="multpart/form-data">
        <Input.TextArea maxLength={140} placeholder="어떤 일이 있었나요?" />
        <div>
          <Input type="file" multiple hidden />
          <Button>이미지 업로드</Button>
          <Button type="primary" style={{ float: 'right'}}  htmlType="submit">짹짹</Button>
        </div>
        <div>
          {imagePaths.map((v,i) => {
            return (
              <div key ={v} style={{ display: 'inline-block'}}>
                <img src={'http://localhost:3000/ + v'} style={{ width: "200px"}} alt="" />
                <div>
                  <Button>Delete</Button>
                </div>
              </div>
            )
          })}
        </div>
        </Form>
    </div>
  )
}

export default PostForm;
