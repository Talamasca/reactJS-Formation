import React, {Component} from 'react';
import MessageItem from './MessageItem';

const MessageList = () => {
    return (
        <ul>
            <MessageItem username="tks" message="Lorem Ipsum" />
            <MessageItem username="tks 2" message="Lorem Ipsum 2" />
            <MessageItem username="tks 3" message="Lorem Ipsum 3" />
            <MessageItem username="tks 4" message="Lorem Ipsum 4" />
        </ul>
    )
}

export default MessageList;
