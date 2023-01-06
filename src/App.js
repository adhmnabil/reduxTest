
import { connect } from 'react-redux';
import { decrease, increase } from './actions/action';
import './App.css';


function mapStateToProps(state){
  return{
    count : state.count,
    user : state.user
  }
}


function mapDispatchToProps(dispatch){
  return{
    Increase : () => dispatch(increase()),
    Decrease : () => dispatch(decrease())
  }
}


function App(props) {
  

  return (
    <div className="App">
      <p>{props.count}</p>
      <button onClick={props.Increase}>+</button>
      <button className='minus' onClick={props.Decrease}>-</button>

    </div>
  );
}



export default connect(mapStateToProps , mapDispatchToProps)(App) ;
