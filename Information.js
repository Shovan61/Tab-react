import React, { useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import NearMeIcon from '@material-ui/icons/NearMe';
import Button from '@material-ui/core/Button';
import './Information.css';

const greenColor = '#3bce96';

const useStyles = makeStyles((theme) => ({
    root: {
        display: 'flex',
        justifyContent: 'space-between',
        width: '100%',
        height: '100%',
    },
    buttonContainer: {
        width: '12%',
    },
    button: {
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between',

        '& h2': {
            fontWeight: '400',
            transition: 'all 0.3s ease-in',
        },
        '&:hover h2': {
            color: greenColor,
        },
    },

    info: {
        width: '80%',
        display: 'flex',
        flexDirection: 'column',
    },
    company: {
        backgroundColor: 'rgba(151, 155, 155, 0.2)',
        padding: '3px',
        width: '10%',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        color: '#444',
        fontWeight: '500',
        letterSpacing: '2px',
        marginBottom: '1rem',
    },
    date: {
        color: '#7495d2',
        marginBottom: '1rem',
    },
    duties: {
        marginTop: '2rem',
        width: '100%',
    },
    duty: {
        display: 'flex',
        width: '100%',
        justifyContent: 'space-between',
        marginBottom: '1rem',
    },
}));

function Information({ data }) {
    const classes = useStyles();
    const [user, setuser] = useState(data[0]);
    const [value, setvalue] = useState(0);
    const { id, order, title, dates, duties, company } = user;

    const handleClick = (val) => {
        setuser(data[val]);
        setvalue(val);
    };

    return (
        <div className={classes.root}>
            {/* Button Container */}
            <div className={classes.buttonContainer}>
                {data.map((curPersonData, index) => (
                    <div key={curPersonData.id} className={classes.button}>
                        <div className={`bar ${index === value && 'show'}`} />
                        <h2
                            className={`htwo ${index === value ? 'show' : ''}`}
                            style={{ cursor: 'pointer' }}
                            onClick={() => handleClick(index)}>
                            {curPersonData.company}
                        </h2>
                    </div>
                ))}
            </div>
            {/* Information of employee */}
            <div className={classes.info}>
                <h1 style={{ color: '#555' }}>{title}</h1>
                <div className={classes.company}>{company}</div>
                <span className={classes.date}>{dates}</span>
                <div className={classes.duties}>
                    {duties.map((cur, index) => (
                        <div key={index}>
                            <div className={classes.duty}>
                                <NearMeIcon
                                    style={{
                                        alignSelf: 'flex-start',
                                        color: greenColor,
                                    }}
                                />
                                <span
                                    style={{
                                        width: '80%',
                                        marginRight: '8rem',
                                    }}>
                                    {cur}
                                </span>
                            </div>
                        </div>
                    ))}
                </div>
                {/* button */}
                <Button
                    variant='contained'
                    style={{
                        backgroundColor: greenColor,
                        alignSelf: 'center',
                        position: 'relative',
                        right: '5rem ',
                        marginTop: '4rem',
                    }}
                    color='primary'>
                    More Info
                </Button>
            </div>
        </div>
    );
}

export default Information;
