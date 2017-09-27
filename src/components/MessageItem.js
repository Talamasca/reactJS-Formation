import React, {Component} from 'react';
import PropTypes from 'prop-types';

const messageStyle = {
  fontWeight: 'bold',
};

const MessageItem = ({message}) => {
  return (
      <li style={{backgroundColor: 'white', marginBottom: 10, borderRadius: 10}}>
          <small style={messageStyle}>@{message.username}</small>
          <div>{message.body}</div>
      </li>
  );
}

MessageItem.propTypes = {
  message: PropTypes.string.isRequired,
};

export default MessageItem;
