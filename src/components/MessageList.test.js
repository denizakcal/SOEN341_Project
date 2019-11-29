import React from 'react'; // const React = require('react');
import {shallow} from 'enzyme'; // const {shallow} = require('enzyme');
import MessageList from './MessageList'; //const Message = require('./Message');
import { exportAllDeclaration } from '@babel/types';

const setUp = (props={}) => {
    const component = shallow(<MessageList {...props} />);
    return component;
};

describe('MessageList component', () => {
    it('should render one message-list div containing one join-room div (if there is no room chosen)', () => {
        
        const messageListRootComponentShallowWrapper = setUp(); //shallow(<MessageList />)
        console.log('Logging component.debug():', messageListRootComponentShallowWrapper.debug())
        expect(messageListRootComponentShallowWrapper.length).toBe(1);
        
        const messageListDivShallowWrapper = messageListRootComponentShallowWrapper.childAt(0);
        console.log('Logging messageListDiv.debug():', messageListDivShallowWrapper.debug());
        const joinRoomDiv = messageListRootComponentShallowWrapper.find('.join-room')
        expect(joinRoomDiv.length).toBe(1);
    });

    // TODO:
    // it('should render one message-list div containing one more message than previously (if a room is chosen)', () => {//TODO
    //     // // If room is chosen
    //     const component = setUp(0);
    //     const wrapper = component.find('.message-list')
    //     expect(wrapper.length).toBe(1);
    // });
});