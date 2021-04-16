import { Snackbar } from "@material-ui/core";
import { Alert } from "@material-ui/lab";
import React, { FC, useEffect } from "react";
import { useState } from "react";

type MessageType = "success" | "info" | "warning" | "error";

interface MessageProps {
  type: MessageType;
  text: string;
}

const Message: FC<MessageProps> = ({ type, text }) => {
  return (
    <Snackbar
      open={true}
      anchorOrigin={{ vertical: "top", horizontal: "center" }}
    >
      <Alert severity={type}>{text}</Alert>
    </Snackbar>
  );
};

export let add: (notice: MessageProps) => void;

function getUuid() {
  return new Date().getTime();
}

let timer: NodeJS.Timeout;

export const MessageContainer = () => {
  const [notice, setNotice] = useState<MessageProps>();
  const timeout = 3 * 1000;

  add = (notice: MessageProps) => {
    setNotice(notice);

    timer = setTimeout(() => {
      setNotice(undefined);
    }, timeout);
  };

  useEffect(() => {
    if (timer) {
      clearTimeout(timer);
    }
    return () => {
      clearTimeout(timer);
    };
  }, [notice]);

  return (
    <div className="toast_container">
      {notice?.type && (
        <Message key={getUuid()} type={notice.type} text={notice.text} />
      )}
    </div>
  );
};
