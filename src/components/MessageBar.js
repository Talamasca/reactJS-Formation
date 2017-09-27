import React, {Component} from 'react';

const MessageBar = () => {
  return (
    <div id="msgBar">
      <input type="text" name="msgZone" placeholder="ton message"/><br />
      <input type="submit" value="Submit"/>
    </div>
  );
}

export default MessageBar;
