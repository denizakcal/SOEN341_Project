import React from 'react'; // const React = require('react');
import {shallow} from 'enzyme'; // const {shallow} = require('enzyme');
import MessageList from './MessageList'; //const Message = require('./Message');
import { exportAllDeclaration } from '@babel/types';

describe('MessageList component', () => {
    it('It should also render without errors', () => {
        
        const component = shallow(<MessageList />)
        console.log(component.debug())
        
        const wrapper = component.find('.join-room')
        expect(wrapper.length).toBe(1);
        //expect(1).toBe(1)
    });
});