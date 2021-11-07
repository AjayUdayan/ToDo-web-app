import * as React from 'react';
import Button from '@mui/material/Button';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogTitle from '@mui/material/DialogTitle';
import AddIcon from '@mui/icons-material/Add'
import { IconButton } from '@mui/material';
import { makeStyles } from '@mui/styles';

const useStylesBase = makeStyles({
    Addbtn: {
        backgroundColor: '#3764d1 !important',
        position: 'fixed !important',
        bottom: '2rem',
        right: '2rem'
    },
});

export default function New(TaskAdd) {
    const classes = useStylesBase()
    const [open, setOpen] = React.useState(false);

    const handleClickOpen = () => {
        setOpen(true);
    };

    const handleClose = () => {
        setOpen(false);
    };

    return (
        <div>
            <IconButton className={classes.Addbtn} onClick={handleClickOpen}>
                <AddIcon style={{color:'white'}}/> 
            </IconButton>
            <Dialog
                open={open}
                onClose={handleClose}
            >
                <DialogTitle style={{ cursor: 'move' }} id="draggable-dialog-title">
                    Subscribe
                </DialogTitle>
                <DialogContent>

                </DialogContent>
                <DialogActions>
                    <Button autoFocus onClick={handleClose}>
                        Cancel
                    </Button>
                    <Button onClick={handleClose}>Add Task</Button>
                </DialogActions>
            </Dialog>
        </div>
    );
}
