import React, { useState } from 'react'

function StateSample2() {

    const [laoding, setLaoding] = useState(false);
    const [username, setUsername] = useState('');

    const getData = () => {

        setLaoding(true);

        setTimeout(() => {

            setUsername('Çağatay');
            setLaoding(false);

        }, 3000);
    }

    return (
        <>
            {
                laoding == true ? (<span>loading...</span>) : (
                    <><h1>{username}</h1>
                        <button onClick={() => getData()}>get username</button></>
                )
            }

        </>
    )
}

export default StateSample2
