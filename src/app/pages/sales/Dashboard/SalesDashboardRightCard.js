import React from "react";
import Div from "@jumbo/shared/Div";
import { Avatar, Card, Grid, Typography } from "@mui/material";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import LoyaltyIcon from "@mui/icons-material/Loyalty";
import ShowChartIcon from "@mui/icons-material/ShowChart";
import TollIcon from "@mui/icons-material/Toll";
import PeopleIcon from "@mui/icons-material/People";
import BarCharts from "./BarCharts";

function createData(name, sales, point, stock, amount, status) {
  return { name, sales, point, stock, amount, status };
}

const rows = [
  createData(
    "21 Dec 2021",
    "Lorem",
    10000,
    10000,
    10000,
    "Proposal Price Quote"
  ),
  createData(
    "21 Dec 2021",
    "consectetur",
    20000,
    20000,
    20000,
    "Negotiation review"
  ),
  createData(
    "21 Dec 2021",
    "ipsum",
    30000,
    30000,
    30000,
    "Proposal Price Quote"
  ),
  createData("21 Dec 2021", "ullamcorper", 40000, 40000, 40000, "Contract Won"),
  createData(
    "21 Dec 2021",
    "Aliquam",
    50000,
    50000,
    50000,
    "Value Proposition"
  ),
  createData(
    "21 Dec 2021",
    "Lorem",
    60000,
    60000,
    60000,
    "Proposal Price Quote"
  ),
];

