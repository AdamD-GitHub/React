import React, { Component, useState } from "react";
import {
    Button,
    Dialog,
    DialogContent,
    DialogContentText,
    DialogActions,
    DialogTitle,
} from "@material-ui/core";


/* SetOpen to true is a hook feature for managing state.  It says set a constant for
 open with the ability to modify it in a SetOpen.  With Hooks you don't have to write 
 state maangement processes.  This is why you do not need to write classes. 
 - Bring Hook in and default it to open.  You do this for every state variable you want to manage. 
 - The Dialog is being managed by the open state.  
 - When we set open to true, we open the dialog.
 - If set to true it should open onLoad.
*/
function DialogTest() {
    const [open, setOpen] = useState(false);
    const handleClose = () => {
        console.log("handleClose");
        setOpen(false);
    };
    const handleClickOpen = () => {
        console.log("handleClickOpen");
        setOpen(true);
    };
    return (
        <>
            <Button variant="outlined" color="primary" onClick={handleClickOpen}>
                Open alert dialog
            </Button>
            <Dialog open={open} onClose={handleClose}>
                <DialogTitle id="alert-dialog-title">
                    {"Use Google's location service?"}
                </DialogTitle>
                <DialogContent>
                    <DialogContentText id="alert-dialog-description">
                        Let Google help apps determine location. This means sending
                        anonymous location data to Google, even when no apps are running.
                    </DialogContentText>
                </DialogContent>
                <DialogActions>
                    <Button onClick={handleClose} color="primary">
                        Disagree
                    </Button>
                    <Button onClick={handleClose} color="primary" autoFocus>
                        Agree
                    </Button>
                </DialogActions>
            </Dialog>
        </>);
}



class App extends Component {
    render() {
        return (
            <DialogTest />
        );
    }
}
export default App;
