import React, { useState } from 'react';
import AuthLayout from '@/layouts/Auth/index';
import Input from '@/components/input/index';
import FormItem from '@/components/formItem/index';
import Button from '@/components/button/index';

const index = () => {
  const [username, setUsername] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  return (
    <AuthLayout>
      <div className="title width--100">
        <h1>Register</h1>
      </div>
      <div className="form-input">
        <FormItem label="Username" validation="username cant be empty">
          <Input
            type="text"
            className="width--100"
            value={username}
            onChange={(e) => {
              setUsername(e.target.value);
            }}
          />
        </FormItem>
        <FormItem label="Email" validation="Email cant be empty">
          <Input
            type="text"
            className="width--100"
            value={email}
            onChange={(e) => {
              setEmail(e.target.value);
            }}
          />
        </FormItem>
        <FormItem label="Password" validation="Password cant be empty">
          <Input
            type="text"
            className="width--100"
            value={password}
            onChange={(e) => {
              setPassword(e.target.value);
            }}
          />
        </FormItem>
      </div>
      <div className="button-box">
        <Button className="width--100" type="primary">Register</Button>
        <Button className="width--100" type="secondary">
          Register with Google
        </Button>
      </div>
    </AuthLayout>
  );
};

export default index;
