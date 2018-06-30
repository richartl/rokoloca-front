import React from 'react'
import PropTypes from 'prop-types'
import { NavBar } from 'components'
import ReactPlayer from 'react-player'
import './index.css'


class MainPlayerContainer extends React.Component {

  render() {
    return (
      <div>
        <NavBar/>
        <div className='container-fluid'>
          <div className='row'>
            <div className='col col-8'>
              <div className='row justify-content-lg-center div--row-content'>
                <div className='col col-10'>
                  <ReactPlayer url='https://www.youtube.com/watch?v=ysz5S6PUM-U' width='100%' height='100%'/>
                </div>
              </div>
            </div>
            <div className='col col-4'>
              <div className='row div--row-content'>
                <div className='col col-10'>
                  <div className='playlist'>
                    <ul className='playlist--list'>
                      <li className='playlist--list-item'>
                        Song Name
                      </li>
                      <li className='playlist--list-item'>
                        Song Name
                      </li>
                      <li className='playlist--list-item'>
                        Song Name
                      </li>
                      <li className='playlist--list-item'>
                        Song Name
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    )
  }

}

export default MainPlayerContainer;