const SalesDashboardRightCard = () => {
  return (
    <>
      <Card sx={{ boxShadow: "none", p:1 }}>
        <Typography variant="h3" sx={{ paddingLeft: "8px", m: 0 }}>
          Sales
        </Typography>
        <Typography
          variant="h3"
          align="right"
          sx={{ paddingLeft: "8px", m: 0 }}
        >
          Sales Month Wise
        </Typography>
        {/* Level 1 */}
        <Grid container>
          <Grid item xs={5}>
            <Grid container>
              <Grid item xs={5}>
                <Card
                  className="border-card"
                  sx={{ p: 2, width: "155px", m: "5px", borderRadius: "10px", "&:hover": { bgcolor: "#AB99D1", color:"white" }  }}
                >
                  <Grid container spacing={0.5}>
                    <Grid item sx={4}>
                    <svg width="40" height="40" viewBox="0 0 69 69" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M24.696 29.324H18.504V27.506H27.828L21.438 40.286H19.188L24.696 29.324ZM32.3312 40.682C31.4072 40.682 30.5792 40.472 29.8472 40.052C29.1152 39.644 28.5572 39.086 28.1732 38.378L29.3612 37.244C29.6972 37.76 30.1292 38.168 30.6572 38.468C31.1852 38.78 31.7492 38.936 32.3492 38.936C32.8412 38.936 33.2792 38.828 33.6632 38.612C34.0472 38.408 34.3472 38.12 34.5632 37.748C34.7912 37.364 34.9052 36.926 34.9052 36.434C34.9052 35.954 34.7972 35.534 34.5812 35.174C34.3652 34.802 34.0772 34.52 33.7172 34.328C33.3572 34.124 32.9432 34.022 32.4752 34.022C32.0192 34.022 31.5932 34.124 31.1972 34.328C30.8012 34.532 30.4772 34.82 30.2252 35.192H28.4792L29.9372 27.722H36.1832V29.54H31.3772L30.7292 33.032C30.9332 32.816 31.2092 32.642 31.5572 32.51C31.9052 32.366 32.3012 32.294 32.7452 32.294C33.5492 32.294 34.2632 32.474 34.8872 32.834C35.5232 33.182 36.0212 33.662 36.3812 34.274C36.7532 34.886 36.9392 35.594 36.9392 36.398C36.9392 37.25 36.7352 37.994 36.3272 38.63C35.9192 39.278 35.3672 39.782 34.6712 40.142C33.9752 40.502 33.1952 40.682 32.3312 40.682ZM41.0573 30.386C40.5293 30.386 40.0433 30.266 39.5993 30.026C39.1673 29.786 38.8193 29.468 38.5553 29.072C38.3033 28.664 38.1773 28.214 38.1773 27.722C38.1773 27.218 38.3033 26.768 38.5553 26.372C38.8193 25.964 39.1673 25.64 39.5993 25.4C40.0433 25.16 40.5293 25.04 41.0573 25.04C41.5853 25.04 42.0653 25.16 42.4973 25.4C42.9293 25.64 43.2713 25.964 43.5233 26.372C43.7753 26.768 43.9013 27.212 43.9013 27.704C43.9013 28.196 43.7753 28.646 43.5233 29.054C43.2713 29.462 42.9293 29.786 42.4973 30.026C42.0653 30.266 41.5853 30.386 41.0573 30.386ZM41.0393 29.36C41.3153 29.36 41.5613 29.288 41.7773 29.144C42.0053 28.988 42.1793 28.784 42.2993 28.532C42.4313 28.28 42.4973 28.01 42.4973 27.722C42.4973 27.41 42.4313 27.128 42.2993 26.876C42.1673 26.624 41.9873 26.426 41.7593 26.282C41.5433 26.138 41.3093 26.066 41.0573 26.066C40.7813 26.066 40.5293 26.144 40.3013 26.3C40.0853 26.444 39.9113 26.642 39.7793 26.894C39.6473 27.146 39.5813 27.416 39.5813 27.704C39.5813 28.016 39.6473 28.298 39.7793 28.55C39.9233 28.79 40.1033 28.988 40.3193 29.144C40.5473 29.288 40.7873 29.36 41.0393 29.36ZM47.6633 38.18C47.1353 38.18 46.6553 38.06 46.2233 37.82C45.7913 37.58 45.4433 37.256 45.1793 36.848C44.9273 36.44 44.8013 35.99 44.8013 35.498C44.8013 35.006 44.9273 34.562 45.1793 34.166C45.4433 33.758 45.7913 33.434 46.2233 33.194C46.6553 32.954 47.1353 32.834 47.6633 32.834C48.2033 32.834 48.6893 32.954 49.1213 33.194C49.5533 33.422 49.8953 33.74 50.1473 34.148C50.3993 34.556 50.5253 35.006 50.5253 35.498C50.5253 35.99 50.3993 36.44 50.1473 36.848C49.8953 37.256 49.5533 37.58 49.1213 37.82C48.6893 38.06 48.2033 38.18 47.6633 38.18ZM47.6633 37.154C47.9393 37.154 48.1853 37.076 48.4013 36.92C48.6293 36.764 48.8033 36.566 48.9233 36.326C49.0553 36.074 49.1213 35.804 49.1213 35.516C49.1213 35.204 49.0553 34.922 48.9233 34.67C48.7913 34.418 48.6113 34.22 48.3833 34.076C48.1673 33.932 47.9273 33.86 47.6633 33.86C47.3993 33.86 47.1533 33.938 46.9253 34.094C46.7093 34.238 46.5353 34.436 46.4033 34.688C46.2713 34.94 46.2053 35.21 46.2053 35.498C46.2053 35.798 46.2713 36.074 46.4033 36.326C46.5473 36.578 46.7273 36.782 46.9433 36.938C47.1593 37.082 47.3993 37.154 47.6633 37.154ZM38.9873 37.28L44.0453 31.286L48.7973 25.112L49.7333 25.922L44.7653 31.844L39.9053 38.108L38.9873 37.28Z" fill="#746C70"/>
<path fill-rule="evenodd" clip-rule="evenodd" d="M34.5 69C53.5538 69 69 53.5538 69 34.5C69 15.4462 53.5538 0 34.5 0C15.4462 0 0 15.4462 0 34.5C0 53.5538 15.4462 69 34.5 69ZM34.5 62C49.6878 62 62 49.6878 62 34.5C62 19.3122 49.6878 7 34.5 7C19.3122 7 7 19.3122 7 34.5C7 49.6878 19.3122 62 34.5 62Z" fill="#7D7D7D"/>
<path fill-rule="evenodd" clip-rule="evenodd" d="M48 64.0878C48 65.4042 47.2184 66.6072 45.977 67.045C42.3865 68.3112 38.5237 69 34.5 69C15.4462 69 0 53.5538 0 34.5C0 15.4462 15.4462 0 34.5 0C38.5237 0 42.3865 0.688825 45.977 1.95499C47.2184 2.39278 48 3.5958 48 4.91218C48 7.42558 45.2489 9.05457 42.854 8.29185C40.2195 7.4528 37.4126 7 34.5 7C19.3122 7 7 19.3122 7 34.5C7 49.6878 19.3122 62 34.5 62C37.4126 62 40.2195 61.5472 42.854 60.7082C45.2489 59.9454 48 61.5744 48 64.0878Z" fill="#75DA72"/>
</svg>

                    </Grid>
                    <Grid item sx={8}>
                      <Typography>Sales</Typography>

                      <Typography>Achievements</Typography>
                    </Grid>
                  </Grid>
                </Card>
              </Grid>
              <Grid item xs={5}>
                <Card
                  className="border-card"
                  sx={{ p: 2, width: "155px", m: "5px", ml:3, borderRadius: "10px", "&:hover": { bgcolor: "#AB99D1", color:"white" }  }}
                >
                  <Grid container spacing={2}>
                    <Grid item sx={4}>
                      <Avatar
                        sx={{
                          bgcolor: "#AE9BDA",
                          width: "30px",
                          height: "30px",
                          fontSize: "14px",
                        }}
                      >
                        <LoyaltyIcon />
                      </Avatar>
                    </Grid>
                    <Grid item sx={8}>
                      <Typography>Total Sales</Typography>

                      <Typography>₹44,50,900</Typography>
                    </Grid>
                  </Grid>
                </Card>
              </Grid>
            </Grid>
            <Grid container sx={{mt:2}}>
            <Grid item xs={5}>
              <Card
                className="border-card"
                sx={{ p: 2, width: "155px", m: "5px" , borderRadius: "10px", "&:hover": { bgcolor: "#AB99D1", color:"white" } }}
              >
                <Grid container spacing={2}>
                  <Grid item sx={4}>
                    <Avatar
                      sx={{
                        bgcolor: "#AE9BDA",
                        width: "30px",
                        height: "30px",
                        fontSize: "14px",
                      }}
                    >
                      <ShowChartIcon />
                    </Avatar>
                  </Grid>
                  <Grid item sx={8}>
                    <Typography>Total Profit</Typography>

                    <Typography>₹40,00,000</Typography>
                  </Grid>
                </Grid>
              </Card>
            </Grid>
            <Grid item xs={6}>
              <Card className="border-card" sx={{ p: 2, width: "155px", ml:3 ,mt:0.5, borderRadius: "10px", "&:hover": { bgcolor: "#AB99D1", color:"white" } }}>
                <Grid container spacing={2}>
                  <Grid item sx={4}>
                    <Avatar
                      sx={{
                        bgcolor: "#AE9BDA",
                        width: "30px",
                        height: "30px",
                        fontSize: "14px",
                      }}
                    >
                      <TollIcon />
                    </Avatar>
                  </Grid>
                  <Grid item sx={8}>
                    <Typography>Total Cost</Typography>
                    <Typography>₹40,50,900</Typography>
                  </Grid>
                </Grid>
              </Card>
            </Grid>
            </Grid>
          </Grid>
          <Grid item xs={7}>
            <Card className="border-card" sx={{ p: 1 }}>
              <BarCharts />
            </Card>
          </Grid>
        </Grid>
        {/* Level 2 */}
        <br />
        <Grid container>
          <Grid item xs={7}>
            <Grid container>
              <Grid item xs={4}>
                <Card className="border-card" sx={{ p: 1, width: "155px", borderRadius: "10px", "&:hover": { bgcolor: "#AB99D1", color:"white" } }}>
                    <Grid sx={{pb:1}}>
                      <Avatar
                        sx={{
                          bgcolor: "#AE9BDA",
                          width: "30px",
                          height: "30px",
                          fontSize: "14px",
                        }}
                      >
                        <PeopleIcon />
                      </Avatar>
                    </Grid>
                    <Grid>
                      <Typography>Active Members</Typography>
                      <Typography>455</Typography>
                    </Grid>
                </Card>
              </Grid>
              <Grid item xs={4}>
                <Card className="border-card" sx={{ p: 1, width: "155px", borderRadius: "10px", "&:hover": { bgcolor: "#AB99D1", color:"white" }  }}>
                    <Grid sx={{pb:1}}>
                      <Avatar
                        sx={{
                          bgcolor: "#AE9BDA",
                          width: "30px",
                          height: "30px",
                          fontSize: "14px",
                        }}
                      >
                        <PeopleIcon />
                      </Avatar>
                    </Grid>
                    <Grid>
                      <Typography>Todays Revenue</Typography>
                      <Typography>455</Typography>
                    </Grid>
                </Card>
              </Grid>
              <Grid item xs={4}>
                <Card className="border-card" sx={{ p: 1, width: "155px", borderRadius: "10px", "&:hover": { bgcolor: "#AB99D1", color:"white" }  }}>
                    <Grid sx={{pb:1}}>
                      <Avatar
                        sx={{
                          bgcolor: "#AE9BDA",
                          width: "30px",
                          height: "30px",
                          fontSize: "14px",
                        }}
                      >
                        <PeopleIcon />
                      </Avatar>
                    </Grid>
                    <Grid>
                      <Typography>Active Members</Typography>
                      <Typography>455</Typography>
                    </Grid>
                </Card>
              </Grid>
            </Grid>
          </Grid>
          <Grid item xs={5}>
            <Card className="border-card" sx={{ p: 1, borderRadius: "10px", "&:hover": { bgcolor: "#AB99D1", color:"white" }  }}>
              <Typography>Total Sales by Unit</Typography>
              <Typography sx={{ p: 1 }}>₹44,50,900</Typography>
              <Card
                className="border-card"
                sx={{
                  borderRadius: 5,
                  bgcolor: "#C4C4C4",
                  display: "flex",
                  p: 0,
                  m: 0,
                }}
              >
                <Div sx={{ bgcolor: "#7359AE", width: "130px", p: 0, m: 0 }}>
                  Sales
                </Div>
                <Div sx={{ bgcolor: "#51E23A", width: "50px", p: 0, m: 0 }}>
                  Marketing
                </Div>
                <Div sx={{ bgcolor: "#F49011", width: "30px", p: 0, m: 0 }}>
                  Marketing
                </Div>
              </Card>
            </Card>
          </Grid>
        </Grid>
        {/* Level 3 */}
        <br />
        <Grid container spacing={2}>
          <Grid item xs={3}>
            <Card className="border-card" sx={{ mt: 1, p: 0 }}>
              <Div
                sx={{
                  p: 1,
                  pb: 0.5,
                  cursor: "pointer",
                }}
              >
                <Typography variant="h5" sx={{ fontWeight: 600 }}>
                  All Account
                  <br />
                </Typography>
              </Div>
              <Div
                sx={{
                  display: "flex",
                  justifyContent: "flex-start",
                  alignItems: "center",
                  p: 1,
                  pb: 0.5,
                  cursor: "pointer",
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
                <Typography variant="h5" sx={{ fontWeight: 600, pl: 2 }}>
                  Gokulraj Sugumar
                  <br />
                </Typography>
              </Div>
              <Div
                sx={{
                  display: "flex",
                  justifyContent: "flex-start",
                  alignItems: "center",
                  p: 1,
                  pb: 0.5,
                  cursor: "pointer",
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
                <Typography variant="h5" sx={{ fontWeight: 600, pl: 2 }}>
                  Roshan Khan
                  <br />
                </Typography>
              </Div>
              <Div
                sx={{
                  display: "flex",
                  justifyContent: "flex-start",
                  alignItems: "center",
                  p: 1,
                  pb: 0.5,
                  cursor: "pointer",
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
                <Typography variant="h5" sx={{ fontWeight: 600, pl: 2 }}>
                  Yuvaraj Singh
                  <br />
                </Typography>
              </Div>
              <Div
                sx={{
                  display: "flex",
                  justifyContent: "flex-start",
                  alignItems: "center",
                  p: 1,
                  pb: 0.5,
                  cursor: "pointer",
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
                <Typography variant="h5" sx={{ fontWeight: 600, pl: 2 }}>
                  Kavin Kumar
                  <br />
                </Typography>
              </Div>
              <Div
                sx={{
                  display: "flex",
                  justifyContent: "flex-start",
                  alignItems: "center",
                  p: 1,
                  pb: 0.5,
                  cursor: "pointer",
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
                <Typography variant="h5" sx={{ fontWeight: 600, pl: 2 }}>
                  Amy Janette
                  <br />
                </Typography>
              </Div>
              <Div
                sx={{
                  display: "flex",
                  justifyContent: "flex-start",
                  alignItems: "center",
                  p: 1,
                  pb: 0.5,
                  cursor: "pointer",
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
                  GD
                </Avatar>
                <Typography variant="h5" sx={{ fontWeight: 600, pl: 2 }}>
                  Gill Hamper
                  <br />
                </Typography>
              </Div>
              <Div
                sx={{
                  display: "flex",
                  justifyContent: "flex-start",
                  alignItems: "center",
                  p: 1,
                  pb: 0.5,
                  cursor: "pointer",
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
                  ND
                </Avatar>
                <Typography variant="h5" sx={{ fontWeight: 600, pl: 2 }}>
                  Maharastra
                  <br />
                </Typography>
              </Div>
            </Card>
          </Grid>
          <Grid item xs={9}>
            <TableContainer style={{ overflow: "hidden" }} component={Paper}>
              <Table aria-label="simple table">
                <TableHead>
                  <TableRow sx={{ bgcolor: "#1B416B" }}>
                    <TableCell sx={{ color: "#FEFEFE" }} align="center">
                      Product Name
                    </TableCell>
                    <TableCell sx={{ color: "#FEFEFE" }} align="center">
                      Sales
                    </TableCell>
                    <TableCell sx={{ color: "#FEFEFE" }} align="center">
                      Record Point
                    </TableCell>
                    <TableCell sx={{ color: "#FEFEFE" }} align="center">
                      Stock
                    </TableCell>
                    <TableCell sx={{ color: "#FEFEFE" }} align="center">
                      Amount
                    </TableCell>
                    <TableCell sx={{ color: "#FEFEFE" }} align="center">
                      Stock Status
                    </TableCell>
                  </TableRow>
                </TableHead>
                <TableBody>
                  {rows.map((row) => (
                    <TableRow
                      key={row.name}
                      sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
                    >
                      <TableCell component="th" scope="row">
                        {row.name}
                      </TableCell>
                      <TableCell align="center">{row.sales}</TableCell>
                      <TableCell align="center">{row.point}</TableCell>
                      <TableCell align="center">{row.stock}</TableCell>
                      <TableCell align="center">{row.amount}</TableCell>
                      <TableCell align="center">{row.status}</TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
            </TableContainer>
          </Grid>
        </Grid>
      </Card>
    </>
  );
};

export default SalesDashboardRightCard;
