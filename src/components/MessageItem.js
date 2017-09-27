import React, {Component} from 'react';

const MessageItem = ({username, message}) => {
  return (
      <li>
          <dl>
              <dd>{username}</dd>
              <dt>{message}</dt>
          </dl>
      </li>
  );
}

export default MessageItem;
