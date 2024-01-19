import Div from '@jumbo/shared/Div'
import JumboContentLayoutMain from "@jumbo/components/JumboContentLayout/JumboContentLayoutMain";

import { Checkbox, FormControl, FormGroup, FormLabel, Grid, Radio, TextField, Typography,FormControlLabel ,RadioGroup, Card, Box, Button } from '@mui/material'
import React from 'react'
import { border } from '@mui/system';



const QualifyNow = () => {
  return (

    <JumboContentLayoutMain>
    <Grid container  paddingTop={5}  spacing={5}>
      
      <Grid item xs={9}>
            <Typography variant='h1'  > Qualify question & Answers </Typography>           
      </Grid>
      <Grid item xs={3}>
      <Typography variant='h1'  > Karbon Software</Typography>
      </Grid>
      
       <Grid item xs={9}>
        <Typography variant='h3'borderRadius={40} border={1} paddingBottom={1} paddingTop={1} paddingLeft={1} >Is the prospect is in the right industry  to benefit from your product and Service.</Typography>
      </Grid>
      <Grid item sx={3}>
      <RadioGroup row>
        <FormControlLabel value="female" control={<Radio />} label="Yes" />
        <FormControlLabel value="male" control={<Radio />} label="No" />
      </RadioGroup>
      </Grid>
      
     
      <Grid item xs={9}>
        <Typography variant='h3' borderRadius={40} border={1} paddingBottom={1} paddingTop={1} paddingLeft={1}>Is  territory is right to benefit from your product and service.    </Typography>
      </Grid>
      <Grid item sx={3}>
      <RadioGroup row>
        <FormControlLabel value="female" control={<Radio />} label="Yes" />
        <FormControlLabel value="male" control={<Radio />} label="No" />
      </RadioGroup>
      </Grid>
      <Grid item xs={9}>
        <Typography variant='h3'borderRadius={40} border={1} paddingBottom={1} paddingTop={1} paddingLeft={1}>Whether there is a need for your product or service.</Typography>
      </Grid>
      <Grid item sx={3}>
      <RadioGroup row>
        <FormControlLabel value="female" control={<Radio />} label="Yes" />
        <FormControlLabel value="male" control={<Radio />} label="No" />
      </RadioGroup>
      </Grid>
      <Grid item xs={9}>
        <Typography variant='h3'borderRadius={40} border={1} paddingBottom={1} paddingTop={1} paddingLeft={1}>Is the prospect is in the right industry  to benefit from your product and Service.</Typography>
      </Grid>
      <Grid item sx={3}>
      <RadioGroup row>
        <FormControlLabel value="female" control={<Radio />} label="Yes" />
        <FormControlLabel value="male" control={<Radio />} label="No" />
      </RadioGroup>
      </Grid>
      <Grid item xs={9}>
        <Typography variant='h3'borderRadius={40} border={1} paddingBottom={1} paddingTop={1} paddingLeft={1}>Is territory is right to benefit from your product and service.</Typography>
      </Grid>
      <Grid item sx={3}>
      <RadioGroup row>
        <FormControlLabel value="female" control={<Radio />} label="Yes" />
        <FormControlLabel value="male" control={<Radio />} label="No" />
      </RadioGroup>
      </Grid>
      <Grid item xs={9}>
        <Typography variant='h3'borderRadius={40} border={1} paddingBottom={1} paddingTop={1} paddingLeft={1}>Whether there is a need for your product or service.</Typography>
      </Grid>
      <Grid item sx={3}>
      <RadioGroup row>
        <FormControlLabel value="female" control={<Radio />} label="Yes" />
        <FormControlLabel value="male" control={<Radio />} label="No" />
      </RadioGroup>
      </Grid>
      <Grid item xs={9}>
        <Typography variant='h3'borderRadius={40} border={1} paddingBottom={1} paddingTop={1} paddingLeft={1}>Is  territory is right to benefit from your product and service.    </Typography>
      </Grid>
      <Grid item sx={3}>
      <RadioGroup row>
        <FormControlLabel value="female" control={<Radio />} label="Yes" />
        <FormControlLabel value="male" control={<Radio />} label="No" />
      </RadioGroup>
      </Grid>
      <Grid item xs={9}>
        <Typography variant='h3'borderRadius={40} border={1} paddingBottom={1} paddingTop={1} paddingLeft={1}>Is the prospect is in the right industry  to benefit from your product and Service.</Typography>
      </Grid>
      <Grid item sx={3}>
      <RadioGroup row>
        <FormControlLabel value="female" control={<Radio />} label="Yes" />
        <FormControlLabel value="male" control={<Radio />} label="No" />
      </RadioGroup>
      </Grid>
      <Grid item xs={9}>
        <Typography variant='h3'borderRadius={40} border={1} paddingBottom={1} paddingTop={1} paddingLeft={1}>Is  territory is right to benefit from your product and service.    </Typography>
      </Grid>
      <Grid item sx={3}>
      <RadioGroup row>
        <FormControlLabel value="female" control={<Radio />} label="Yes" />
        <FormControlLabel value="male" control={<Radio />} label="No" />
      </RadioGroup>
      </Grid>
      <Grid
                  paddingTop={6}
                  paddingLeft={10}
                  container
                  direction={"row"}
                  // justifyContent={"center"}
                  // alignItems={"center"}
                 
                  spacing={2}></Grid>
      <Grid item  align="center">
                      <Button
                      sx={{
                        maxHeight: "30px",
                        maxWidth: "150px",
                        borderRadius: "20px",
                        backgroundColor: "#007BFF",
                        ":hover": { background: "#007BFF" },
                      }}
                      variant="contained"
                      
                    >
                      Qualify
                    </Button>
                      
                      </Grid>
                      <Grid item  align="center">
                      <Button
                      sx={{
                        maxHeight: "30px",
                        maxWidth: "150px",
                        borderRadius: "20px",
                        backgroundColor: "#C9C9C9",
                        color:"#000000DE",
                        ":hover": { background: "#007BFF" },
                      }}
                      variant="contained"
                    >
                      Canncel
                    </Button>
                      
                      </Grid>
    
    </Grid>
    </JumboContentLayoutMain>
  )
}

export default QualifyNow