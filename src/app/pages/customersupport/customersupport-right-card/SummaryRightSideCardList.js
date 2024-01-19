import React from 'react';
import { Avatar, Card, Grid, Typography, Button,} from "@mui/material";
import Div from "@jumbo/shared/Div";
import { Autocomplete, FormControl, Dialog, DialogContent, DialogTitle,IconButton } from "@mui/material";
import Paper from '@mui/material/Paper';
import SettingsIcon from '@mui/icons-material/Settings';
import MoreVertIcon from '@mui/icons-material/MoreVert';
import ArrowUpwardIcon from '@mui/icons-material/ArrowUpward';
import AddIcon from '@mui/icons-material/Add';
import SearchIcon from '@mui/icons-material/Search';
import EmailIcon from '@mui/icons-material/Email';
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import { InputAdornment} from '@mui/material';
import { HiOutlineSearch } from 'react-icons/hi';
import TextField from '@mui/material/TextField';
import AddIcCallIcon from '@mui/icons-material/AddIcCall';
import EditIcon from '@mui/icons-material/Edit';
import DeleteIcon from '@mui/icons-material/Delete';
import { useState } from "react";
import {CancelOutlined} from "@mui/icons-material";
import SupportAgentIcon from '@mui/icons-material/SupportAgent';
import MailOutlineIcon from '@mui/icons-material/MailOutline';
import LanguageIcon from '@mui/icons-material/Language';
import WaterfallChartIcon from '@mui/icons-material/WaterfallChart';
import CalendarMonthIcon from '@mui/icons-material/CalendarMonth';
import BorderColorIcon from '@mui/icons-material/BorderColor';
import CheckBoxOutlineBlankIcon from '@mui/icons-material/CheckBoxOutlineBlank';


const dropDownLists = [
    {
      type:'1',
      con_pers:'ravi',
      filter:'Category',
    },
    {
      type:'2',
      con_pers:'ani',
      filter:'Size',
    },
    {
      type:'3',
      con_pers:'kevin',
      filter:'Recent',
    },
  ];

