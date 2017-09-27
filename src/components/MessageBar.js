import React, {Component} from 'react';

const MessageBar = () => {
  return (
    <div id="msgBar">
      <input type="text" name="msgZone" value=""/><br />
      <input type="submit" value="Submit"/>
    </div>
  );
}

export default MessageBar;
