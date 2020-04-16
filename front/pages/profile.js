import React from 'react'
import {Form, Input, Button, List, Card} from 'antd'
const profile = () => {
  return (
    <>
      <div>
        <Form style={{ marginBottom: '20px', border: '1px solid #d9d9d9', padding: '20px' }}>
        <Input addonBefore="닉네임"/>
        <Button type="primary">수정</Button>
        </Form>
        <List 
        style={{marginBottom: '20px'}}
        grid={{ gutter: 4, xs: 2, md: 3}}
        size="small"
        header={<div>팔로워 목록</div>}
        loadMore={<Button style={{ width: '100%' }}>더보기</Button>}
        bordered /*  테두리 디자인 */
        dataSource={['준호','천재','리액트연습']} /* 실제 안에 들어갈 데이터 */
        renderItem={item => (
          <List.Item style={{ marginTop: '20px'}} >
            <Card actions={
              <div>Stop</div>
            }>
              <Card.Meta description={item} />
            </Card>
          </List.Item>
        )}        
        />
        <List 
        style={{marginBottom: '20px'}}
        grid={{ gutter: 4, xs: 2, md: 3}}
        size="small"
        header={<div>팔로잉 목록</div>}
        loadMore={<Button style={{ width: '100%' }}>더보기</Button>}
        bordered /*  테두리 디자인 */
        dataSource={['준호','천재','리액트연습']} /* 실제 안에 들어갈 데이터 */
        renderItem={item => (
          <List.Item style={{ marginTop: '20px'}} >
            <Card actions={
              <div key="stop">Stop</div>
            }>
              <Card.Meta description={item} />
            </Card>
          </List.Item>
        )}        
        />
      </div>
    </>
  );
};

export default profile
