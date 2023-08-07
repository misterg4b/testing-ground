"use client"


// import React, { useState, useEffect } from 'react';

// const MessageList = () => {
//   const [selectedMessageIndex, setSelectedMessageIndex] = useState();

//   const handleOpenMessage = (index) => {
//     setSelectedMessageIndex(index);
//   };

//   const handleCloseMessage = () => {
//     setSelectedMessageIndex(-1);
//   };

//   useEffect(() => {
//     const handleOutsideClick = (event) => {
//       if (selectedMessageIndex !== -1) {
//         const messageDetail = document.querySelector('.message-detail');
//         if (messageDetail && !messageDetail.contains(event.target)) {
//           handleCloseMessage();
//         }
//       }
//     };

//     if (selectedMessageIndex !== -1) {
//       document.addEventListener('click', handleOutsideClick);
//     }

//     return () => {
//       document.removeEventListener('click', handleOutsideClick);
//     };
//   }, [selectedMessageIndex]);

//   const messages = [
//     {
//       title: "Hello",
//       content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.'
//     },
//     {
//       title: "Just checking in!",
//       content: 'Mauris eget ultricies erat, in sodales ligula.'
//     },
//     {
//         title: "Just checking in!",
//         content: 'Mauris eget ultricies erat, in sodales ligula.'
//     },
//     {
//         title: "Just checking in!",
//         content: 'Mauris eget ultricies erat, in sodales ligula.'
//     },
//     ... (add more objects)
//   ];

  



//   return (
//     <div>
//       <header className=' flex justify-center font-bold p-5 bg-gray-600'>Message List</header>
//       <div className=''>
//       <div className=' grid grid-cols-4  gap-3s'>
//       {messages.map((message, index) => (
        
//             <div className='p-3 bg-gray-400 border-4 text-center' key={index} onClick={() => handleOpenMessage(index)}>
//                 <div className="message ">{message.title}</div>
//                 {selectedMessageIndex === index && (
                    
//                     <p className="message-detail bg-gray-500 text-center border-2"> {message.content} </p>
//                 )}
//             </div>
        
//       ))}
//       </div>
//     </div>
//     </div>
//   );
// };

import React, { useState } from 'react';
import MessageDetail from '../components/MessageDetail';
import { messages } from '../components/messagedata';

const MessageList = () => {
  const [selectedMessageIndex, setSelectedMessageIndex] = useState(-1);
  const [sortedMessages, setSortedMessages] = useState(messages.slice());
  const [filterKeyword, setFilterKeyword] = useState('');

  const handleOpenMessage = (index) => {
    setSelectedMessageIndex(index);
  };

  const handleCloseMessage = () => {
    setSelectedMessageIndex(-1);
  };

  const handleSortAlphabetically = () => {
    const sorted = sortedMessages.slice().sort((a, b) => a.title.localeCompare(b.title));
    setSortedMessages(sorted);
  };

  const handleSortAlphabeticallyReverse = () => {
    const sorted = sortedMessages.slice().sort((a, b) => b.title.localeCompare(a.title));
    setSortedMessages(sorted);
  };

  const handleFilterKeywordChange = (event) => {
    setFilterKeyword(event.target.value);
  };

  const filteredMessages = sortedMessages.filter((message) =>
    message.title.toLowerCase().includes(filterKeyword.toLowerCase())
  );

  return (
    <div>
      <header className='flex justify-between font-bold p-5 bg-gray-600'>
        <div className=''>Message list</div>
        <input 
          type='text'
          placeholder='Search by keyword...'
          value={filterKeyword}
          onChange={handleFilterKeywordChange}
          className='rounded px-3 py-1 bg-gray-600 border-2'
        />
        <div className='grid grid-rows-2 text-xs '>
          <button className='rounded bg-gray-500 hover:bg-gray-600 focus:ring-2 focus:ring-red-500 ' onClick={() => {handleSortAlphabetically(),handleCloseMessage()}}>
            Sort up
          </button>
          <button className='rounded bg-gray-500 hover:bg-gray-600 focus:ring-2 focus:ring-red-500' onClick={() => {handleSortAlphabeticallyReverse(),handleCloseMessage()}}>
            Sort down
          </button>

        </div>
 
        <a href='/'>
        <button className='rounded bg-gray-500 p-3'>
          Home
        </button>
        </a>
      </header>
      
      <div className='grid grid-cols-4 gap-2 '>
        {filteredMessages.map((message, index) => (
          <div className='relative p-3 bg-gray-400 border-4 text-center hover:bg-gray-500 hover:text-yellow-500 ' key={index} onClick={() => handleOpenMessage(index)}>
            <div className="message ">{message.title}</div>
          </div>
        ))}
      </div>
      {selectedMessageIndex !== -1 && (
        <MessageDetail
          content={filteredMessages[selectedMessageIndex].content}
          onClose={handleCloseMessage}
        />
      )}
      
    </div>
  
  )
};

export default MessageList;