const SummaryRightSideCardList = () => {
    const [openAddContact, setOpenCreateAccount] = useState(false);

    const handleCreateAccount = () => {
    setOpenCreateAccount(true);
  };
  return (
    <>
    <Grid Container className="border-card" sx={{background:"white"}}>
        <Dialog
            open={openAddContact}
            onClose={() => setOpenCreateAccount(false)}
            aria-labelledby="alert-dialog-title"
            aria-describedby="alert-dialog-description"
          >
        {/* <DialogTitle
        align='center'
          id="alert-dialog-title"
          sx={{ fontSize: "18px" }}
        >
          ADD TO DO
          <IconButton
                sx={{ float: "right" }}
                onClick={() => setOpenCreateAccount(false)}
              ><CancelOutlined />
              </IconButton>
        </DialogTitle> */}
        <DialogContent>
        <Typography align='center'
          id="alert-dialog-title"
          sx={{ fontSize: "18px", color:"black", fontWeight:500,ml:6 }}>
        Add To Do
          <IconButton
                sx={{ float: "right" }}
                onClick={() => setOpenCreateAccount(false)}
              ><CancelOutlined />
              </IconButton>
        </Typography>
          <Card sx={{width: "452px",height: "190px"}}>
            <Grid container spacing={2} >
            <Grid item xs={6}>
                <TextField
                  className="col-sm-12 input-box"
                  id="outlined-basic"
                  placeholder="Date"
                  InputProps={{
                  endAdornment: (
                    <InputAdornment position="end">
                      <CalendarMonthIcon sx={{color:"red"}}/>
                    </InputAdornment>
                    ),
                    }}
                  variant="outlined"
                  sx={{mr:1}}
                />
            </Grid>
            <Grid item xs={6}>
                <TextField
                  className="col-sm-12 input-box"
                  id="outlined-basic"
                  placeholder="From Time"
                  InputProps={{
                    }}
                  variant="outlined"
                  sx={{mr:1}}
                />
            </Grid>
          </Grid>
          <Grid container spacing={2} sx={{pt:1 }}>
            <Grid item xs={12}>
            <TextField 
                  id="outlined-basic"
                  placeholder="Enter Add To Do"
                  multiline
                  rows={6}
                  sx={{width:450}}
                  InputProps={{
                    sx: {borderRadius:8 },
                  startAdornment: (
                    <InputAdornment position="start">
                      <BorderColorIcon sx={{color:"#6C63FF",position:"relative",bottom:30}}/>
                    </InputAdornment>
                    ),
                    }}
                  variant="outlined"
                />
            </Grid>
          </Grid>
          <br/><br/><br/>
          </Card>
          <Grid container align="center" spacing={2}>
            <Grid item align="center" xs={12}>
              <Button size='small' variant="contained"  sx={{
              bgcolor: "#1E90FF",paddingRight: "9px",borderRadius:"8px",
              "&:hover":{color:"#FFFFFF",bgcolor: "#008000" }
              }}
              >Save</Button>
            </Grid>
          </Grid>
        </DialogContent>
      </Dialog>



        <Grid Container>
        <Grid item xs={6} onClick={handleCreateAccount}>
        <Typography variant="contained"  sx={{
            bgcolor: "#1E90FF",paddingRight: "10px",borderRadius:"16px",px:1,py:1,cursor:"pointer"
          }}><AddIcon/>Add Deals</Typography>
          <br/>
          <br/>
          <Typography sx={{ fontWeight:500, paddingLeft: "8px", fontSize:"18px",m: 0 }}>Ticket Summary</Typography>
          <br/>
        </Grid>
        </Grid>

      <Grid container>
      <Grid item xs={12} align="center" sx={{width: "722px",height: "120px",background: "#FEFEFE"}}>
      <br/>
        <Grid container >
          <Grid item xs={2} spacing={2} className="border-card" sx={{mx:'8px',borderRadius:"100% 10% 10% 10% / 100% 10% 10% 10%",width:"126px",height:"90px",bgcolor:"#EFF6FD" }}  >
            
            
            <br/>
              <Typography  align="center" sx={{ fontWeight:400, fontSize:"13px",color: "#746C70",mb:"15px"}}>To Do</Typography>
                
              <Typography  variant="h5" align="center" sx={{fontWeight:600, fontSize:"14px",color: "#746C70"}}>20</Typography>
                
           
          </Grid>
          <Grid item xs={2} spacing={2} className="border-card" sx={{mx:'8px',borderRadius:"100% 10% 10% 10% / 100% 10% 10% 10%",width:"126px",height:"90px",bgcolor:"#FDF2CD"}}  >
          
            <br/>
              <Typography  align="center" sx={{ fontWeight:400, fontSize:"13px",color: "#746C70",mb:"15px"}}>In Progress</Typography>
                
              <Typography  variant="h5" align="center" sx={{fontWeight:600, fontSize:"14px",color: "#746C70"}}>12</Typography>
                
            
          </Grid>
          <Grid item xs={2} spacing={2} className="border-card" sx={{mx:'8px',borderRadius:"100% 10% 10% 10% / 100% 10% 10% 10%",width:"126px",height:"90px",bgcolor:"#FFDFDF"}}  >
            
            <br/>
              <Typography  variant="h5" align="center" sx={{ fontWeight:400, fontSize:"13px",color: "#746C70",mb:"15px"}}>On Hold</Typography>
                
              <Typography  variant="h5" align="center" sx={{fontWeight:600, fontSize:"14px",color: "#746C70"}}>23</Typography>
                
         
          </Grid>
          <Grid item xs={2} spacing={2} className="border-card" sx={{mx:'8px',borderRadius:"100% 10% 10% 10% / 100% 10% 10% 10%",width:"126px",height:"90px",bgcolor:"#D4FFD4"}}  >
           
            <br/>
              <Typography  variant="h5" align="center" sx={{ fontWeight:400, fontSize:"13px",color: "#746C70",mb:"15px"}}>Closed</Typography>
                
              <Typography  variant="h5" align="center" sx={{fontWeight:600, fontSize:"14px",color: "#746C70"}}>5</Typography>
                
           
          </Grid>
          <Grid item xs={2} spacing={2} className="border-card" sx={{mx:'8px',borderRadius:"100% 10% 10% 10% / 100% 10% 10% 10%",width:"126px",height:"90px",bgcolor:"#E4D7FF"}} >
         
            <br/>
              <Typography  variant="h5" align="center" sx={{ fontWeight:400, fontSize:"13px",color: "#746C70",mb:"15px"}}>Done</Typography>
                
              <Typography  variant="h5" align="center" sx={{fontWeight:600, fontSize:"14px",color: "#746C70"}}>8</Typography>
                
          </Grid>
        </Grid>
      </Grid>
    
          
      <Grid container spacing={2}>
            <Grid item xs={6}>
              <Typography
               
                sx={{fontWeight:600,pt:3, pl:2, color: "#746C70", fontSize:"18px"}}
              >
                Recent Activity
              </Typography>
            </Grid>
            <Grid item xs={6}>
              <Typography
                variant="h3"
                sx={{fontWeight:600,pt:3, pl:3, color: "#746C70" ,fontSize:"18px" }}
              >
               To-Dos
              </Typography>
            </Grid>
        </Grid>
        <br/>
        <br/>
        <br/>
        <br/>


        <Grid container spacing={3}>
            <Grid item xs={0.4}>

            </Grid>
            <Grid item xs={6.5} spacing={2} className="border-card" sx={{width:"492px",height:"430px",borderRadius:8,boxShadow: "0px 4px 4px rgba(0, 0, 0, 0.25)"}} >
                <Grid container>
                 <Grid item xs={12}>
                 <Div
                  sx={{
                    display: "flex",
                    justifyContent: "flex-start",
                    alignItems: "center",
                  }}
                >
                  <Avatar
                    sx={{
                      bgcolor: "#050A30",
                      width: "30px",
                      height: "30px",
                      fontSize: "14px",
                    }}
                  >
                    GS
                  </Avatar>
                  <Typography  sx={{ paddingLeft: "8px", m: 0,color:"#304995",fontSize: "12px"}}>
                  Gokulraj Sugumar <span style={{color:"black"}}>submitted a new ticket</span> “Proin a iaculis tortor, in pretium justo. Sed quam eros, lobortis eget sagittis eu, vel pharetra. “
                  </Typography>
                </Div>  
                 </Grid>
                </Grid>
                <br/>
                <Grid container>
                 <Grid item xs={12}>
                 <Div
                  sx={{
                    display: "flex",
                    justifyContent: "flex-start",
                    alignItems: "center",
                  }}
                >
                  <Avatar
                    sx={{
                      bgcolor: "#FF3939",
                      width: "30px",
                      height: "30px",
                      fontSize: "14px",
                    }}
                  >
                    RK
                  </Avatar>
                  <Typography variant="h5" sx={{ paddingLeft: "8px", m: 0,color:"#304995",fontSize: "12px" }}>
                  Roshan Khan <span style={{color:"black"}}>submitted a new ticket</span> “Phasellus a elit imperdiet, euismod dui ac, placerat ante. Cras at enim et ipsum rhoncus. “
                  </Typography>
                </Div>  
                 </Grid>
                </Grid>
                <br/>
                <Grid container>
                 <Grid item xs={12}>
                 <Div
                  sx={{
                    display: "flex",
                    justifyContent: "flex-start",
                    alignItems: "center",
                  }}
                >
                  <Avatar
                    sx={{
                      bgcolor: "#424651",
                      width: "30px",
                      height: "30px",
                      fontSize: "14px",
                    }}
                  >
                    YS
                  </Avatar>
                  <Typography variant="h5" sx={{ paddingLeft: "8px", m: 0,color:"#304995",fontSize: "12px" }}>
                  Yuvaraj Singh <span style={{color:"black"}}>submitted a new ticket</span> “Fusce elementum efficitur cursus. Ut lacinia, ipsum vitae hendrerit ullamcorper, ligula amet nec felis. “
                  </Typography>
                </Div>  
                 </Grid>
                </Grid>
                <br/>
                <Grid container>
                 <Grid item xs={12}>
                 <Div
                  sx={{
                    display: "flex",
                    justifyContent: "flex-start",
                    alignItems: "center",
                  }}
                >
                  <Avatar
                    sx={{
                      bgcolor: "#750075",
                      width: "30px",
                      height: "30px",
                      fontSize: "14px",
                    }}
                  >
                    KK
                  </Avatar>
                  <Typography variant="h5" sx={{ paddingLeft: "8px", m: 0,color:"#304995",fontSize: "12px" }}>
                  Kavin Kumar <span style={{color:"black"}}>submitted a new ticket</span> “Phasellus arcu lectus, aliquet vel tristique in, hendrerit id dui. Sed a viverra quam. vestibulum laoreet vel in velit. “
                  </Typography>
                </Div>  
                 </Grid>
                </Grid>
                <br/>
                <Grid container>
                 <Grid item xs={12}>
                 <Div
                  sx={{
                    display: "flex",
                    justifyContent: "flex-start",
                    alignItems: "center",
                  }}
                >
                  <Avatar
                    sx={{
                      bgcolor: "#FFA500",
                      width: "30px",
                      height: "30px",
                      fontSize: "14px",
                    }}
                  >
                    AJ
                  </Avatar>
                  <Typography variant="h5" sx={{ paddingLeft: "8px", m: 0,color:"#304995",fontSize: "12px" }}>
                  Amy Janette <span style={{color:"black"}}>submitted a new ticket</span> “Duis interdum odio odio, eget rutrum sapien tempus eu. Curabitur lectus orci “
                  </Typography>
                </Div>  
                 </Grid>
                </Grid>
                <br/>
                <Grid container>
                 <Grid item xs={12}>
                 <Div
                  sx={{
                    display: "flex",
                    justifyContent: "flex-start",
                    alignItems: "center",
                  }}
                >
                  <Avatar
                    sx={{
                      bgcolor: "#104210",
                      width: "30px",
                      height: "30px",
                      fontSize: "14px",
                    }}
                  >
                    GH
                  </Avatar>
                  <Typography variant="h5" sx={{ paddingLeft: "8px", m: 0,color:"#304995",fontSize: "12px" }}>
                  Gill Hamper <span style={{color:"black"}}>submitted a new ticket</span> “Duis imperdiet feugiat risus, at congue turpis varius et. Aliquam malesuada, ipsum “
                  </Typography>
                </Div>  
                 </Grid>
                </Grid>
                <br/>
                <Grid container>
                 <Grid item xs={12}>
                 <Div
                  sx={{
                    display: "flex",
                    justifyContent: "flex-start",
                    alignItems: "center",
                  }}
                >
                  <Avatar
                    sx={{
                      bgcolor: "#FD7F20",
                      width: "30px",
                      height: "30px",
                      fontSize: "14px",
                    }}
                  >
                    PR
                  </Avatar>
                  <Typography variant="h5" sx={{ paddingLeft: "8px", m: 0,color:"#304995",fontSize: "12px" }}>
                  Prakash Raj <span style={{color:"black"}}>submitted a new ticket</span> “Sed ultricies, nulla quis rutrum consequat, metus mauris viverra augue, sit amet“
                  </Typography>
                </Div>  
                 </Grid>
                </Grid>
                <br/>
                <Grid container>
                 <Grid item xs={12}>
                 <Div
                  sx={{
                    display: "flex",
                    justifyContent: "flex-start",
                    alignItems: "center",
                  }}
                >
                  <Avatar
                    sx={{
                      bgcolor: "#2B96D2",
                      width: "30px",
                      height: "30px",
                      fontSize: "14px",
                    }}
                  >
                    PR
                  </Avatar>
                  <Typography variant="h5" sx={{ paddingLeft: "8px", m: 0,color:"#304995",fontSize: "12px" }}>
                  Praveen Raj <span style={{color:"black"}}>submitted a new ticket</span> “Aenean arcu sem, ultrices id condimentum et, fermentum at mi. Nulla varius volutpat”
                  </Typography>
                </Div>  
                 </Grid>
                </Grid>
            </Grid>

            <Grid item xs={0.5} >

            </Grid>

            <Grid item xs={4.5} spacing={2} className="border-card" sx={{width:"300px",height:"430",borderRadius:8,boxShadow: "0px 4px 4px rgba(0, 0, 0, 0.25)"}}>
            
            <Grid container >
              <Grid item xs={1} >
              <Typography variant="h5" sx={{ paddingLeft:"15px",m: 0,color:"black" }}>
              <CheckBoxOutlineBlankIcon sx={{width:"11px"}}/>
              </Typography>
              </Grid>
              <Grid item xs={0.5} >
              <Typography variant="h5" sx={{ m: 0,color:"#304995" }}>
              </Typography>
              </Grid>
              <Grid item xs={10.5} >
              <Typography variant="h5" sx={{ m: 0,color:"black",fontSize: "12px"}}>
              Cras condimentum nisl  purus imperdiet, in elementum arcu sagittis. Quisque iaculis sem.
              </Typography>
              </Grid>
            </Grid>
            <br/>
            <Grid container >
              <Grid item xs={1} >
              <Typography variant="h5" sx={{ paddingLeft:"15px",m: 0,color:"black" }}>
              <CheckBoxOutlineBlankIcon sx={{width:"11px"}}/>
              </Typography>
              </Grid>
              <Grid item xs={0.5} >
              <Typography variant="h5" sx={{ m: 0,color:"#304995" }}>
              </Typography>
              </Grid>
              <Grid item xs={10.5} >
              <Typography  sx={{ m: 0,color:"black",fontSize: "12px"}}>
              Cras condimentum nisl  purus imperdiet, in elementum arcu sagittis. Quisque iaculis sem.
              </Typography>
              </Grid>
            </Grid>
            <br/>
            <Grid container >
              <Grid item xs={1} >
              <Typography variant="h5" sx={{ paddingLeft:"15px",m: 0,color:"black" }}>
              <CheckBoxOutlineBlankIcon sx={{width:"11px"}}/>
              </Typography>
              </Grid>
              <Grid item xs={0.5} >
              <Typography variant="h5" sx={{ m: 0,color:"#304995" }}>
              </Typography>
              </Grid>
              <Grid item xs={10.5} >
              <Typography sx={{ m: 0,color:"black",fontSize: "12px"}}>
              Cras condimentum nisl  purus imperdiet, in elementum arcu sagittis. Quisque iaculis sem.
              </Typography>
              </Grid>
            </Grid>
            <br/>
            <Grid container >
              <Grid item xs={1} >
              <Typography variant="h5" sx={{ paddingLeft:"15px",m: 0,color:"black" }}>
              <CheckBoxOutlineBlankIcon sx={{width:"11px"}}/>
              </Typography>
              </Grid>
              <Grid item xs={0.5} >
              <Typography variant="h5" sx={{ m: 0,color:"#304995" }}>
              </Typography>
              </Grid>
              <Grid item xs={10.5} >
              <Typography sx={{ m: 0,color:"black",fontSize: "12px"}}>
              Cras condimentum nisl purus imperdiet, in elementum arcu sagittis. Quisque iaculis sem.
              </Typography>
              </Grid>
            </Grid>
            <br/>
            <Grid container >
              <Grid item xs={1} >
              <Typography variant="h5" sx={{ paddingLeft:"15px",m: 0,color:"black" }}>
              <CheckBoxOutlineBlankIcon sx={{width:"11px"}}/>
              </Typography>
              </Grid>
              <Grid item xs={0.5} >
              <Typography variant="h5" sx={{ m: 0,color:"#304995" }}>
              </Typography>
              </Grid>
              <Grid item xs={10.5} >
              <Typography variant="h5" sx={{ m: 0,color:"black",fontSize: "12px"}}>
              Cras condimentum nisl purus imperdiet, in elementum arcu sagittis. Quisque iaculis sem.
              </Typography>
              </Grid>
            </Grid>
            <br/>
            <Grid container >
              <Grid item xs={1} >
              <Typography variant="h5" sx={{ paddingLeft:"15px",m: 0,color:"black" }}>
              <CheckBoxOutlineBlankIcon sx={{width:"11px"}}/>
              </Typography>
              </Grid>
              <Grid item xs={0.5} >
              <Typography variant="h5" sx={{ m: 0,color:"#304995" }}>
              </Typography>
              </Grid>
              <Grid item xs={10.5} >
              <Typography variant="h5" sx={{ m: 0,color:"black",fontSize: "12px"}}>
              Cras condimentum nisl purus imperdiet, in elementum arcu sagittis. Quisque iaculis sem.
              </Typography>
              </Grid>
            </Grid>
            <br/>
            <Grid container >
              <Grid item xs={1} >
              <Typography variant="h5" sx={{ paddingLeft:"15px",m: 0,color:"black" }}>
              <CheckBoxOutlineBlankIcon sx={{width:"11px"}}/>
              </Typography>
              </Grid>
              <Grid item xs={0.5} >
              <Typography variant="h5" sx={{ m: 0,color:"#304995" }}>
              </Typography>
              </Grid>
              <Grid item xs={10.5} >
              <Typography variant="h5" sx={{ m: 0,color:"black",fontSize: "12px"}}>
              Cras condimentum nisl purus imperdiet, in elementum arcu sagittis. Quisque iaculis sem.
              </Typography>
              </Grid>
            </Grid>
            <br/>
            <Grid container >
              <Grid item xs={1} >
              <Typography variant="h5" sx={{ paddingLeft:"15px",m: 0,color:"black" }}>
              <CheckBoxOutlineBlankIcon sx={{width:"11px"}}/>
              </Typography>
              </Grid>
              <Grid item xs={0.5} >
              <Typography variant="h5" sx={{ m: 0,color:"#304995" }}>
              </Typography>
              </Grid>
              <Grid item xs={10.5} >
              <Typography  sx={{ m: 0,color:"black",fontSize: "12px"}}>
              Cras condimentum nisl purus imperdiet, in elementum arcu sagittis. Quisque iaculis sem.
              </Typography>
              </Grid>
            </Grid>

            </Grid>
        </Grid>
        </Grid>
          </Grid></>
  )
}

export default SummaryRightSideCardList