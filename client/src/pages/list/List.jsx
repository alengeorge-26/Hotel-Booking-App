import React, { useState } from 'react';
import './list.css';
import Navbar from '../../components/navbar/Navbar';
import Header from '../../components/header/Header';
import { DateRange } from 'react-date-range';
import { format } from 'date-fns';
import 'react-date-range/dist/styles.css';
import 'react-date-range/dist/theme/default.css';

const List = () => {

  const [state,setState] = useState([
    {
      startDate: new Date(),
      endDate: new Date(),
      key: 'selection'
    }
  ]);

  return (
    <div>
      <Navbar/>
      <Header type="list"/>
      <div className='listcontainer'>
        <div className='listwrapper'>
          
          <div className="listsearch">
              <h1 className='lstitle'>Search</h1>
              <div className='dest'>
                <h3>Destination</h3>
                <input type="text" className='desttext'/>
              </div>

              <div className='dest'>
                <h3>Check-In Date</h3>
                <span className='desttext'>
                {`${format(state[0].startDate,"dd/MM/yyyy")} to ${format(state[0].endDate,"dd/MM/yyyy")}`}
                </span>
                <DateRange
                editableDateInputs={true}
                onChange={item => setState([item.selection])}
                moveRangeOnFirstSelection={false}
                ranges={state}
                className='descalender'/> 
              </div>

              <div className='options'>
                <h4>Options</h4>
                <div className='optcont'>

                  <div className='opt'>
                    <span className='optext'>
                      Min Price(PER NIGHT)
                    </span>
                    <input type="text" className='optval'/>
                  </div>

                  <div className='opt'>
                    <span className='optext'>
                     Max Price(PER NIGHT)
                    </span>
                    <input type="text" className='optval'/>
                  </div>

                  <div className='opt'>
                    <span className='optext'>
                      Adult
                    </span>
                    <input type="text" className='optval'/>
                  </div>

                  <div className='opt'>
                    <span className='optext'>
                      Children
                    </span>
                    <input type="text" className='optval'/>
                  </div>

                  <div className='opt'>
                    <span className='optext'>
                     Room
                    </span>
                    <input type="text" className='optval'/>
                  </div>
                </div>
              </div>

              <div className='lssearch'>
                <button>Search</button>
              </div>

          </div>

          <div className="listresult">

            <div>
              <div className='hl'>
                <div className="hotel">
                  <img src="https://assets-global.website-files.com/5c6d6c45eaa55f57c6367749/624b471bdf247131f10ea14f_61d31b8dbff9b500cbd7ed32_types_of_rooms_in_a_5-star_hotel_2_optimized_optimized.jpeg" alt="" />
                  
                  <div className='hdet'>

                        <div className='named'>
                              <h1 className='hname'>Tower Street Apartment</h1>
                              <span className='hgrade'> Good</span>
                              <button className='hrate'>8.4</button>
                        </div>

                        <div className='add'>
                              <span className='dist'>500m from Airport</span>
                              <button className="taxi">Free Airport Taxi</button>
                              <span className='feature'>Studio Apartment with A/C</span>
                              <span className='room'>Entire Studio ~ 1 Bathroom ~ 1 Full Bed</span>
                        </div>

                        <div className='price'>
                              <span className='desc'>Free Cancellation</span>
                              <button className='doll'>$500</button>
                        </div>

                        <div className='avail'>
                            <button className='availbut'>Check Availability</button>
                        </div>

                  </div>

                </div>

                <div className="hotel">
                  <img src="https://assets-global.website-files.com/5c6d6c45eaa55f57c6367749/624b471bdf247131f10ea14f_61d31b8dbff9b500cbd7ed32_types_of_rooms_in_a_5-star_hotel_2_optimized_optimized.jpeg" alt="" />
                  
                  <div className='hdet'>

                        <div className='named'>
                              <h1 className='hname'>Tower Street Apartment</h1>
                              <span className='hgrade'> Good</span>
                              <button className='hrate'>8.4</button>
                        </div>

                        <div className='add'>
                              <span className='dist'>500m from Airport</span>
                              <button className="taxi">Free Airport Taxi</button>
                              <span className='feature'>Studio Apartment with A/C</span>
                              <span className='room'>Entire Studio ~ 1 Bathroom ~ 1 Full Bed</span>
                        </div>

                        <div className='price'>
                              <span className='desc'>Free Cancellation</span>
                              <button className='doll'>$500</button>
                        </div>

                        <div className='avail'>
                            <button className='availbut'>Check Availability</button>
                        </div>

                  </div>

                </div>

                <div className="hotel">
                  <img src="https://assets-global.website-files.com/5c6d6c45eaa55f57c6367749/624b471bdf247131f10ea14f_61d31b8dbff9b500cbd7ed32_types_of_rooms_in_a_5-star_hotel_2_optimized_optimized.jpeg" alt="" />
                  
                  <div className='hdet'>

                        <div className='named'>
                              <h1 className='hname'>Tower Street Apartment</h1>
                              <span className='hgrade'> Good</span>
                              <button className='hrate'>8.4</button>
                        </div>

                        <div className='add'>
                              <span className='dist'>500m from Airport</span>
                              <button className="taxi">Free Airport Taxi</button>
                              <span className='feature'>Studio Apartment with A/C</span>
                              <span className='room'>Entire Studio ~ 1 Bathroom ~ 1 Full Bed</span>
                        </div>

                        <div className='price'>
                              <span className='desc'>Free Cancellation</span>
                              <button className='doll'>$500</button>
                        </div>

                        <div className='avail'>
                            <button className='availbut'>Check Availability</button>
                        </div>

                  </div>

                </div>

                <div className="hotel">
                  <img src="https://assets-global.website-files.com/5c6d6c45eaa55f57c6367749/624b471bdf247131f10ea14f_61d31b8dbff9b500cbd7ed32_types_of_rooms_in_a_5-star_hotel_2_optimized_optimized.jpeg" alt="" />
                  
                  <div className='hdet'>

                        <div className='named'>
                              <h1 className='hname'>Tower Street Apartment</h1>
                              <span className='hgrade'> Good</span>
                              <button className='hrate'>8.4</button>
                        </div>

                        <div className='add'>
                              <span className='dist'>500m from Airport</span>
                              <button className="taxi">Free Airport Taxi</button>
                              <span className='feature'>Studio Apartment with A/C</span>
                              <span className='room'>Entire Studio ~ 1 Bathroom ~ 1 Full Bed</span>
                        </div>

                        <div className='price'>
                              <span className='desc'>Free Cancellation</span>
                              <button className='doll'>$500</button>
                        </div>

                        <div className='avail'>
                            <button className='availbut'>Check Availability</button>
                        </div>

                  </div>

                </div>

                <div className="hotel">
                  <img src="https://assets-global.website-files.com/5c6d6c45eaa55f57c6367749/624b471bdf247131f10ea14f_61d31b8dbff9b500cbd7ed32_types_of_rooms_in_a_5-star_hotel_2_optimized_optimized.jpeg" alt="" />
                  
                  <div className='hdet'>

                        <div className='named'>
                              <h1 className='hname'>Tower Street Apartment</h1>
                              <span className='hgrade'> Good</span>
                              <button className='hrate'>8.4</button>
                        </div>

                        <div className='add'>
                              <span className='dist'>500m from Airport</span>
                              <button className="taxi">Free Airport Taxi</button>
                              <span className='feature'>Studio Apartment with A/C</span>
                              <span className='room'>Entire Studio ~ 1 Bathroom ~ 1 Full Bed</span>
                        </div>

                        <div className='price'>
                              <span className='desc'>Free Cancellation</span>
                              <button className='doll'>$500</button>
                        </div>

                        <div className='avail'>
                            <button className='availbut'>Check Availability</button>
                        </div>

                  </div>

                </div>

              </div>
            </div>

          </div>



        </div>
      </div>
    </div>
  );
}

export default List;