import React, { useState, useCallback } from 'react'
import { Input, Button, Form } from 'antd';
import Link from 'next/link'
import { useDispatch, useSelector } from 'react-redux';
import { LOG_IN_REQUEST } from '../reducer/user'
function LoginForm() {

  const useInput = (initState = null) => {
    const [value,setValue] = useState(initState);
    const handler = useCallback((e) => {
      setValue(e.target.value)
    }, [])
    return [value,handler]
  }

  const [id, onChangeId] = useInput('');
  const [password, onChangePassword] = useInput('');
  const { isLoggingIn } = useSelector(state => state.user);
  const dispatch = useDispatch();
  const onSubmitForm = useCallback(() => {
    dispatch({
      type: LOG_IN_REQUEST,
      data: {
        id, password,
      },
    });
  }, [id, password]);

  return (
    <div>
      <Form onFinish={onSubmitForm} style={{ padding: '10px'}}>
            <div>
              <label htmlFor="user-id">아이디</label>
              <br />
              <Input name="user-id" value={id} onChange={onChangeId} required />
            </div>
            <div>
              <label htmlFor="user-id">비밀번호</label>
              <br />
              <Input name="user-password" type="password" value={password} onChange={onChangePassword} required />
            </div>
            <div style={{ marginTop: '10px'}}>
              <Button type="primary" htmlType="submit" loading={isLoggingIn}>Login</Button>
              <Link href="/signup"><a><Button>회원가입</Button></a></Link>
            </div>
          </Form>
    </div>
  )
}

export default LoginForm;
