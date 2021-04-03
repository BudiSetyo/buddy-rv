import React from 'react';
import ResetLayout from '@/layouts/Reset/index';
import Button from '@/components/button/index';

const index = () => (
  <ResetLayout>
    <div className="paragraf height--30 flex flex--column flex--justify-space-between flex--align-center text--center">
      <h1>Reset Password</h1>
      <h3 className="width--80">Enter verification code we just sent to your email address</h3>
    </div>
    <div className="flex flex--column flex--jusctify-center flex--align-center">
      <Button className="width--80" type="primary">Verivy</Button>
    </div>
  </ResetLayout>
);

export default index;
