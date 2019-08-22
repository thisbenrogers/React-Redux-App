import React from 'react';
import { connect } from 'react-redux';

const Lyrics = props => {
    
    return (
        <>
            <h3>Lyrics</h3>
            <p>{props.failed ? `Looks like there was a problem, check your spelling. ${props.lyrics}`  : props.lyrics}</p>
        </>
    )
}

const mapStateToProps = state => {
    return {
        lyrics: state.lyrics,
        failed: state.failed
    }
}

export default connect(mapStateToProps, {})(Lyrics);