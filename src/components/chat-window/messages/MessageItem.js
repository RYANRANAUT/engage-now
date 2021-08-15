import React from "react";
import TimeAgo from "timeago-react";
import ProfileAvatar from "../../ProfileAvatar";
import ProfileInfoBtnModal from "./ProfileInfoBtnModal";

const MessageItem = ({ message }) => {
  const { author, createdAt, text } = message;
  return (
    <li className="padded mb-1">
      <div className="d-flex align-items-center font-bolder mb-1">
        <ProfileAvatar
          src={author.avatar}
          name={author.name}
          className="ml-1"
          size="xs"
        />

        <ProfileInfoBtnModal
          profile={author}
          appearance="link"
          className="p-0 ml-1"
        />
        <TimeAgo
          datetime={createdAt}
          className="font-normal ml-2"
          style={{ color: "#45a29e" }}
        />
      </div>

      <div>
        <span className="word-break-all" style={{ color: "#c5c6c7" }}>
          {text}
        </span>
      </div>
    </li>
  );
};

export default MessageItem;
