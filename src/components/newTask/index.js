import React, { useState } from 'react';
import Button from '@mui/material/Button';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogTitle from '@mui/material/DialogTitle';
import AddIcon from '@mui/icons-material/Add'
import { IconButton, Input } from '@mui/material';
import { makeStyles } from '@mui/styles';
import Tooltip from '@mui/material/Tooltip';
import TextField from '@mui/material/TextField';
import { ADD_TASK } from '../../redux/actions/task';
import { connect } from 'react-redux';
import { TaskReducer } from '../../redux/reducers/task'


const useStylesBase = makeStyles({
    Addbtn: {                           //css of the Add task button.
        backgroundColor: '#3764d1 !important',
        position: 'fixed !important',
        bottom: '2rem',
        right: '2rem'
    },
    inputStyle: {                   //  css of the input box in the dialog box.
        marginBottom: "1rem !important",
        Padding: '10rem',
        boxShadow: '2px 2px 7px -2px rgba(0,0,0,0.5)',

    }
});

function AddTask(props) {
    const classes = useStylesBase()
    const [open, setOpen] = React.useState(false);
    const [addTaskPayload, SetAddTaskPayload] = useState({})
    const { ADD_TASK } = props

    const whenInputChangeGetValueName = (e) => {   //This function helps the server to get the data entered by the user.
        let { value, name } = e.target
        SetAddTaskPayload({ ...addTaskPayload, [name]: value })
    }

    const handleClickOpen = () => {  //This function helps to open the Dialog box to add new task.
        setOpen(true);
    };

    const handleClose = () => {  //This function helps to close the Dialog box after adding the new task.
        setOpen(false)
        ADD_TASK(addTaskPayload)
    };
    const handleCancel = () => {   //This function helps to close the Dialog box when the cancel buttomn is clicked.
        setOpen(false)
    }

    return (
        <div>
            <Tooltip title="Add Task">
                <IconButton className={classes.Addbtn} onClick={handleClickOpen}>
                    <AddIcon style={{ color: 'white' }} />
                </IconButton>
            </Tooltip>
            <Dialog
                open={open}
                onClose={handleClose}
            >
                <DialogTitle style={{ cursor: 'move' }} id="draggable-dialog-title">
                    Add new Task
                </DialogTitle>
                <DialogContent>
                    <TextField
                        className={classes.inputStyle}
                        fullWidth
                        required
                        variant="outlined"
                        onChange={whenInputChangeGetValueName}
                        size='big'
                        type='text'
                        name='description'
                        label="Add Task"
                        style={{ marginTop: '2rem' }}
                    />
                </DialogContent>
                <div>
                    <DialogActions>
                        <Button autoFocus onClick={handleCancel}>
                            Cancel
                        </Button>
                        <Button onClick={handleClose}>
                            Add Task
                        </Button>
                    </DialogActions>
                </div>
            </Dialog>
        </div>
    );
}

const mapDispatchToProps = (state) => {
    return { taskList: state?.TaskReducer?.taskList };
}

export default connect(mapDispatchToProps, { ADD_TASK })(AddTask)
