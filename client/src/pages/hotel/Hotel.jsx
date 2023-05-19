import React from 'react';
import './hotel.css';
import Navbar from '../../components/navbar/Navbar';
import Header from '../../components/header/Header';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLocationDot } from '@fortawesome/free-solid-svg-icons';

const Hotel = () => {
  return (
    <div>
      <Navbar/>
      <Header type="list"/>
      <div className="hcontainer">

        <div className='hwrapper'>
            <h1 class='htitle'>Hotel Sarover</h1>

            <div className='hadd'>
              <FontAwesomeIcon icon={faLocationDot}/>
              <span>Elton st 125</span>
            </div>

            <span className='hdist'>
                Excellent location - 500 from Airport
            </span>

            <span className='hprice'>
                Book at 500$
            </span>

            <div className='himglist'>
              <div className='himagewrapper'>
                    <img className='himg' src="https://images.moneycontrol.com/static-mcnews/2019/09/Samhi_Hotels-770x433.jpg?impolicy=website&width=770&height=431" alt="" />
              </div>
              <div className='himagewrapper'>
                    <img className='himg' src="https://images.moneycontrol.com/static-mcnews/2019/09/Samhi_Hotels-770x433.jpg?impolicy=website&width=770&height=431" alt="" />
              </div>
              <div className='himagewrapper'>
                    <img className='himg' src="https://images.moneycontrol.com/static-mcnews/2019/09/Samhi_Hotels-770x433.jpg?impolicy=website&width=770&height=431" alt="" />
              </div>
              <div className='himagewrapper'>
                    <img className='himg' src="https://images.moneycontrol.com/static-mcnews/2019/09/Samhi_Hotels-770x433.jpg?impolicy=website&width=770&height=431" alt="" />
              </div>
              <div className='himagewrapper'>
                    <img className='himg' src="https://images.moneycontrol.com/static-mcnews/2019/09/Samhi_Hotels-770x433.jpg?impolicy=website&width=770&height=431" alt="" />
              </div>
              <div className='himagewrapper'>
                    <img className='himg' src="https://images.moneycontrol.com/static-mcnews/2019/09/Samhi_Hotels-770x433.jpg?impolicy=website&width=770&height=431" alt="" />
              </div>

            </div>

            <div className='hdescprice'>

              <div className='hdesctext'>
                  <h1>Stay here , enjoy life</h1>
                  <p>
                  The history of textbooks dates back to ancient civilizations. For example, Ancient Greeks wrote educational texts. The modern textbook has its roots in the massasdsds sdasd asdsad asd asdsad asd sad sad  production made possible by the printing press. Johannes Gutenberg himself may have printed editions of Ars Minor, a schoolbook on Latin grammar by Aelius Donatus. Early textbooks were used by tutors and teachers (e.g. alphabet books), as well as by individuals who taught themselves.
                  </p>
              </div>

              <div className='hpricetext'>
      
                  <h1>Perferct for a night stay</h1>
                  <p>gvasdhf haga ddddd jhjfgd jhjfhD JghjAD JHjhAS JHYASF JHagfhAS HaASDF HagSFD IfhiASF.</p>
                  <span>$500</span>
                  <button>Book Now</button>
     
              </div>

            </div>

        </div>
      
      </div>
    </div>
  );
}

export default Hotel;
