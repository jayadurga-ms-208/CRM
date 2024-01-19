import { Avatar, Badge, Button, Dialog, DialogActions, DialogContent, DialogContentText, IconButton, InputAdornment, TextField, Typography } from '@mui/material';
import React from 'react'
import { useState } from 'react';
import { HiOutlineSearch } from 'react-icons/hi';
import {
    Timeline,
    TimelineConnector,
    TimelineContent,
    TimelineItem,
    TimelineSeparator,
} from "@mui/lab";
import Div from '@jumbo/shared/Div';
import ArrowDropDownIcon from "@mui/icons-material/ArrowDropDown";
import ArrowDropUpIcon from '@mui/icons-material/ArrowDropUp';



const OpenActivity = () => {
    const [height, setHeight] = useState(true);
    const [showDialog, setShowDialog] = useState(false);

    return (
        <>
            <Div>
                <Typography variant="h3" fontWeight={600}>
                    Open Activities
                </Typography>

                <Div sx={{ display: "flex", justifyContent: "end" }}>
                    <TextField
                        className="col-5 input-box"
                        id="outlined-search"
                        type="search"
                        placeholder="Search..."
                        InputProps={{
                            startAdornment: (
                                <InputAdornment position="start">
                                    <HiOutlineSearch size={20} />
                                </InputAdornment>
                            ),
                        }}
                        sx={{ mt: { xs: 0.5, md: 0 }, mr: 1 }}
                    />
                    <Button
                        className="save-button"
                        onClick={() => setShowDialog(true)}
                    >
                        Create an Activity
                    </Button>
                    <Dialog
                        open={showDialog}
                        onClose={() => setShowDialog(false)}
                        aria-labelledby="draggable-dialog-title"
                    >

                        <DialogContent>
                            <Typography variant='h3' fontWeight={600} marginBottom="10px" sx={{ cursor: 'move' }} id="draggable-dialog-title">Activities</Typography>
                            <DialogContentText>
                                <TextField
                                    className='input-box col-12 mb-1'
                                    size={"small"}
                                    placeholder={"Enter task name"}

                                />
                                <TextField
                                    className='input-box col-6 mb-1 mr-1'
                                    type="date"
                                    placeholder={"Expected Date"}
                                />
                                <TextField
                                    className='input-box col-6 mb-1 mr-1'
                                    type="time"
                                    placeholder={"Expected Time"}
                                />
                                <TextField
                                    multiline
                                    className='multiline-box col-12 mb-1'
                                    rows={5}
                                    maxRows={10}
                                    placeholder={"Enter task description..."}

                                />

                            </DialogContentText>
                        </DialogContent>
                        <DialogActions>
                            <Div sx={{ mt: 2, display: "flex", justifyContent: "center" }}>
                                <Button className='save-button' sx={{ mr: 2 }}>Save</Button>
                                <Button className='cancel-button' onClick={() => setShowDialog(false)}>Cancel</Button>
                            </Div>
                        </DialogActions>
                    </Dialog>
                </Div>


                <Timeline sx={{ m: 0, mt: 2, p: (theme) => theme.spacing(0) }}>
                    <TimelineItem
                        sx={{
                            "&::before": {
                                display: "none",
                            },
                        }}
                    >
                        <TimelineSeparator>
                            <Badge badgeContent={4} color="primary">
                                <Avatar
                                    alt="date"
                                    sx={{
                                        width: 45,
                                        height: 45,
                                        textAlign: "center",
                                        fontSize: "14px",
                                        borderColor: "common.white",
                                        boxShadow: (theme) => theme.shadows[3],
                                    }}
                                >
                                    Dec 8
                                </Avatar>
                            </Badge>
                            <TimelineConnector />
                        </TimelineSeparator>
                        <TimelineContent
                            sx={{
                                p: (theme) => theme.spacing(0.5, 0),
                                ml: 2.5,
                            }}
                        >
                            <Div
                                className="card"
                                sx={{
                                    p: 1,
                                }}
                            >
                                <Div sx={{
                                    display: "flex",
                                    flexDirection: "row",
                                    justifyContent: "space-between",
                                    alignItems: "start", height: height === true ? "48px" : "fit-content", overflow: "hidden",
                                }}>
                                    <Typography variant="h5">
                                        Lorem ipsum dolor sit amet, consectetur adipiscing elit.Anim dolore incididunt cupidatat ea. Proident nisi elit duis duis laborum. Aute labore in enim irure irure exercitation occaecat officia aute dolor sit nulla in.Non aliquip nostrud magna aute dolore nisi minim. Cillum eu enim laboris consectetur laboris. Mollit velit incididunt nisi aliqua. Veniam eu amet consectetur enim eu ex veniam sit qui adipisicing. Culpa exercitation sunt ea dolor aliqua minim culpa in quis esse labore.
                                    </Typography>
                                    <IconButton onClick={() => setHeight(!height)} sx={{ p: 0 }}>
                                    {height ? <ArrowDropDownIcon /> : <ArrowDropUpIcon/>}
                                    </IconButton>
                                </Div>
                            </Div>
                        </TimelineContent>
                    </TimelineItem>
                </Timeline>
            </Div>
        </>
    )
}

export default OpenActivity;