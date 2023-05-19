import React from 'react';
import './featprop.css';

const Featprop = () => {
  return (
    <div className='fp'>
        <div className='fpitem'>
            <div class="text">
                <img src="https://media.timeout.com/images/102890989/1024/768/image.jpg" alt="" />
                <span className='fpname'>asdasd</span>
                <span className='fpcity'>sadsad</span>
                <span className='fpprice'>5000$</span>
                <div className='fprating'>
                    <button>8.9</button>
                    <span>Good</span>
                </div>
            </div>
        </div>

        <div className='fpitem'>
            <div className='text'>
                <img src="https://media.timeout.com/images/102890989/1024/768/image.jpg" alt="" />
                <span className='fpname'>asdasd</span>
                <span className='fpcity'>asdsad</span>
                <span className='fpprice'>4645$</span>
                <div className='fprating'>
                    <button>8.9</button>
                    <span>Good</span>
                </div>
            </div>
        </div>

        <div className='fpitem'>
            <div className='text'>
                <img src="https://media.timeout.com/images/102890989/1024/768/image.jpg" alt="" />
                <span className='fpname'>asdasd</span>
                <span className='fpcity'>sds</span>
                <span className='fpprice'>4456$</span>
                <div className='fprating'>
                    <button>8.9</button>
                    <span>Good</span>
                </div>
            </div>
        </div>

        <div className='fpitem'>
            <div className='text'>
                <img src="https://media.timeout.com/images/102890989/1024/768/image.jpg" alt="" />
                <span className='fpname'>sdaasd</span>
                <span className='fpcity'>sasd</span>
                <span className='fpprice'>6545$</span>
                <div className='fprating'>
                    <button>8.9</button>
                    <span>Good</span>
                </div>
            </div>
        </div>
    </div>
  );
}

export default Featprop;