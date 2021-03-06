import React from 'react';
import { connect } from 'react-redux';
import {fetchCheeses} from '../actions/cheese';


class CheeseList extends React.Component{
  componentDidMount(){
    this.props.dispatch(fetchCheeses());
    console.log('componentDidMount');
  }
  
  render(){
  let cheeses = this.props.cheeses.map((cheese, index) => (
    <li key={index}>
      {cheese}
    </li>
  ));
  console.log('what is cheeses - client - CheeseList render', cheeses);

  return (
    <ul id="cheeseList">
      {cheeses}
    </ul>
  );
  }
}

const mapStateToProps = state => ({
  cheeses: state.cheeses
});

export default connect(mapStateToProps)(CheeseList);