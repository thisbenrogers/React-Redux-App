import React from 'react';
import { connect } from 'react-redux';

const Lyrics = props => {
    
    return (
        <>
            <h3>Lyrics</h3>
            <p>{props.lyrics}</p>
        </>
    )
}

const mapStateToProps = state => {
    return {
        lyrics: state.lyrics
    }
}

export default connect(mapStateToProps, {})(Lyrics);