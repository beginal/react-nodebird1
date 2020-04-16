import React from 'react'
import { Button, Input, Form} from 'antd'
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

function PostForm() {
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
          {dummy.imagePaths.map((v,i) => {
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
