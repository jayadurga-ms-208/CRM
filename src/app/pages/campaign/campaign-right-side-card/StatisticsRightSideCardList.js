import React from "react";
import Div from "@jumbo/shared/Div";
import { Card, Grid, Typography, Button } from "@mui/material";
import CalendarMonthIcon from "@mui/icons-material/CalendarMonth";
import TextField from "@mui/material/TextField";
import { InputAdornment } from "@mui/material";
import StackedLineChartIcon from '@mui/icons-material/StackedLineChart';
import VisibilityIcon from '@mui/icons-material/Visibility';
import PanToolAltOutlinedIcon from '@mui/icons-material/PanToolAltOutlined';
import DraftsIcon from '@mui/icons-material/Drafts';

const StatisticsRightSideCardList = () => {
  return (
    <>
    <Grid container>
    <Typography sx={{fontWeight: 600,fontSize: "16px",pt:3,pl:4}}>Statistics</Typography>
    <br/>
    <Grid container sx={{}}>
      <Grid item xs={0.5}>

      </Grid>
    
      <Grid item xs={3}>
                <TextField
                  className="col-sm-12 input-box mt-1"
                  id="outlined-basic"
                  placeholder="Saturday.14-01-2023"
                  InputProps={{
                  endAdornment: (
                    <InputAdornment position="end">
                      <CalendarMonthIcon sx={{color:"#727D70"}}/>
                    </InputAdornment>
                    ),
                    }}
                  variant="outlined"
                  sx={{mr:1}}
                />
        </Grid>
      <Grid item xs={0.5}>

      </Grid>
      
      <Grid item xs={3}>
      <TextField
                  className="col-sm-12 input-box mt-1"
                  id="outlined-basic"
                  placeholder="Tuesday.28-02-2023"
                  InputProps={{
                  endAdornment: (
                    <InputAdornment position="end">
                      <CalendarMonthIcon sx={{color:"#727D70"}}/>
                    </InputAdornment>
                    ),
                    }}
                  variant="outlined"
                  sx={{mr:1}}
                />
      </Grid>
      <Grid item xs={2.5}sx={{pt:1,pl:2}}>
      <Typography sx={{
              bgcolor: "#1B830B",borderRadius: "5px",width: "140px",height: "32px",pt:0.5,pl:1,color:"white"
              }}
              ><StackedLineChartIcon sx={{color:"white"}}/> Show Statistics</Typography>
      </Grid>
      <Grid item xs={3}>

      </Grid>
    </Grid>
    <br/>
    <br/>
  

    <Grid container sx={{pt:2}}>
      <Grid item xs={0.5}>

      </Grid>
      <Grid item xs={4} className="border-card" sx={{width: "310px",height: "57px",boxSizing: "border-box",border: "1px solid #000000",borderRadius: "10px",background:"#FFFFFF"}}>
       <Typography align="center" sx={{fontWeight: 600,fontSize: "16px",color: "#000000",pt:1}}>Total sent - 1</Typography>
      </Grid>
      <Grid item xs={1.5}>

      </Grid>
      <Grid item xs={4} className="border-card" sx={{width: "310px",height: "57px",boxSizing: "border-box",border: "1px solid #000000",borderRadius: "10px",background:"#FFFFFF"}}>
      <Typography  align="center" sx={{fontWeight: 600,fontSize: "16px",color: "#000000",pt:1}}>Total Recipients - 5</Typography>
      </Grid>
    </Grid>

    <Grid container sx={{pt:2}}>
      <Grid item xs={0.5}>

      </Grid>
      <Grid item xs={4} className="border-card" sx={{width: "310px",height: "57px",boxSizing: "border-box",border: "1px solid #000000",borderRadius: "10px",background:"#FFFFFF"}}>
      <Typography align="center" sx={{fontWeight: 600,fontSize: "16px",color: "#4F9E43",pt:1}}>Total Opened - 0</Typography>
      </Grid>
      <Grid item xs={1.5}>

      </Grid>
      <Grid item xs={4} className="border-card" sx={{width: "310px",height: "57px",boxSizing: "border-box",border: "1px solid #000000",borderRadius: "10px",background:"#FFFFFF"}}>
      <Typography align="center" sx={{fontWeight: 600,fontSize: "16px",color: "#6C63FF",pt:1}}>Total Clicked - 0</Typography>
      </Grid>
    </Grid>

    <Grid container sx={{pt:2}}>
      <Grid item xs={0.5}>

      </Grid>
      <Grid item xs={3} className="border-card" sx={{width: "176px",height: "62px",boxSizing: "border-box",border: "1px solid #000000",borderRadius: "5px",background:"#FFFFFF"}}>
      <Typography  sx={{fontWeight: 600,fontSize: "16px",color: " #47B036",pl:1}}><VisibilityIcon xs="small" sx={{color: " #47B036"}}/> Opened Rate</Typography>
      <Typography align="center" sx={{fontWeight: 600,fontSize: "16px",color: " #47B036"}}>0</Typography>
      </Grid>
      <Grid item xs={1}>

      </Grid>
      <Grid item xs={3} className="border-card" sx={{width: "176px",height: "62px",boxSizing: "border-box",border: "1px solid #000000",borderRadius: "5px",background:"#FFFFFF"}}>
      <Typography sx={{fontWeight: 600,fontSize: "16px",color: "#241FFA",pl:1}}><PanToolAltOutlinedIcon xs="small" sx={{color: "#241FFA"}}/> Clicked Rate</Typography>
      <Typography align="center" sx={{fontWeight: 600,fontSize: "16px",color: "#241FFA"}}>0</Typography>
      </Grid>
      <Grid item xs={1}>

      </Grid>
      <Grid item xs={3} className="border-card" sx={{width: "176px",height: "62px",boxSizing: "border-box",border: "1px solid #000000",borderRadius: "5px",background:"#FFFFFF"}}>
      <Typography sx={{fontWeight: 600,fontSize: "16px",color: "#F23C30"}}><DraftsIcon xs="small" sx={{color: "#F23C30"}}/>  Not Opened Rate</Typography>
      <Typography align="center" sx={{fontWeight: 600,fontSize: "16px",color: "#F23C30"}}>0</Typography>
      </Grid>
    </Grid>

    <Typography sx={{fontWeight: 600,fontSize: "16px",pt:3,pl:4}}>Email Campaign</Typography>
    



    </Grid>
    </>
  );
};

export default StatisticsRightSideCardList;
