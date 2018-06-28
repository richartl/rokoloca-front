import React from 'react'
import PropTypes from 'prop-types'
import { NavBar } from 'components'
import ReactPlayer from 'react-player'

class MainPlayerContainer extends React.Component {

  render() {
    return (
      <div>
        <NavBar/>
        <div className='container-fluid'>
          <div className='row'>
            <div className='col col-lg-7'>
              <div className='row justify-content-lg-center'>
                <div className='col col-10'>
                  <ReactPlayer url='https://www.youtube.com/watch?v=ysz5S6PUM-U' playing />
                </div>
              </div>
            </div>
            <div className='col-lg-5'>
              Playlist
            </div>
          </div>
        </div>
      </div>
    )
  }

}

export default MainPlayerContainer;
