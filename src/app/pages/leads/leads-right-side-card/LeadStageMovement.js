import { Translate } from '@mui/icons-material'
import { Grid, Typography } from '@mui/material'
import { margin, textAlign } from '@mui/system'
import React from 'react'
import { Stack } from 'react-bootstrap'
import { ImFontSize } from 'react-icons/im'
import Divider from '@mui/material/Divider';



const LeadStageMovement = () => {
  return (<>
    
  <Grid className='border-card'  container  spacing={0} sx={{borderRadius: "20px", boxShadow: " 0px 4px 4px rgba(0, 0, 0, 0.25)"}}>
    {/* <Grid item xs={2}>
        <Typography variant='h5'>Leads Stage Movement</Typography>
    </Grid> */}
    <Grid item xs={4} sx={{p:1}}>
<div style={{color:"#309975",background:"none",width:"100px",height:"100px",borderRadius:"50%",border:"15px solid"}}>
   
    <Typography variant="h1" style={{textAlign:"center", transform:"translateY(102%)",fontSize:"100",color:"#000000"}}>560 </Typography>
</div>
<br/>
<br/>
    <Typography variant='h6' style={{ fontFamily:"Raleway",transform:"translateY(50%)", color:"#000000",fontSize:"14px"}}>Total Active leads</Typography>
    <Typography variant='h6' style={{ fontFamily:"Raleway",transform:"translateY(50%)", color:"#545454",fontSize:"12px"}}>Last Month (500)</Typography>
</Grid>

<Grid item xs={4} sx={{p:1}}>
<div style={{color:"#E74645",background:"none",width:"100px",height:"100px",borderRadius:"50%",border:"15px solid"}}>
   
    <Typography variant="h1" style={{textAlign:"center", transform:"translateY(100%)",fontSize:"100",color:"#000000"}}>106 </Typography>
</div>
<br/>
<br/>
<Typography variant='h6' style={{ fontFamily:"Raleway",transform:"translateY(50%)", color:"#000000",fontSize:"14px"}}>Untouched Leads</Typography>
<Typography variant='h6' style={{ fontFamily:"Raleway",transform:"translateY(50%)", color:"#545454",fontSize:"12px"}}>Last Month (120)</Typography>

</Grid>
<Grid item xs={4} sx={{p:1}}>
<div style={{color:"#A92BE2",background:"none",width:"100px",height:"100px",borderRadius:"50%",border:"15px solid"}}>
   
    <Typography variant="h1" style={{textAlign:"center", transform:"translateY(100%)",fontSize:"100",color:"#000000"}}>55 </Typography>
</div>
<br/>
<br/>
<Typography variant='h6' style={{ fontFamily:"Raleway",transform:"translateY(50%)", color:"#000000",fontSize:"14px",whiteSpace:"nowrap"}}>Average leads score</Typography>
<Typography variant='h6' style={{ fontFamily:"Raleway",transform:"translateY(50%)", color:"#545454",fontSize:"12px"}}>Last Month (60)</Typography>
</Grid>
</Grid>
</>

  )
}

export default LeadStageMovement;