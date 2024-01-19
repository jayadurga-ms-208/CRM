import JumboContentLayoutMain from "@jumbo/components/JumboContentLayout/JumboContentLayoutMain";
import Div from "@jumbo/shared/Div";
import { Avatar, Card, Grid, Typography, Button, borderRadius } from "@mui/material";
import ScheduleRightCard from "./Schedule/ScheduleRightCard";
import MyShipmentRight from "./shipment/MyShipmentRight";
import { useState } from "react";
import Product from "./product/Product";
import MyOffer from "./Offer/MyOffer"
import SalesDashboardRightCard from "./Dashboard/SalesDashboardRightCard";
import SalesOrderRightCard from "./Order/SalesOrderRightCard";
import EnquirydRightCard from "./Enquiry/EnquiryRightCard";
import SalesInvoiceRightCard from "./Invoice/SalesInvoiceRightCard";
import SalesMyPaymentRightCard from "./Payment/SalesMyPaymentRightCard";


const SalesLeftCard = () => {
  const [showSalesDashboardRightCard, setShowSalesDashboardRightCard] = useState(true);
  const [showSalesOrderRightCard, setShowSalesOrderRightCard] = useState(false);
  const [showSalesInvoiceRightCard, setShowSalesInvoiceRightCard] = useState(false);
  const [showSalesMyPaymentRightCard, setShowSalesMyPaymentRightCard] = useState(false);
  const [showOfferRightCard, setShowOfferRightCard] = useState(false);
  const [showProductsRight, setShowProductsRight] = useState(false);
  const [showMyShipmentRight, setShowMyShipmentRight] = useState(false);
  const [showEnquiryRightCard, setShowEnquiryRightCard] = useState(false);
  const [showScheduledRightCard, setShowScheduledRightCard] = useState(false);


  const handleClickOfferRightCard = () => {
    setShowScheduledRightCard(false);
    setShowEnquiryRightCard(false);
    setShowMyShipmentRight(false);
    setShowProductsRight(false);
    setShowOfferRightCard(true);
    setShowSalesMyPaymentRightCard(false);
    setShowSalesInvoiceRightCard(false);
    setShowSalesOrderRightCard(false);
    setShowSalesDashboardRightCard(false);
  };

  const handleClickScheduleRightCard = () => {
    setShowScheduledRightCard(true);
    setShowEnquiryRightCard(false);
    setShowMyShipmentRight(false);
    setShowProductsRight(false);
    setShowOfferRightCard(false);
    setShowSalesMyPaymentRightCard(false);
    setShowSalesInvoiceRightCard(false);
    setShowSalesOrderRightCard(false);
    setShowSalesDashboardRightCard(false);
  };
  const handleClickMyShipmentRight = () => {
    setShowScheduledRightCard(false);
    setShowEnquiryRightCard(false);
    setShowMyShipmentRight(true);
    setShowProductsRight(false);
    setShowOfferRightCard(false);
    setShowSalesMyPaymentRightCard(false);
    setShowSalesInvoiceRightCard(false);
    setShowSalesOrderRightCard(false);
    setShowSalesDashboardRightCard(false);
  };

  const handleClickSalesOrderRightCard = () => {
    setShowScheduledRightCard(false);
    setShowEnquiryRightCard(false);
    setShowMyShipmentRight(false);
    setShowProductsRight(false);
    setShowOfferRightCard(false);
    setShowSalesMyPaymentRightCard(false);
    setShowSalesInvoiceRightCard(false);
    setShowSalesOrderRightCard(true);
    setShowSalesDashboardRightCard(false);
  };

  const handleClickSalesDashboardRightCard = () => {
    setShowScheduledRightCard(false);
    setShowEnquiryRightCard(false);
    setShowMyShipmentRight(false);
    setShowProductsRight(false);
    setShowOfferRightCard(false);
    setShowSalesMyPaymentRightCard(false);
    setShowSalesInvoiceRightCard(false);
    setShowSalesOrderRightCard(false);
    setShowSalesDashboardRightCard(true);
  };

  const handleClickEnquiryRightCard = () => {
    setShowScheduledRightCard(false);
    setShowEnquiryRightCard(true);
    setShowMyShipmentRight(false);
    setShowProductsRight(false);
    setShowOfferRightCard(false);
    setShowSalesMyPaymentRightCard(false);
    setShowSalesInvoiceRightCard(false);
    setShowSalesOrderRightCard(false);
    setShowSalesDashboardRightCard(false);
  };

  const handleClickSalesInvoiceRightCard = () => {
    setShowScheduledRightCard(false);
    setShowEnquiryRightCard(false);
    setShowMyShipmentRight(false);
    setShowProductsRight(false);
    setShowOfferRightCard(false);
    setShowSalesMyPaymentRightCard(false);
    setShowSalesInvoiceRightCard(true);
    setShowSalesOrderRightCard(false);
    setShowSalesDashboardRightCard(false);
  };

  const handleClickMyPaymentRightCard = () => {
    setShowScheduledRightCard(false);
    setShowEnquiryRightCard(false);
    setShowMyShipmentRight(false);
    setShowProductsRight(false);
    setShowOfferRightCard(false);
    setShowSalesMyPaymentRightCard(true);
    setShowSalesInvoiceRightCard(false);
    setShowSalesOrderRightCard(false);
    setShowSalesDashboardRightCard(false);
  };

  const handleClickProductsRightCard = () => {
    setShowScheduledRightCard(false);
    setShowEnquiryRightCard(false);
    setShowMyShipmentRight(false);
    setShowProductsRight(true);
    setShowOfferRightCard(false);
    setShowSalesMyPaymentRightCard(false);
    setShowSalesInvoiceRightCard(false);
    setShowSalesOrderRightCard(false);
    setShowSalesDashboardRightCard(false);
  };



  return (
    <>
      <Card sx={{bgcolor:"#AB99D1", p:1, borderRadius:"5px"}}>

        <Grid container spacing={0.5}>
          <Grid item xs={3} sx={{p:1}}>
            <Card sx={{ boxShadow: "none", paddingBottom: 1 }}>
              <Card className="border-card" sx={{ p: 3, borderRadius: "20px", boxShadow: " 0px 4px 4px rgba(0, 0, 0, 0.25)",m:1 }}>
                <Div
                  sx={{
                    display: "flex",
                    justifyContent: "flex-start",
                    alignItems: "center",
                  }}
                >
                  <Avatar
                    sx={{
                      bgcolor: "#FB7575",
                      width: "45px",
                      height: "45px",
                      fontSize: "14px",
                    }}
                  >
                    ST
                  </Avatar>
                  <Typography variant="h3" sx={{ paddingLeft: "8px", m: 0 }}>
                    Subramanian
                  </Typography>
                </Div>
              </Card>
              <Card className="border-card" sx={{ mt: 1, p: 0, borderRadius: "20px", boxShadow: " 0px 4px 4px rgba(0, 0, 0, 0.25)",m:1 }}>
                <Div
                  onClick={handleClickSalesDashboardRightCard}
                  sx={{
                    p: 1,
                    pb: 0.5,
                    height: "45px",
                    cursor: "pointer",
                    "&:hover": { bgcolor: "#AB99D1", borderRadius: "10px" },
                    backgroundColor: showSalesDashboardRightCard? "#AB99D1" : "#fff", 
                    // borderRadius: '5%',
                  }}
                >
                  <Typography variant="h3" sx={{ paddingLeft: "8px", m: 0 }}>
                    Sales Dashboard
                  </Typography>
                </Div>
                <Div
                  onClick={handleClickSalesOrderRightCard}
                  sx={{
                    p: 1,
                    pb: 0.5,
                    height: "45px",
                    cursor: "pointer",
                    "&:hover": { bgcolor: "#AB99D1", borderRadius: "10px" },
                    // borderRadius: '5%',
                    backgroundColor: showSalesOrderRightCard? "#AB99D1" : "#fff", 

                  }}
                >
                  <Typography variant="h3" sx={{ paddingLeft: "8px", m: 0 }}>
                    Sales Order
                  </Typography>
                </Div>
                <Div
                  onClick={handleClickEnquiryRightCard}
                  sx={{
                    p: 1,
                    pb: 0.5,
                    height: "45px",
                    cursor: "pointer",
                    "&:hover": { bgcolor: "#AB99D1", borderRadius: "10px" },
                    backgroundColor: showEnquiryRightCard? "#AB99D1" : "#fff", 
                    // borderRadius: '5%',
                  }}
                >
                  <Typography variant="h3" sx={{ paddingLeft: "8px", m: 0 }}>
                    Enquiries
                  </Typography>
                </Div>
                <Div
                onClick={handleClickSalesInvoiceRightCard}
                  sx={{
                    p: 1,
                    pb: 0.5,
                    height: "45px",
                    cursor: "pointer",
                    "&:hover": { bgcolor: "#AB99D1", borderRadius: "10px" },
                    backgroundColor: showSalesInvoiceRightCard? "#AB99D1" : "#fff", 
                    // borderRadius: '5%',
                  }}
                >
                  <Typography variant="h3" sx={{ paddingLeft: "8px", m: 0 }}>
                    Invoice
                  </Typography>
                </Div>
                
                <Div
                onClick={handleClickOfferRightCard}
                  sx={{
                    p: 1,
                    pb: 0.5,
                    height: "45px",
                    cursor: "pointer",
                    backgroundColor: showOfferRightCard ? "#AB99D1" : "#fff",
                    "&:hover": { bgcolor: "#AB99D1", borderRadius: "10px" },
                    // borderRadius: '5%',
                  }}
                >
                  <Typography variant="h3" sx={{ paddingLeft: "8px", m: 0 }}>
                    Offer
                  </Typography>
                </Div>
                <Div
                  onClick={handleClickScheduleRightCard}
                  sx={{
                    p: 1,
                    pb: 0.5,
                    height: "45px",
                    backgroundColor: showScheduledRightCard ? "#AB99D1" : "#fff",
                    cursor: "pointer",
                    "&:hover": { bgcolor: "#AB99D1", borderRadius: "10px" },
                    // borderRadius: '5%',
                  }}
                >
                  <Typography variant="h3" sx={{ paddingLeft: "8px", m: 0 }}>
                    Schedule
                  </Typography>
                </Div>
                <Div
                  onClick={handleClickMyShipmentRight}
                  sx={{
                    p: 1,
                    pb: 0.5,
                    height: "45px",
                    backgroundColor: showMyShipmentRight ? "#AB99D1" : "#fff",
                    cursor: "pointer",
                    "&:hover": { bgcolor: "#AB99D1", borderRadius: "10px" },
                    // borderRadius: '5%',
                  }}
                >
                  <Typography variant="h3" sx={{ paddingLeft: "8px", m: 0 }}>
                    Shipment
                  </Typography>
                </Div>
                <Div
                  onClick={handleClickProductsRightCard}
                  sx={{
                    p: 1,
                    pb: 0.5,
                    height: "45px",
                    backgroundColor: showProductsRight  ? "#AB99D1" : "#fff",
                    cursor: "pointer",
                    "&:hover": { bgcolor: "#AB99D1", borderRadius: "10px" },
                    // borderRadius: '5%',
                  }}
                >
                  <Typography variant="h3" sx={{ paddingLeft: "8px", m: 0 }}>
                    Product
                  </Typography>
                </Div>
              </Card>
              <Card className="border-card" sx={{ mt: 1, p: 0, borderRadius: "20px", boxShadow: " 0px 4px 4px rgba(0, 0, 0, 0.25)",m:1 }}>
                <Div
                  sx={{
                    p: 1, pb: 0.5,
                    cursor: "pointer",
                  }}
                >
                  <Typography variant="h5" sx={{ fontWeight: 600 }}>
                    All Account<br /><br />All States<br /><span style={{ fontWeight: 500 }}>500000 contacts</span>
                  </Typography>
                </Div>
                <Div
                  sx={{
                    display: "flex",
                    justifyContent: "flex-start",
                    alignItems: "center",
                    p: 1, pb: 0.5,
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
                    Maharastra<br /><span style={{ fontWeight: 500 }}>25000 contacts</span>
                  </Typography>
                </Div>
                <Div
                  sx={{
                    display: "flex",
                    justifyContent: "flex-start",
                    alignItems: "center",
                    p: 1, pb: 0.5,
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
                    MU
                  </Avatar>
                  <Typography variant="h5" sx={{ fontWeight: 600, pl: 2 }}>
                    Tamilnadu<br /><span style={{ fontWeight: 500 }}>25000 contacts</span>
                  </Typography>
                </Div>
                <Div
                  sx={{
                    display: "flex",
                    justifyContent: "flex-start",
                    alignItems: "center",
                    p: 1, pb: 0.5,
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
                    KL
                  </Avatar>
                  <Typography variant="h5" sx={{ fontWeight: 600, pl: 2 }}>
                    Andhra Pradesh<br /><span style={{ fontWeight: 500 }}>25000 contacts</span>
                  </Typography>
                </Div>
              </Card>
              <Card className="border-card" sx={{ mt: 1, p: 0, borderRadius: "20px", boxShadow: " 0px 4px 4px rgba(0, 0, 0, 0.25)",m:1 }}>
                <Div
                  sx={{
                    p: 1,
                    pb: 0.5,
                    cursor: "pointer",
                  }}
                >
                  <Typography variant="h5" sx={{ fontWeight: 600 }}>
                    Industry
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
                  <Typography variant="h5" sx={{ fontWeight: 600, pl: 2 }}>
                    Finance
                    <br />
                    <span style={{ fontWeight: 500 }}>2500 account</span>
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
                  <Typography variant="h5" sx={{ fontWeight: 600, pl: 2 }}>
                    Travel Tourism
                    <br />
                    <span style={{ fontWeight: 500 }}>2500 account</span>
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
                  <Typography variant="h5" sx={{ fontWeight: 600, pl: 2 }}>
                    Construction
                    <br />
                    <span style={{ fontWeight: 500 }}>2500 account</span>
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
                  <Typography variant="h5" sx={{ fontWeight: 600, pl: 2 }}>
                    Production
                    <br />
                    <span style={{ fontWeight: 500 }}>2500 account</span>
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
                  <Typography variant="h5" sx={{ fontWeight: 600, pl: 2 }}>
                    Marketing
                    <br />
                    <span style={{ fontWeight: 500 }}>2500 account</span>
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
                  <Typography variant="h5" sx={{ fontWeight: 600, pl: 2 }}>
                    Sales
                    <br />
                    <span style={{ fontWeight: 500 }}>2500 account</span>
                  </Typography>
                </Div>
              </Card>
            </Card>
          </Grid>
          <Grid item xs={9} sx={{ display: showScheduledRightCard === true ? "block" : "none" }}>
            <ScheduleRightCard />
          </Grid>
            {/* <Grid item xs={9} sx={{ display: showSalesOrderRightCard === true ? "block" : "none" }}>
              <SalesOrderRightCard />
            </Grid> */}
          <Grid item xs={9} sx={{ display: showMyShipmentRight === true ? "block" : "none" }}>
            <MyShipmentRight />
          </Grid>
          <Grid item xs={9} sx={{ display: showProductsRight === true ? "block" : "none" }}>
            <Product />
          </Grid>
          <Grid item xs={9} sx={{ display: showOfferRightCard === true ? "block" : "none" }}>
            <MyOffer />
          </Grid>
          <Grid item xs={9}  sx={{display: showSalesDashboardRightCard === true ? "block" : "none"}}>
            <SalesDashboardRightCard/>
          </Grid>
          <Grid item xs={9}  sx={{display: showSalesOrderRightCard === true ? "block" : "none"}}>
            <SalesOrderRightCard/>
          </Grid>
          <Grid item xs={9}  sx={{display: showEnquiryRightCard === true ? "block" : "none"}}>
            <EnquirydRightCard/>
          </Grid>
          <Grid item xs={9}  sx={{display: showSalesInvoiceRightCard === true ? "block" : "none"}}>
            <SalesInvoiceRightCard/>
          </Grid>
          <Grid item xs={9}  sx={{display: showSalesMyPaymentRightCard === true ? "block" : "none"}}>
            <SalesMyPaymentRightCard/>
          </Grid>
        </Grid>
      </Card>
    </>
  );
};

export default SalesLeftCard;
