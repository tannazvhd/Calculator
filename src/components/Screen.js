import { Grid } from "@mui/material";

export default function Screen({ preview, value }) {
  return (
    <Grid container spacing={2}>
      <Grid item xs={12}>
        <p className="smallScreen">{preview}</p>
      </Grid>
      <Grid item xs={12}>
        <p className="screen">{value}</p>
      </Grid>
    </Grid>
  );
}
