import JumboContentLayoutMain from "@jumbo/components/JumboContentLayout/JumboContentLayoutMain";
import Div from "@jumbo/shared/Div";
import { Avatar, Card, Grid, Typography } from "@mui/material";
import { deepPurple, green } from "@mui/material/colors";
import React from "react";
import { HiOutlineSearch } from "react-icons/hi";
import { useState } from "react";
import CallCenterRightCardLists from "../call-center-right-side-card/CallCenterRightCardLists";
import CallCenterCalendarList from "../call-center-right-side-card/CallCenterCalendarList";


const data = [
  { name: 'jan', uv: 4000, attence: 2400, amt: 2400 },
  { name: 'Page B', uv: 3000, pv: 1398, amt: 2210 },
  { name: 'Page C', uv: 2000, pv: 9800, amt: 2290 },
  { name: 'Page D', uv: 2780, pv: 3908, amt: 2000 },
  { name: 'Page E', uv: 1890, pv: 4800, amt: 2181 },
  { name: 'Page F', uv: 2390, pv: 3800, amt: 2500 },
  { name: 'Page G', uv: 3490, pv: 4300, amt: 2100 },
];


const CallCenterLeftCardLists = () => {
  const [showAllContacts, setShowAllContacts] = useState(true);

  const handleClickTodayTarget = () => {
    setShowAllContacts(true);
  };

  return (
    <>
      <JumboContentLayoutMain>
        <Grid container spacing={1}>
          <Grid item xs={2.5}>
            <Card sx={{ boxShadow: "none" }}>
              <Card className="border-card">
                <Div
                  sx={{
                    display: "flex",
                    justifyContent: "flex-start",
                    alignItems: "center",
                  }}
                >
                  <Avatar
                    sx={{
                      bgcolor: deepPurple[500],
                      width: "34px",
                      height: "34px",
                      // fontSize: "14px",
                    }}
                  >
                    R
                  </Avatar>
                  <Typography variant="h3" sx={{ paddingLeft: "8px", m: 0 }}>
                    Ravi Kumar
                  </Typography>
                </Div>
              </Card>

              <Card className="border-card" sx={{ mt: 1, p: 0 }}>
                <Div
                  onClick={handleClickTodayTarget}
                  sx={{
                    p: 1,
                    pb: 0.2,
                    cursor: "pointer",
                    // backgroundColor:
                    //   showAllContacts === true ? "#EEEEEE" : "transparent",
                  }}
                >
                  <Typography variant="h5" sx={{ fontWeight: 600 }}>
                    Today's Target
                    <br />
                    <span style={{ fontWeight: 500, fontSize: "12px" }}>22 Dec 2022</span>
                  </Typography>
                </Div>
                <Div
                  sx={{
                    marginTop: "1px",
                    marginBottom: "-10px",
                    marginRight: "5px",
                  }}
                >
                  <Typography
                    variant="h5"
                    fontWeight={600}
                    sx={{ display: "flex", justifyContent: "flex-end" }}
                  >
                    Pending
                  </Typography>
                </Div>
                <Div
                  sx={{
                    p: 1,
                    pb: 0,
                    cursor: "pointer",
                    // backgroundColor:
                    //   notGeneratedContacts === true
                    //     ? "#EEEEEE"
                    //     : "transparent",
                  }}
                >
                  <Div
                    sx={{ display: "flex", justifyContent: "space-between" }}
                  >
                    <Typography variant="h5" sx={{ fontWeight: 600 }}>
                      Total Calls to be made
                    </Typography>
                    <Div
                      sx={{ display: "flex", justifyContent: "space-between" }}
                    >
                      <Typography variant="h5" marginRight="10px">
                        100
                      </Typography>
                      <Typography variant="h5">90</Typography>
                    </Div>
                  </Div>
                </Div>
                <Div
                  sx={{
                    p: 1,
                    pb: 0,
                    cursor: "pointer",
                    // backgroundColor:
                    //   generatedContacts === true
                    //     ? "#EEEEEE"
                    //     : "transparent",
                  }}
                >
                  <Div
                    sx={{ display: "flex", justifyContent: "space-between" }}
                  >
                    <Typography variant="h5" sx={{ fontWeight: 600 }}>
                      Total appointments to be fixed
                    </Typography>
                    <Div
                      sx={{ display: "flex", justifyContent: "space-between" }}
                    >
                      <Typography variant="h5" marginRight="10px">
                        100
                      </Typography>
                      <Typography variant="h5">90</Typography>
                    </Div>
                  </Div>
                </Div>
              </Card>

              <Card className="border-card" sx={{ mt: 1, p: 0 }}>
                <Div sx={{ p: 1 }}>
                  <Typography variant="h5" sx={{ fontWeight: 600 }}>
                    All Countries <br />
                    <span style={{ fontWeight: 500, fontSize: "12px" }}>10,000 contacts</span>
                  </Typography>
                </Div>
                <Div
                  className="row"
                  sx={{
                    pl: 1,
                    pr: 1,
                    cursor: "pointer",
                    // backgroundColor: "rgba(212, 241, 244, 0.7)",
                  }}
                >
                  <Div className="col-2">
                    <img alt="flag" src="../images/flag/icons8-india.png" />
                  </Div>
                  <Div className="col">
                    <Typography variant="h5" sx={{ fontWeight: 600 }}>
                      India <br />
                      <span style={{ fontWeight: 500, fontSize: "12px" }}>5,000 contacts</span>
                    </Typography>
                  </Div>
                </Div>
                <Div
                  className="row"
                  sx={{
                    pl: 1,
                    pr: 1,
                    cursor: "pointer",
                    // backgroundColor: "rgba(212, 241, 244, 0.7)",
                  }}
                >
                  <Div className="col-2">
                    <img alt="flag" src="../images/flag/icons8-america.png" />
                  </Div>
                  <Div className="col">
                    <Typography variant="h5" sx={{ fontWeight: 600 }}>
                      America <br />
                      <span style={{ fontWeight: 500, fontSize: "12px" }}>5,000 contacts</span>
                    </Typography>
                  </Div>
                </Div>
                <Div
                  className="row"
                  sx={{
                    pl: 1,
                    pr: 1,
                    cursor: "pointer",
                    // backgroundColor: "rgba(212, 241, 244, 0.7)",
                  }}
                >
                  <Div className="col-2">
                    <img alt="flag" src="../images/flag/icons8-china.png" />
                  </Div>
                  <Div className="col">
                    <Typography variant="h5" sx={{ fontWeight: 600 }}>
                      China <br />
                      <span style={{ fontWeight: 500, fontSize: "12px" }}>5,000 contacts</span>
                    </Typography>
                  </Div>
                </Div>
              </Card>
            </Card>
          </Grid>
          <Grid item xs={9.5}>
            <Grid container columnSpacing={1}>
              <Grid item xs={6}>
                <Card
                  className="border-card"
                  sx={{
                    minHeight: "370px",
                  }}
                >
                  <CallCenterRightCardLists />
                </Card>
              </Grid>
              <Grid item xs={6}>
                <Card
                  className="border-card"
                  sx={{
                    minHeight: "370px",
                  }}
                >
                  <CallCenterCalendarList />
                </Card>
              </Grid>
            </Grid>
          </Grid>
        </Grid>
      </JumboContentLayoutMain>
    </>
  );
};

export default CallCenterLeftCardLists;
