import React from 'react';
import { shallow } from 'enzyme';
import Login from './Login';

describe('Test case for testing login',() =>{
let wrapper;
test('customer id check',()=>
{
wrapper = shallow(<Login/>);
wrapper.find('input[type="text"]').simulate('change', {target: {name: 'custid', value: '3456213'}});
expect(wrapper.state('custid')).toEqual('3456213');
})
it('password check',()=>{
wrapper = shallow(<Login/>);
wrapper.find('input[type="password"]').simulate('change', {target: {name: 'password', value: 'password#123'}});
expect(wrapper.state('password')).toEqual('password#123');
})
})