import React, { useState, useCallback } from 'react';
import { Form, Input, Checkbox, Button } from 'antd'
const Signup = () => {
  
  const [passwordCheck, setPasswordCheck] = useState('');
  const [term, setTerm] = useState(false);
  const [passwordError, setPasswordError] = useState(false);
  const [termError, setTermError] = useState(false);

  const useInput = (initValue = null) => {
    const [value,setter] = useState(initValue);
    const handler = useCallback( (e) => {
      setter(e.target.value);
    }, [])
    return [value, handler]
  }
  const  [id, onChangeId] = useInput('')
  const  [nickname, onChangeNickname] = useInput('')
  const  [password, onChangePassword] = useInput('')

  const onChangePasswordCheck = useCallback((e) => {
    setPasswordError(e.target.value != password);
    setPasswordCheck(e.target.value);
  }, [password]);

  const onChangeTerm = useCallback((e) => {
    setTermError(false); 
    setTerm(e.target.checked);
  },[]);

  

  const onSubmit = useCallback((e) => {
    if (password != passwordCheck) {
      return setPasswordError(true);
    }
    if(!term) {
      return setTermError(true);
    }
  }, [password, passwordCheck, term]);
  return (
    <>
    <Form onFinish={onSubmit} style={{ padding: 10 }}>
      <div>
        <label htmlFor="user-id">아이디</label>
        <br/>
        <Input name="user-id" value={id} required onChange={onChangeId} />
      </div>
      <div>
        <label htmlFor="user-nickname">닉네임</label>
        <br/>
        <Input name="user-nickname" value={nickname} required onChange={onChangeNickname} />
      </div>
      <div>
        <label htmlFor="user-password">비밀번호</label>
        <br/>
        <Input name="user-password" type="password" value={password} required onChange={onChangePassword} />
      </div>
      <div>
        <label htmlFor="user-password-check">비밀번호확인</label>
        <br/>
        <Input name="user-password-check" type="password" value={passwordCheck} required onChange={onChangePasswordCheck} />
        {passwordError && <div style={{ color: 'red'}}>비밀번호가 맞지 않습니다.</div>}
      </div>
      <div>
        <Checkbox name="user-term" checked={term} onChange={onChangeTerm}>동의합니다</Checkbox>
        {termError && <div style={{ color: 'red' }}>약관에 동의하셔야 합니다.</div>}
      </div>
      <div style={{ marginTop:10}}>
        <Button type="primary" htmlType="submit">가입하기</Button>
      </div>
    </Form> 
    </>
  )
}

export default Signup;
