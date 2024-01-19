import React, { useState } from "react";

import {
  Button,
  Card,
  CardMedia,
  Checkbox,
  Dialog,
  DialogContent,
  DialogTitle,
  FormControlLabel,
  FormGroup,
  Grid,
  IconButton,
  Menu,
  MenuItem,
  TextField,
  Typography,
} from "@mui/material";
import { BackupOutlined, CancelOutlined, ModeEdit } from "@mui/icons-material";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import SettingsIcon from "@mui/icons-material/Settings";
import MoreVertIcon from "@mui/icons-material/MoreVert";
import ArrowUpwardIcon from "@mui/icons-material/ArrowUpward";
import AddIcon from "@mui/icons-material/Add";
import { InputAdornment } from "@mui/material";
import { HiOutlineSearch } from "react-icons/hi";
import Div from "@jumbo/shared/Div";
import DeleteIcon from "@mui/icons-material/Delete";
import ArchiveIcon from "@mui/icons-material/Archive";
import ChatIcon from "@mui/icons-material/Chat";

function createData(pId, pName, pCat, subCat, uom, stdPrice, tax) {
  return {
    pId,
    pName,
    pCat,
    subCat,
    uom,
    stdPrice,
    tax,
  };
}

const rows = [
  createData(
    "01 Jan 2022",
    "SCH0001",
    "SCH0001",
    "Ásdís",
    "Irfan",
    "ORD0001",
    "PO001"
  ),
  createData(
    "01 Jan 2022",
    "SCH0002",
    "SCH0001",
    "Gunnvor",
    "Antonia",
    "ORD0001",
    "PO001"
  ),
  createData(
    "01 Jan 2022",
    "SCH0003",
    "SCH0001",
    "Ida",
    "Hacer",
    "ORD0001",
    "PO001"
  ),
  createData(
    "01 Jan 2022",
    "SCH0004",
    "SCH0001",
    "Tamrat",
    "Ugène",
    "ORD0001",
    "PO001"
  ),
  createData(
    "01 Jan 2022",
    "SCH0005",
    "SCH0001",
    "Arthur",
    "Lilibeth",
    "ORD0001",
    "PO001"
  ),
  createData(
    "01 Jan 2022",
    "SCH0006",
    "SCH0001",
    "Katlyn",
    "Gwilherm",
    "ORD0001",
    "PO001"
  ),
  createData(
    "01 Jan 2022",
    "SCH0007",
    "SCH0001",
    "Fanny",
    "Evelina",
    "ORD0001",
    "PO001"
  ),
  createData(
    "01 Jan 2022",
    "SCH0008",
    "SCH0001",
    "Anabelle",
    "Beavis",
    "ORD0001",
    "PO001"
  ),
  createData(
    "01 Jan 2022",
    "SCH0009",
    "SCH0001",
    "Anita",
    "Tsvetanka",
    "ORD0001",
    "PO001"
  ),
  createData(
    "01 Jan 2022",
    "SCH00010",
    "SCH0001",
    "Catalina",
    "Xystos",
    "ORD0001",
    "PO001"
  ),
  createData(
    "01 Jan 2022",
    "SCH00011",
    "SCH0001",
    "Diệp",
    "Brynlee",
    "ORD0001",
    "PO001"
  ),
  createData(
    "01 Jan 2022",
    "SCH00012",
    "SCH0001",
    "Pejo",
    "Tijana",
    "ORD0001",
    "PO001"
  ),
  createData(
    "01 Jan 2022",
    "SCH00013",
    "SCH0001",
    "Eshe",
    "Miljana",
    "ORD0001",
    "PO001"
  ),
  createData(
    "01 Jan 2022",
    "SCH00014",
    "SCH0001",
    "Yanina",
    "Michelle",
    "ORD0001",
    "PO001"
  ),
  createData(
    "01 Jan 2022",
    "SCH00015",
    "SCH0001",
    "Othman",
    "Kelly",
    "ORD0001",
    "PO001"
  ),
  createData(
    "01 Jan 2022",
    "SCH00016",
    "SCH0001",
    "Ethelyn",
    "Ember",
    "ORD0001",
    "PO001"
  ),
];

