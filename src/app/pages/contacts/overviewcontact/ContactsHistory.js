import React from 'react'
import { useState } from 'react';
import { HiOutlineSearch } from 'react-icons/hi';
import { Avatar, Badge, Button, Card, IconButton, InputAdornment, TextField, Typography } from '@mui/material';
import {
    Timeline,
    TimelineConnector,
    TimelineContent,
    TimelineDot,
    TimelineItem,
    TimelineSeparator,
} from "@mui/lab";
import Div from '@jumbo/shared/Div';
import ArrowDropDownIcon from "@mui/icons-material/ArrowDropDown";



const ContactsHistory = () => {
    return (
        <>
            <Div>
                <Typography variant="h3" fontWeight={600}>
                    History
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
                </Div>

                <Div sx={{ mt: 1, display: "flex", justifyContent: "center" }}>
                    <TextField type="date" className="input-box" />
                </Div>

                <Card className="card" sx={{ mt: 1, p: 1 }}>
                    <Typography variant="h3" sx={{ textAlign: "center" }}>Jan 20</Typography>
                    <Timeline
                        sx={{ m: 0, mt: 2, p: (theme) => theme.spacing(0, 3) }}
                    >
                        <TimelineItem
                            sx={{
                                "&::before": {
                                    display: "none",
                                },
                            }}
                        >
                            <TimelineSeparator>
                                <TimelineDot
                                    sx={{
                                        p: "6px",
                                        m: 0,
                                        backgroundColor: "blue",
                                        color: "white",
                                    }}
                                ></TimelineDot>
                                <TimelineConnector />
                            </TimelineSeparator>
                            <TimelineContent
                                sx={{
                                    p: (theme) => theme.spacing(0.5, 0),
                                    ml: 2.5,
                                }}
                            >
                                <Div
                                    className="col-12"
                                    sx={{
                                        display: "flex",
                                        flexDirection: "row",
                                        justifyContent: "space-between",
                                        alignItems: "start",
                                    }}
                                >
                                    <Div>
                                        <Typography variant="h5">11:30 am</Typography>
                                    </Div>
                                </Div>
                            </TimelineContent>
                        </TimelineItem>
                        <TimelineItem
                            sx={{
                                "&::before": {
                                    display: "none",
                                },
                            }}
                        >
                            <TimelineSeparator>
                                <TimelineDot
                                    sx={{
                                        p: "6px",
                                        m: 0,
                                        backgroundColor: "blue",
                                        color: "white",
                                    }}
                                ></TimelineDot>
                                <TimelineConnector />
                            </TimelineSeparator>
                            <TimelineContent
                                sx={{
                                    p: (theme) => theme.spacing(0.5, 0),
                                    ml: 2.5,
                                }}
                            >
                                <Div
                                    className="col-12"
                                    sx={{
                                        display: "flex",
                                        flexDirection: "row",
                                        justifyContent: "space-between",
                                        alignItems: "start",
                                    }}
                                >
                                    <Div>
                                        <Typography variant="h5">12:30 am</Typography>
                                    </Div>
                                </Div>
                            </TimelineContent>
                        </TimelineItem>
                        <TimelineItem
                            sx={{
                                "&::before": {
                                    display: "none",
                                },
                            }}
                        >
                            <TimelineSeparator>
                                <TimelineDot
                                    sx={{
                                        p: "6px",
                                        m: 0,
                                        backgroundColor: "blue",
                                        color: "white",
                                    }}
                                ></TimelineDot>
                                <TimelineConnector />
                            </TimelineSeparator>
                            <TimelineContent
                                sx={{
                                    p: (theme) => theme.spacing(0.5, 0),
                                    ml: 2.5,
                                }}
                            >
                                <Div
                                    className="col-12"
                                    sx={{
                                        display: "flex",
                                        flexDirection: "row",
                                        justifyContent: "space-between",
                                        alignItems: "start",
                                    }}
                                >
                                    <Div>
                                        <Typography variant="h5">1:30 am</Typography>
                                    </Div>
                                </Div>
                            </TimelineContent>
                        </TimelineItem>
                    </Timeline>
                </Card>
            </Div>
        </>
    )
}

export default ContactsHistory;