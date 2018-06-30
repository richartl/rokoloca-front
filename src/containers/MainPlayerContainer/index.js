import React from 'react'
import PropTypes from 'prop-types'
import { NavBar } from 'components'
import ReactPlayer from 'react-player'
import actionCable from 'actioncable'
import './index.css'


class MainPlayerContainer extends React.Component {

  createSocket() {
    let cable = actionCable.createConsumer('ws://localhost:5000/cable');
    this.playlists = cable.subscriptions.create({
      channel: 'PlaylistChannel',
      uuid: 'a05b9d29-8d84-4f99-b7ad-d180c8b7be96'
    },
    {
      connected: () => {
        console.log('Conected!');
      },
      received: (data) => {
        console.log(data);
      },
      create: function(chatContent) {
        this.perform('create', {
          content: chatContent
        });
      }
    });
  }

  componentWillMount() {
    this.createSocket();
  }

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
