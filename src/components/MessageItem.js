import React, {Component} from 'react';

const messageStyle = {
  fontWeight: 'bold',
};

const MessageItem = ({username, message}) => {
  return (
      <li style={{backgroundColor: 'white'}}>
          <dl>
              <dd style={messageStyle}>{username}</dd>
              <dt>{message}</dt>
          </dl>
      </li>
  );
}

export default MessageItem;
