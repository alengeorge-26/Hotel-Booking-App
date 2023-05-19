import React from 'react';
import './maillist.css';

const Maillist = () => {
  return (
    <div className='mail'>
        <h1 className='mailtitle'>Subscribe for better experience</h1>
        <span className='maildesc'>Please provide your mail id ,so we can reach you</span>
        <div className='mailbox'>
            <input type="text" placeholder='Your Email'/>
            <button>Subscribe</button>
        </div>
    </div>
  );
}

export default Maillist;