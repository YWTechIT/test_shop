import React from 'react';
import { connect } from 'react-redux';
import Sort from './Sort';

const SortContainers = ({ name, asc, desc }) => {
    return (
        <Sort name={name} asc={asc} desc={desc} />
    )
}

const mapStateToProps = state => ({
    title: state.sort.title
})

const mapDispatchToProps = dispatch => ({
    name: () => {
        console.log('name')
    },
    asc: () => {
        console.log('asc')
    },
    desc: () => {
        console.log('desc')
    },
})

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(SortContainers);