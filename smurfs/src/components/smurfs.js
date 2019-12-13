import React, { useEffect } from "react";
import { Grid } from "@material-ui/core";
import Smurf from "./smurf";
function Smurfs(props) {
  const smurfs = props.getSmurfs;
  useEffect(() => {
    smurfs();
  }, [smurfs])
  return (
    <Grid container>
      {props.smurfs.map(smurf => (
        <Smurf smurf={smurf} key={smurf.id}/>
      ))}
    </Grid>
  );
}
export default Smurfs