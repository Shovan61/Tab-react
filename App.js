import React, { useState, useEffect } from 'react';
import CircularProgress from '@material-ui/core/CircularProgress';
import Information from './Information';

const url = 'https://course-api.com/react-tabs-project';

function App() {
    const [userData, setuserData] = useState([]);
    const [isLoading, setisLoading] = useState(true);

    useEffect(() => {
        const fetchData = async () => {
            const response = await fetch(url);
            const allData = await response.json();

            setuserData(allData);
            setisLoading(false);
        };

        fetchData();
    }, []);

    return (
        <div
            style={{
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'center',
                alignItems: 'center',
                width: '100vw',
            }}>
            {isLoading && (
                <CircularProgress
                    style={{
                        position: 'fixed',
                        top: '14rem',
                        height: '8rem',
                        width: '8rem',
                    }}
                />
            )}
            {!isLoading && (
                <React.Fragment>
                    {/* Header and bar */}
                    <h1
                        style={{
                            fontWeight: '500',
                            letterSpacing: '2px',
                        }}>
                        Experience
                    </h1>
                    <div
                        style={{
                            border: 'none',
                            borderTop: '3px solid #448aff',
                            width: '10%',
                        }}
                    />

                    {/* Components */}
                    <div
                        style={{
                            display: 'flex',
                            justifyContent: 'center',
                            width: '90%',

                            marginTop: '3rem',
                        }}>
                        <Information data={userData} />
                    </div>
                </React.Fragment>
            )}
        </div>
    );
}

export default App;

// {isLoading && <CircularProgress />}
