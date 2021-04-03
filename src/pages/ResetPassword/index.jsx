import React from 'react';
import ResetLayout from '@/layouts/Reset/index';
import Input from '@/components/input/index';
import FormItem from '@/components/formItem/index';
import Button from '@/components/button/index';

const index = () => (
  <ResetLayout>
    <div className="paragraf height--30 flex flex--column flex--justify-space-between text--center">
      <h1>Reset Password</h1>
      <h3>Enter your email address linked to this account.</h3>
      <p>We will send you the verification code to reset your password</p>
    </div>
    <div className="flex flex--column flex--jusctify-center flex--align-center">
      <FormItem className="width--80 flex flex--column" label="Email">
        <Input className="width--100" />
      </FormItem>
      <Button className="width--80" type="primary">Send</Button>
    </div>
  </ResetLayout>
);

export default index;