const Product = () => {
  const [showCreateShippment, setShowAddProduct] = useState(false);
  const [anchorEl, setAnchorEl] = useState(null);
  const [anchorElAction, setAnchorElAction] = useState(null);
  const [openEditContact, setOpenEditContact] = useState(false);

  const handleClickAddproduct = () => {
    setShowAddProduct(true);
  };

  const handleClickAction = (event) => {
    setAnchorElAction(event.currentTarget);
  };

  const handleClickOpen = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  const handleCloseAction = () => {
    setAnchorElAction(null);
  };

  const handleClickEditContact = () => {
    setOpenEditContact(true);
  };

  return (
    <Card sx={{backgroundColor:"white",py:2,px:1}} >
      <Grid container>
        <Grid paddingLeft={1} item xs={9}>
          <Button
            onClick={handleClickAddproduct}
            size="small"
            startIcon={<AddIcon />}
            variant="contained"
            sx={{
              fontSize: "14px",
              background: "#007BFF",
              ":hover": { background: "#007BFF" },
              maxHeight: "23px",
              borderRadius: "10px",
            }}
          >
            Add Product
          </Button>

          <Dialog
            PaperProps={{
              sx: {
                minWidth: "848px",
                minHeight: "446px",
              },
            }}
            open={showCreateShippment}
            onClose={() => setShowAddProduct(false)}
            aria-labelledby="alert-dialog-title"
            aria-describedby="alert-dialog-description"
          >
            <DialogTitle
              align="center"
              id="alert-dialog-title"
              sx={{ fontSize: "18px" }}
            >
              Add Product
              <IconButton
                sx={{ float: "right" }}
                onClick={() => setShowAddProduct(false)}
              >
                <CancelOutlined />
              </IconButton>
            </DialogTitle>
            <DialogContent>
              <Card>
                <Grid container padding={2} columnSpacing={5} rowSpacing={0.5}>
                  <Grid item xs={6}>
                    <TextField
                      sx={{
                        "& fieldset": {
                          borderRadius: "30px",
                        },
                      }}
                      className="col-sm-12 input-box mt-1"
                      id="outlined-basic"
                      placeholder="Product Category"
                      variant="outlined"
                      InputProps={{
                        startAdornment: (
                          <InputAdornment position="start">
                            {/* <PermIdentityIcon sx={{ color: "#6C63FF" }} /> */}
                          </InputAdornment>
                        ),
                      }}
                    />
                  </Grid>
                  <Grid item xs={6}>
                    <TextField
                      sx={{
                        "& fieldset": {
                          borderRadius: "30px",
                        },
                      }}
                      className="col-sm-12 input-box mt-1"
                      id="outlined-basic"
                      placeholder="Sub Category"
                      variant="outlined"
                      InputProps={{
                        startAdornment: (
                          <InputAdornment position="start">
                            {/* <PermIdentityIcon sx={{ color: "#6C63FF" }} /> */}
                          </InputAdornment>
                        ),
                      }}
                    />
                  </Grid>
                  <Grid item xs={6}>
                    <TextField
                      sx={{
                        "& fieldset": {
                          borderRadius: "30px",
                        },
                      }}
                      className="col-sm-12 input-box mt-1"
                      id="outlined-basic"
                      placeholder="Product ID"
                      variant="outlined"
                      InputProps={{
                        startAdornment: (
                          <InputAdornment position="start">
                            {/* <PermIdentityIcon sx={{ color: "#6C63FF" }} /> */}
                          </InputAdornment>
                        ),
                      }}
                    />
                  </Grid>
                  <Grid item xs={6}>
                    <TextField
                      sx={{
                        "& fieldset": {
                          borderRadius: "30px",
                        },
                      }}
                      className="col-sm-12 input-box mt-1"
                      id="outlined-basic"
                      placeholder="Product Name"
                      variant="outlined"
                      InputProps={{
                        startAdornment: (
                          <InputAdornment position="start">
                            {/* <PermIdentityIcon sx={{ color: "#6C63FF" }} /> */}
                          </InputAdornment>
                        ),
                      }}
                    />
                  </Grid>
                  <Grid item xs={6}>
                    <TextField
                      sx={{
                        "& fieldset": {
                          borderRadius: "30px",
                        },
                      }}
                      className="col-sm-12 input-box mt-1"
                      id="outlined-basic"
                      placeholder="UOM"
                      variant="outlined"
                      InputProps={{
                        startAdornment: (
                          <InputAdornment position="start">
                            {/* <PermIdentityIcon sx={{ color: "#6C63FF" }} /> */}
                          </InputAdornment>
                        ),
                      }}
                    />
                  </Grid>
                  <Grid item xs={6}>
                    <TextField
                      sx={{
                        "& fieldset": {
                          borderRadius: "30px",
                        },
                      }}
                      className="col-sm-12 input-box mt-1"
                      id="outlined-basic"
                      placeholder="Standard Price"
                      variant="outlined"
                      InputProps={{
                        startAdornment: (
                          <InputAdornment position="start">
                            {/* <PermIdentityIcon sx={{ color: "#6C63FF" }} /> */}
                          </InputAdornment>
                        ),
                      }}
                    />
                  </Grid>
                  <Grid item xs={6}>
                    <TextField
                      sx={{
                        "& fieldset": {
                          borderRadius: "30px",
                        },
                      }}
                      className="col-sm-12 input-box mt-1"
                      id="outlined-basic"
                      placeholder="Tax%"
                      variant="outlined"
                      InputProps={{
                        startAdornment: (
                          <InputAdornment position="start">
                            {/* <PermIdentityIcon sx={{ color: "#6C63FF" }} /> */}
                          </InputAdornment>
                        ),
                      }}
                    />
                  </Grid>
                </Grid>
                <Grid
                  p={2}
                  container
                  direction={"row"}
                  justifyContent={"space-evenly"}
                >
                  <Grid item>
                    <Typography sx={{ fontSize: "14px" }}>
                      Product Image
                    </Typography>
                  </Grid>
                  <Grid item>
                    <Grid
                      container
                      direction={"column"}
                      justifyContent={"space-evenly"}
                      alignItems={"center"}
                      sx={{
                        background: " rgba(212, 241, 244, 0.7)",
                        borderRadius: "10px",
                        minWidth: "405px",
                        height: "114px",
                        border: "1px dashed #000000",
                      }}
                    >
                      <IconButton sx={{ p: 0 }}>
                        <BackupOutlined />
                      </IconButton>
                      <Typography sx={{ fontSize: "12px" }}>
                        Drag your .jpg,.png prodcut image to start upload
                      </Typography>
                      <Typography sx={{ fontSize: "12px" }}>(Or)</Typography>
                      <Button
                        size="small"
                        variant="contained"
                        sx={{
                          maxHeight: "23px",
                          width: "100px",
                          bgcolor: "#1E90FF",
                          paddingRight: "8px",
                          "&:hover": { bgcolor: "#007BFF" },
                        }}
                      >
                        Browse Files
                      </Button>
                    </Grid>
                  </Grid>
                  <Grid item>
                    <CardMedia
                      sx={{ borderRadius: "10px" }}
                      width={"108px"}
                      component={"img"}
                      height={"114px"}
                      image={"/images/Uploads.png"}
                      alt={"upload-img"}
                    />
                  </Grid>
                </Grid>
                <Grid container align="center" spacing={2} pb={2}>
                  <Grid item align="right" xs={6}>
                    <Button
                      size="small"
                      variant="contained"
                      sx={{
                        maxHeight: "23px",
                        width: "55px",
                        bgcolor: "#1E90FF",
                        paddingRight: "8px",
                        "&:hover": { bgcolor: "#007BFF" },
                      }}
                    >
                      Save
                    </Button>
                  </Grid>
                  <Grid item align="left" xs={6}>
                    <Button
                      size="small"
                      variant="text"
                      sx={{
                        maxHeight: "23px",
                        width: "55px",
                        paddingRight: "10px",
                        color: "#007BFF",
                        "&:hover": { bgcolor: "transparent" },
                      }}
                    >
                      Clear
                    </Button>
                  </Grid>
                </Grid>
              </Card>
            </DialogContent>
          </Dialog>
        </Grid>
        <Grid item xs={3}>
          <TextField
            className="col-12 input-box"
            id="outlined-search"
            type="search"
            variant="standard"
            placeholder="Search..."
            InputProps={{
              startAdornment: (
                <InputAdornment position="start">
                  <HiOutlineSearch size={20} />
                </InputAdornment>
              ),
            }}
            sx={{ minWidth: 130, mt: { xs: 0.5, md: 0 }, mr: 1 }}
          />
        </Grid>
      </Grid>
      <Typography p={2} sx={{ fontSize: "14px" }}>
        Product
      </Typography>

      <TableContainer component={Paper}>
        <Table sx={{ minWidth: 550 }} aria-label="simple table">
          <TableHead>
            <TableRow sx={{ bgcolor: "#1B416B" }}>
              <TableCell sx={{ color: "#FEFEFE" }} align="center">
                Product ID
                <ArrowUpwardIcon fontSize="small" />
              </TableCell>
              <TableCell sx={{ color: "#FEFEFE" }} align="center">
                Product Name
              </TableCell>
              <TableCell sx={{ color: "#FEFEFE" }} align="center">
                Product Category
              </TableCell>
              <TableCell sx={{ color: "#FEFEFE" }} align="left">
                Sub Category
              </TableCell>
              <TableCell sx={{ color: "#FEFEFE" }} align="center">
                UOM
              </TableCell>
              <TableCell sx={{ color: "#FEFEFE" }} align="center">
                Standard Price
              </TableCell>
              <TableCell sx={{ color: "#FEFEFE" }} align="right">
                Tax
              </TableCell>
              <TableCell
                sx={{ color: "#FEFEFE", cursor: "pointer" }}
                onClick={handleClickOpen}
                align="center"
              >
                <SettingsIcon size="small" color="white" />
              </TableCell>
              <Menu
                id="menu-appbar"
                anchorEl={anchorEl}
                anchorOrigin={{
                  vertical: "top",
                  horizontal: "right",
                }}
                keepMounted
                transformOrigin={{
                  vertical: "top",
                  horizontal: "right",
                }}
                open={Boolean(anchorEl)}
                onClose={handleClose}
                sx={{ mt: 7, maxHeight: "300px" }}
              >
                <Typography variant="h4" sx={{ p: 2, mb: -2 }}>
                  Choose Columns
                </Typography>
                <FormGroup sx={{ p: 2 }}>
                  <FormControlLabel
                    control={<Checkbox defaultChecked />}
                    label="Contact Name"
                  />
                  <FormControlLabel
                    control={<Checkbox defaultChecked />}
                    label="City"
                  />
                  <FormControlLabel
                    control={<Checkbox defaultChecked />}
                    label="Country"
                  />
                  <FormControlLabel
                    control={<Checkbox defaultChecked />}
                    label="Phone"
                  />
                  <FormControlLabel
                    control={<Checkbox defaultChecked />}
                    label="Email"
                  />
                  <FormControlLabel
                    control={<Checkbox defaultChecked />}
                    label="Address"
                  />
                  <FormControlLabel
                    control={<Checkbox defaultChecked />}
                    label="Label"
                  />
                  <FormControlLabel control={<Checkbox />} label="Open Deals" />
                  <FormControlLabel
                    control={<Checkbox />}
                    label="Closed Deals"
                  />
                  <FormControlLabel
                    control={<Checkbox />}
                    label="Next Activity Date"
                  />
                  <FormControlLabel control={<Checkbox />} label="Owner" />
                  <FormControlLabel
                    control={<Checkbox />}
                    label="Done Activities"
                  />
                </FormGroup>
                <Div sx={{ display: "flex", justifyContent: "center" }}>
                  <Button className="save-button" onClick={handleClose}>
                    Save
                  </Button>
                </Div>
              </Menu>
            </TableRow>
          </TableHead>
          <TableBody>
            {rows.map((row) => (
              <TableRow
                key={row.pId}
                sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
              >
                <TableCell
                  component="th"
                  scope="row"
                  align="center"
                  sx={{ bgcolor: "white" }}
                >
                  {row.pId}
                </TableCell>
                <TableCell align="center">{row.pName}</TableCell>
                <TableCell align="center">{row.pCat}</TableCell>
                <TableCell align="left" sx={{ color: "#304995" }}>
                  {row.subCat}
                </TableCell>
                <TableCell align="center">{row.uom}</TableCell>
                <TableCell align="center">{row.stdPrice}</TableCell>
                <TableCell align="right">{row.tax}</TableCell>
                <TableCell
                  align="center"
                  onClick={handleClickAction}
                  sx={{ cursor: "pointer" }}
                >
                  <MoreVertIcon />
                </TableCell>
              </TableRow>
            ))}
            <Menu
              id="menu-appbar"
              anchorEl={anchorElAction}
              anchorOrigin={{
                vertical: "top",
                horizontal: "right",
              }}
              keepMounted
              transformOrigin={{
                vertical: "top",
                horizontal: "right",
              }}
              open={Boolean(anchorElAction)}
              onClose={handleCloseAction}
              sx={{
                mt: 7,
                mr: 5,
                maxHeight: "300px",
                width: "300px",
              }}
            >
              <MenuItem onClick={handleClickEditContact}>
                <ModeEdit sx={{ fontSize: 20, mr: 2 }} />
                Edit
              </MenuItem>
              <MenuItem>
                <DeleteIcon sx={{ fontSize: 20, mr: 2 }} />
                Delete
              </MenuItem>
              <MenuItem>
                <ArchiveIcon sx={{ fontSize: 20, mr: 2 }} />
                Archieve
              </MenuItem>
              <MenuItem>
                <ChatIcon sx={{ fontSize: 20, mr: 2 }} />
                Chat
              </MenuItem>
            </Menu>
          </TableBody>
        </Table>
      </TableContainer>
    </Card>
  );
};

export default Product;