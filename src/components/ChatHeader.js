import React from "react";
import "../css/chatHeader.css";

function ChatHeader() {
  return (
    <div className="chatHeader">
      <h3>I am the Header</h3>
      <div className="chatHeader__left">
        <h3>
          <span className="chatHeader__hash">#</span>
          Test Channel Name
        </h3>
      </div>
      <div className="chatHeader__righ"></div>
    </div>
  );
}

export default ChatHeader;
