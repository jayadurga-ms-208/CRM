import React from 'react';
import {Box, TextField} from "@mui/material";
import Button from "@mui/material/Button";
import {useMutation} from "react-query";
import {mailServices} from "../../../../../services/mail-services";
import useSwalWrapper from "@jumbo/vendors/sweetalert2/hooks";

const ComposeForm = ({mailItem, onSave, hideDialog}) => {
    const Swal = useSwalWrapper();
    const [to, setTo] = React.useState();
    const [cc,setCc] = React.useState();
    const [subject, setSubject] = React.useState();
    const [message, setMessage] = React.useState(mailItem ? mailItem?.message : "");
    const [attachFile,setAttachFile] = React.useState();

    const addMailMutation = useMutation(mailServices.addMail, {
        onSuccess: () => {
            onSave();
            Swal.fire({
                position: 'top-end',
                icon: 'success',
                title: 'Mail has been sent successfully.',
                showConfirmButton: false,
                timer: 1500
            });
        }
    });
    const onSendMessage = () => {
        addMailMutation.mutate({to, subject, message});
    }
    return (
        <Box component={'form'}
            sx={{
                '& > .MuiFormControl-root': {
                    marginBottom: 2
                },
                minWidth: "500px",
            }}
        >
            <TextField
                fullWidth
                size={"small"}
                type={"email"}
                placeholder={"To"}
                value={to}
                onChange={(e) => setTo(e.target.value)}
            />
            <TextField
                fullWidth
                size={"small"}
                type={"email"}
                placeholder={"CC"}
                value={cc}
                onChange={(e) => setCc(e.target.value)}
            />
            <TextField
                fullWidth
                size={"small"}
                placeholder={"Subject"}
                value={subject}
                onChange={(e) => setSubject(e.target.value)}
            />
            <TextField
                fullWidth
                multiline
                className='multiline-box'
                rows={5}
                maxRows={10}
                placeholder={"Content"}
                value={message}
                onChange={(e) => setMessage(e.target.value)}
            />
            <TextField
                type="file"
                fullWidth
                placeholder={"Attach file"}
                value={attachFile}
                onChange={(e) => setAttachFile(e.target.value)}
            />
            <Button className='save-button' onClick={onSendMessage} sx={{mr: 2}}>Send</Button>
            <Button className='cancel-button' onClick={() => hideDialog()}>Cancel</Button>
        </Box>
    );
};
/* Todo mailItem, onSave prop define */
export default ComposeForm;
