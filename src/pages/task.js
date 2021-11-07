import React from 'react'
import AppBar from '../components/appBar'
import TaskRow from '../components/taskRow'
import { Container } from '@mui/material'
import List from '@mui/material/List';

function Task() {
    return (
        <div style={{ width: '100%' }}>
            <Container>
                <AppBar apptitle={'All Task'} />
                <List dense={true}>
                    <TaskRow />
                    <TaskRow />
                    <TaskRow />
                    <TaskRow />
                    <TaskRow />
                    <TaskRow />
                    <TaskRow />
                </List>

            </Container>
        </div>
    )
}

export default Task
