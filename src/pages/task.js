import React, { useEffect } from 'react';
import AppBar from '../components/appBar';
import TaskRow from '../components/taskRow';
import { Container } from '@mui/material';
import List from '@mui/material/List';
import { connect } from 'react-redux';
import { GET_ALL_TASK } from '../redux/actions/task';



function Task(props) {
    const { GET_ALL_TASK } = props
    const { allTask } = props   

    useEffect(() => {
        GET_ALL_TASK()
    }, [])
    
    return (
        <div style={{ width: '100%' }}>
            <Container>
                <div style={{ marginLeft: '8rem' }}>
                    <AppBar apptitle={'All Task'} />
                    <List dense={true}>
                        {
                            allTask?.map((task, i) => {
                                return (
                                    <TaskRow task={task} key={i}/>
                                )
                            })
                        }
                    </List>
                </div>
            </Container>
        </div>
    )
}


const mapDispatchToProps = (state) => {
    return { allTask: state?.TaskReducer?.allTask };
}

export default connect(mapDispatchToProps, { GET_ALL_TASK })(Task)
