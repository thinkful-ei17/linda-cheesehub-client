import React from 'react';
import { connect } from 'react-redux';
import {fetchCheeses} from '../actions/cheese';


class CheeseList extends Component{
  componentDidMount(){
    props.dispatch(fetchCheeses())
  }
  
  render(){
  let cheeses = this.cheeses.map((cheese, index) => (
    <li key={index}>
      {cheese}
    </li>
  ));

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