import React from 'react';
import { configure, mount } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import { RegisterForm } from './RegisterForm';

describe('<RegisterForm />', () => {

  configure({ adapter: new Adapter() });

  const email = 'test@eresdev.com';
  const password = '9g8yr2r83';

  test('register user with valid user details', async () => {
    const wrapper = registerFormWrapperFactory();
    global.fetch = jest.fn().mockImplementation(() => {
      return {
        status: 201,
        body: '',
      };
    });

    jest.spyOn(window, 'alert').mockImplementation(() => {
    });

    fillFormFields(wrapper, email, password, password);

    assertInputFieldsUpdate(wrapper, email, password, password);

    await wrapper.find('form').simulate('submit');

    expect(window.alert).toBeCalledWith('common:register.successMessage');

    global.fetch.mockClear();
    delete global.fetch;
  });

  const registerFormWrapperFactory = () => {
    const translator = (key) => key;
    return mount(
      <RegisterForm t={translator}/>
    );
  };

  const fillFormFields = (wrapper, email, password, confirmPassword) => {
    wrapper.find({ name: 'email' }).getDOMNode().value = email;
    wrapper.find({ name: 'email' }).simulate('change');
    wrapper.find({ name: 'password' }).getDOMNode().value = password;
    wrapper.find({ name: 'password' }).simulate('change');
    wrapper.find({ name: 'confirm_password' }).getDOMNode().value = confirmPassword;
    wrapper.find({ name: 'confirm_password' }).simulate('change');
  };

  const assertInputFieldsUpdate = (wrapper, email, password, confirmPassword) => {
    expect(wrapper.find('form').getDOMNode().checkValidity()).toEqual(true);
    expect(wrapper.find('form').length).toEqual(1);
    expect(wrapper.find({ name: 'email' }).length).toEqual(1);
    expect(wrapper.find({ name: 'email' }).getDOMNode().value).toEqual(email);
    expect(wrapper.find({ name: 'password' }).getDOMNode().value).toEqual(password);
    expect(wrapper.find({ name: 'confirm_password' }).getDOMNode().value).toEqual(confirmPassword);
  };

  test('error on different password and confirm password', () => {
    const wrapper = registerFormWrapperFactory();

    const differentConfirmPassword = 'other@ersedev.com';
    fillFormFields(wrapper, email, password, differentConfirmPassword);

    expect(wrapper.find('form').getDOMNode().checkValidity()).toEqual(false);

    expect(
      wrapper.find({ name: 'confirm_password' }).getDOMNode().validity.customError
    ).toEqual(true);

    expect(
      wrapper.find({ name: 'confirm_password' }).getDOMNode().validationMessage
    ).toEqual('common:register.errorConfirmPassword');

  });
});
