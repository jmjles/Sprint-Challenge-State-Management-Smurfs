import React from "react";
import "./App.css";
import { Container } from "@material-ui/core";
import Smurfs from "./smurfs";
import SmurfForm from './SmurfForm'
import {connect} from 'react-redux'
import {getSmurfs,postSmurfs} from '../redux/actions/index'
function App(props) {
  return (
    <div className="App">
      <Container>
        <SmurfForm postSmurfs={props.postSmurfs}/>
        <Smurfs smurfs={props.smurfs} getSmurfs={props.getSmurfs}/>
      </Container>
    </div>
  );
}
const mapProps = state => ({
  smurfs : state.smurfs.smurfs
})
export default connect(mapProps,{getSmurfs,postSmurfs})(App)