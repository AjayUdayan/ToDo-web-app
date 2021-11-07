import React, { Fragment } from 'react';
import { Route, Switch } from 'react-router-dom';
import Task from '../../pages/task';
import Completed from '../../pages/completed';
import Pending from '../../pages/pending';
import Sidebar from '../Sidebar';
import { makeStyles } from '@mui/styles';

const useStylesBase = makeStyles({
    wrapper: {
        display: 'flex',
        flex: 1
    },
});

const Dashboard = () => {
    const classes = useStylesBase()

    return (
        <Fragment >
            {/* <Header /> */}
            <div className={classes.wrapper}>
                <Sidebar />
                <Switch>
                    <Route exact path="/all-task" component={Task} />
                    <Route exact path="/completed" component={Completed} />
                    <Route exact path="/pending" component={Pending} />
                </Switch>

            </div>

        </Fragment>
    );
};

export default Dashboard;
