import React , { useEffect } from 'react'
import AppBar from '../components/appBar'
import TaskRow from '../components/taskRow'
import { Container } from '@mui/material'
import List from '@mui/material/List';
import { GET_ALL_TASK } from '../redux/actions/task'
import { connect} from 'react-redux'




function Completed(props) {
    const { allTask } =props

    useEffect(() => {
        GET_ALL_TASK()
    }, []);

    return (
        <div style={{ width: '100%' }}>
            <Container>
                <div style={{ marginLeft: '8rem' }}>
                    <AppBar apptitle={'Completed Tasks '} />
                    <List dense={true}>
                        {
                            allTask?.map((task, i) => {
                                return (
                                    task?.completed === true ?
                                        <TaskRow task={task} key={i} /> : ''
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
export default connect(mapDispatchToProps, { GET_ALL_TASK })(Completed)
