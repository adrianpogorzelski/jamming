import React from 'react'
import './App.css';
import {SearchBar} from "../SearchBar/SearchBar";
import {SearchResults} from "../SearchResults/SearchResults";
import {Playlist} from "../Playlist/Playlist";
import Spotify from "../../util/Spotify";

export class App extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            searchResults: [
            {
                name: 'Name 1',
                artist: 'Artist 1',
                album: 'Album 1',
                id: 'ID 1'
            }, {
                name: 'Name 2',
                artist: 'Artist 2',
                album: 'Album 2',
                id: 'ID 2'
            }, {
                name: 'Name 3',
                artist: 'Artist 3',
                album: 'Album 3',
                id: 'ID 3'
            }],
            playlistName: "My playlist",
            playlistTracks: [
                {
                    name: 'Name 1',
                    artist: 'Artist 1',
                    album: 'Album 1',
                    id: 'ID 1'
                }, {
                    name: 'Name 5',
                    artist: 'Artist 5',
                    album: 'Album 5',
                    id: 'ID 5'
                }, {
                    name: 'Name 6',
                    artist: 'Artist 6',
                    album: 'Album 6',
                    id: 'ID 6'
                }]
        } //this.state
        this.addTrack = this.addTrack.bind(this);
        this.removeTrack = this.removeTrack.bind(this);
        this.updatePlaylistName = this.updatePlaylistName.bind(this);
        this.savePlaylist = this.savePlaylist.bind(this);
        this.search = this.search.bind(this)
    }; //constructor

    search(term) {
        Spotify.search(term).then(searchResults => {
            this.setState({searchResults: searchResults});
        })
    }

    addTrack(track) {
        let tracks = this.state.playlistTracks;
        if (tracks.find(savedTrack => savedTrack.id === track.id)) {
            return;
        } else {
            tracks.push(track)
            this.setState({playlistTracks: tracks})
        }
    }; // addTrack

    removeTrack(track) {
        let tracks = this.state.playlistTracks;
        let filtered = tracks.filter(current => current.id !== track.id);
        this.setState({playlistTracks: filtered});
    }

    updatePlaylistName(name) {
        this.setState({playlistName: name});
    };

    savePlaylist() {
        const trackURIs = this.state.playlistTracks;
    };

    render() {
        return (
            <div>
                <h1>Ja<span className="highlight">mmm</span>ing</h1>
                <div className="App">
                    <SearchBar onSearch={this.search}/>
                    <div className="App-playlist">
                        <SearchResults
                            searchResults={this.state.searchResults}
                            onAdd={this.addTrack}
                        />
                        <Playlist
                            playlistName={this.state.playlistName}
                            playlistTracks={this.state.playlistTracks}
                            onRemove={this.removeTrack}
                            onNameChange={this.updatePlaylistName}
                            onSave = {this.savePlaylist}
                        />
                    </div>
                </div>
            </div>
        )
    }
}
