import React, { useState } from 'react';
import './header.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBed, faCalendar, faCar, faPerson, faPlane, faTaxi, faUmbrellaBeach, faUsd, faUser } from '@fortawesome/free-solid-svg-icons'
import { DateRange } from 'react-date-range';
import { format } from 'date-fns';
import 'react-date-range/dist/styles.css';
import 'react-date-range/dist/theme/default.css';

const Header = ({type}) => {

    const [opendate,setopen]=useState(false);
    const [state,setState] = useState([
        {
          startDate: new Date(),
          endDate: new Date(),
          key: 'selection'
        }
      ]);
    
      const [people,setpeople]=useState(false);
      const [options,setoptions]=useState({
            adult:1,
            child:0,
            room:1
      });

      const handlebutton= (type,opt)=>{
            setoptions((prev)=>{
                return{
                    ...prev,
                    [type]:opt==="i"? options[type]+1:options[type]-1,
                };
            });
      };
      
  return (
    <div className='header'>
    <div className='headerContainer'>
        <div className='content'>
            <h1>Better bookings through EasyBook .&nbsp;Come Join Now</h1>
        </div>
        <div className="headerList">
            <div className="headerListItem active">
                <FontAwesomeIcon icon={faBed} />
                <span>Stays</span>
            </div>
            <div className="headerListItem">
                <FontAwesomeIcon icon={faPlane} />
                <span>Flights</span>
            </div>
            <div className="headerListItem">
                <FontAwesomeIcon icon={faCar} />
                <span>Car Rentals</span>
            </div>
            <div className="headerListItem">
                <FontAwesomeIcon icon={faTaxi} />
                <span>Taxi</span>
            </div>
        </div>

        {type!=="list" &&
        <><div className='searchbar'>
            <div className='searchitem active'>
                <FontAwesomeIcon icon={faUmbrellaBeach} />
                <input type="text" placeholder='Where are yoy going?' className='searchinput'/>
            </div>

            <div className='searchitem active'>
                <FontAwesomeIcon icon={faCalendar} />
                <span onClick={e=>{setopen(!opendate)}}>
                {`${format(state[0].startDate,"dd/MM/yyyy")} to ${format(state[0].endDate,"dd/MM/yyyy")}`}
                </span>        
            </div>

            <div className='searchitem active'>
                <FontAwesomeIcon icon={faPerson} />
                <span onClick={e=>{setpeople(!people)}}>{`${options.adult} Adult / ${options.child} Children / ${options.room} Room`}</span>
            </div>

            <div className='searchitem active'>
                <buttonon className="search">Search</buttonon>
            </div>
        </div>

        <div className='date'>
        {opendate && <DateRange
                editableDateInputs={true}
                onChange={item => setState([item.selection])}
                moveRangeOnFirstSelection={false}
                ranges={state}
                className='calender'/>  }
        </div>

        {people && <div className='people'>
            <div className='group'>
                <span className='peopletext'>Adults</span>
                <div className='counter'>
                    <button disabled={options.adult<1}
                    className='peoplebuttonon' onClick={()=>handlebutton("adult","d")}>-</button>
                    <span>{options.adult}</span>
                    <button className='peoplebuttonon' onClick={()=>handlebutton("adult","i")}>+</button>
                </div>
            </div>
            <div className='group'>
                <span className='peopletext'>Children</span>
                <div className='counter'>
                    <button disabled={options.child<1}
                    className='peoplebuttonon' onClick={()=>handlebutton("child","d")}>-</button>
                    <span>{options.child}</span>
                    <button className='peoplebuttonon' onClick={()=>handlebutton("child","i")}>+</button>
                </div>
            </div>
            <div className='group'>
                <span className='peopletext'>Rooms</span>
                <div className='counter'>
                    <button disabled={options.room<1}
                    className='peoplebuttonon' onClick={()=>handlebutton("room","d")}>-</button>
                    <span>{options.room}</span>
                    <button className='peoplebuttonon' onClick={()=>handlebutton("room","i")}>+</button>
                </div>
            </div>
        </div>}</>}

        </div>
    </div>
  )
}

export default Header;