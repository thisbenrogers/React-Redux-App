import React, { useState } from 'react';
import { connect } from 'react-redux';
import Loader from 'react-loader-spinner';

import { getData } from '../actions';

const SearchForm = props => {

   
    const [song, setSong] = useState({
        artist: '',
        songTitle: ''
    })

    const handleChanges = e => {
        setSong({
            ...song,
            [e.target.name]: e.target.value
        })
    }

    return (
        <>
            <form onSubmit={(e) => {
            e.preventDefault()
            props.getData(song)
        }}>
                <input name="artist" onChange={handleChanges} type="text"/>
                <input name="songTitle" onChange={handleChanges} type="text"/>
                <button>
                    {props.isLoading ? 
                    <Loader type="Puff" color="#00BFFF" height="10" width="60" /> :
                    'Get Lyrics'
                    }
                </button>
            </form>
        </>
    )
}

const mapStateToProps = state => {
    return {
        isLoading: state.isLoading
    }
}

export default connect(mapStateToProps, { getData })(SearchForm);