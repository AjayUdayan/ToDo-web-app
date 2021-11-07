import React from 'react';
import AppBar from '../components/appBar';
import TaskRow from '../components/taskRow';
import { Container } from '@mui/material';
import List from '@mui/material/List';
import NewTask from '../components/newTask';

function Task() {
    return (
        <div style={{ width: '100%' }}>
            <Container>
                <div style={{ marginLeft: '8rem' }}>
                    <AppBar apptitle={'All Task'} />
                    <List dense={true}>
                        <TaskRow />
                        <TaskRow />
                        <TaskRow />
                        <TaskRow />
                        <TaskRow />
                        <TaskRow />
                    </List>
                    <NewTask />
                </div>
            </Container>
        </div>
    )
}

export default Task
