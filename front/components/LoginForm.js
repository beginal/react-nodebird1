import React, { useState, useCallback } from 'react'
import { Input, Button, Form } from 'antd';
import Link from 'next/link'
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
  const onSubmitForm = useCallback((e) => {
    console.log('erer');
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
              <Button type="primary" htmlType="submit">Login</Button>
              <Link href="/signup"><a><Button>회원가입</Button></a></Link>
            </div>
          </Form>
    </div>
  )
}

export default LoginForm;
