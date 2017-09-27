import React, {Component} from 'react';
import MessageItem from './MessageItem';

//const MessageList = () => {
class MessageList extends Component {
  constructor(props) {
    super(props);
    this.state = { "messages": [
          {
            username: 'tks1',
            body: 'mon body ...'
          },
          {
            username: 'tks2',
            body: 'mon body ...'
          },
          {
            username: 'tks2',
            body: 'mon body ...'
          },
      ]};
  }

  render() {
    return (<ul style={{borderColor: 'grey', padding: 10, listStyle: 'none'}}>
      {this.state.messages.map((message, i) => {
        return <MessageItem key={i} message={message} />
      })}
      </ul>);
  }
}

export default MessageList;
