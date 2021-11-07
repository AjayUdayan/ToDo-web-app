import React from 'react';
import ListItem from '@mui/material/ListItem';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import IconButton from '@mui/material/IconButton';
import DeleteIcon from '@mui/icons-material/Delete';
import { Checkbox } from '@mui/material';
import CircleOutlinedIcon from '@mui/icons-material/CircleOutlined';
import CheckCircleOutlineOutlinedIcon from '@mui/icons-material/CheckCircleOutlineOutlined';
import ModeEditIcon from '@mui/icons-material/ModeEdit';

function TaskRow() {
    return (
        <ListItem
            secondaryAction={
                <IconButton edge="end" aria-label="delete">
                    <DeleteIcon fontSize='small' style={{ marginRight: '50%' }} />
                    <ModeEditIcon fontSize='small' style={{paddingRight:'3rem'}}/>
                </IconButton>
            }
            style={{boxShadow:"1px 2px 4px -1px rgb(0 0 0 / 20%)",borderRadius:'8px',marginTop:'8px'}}
        >
            <ListItemIcon>
                <Checkbox icon={<CircleOutlinedIcon />}
                    checkedIcon={<CheckCircleOutlineOutlinedIcon />} />
            </ListItemIcon>
            <ListItemText
                primary="Single-line item"
            />
        </ListItem>

    )
}

export default TaskRow