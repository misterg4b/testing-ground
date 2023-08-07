import React, { useRef, useEffect } from 'react';
type MessageDetailProps = {
    content: string;
    onClose: () => void;
  };
const MessageDetail = ( props : MessageDetailProps ) => {
  const messageDetailRef = useRef(null);

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (messageDetailRef.current && !messageDetailRef.current.contains(event.target)) {
        props.onClose();
      }
    };

    document.addEventListener('click', handleClickOutside);

    return () => {
      document.removeEventListener('click', handleClickOutside);
    };
  }, [props.onClose]);

  return (
    <div className="mt-4 bg-gray-500 border-2 p-4 text-center" ref={messageDetailRef}>
      {props.content}
    </div>
  );
};

export default MessageDetail;
