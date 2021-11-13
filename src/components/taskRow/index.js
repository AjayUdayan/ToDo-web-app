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
import { UPDATE_TASK, DELETE_TASK } from '../../redux/actions/task';
import { connect } from 'react-redux';


function TaskRow(props) {
    const { task } = props
    const { UPDATE_TASK,DELETE_TASK } = props

    const handleComplete = () => {
        UPDATE_TASK(task?._id, { completed: !task?.completed })
    }
    const handleDelete = () => {
        alert('hi')
        DELETE_TASK(task?._id)
    }

    return (
        <ListItem
            style={{ boxShadow: "1px 2px 4px -1px rgb(0 0 0 / 20%)", borderRadius: '8px', marginTop: '8px', marginLeft: '15px' }}
        >
            <ListItemIcon>
                <Checkbox onChange={handleComplete} defaultChecked={task?.completed} icon={<CircleOutlinedIcon />}
                    checkedIcon={<CheckCircleOutlineOutlinedIcon />} />
            </ListItemIcon>
            <ListItemText
                primary={task?.description}
            />
            <div>
                <IconButton >
                    <DeleteIcon onClick={handleDelete} fontSize='small' />
                </IconButton>
                <IconButton >
                    <ModeEditIcon fontSize='small' />
                </IconButton>
            </div>
        </ListItem>

    )
}

const mapDispatchToProps = (state) => {
    return { allTask: state?.TaskReducer?.allTask };
}

export default connect(mapDispatchToProps, { UPDATE_TASK, DELETE_TASK })(TaskRow)