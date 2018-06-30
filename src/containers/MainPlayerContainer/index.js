import React from 'react'
import PropTypes from 'prop-types'
import { NavBar } from 'components'
import {connect} from 'react-redux';
import { bindActionCreators } from 'redux'
import * as PlaylistActions from '../../actions/playlists';
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
        this.props.playlistsActions.fetchPlaylist('a05b9d29-8d84-4f99-b7ad-d180c8b7be96');
      },
      received: (data) => {
        console.log(data);
        this.props.playlistsActions.fetchPlaylist('a05b9d29-8d84-4f99-b7ad-d180c8b7be96');
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
    let list_items = '';
    if (!this.props.playlists.isFetching) {
      list_items = this.props.playlists.current_playlist.included.map((song, idx) => {
        return (
          <li key={idx} className='playlist--list-item'>
            {song.attributes.url}
          </li>
        )
      });
    }
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
                      {list_items}
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

const mapStateToProps = state => {
  return {
    playlists: state.playlists
  };
};

const mapDispatchToProps = dispatch => {
  return {
    playlistsActions: bindActionCreators(PlaylistActions, dispatch)
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(MainPlayerContainer);
