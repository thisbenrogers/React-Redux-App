import React from 'react';
import { connect } from 'react-redux';
import Loader from 'react-loader-spinner';

import { useForm } from '../hooks/handleHook';

const SearchForm = props => {

    // TODO input the callback into useForm
    const { fields, submit, handleChanges } = useForm();

    return (
        <>
            <form onSubmit={submit}>
                <input name="artist" onChange={handleChanges} type="text"/>
                <input name="songTitle" onChange={handleChanges} type="text"/>
                <button>
                    {props.isLoading ? 
                    <Loader type="Puff" color="#00BFFF" height="100" width="100" /> :
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

export default connect(mapStateToProps, {})(SearchForm);