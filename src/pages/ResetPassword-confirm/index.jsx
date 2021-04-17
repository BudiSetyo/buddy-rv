import React from 'react';
import ResetLayout from '@/layouts/Reset/index';
import Input from '@/components/input/index';
import FormItem from '@/components/formItem/index';
import Button from '@/components/btn/index';

const index = () => (
  <ResetLayout>
    <div className="paragraf height--30 flex flex--column flex--justify-space-between flex--align-center text--center">
      <h1>Create New Password</h1>
      <h3 className="width--80">Your new password must be different from previous used password!</h3>
    </div>
    <div className="flex flex--column flex--jusctify-center flex--align-center">
      <FormItem className="width--80 flex flex--column" label="Password">
        <Input type="password" className="width--100" />
      </FormItem>
      <FormItem className="width--80 flex flex--column" label="Confirm Password">
        <Input type="password" className="width--100" />
      </FormItem>
    </div>
    <div className="flex flex--column flex--jusctify-center flex--align-center">
      <Button className="width--80" type="primary">Create</Button>
    </div>
  </ResetLayout>
);

export default index;
