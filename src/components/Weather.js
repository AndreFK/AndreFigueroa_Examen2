import React, { Component } from "react";
import ACTIONS from '../modules/action';
import {connect} from 'react-redux';

const mapStateToProps = state => ({
    items: state.items
});
  
const mapDispatchToProps = dispatch => ({
    createItem: item => dispatch(ACTIONS.createItem(item)),
    deleteItem: id => dispatch(ACTIONS.deleteItem(id)),
    getDate: (m,d) => dispatch(ACTIONS.getDate(m,d))
});

class Weather extends Component{
    render(){
        return(
            <div>
                <h1>{this.props.match.params.month}</h1>
                <h1>{this.props.match.params.day}</h1>
            </div>
        )
    }
}

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(Weather);