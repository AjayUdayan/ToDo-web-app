
import React, { useState } from 'react';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import { Chip } from '@mui/material'
import { Link } from 'react-router-dom'
import CompletedTaskIcon from '@mui/icons-material/TaskAlt';
import AllTaskIcon from '@mui/icons-material/FormatListBulletedOutlined';
import PendingActionsIcon from '@mui/icons-material/PendingActions';
import { makeStyles } from '@mui/styles';

const useStylesBase = makeStyles({
    wrapper: {
        maxWidth: '300px', height: '98vh',
        backgroundColor: '#3764d1',
    },
    linkStyle: {
        textDecoration: 'none',
        color: 'white'
    },
    inactiveChip: {
        borderRadius: '4px !important',
        width: '100%',
        background: '#3764d1 !important',
        display:'flex !important',
        color:'#fff !important',
        justifyContent:'start !important'
    },
    activeChip: {
        borderRadius: '4px !important',
        width: '100%',
        background: '#1f3b82 !important',
        color:'#fff !important',
        display:'flex !important',
        justifyContent:'start !important'
    }
});

function ResponsiveDrawer(props) {
    const classes = useStylesBase()
    const [activePage, setActivePage] = useState(0)

    return (
        <List dense className={classes.wrapper}>
            <Link className={classes.linkStyle} to='/all-task'>
                <ListItem>
                    <Chip
                        onClick={() => { setActivePage(0) }}
                        className={activePage === 0 ? classes.activeChip : classes.inactiveChip}
                        icon={<AllTaskIcon fontSize='small' style={{ color: 'white' }} />}
                        label={'All Task'} />
                </ListItem>
            </Link>
            <Link className={classes.linkStyle} to='/completed'>
                <ListItem>
                    <Chip
                        onClick={() => { setActivePage(1) }}
                        className={activePage === 1 ? classes.activeChip : classes.inactiveChip}
                        icon={<CompletedTaskIcon fontSize='small' style={{ color: 'white' }} />}
                        label={'Completed Task'} />
                </ListItem>
            </Link>
            <Link className={classes.linkStyle} to='/Pending'>
                <ListItem>
                    <Chip
                        onClick={() => { setActivePage(2) }}
                        className={activePage === 2 ? classes.activeChip : classes.inactiveChip}
                        icon={<PendingActionsIcon fontSize='small' style={{ color: 'white' }} />}
                        label={'Pending Task'} />
                </ListItem>
            </Link>
        </List>
    );
}

export default ResponsiveDrawer;
