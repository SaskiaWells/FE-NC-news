import { useState, useEffect } from "react";

function CommentMessage({ message }) {
  const [showMessage, setShowMessage] = useState(true); // Use a state variable to control the message visibility

  useEffect(() => {

    const timer = setTimeout(() => {
      setShowMessage(false);
    }, 3000);


    return () => {
      clearTimeout(timer);
    };
  }, []); 

  return (

    showMessage && <label htmlFor='comment-input' className="message">{message}</label>
  );
}

export default CommentMessage;
