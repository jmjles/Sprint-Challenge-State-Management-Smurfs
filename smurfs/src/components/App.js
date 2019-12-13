import React, { Component } from "react";
import "./App.css";
import { Container } from "@material-ui/core";
import Smurfs from "./smurfs";
import {connect} from 'react-redux'
import {getSmurfs} from '../redux/actions/index'
function App(props) {
  return (
    <div className="App">
      <Container>
        <Smurfs smurfs={props.smurfs} getSmurfs={props.getSmurfs}/>
      </Container>
    </div>
  );
}
const mapProps = state => ({
  smurfs : state.smurfs.smurfs
})
export default connect(mapProps,{getSmurfs})(App)