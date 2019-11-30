import React from 'react'; // const React = require('react');
import {shallow} from 'enzyme'; // const {shallow} = require('enzyme');
import MessageList from './MessageList'; //const Message = require('./Message');
import SendMessageForm from './SendMessageForm';
import { exportAllDeclaration } from '@babel/types';

const setUp = (props={}) => {
    const component = shallow(<MessageList {...props} />);
    return component;
};

describe('MessageList component', () => {

    let messageListRootComponentShallowWrapper;
    beforeEach(() => {
        messageListRootComponentShallowWrapper = setUp();
    });

    it('should render one message-list div containing one join-room div (AS IF THERE IS NO ROOM CHOSEN)', () => {
        
        //const messageListRootComponentShallowWrapper = setUp(); //shallow(<MessageList />)
        console.log('Logging component.debug():', messageListRootComponentShallowWrapper.debug())
        expect(messageListRootComponentShallowWrapper.length).toBe(1);
        
        const messageListDivShallowWrapper = messageListRootComponentShallowWrapper.childAt(0);
        console.log('Logging messageListDivShallowWrapper.debug():', messageListDivShallowWrapper.debug());
        const joinRoomDiv = messageListRootComponentShallowWrapper.find('.join-room')
        expect(joinRoomDiv.length).toBe(1);
    });

    // TODO:
    // it('should render one message-list div containing one more message than previously (AS IF A ROOM IS CHOSEN)', () => {//TODO
    //     //const messageListRootComponentShallowWrapper = setUp(); //shallow(<MessageList />)
    //     const messageListDivShallowWrapper = messageListRootComponentShallowWrapper.find('.message-list')
    //     const initialMessageListDivShallowWrapperAmount = messageListDivShallowWrapper.length;
    //     console.log('Logging messageListDivShallowWrapper.debug() #1:', messageListDivShallowWrapper.debug());
    //     //SendMessageForm smf = new SendMessageForm();
    //     //smf.setState();
    //     console.log('Logging messageListDivShallowWrapper.debug() #2:', messageListDivShallowWrapper.debug());
    //     expect(messageListDivShallowWrapper.length > initialMessageListDivShallowWrapperAmount).toBeTruthy();
    // });
});