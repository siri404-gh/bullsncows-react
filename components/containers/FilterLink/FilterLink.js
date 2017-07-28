import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link } from '../../presentational/Link/Link';
import { setVisibilityFilter } from '../../../actions/FilterLink/FilterLinkActions';

export default connect(
    (state, ownProps) => {
        return {
            active: state.visibilityFilter === ownProps.filter
        };
    },
    (dispatch, ownProps) => {
        return {
            onFilterClick: () => dispatch(setVisibilityFilter(ownProps.filter))
        };
    }
)(Link);
