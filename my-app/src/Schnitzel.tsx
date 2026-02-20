import React, { useEffect } from 'react';

const Schnitzel: React.FC = () => 
{
    const [seconds, setSeconds] = React.useState(0);
    const [isRunning, setIsRunning] = React.useState(false);

    useEffect(() => {
        if (isRunning) {
            const timer = setInterval(() => {setSeconds(prev => Math.max(0, prev - 1));}, 1000);
            return () => clearInterval(timer);
        }
    }, [isRunning]);

    function OnButtonClicked() 
    {
        if(seconds == 0)
        {
            alert("I GOT SCHNITZEL");
            setIsRunning(true);
            setSeconds(6);
        }
        else
        {
            alert(`NEED TO WAIT 6 SECONDS BETWEEN SCHNITZELS. ${seconds} SECONDS LEFT`);
        }
    }

    return (
        <div>
            <button onClick={() => OnButtonClicked()}>I want schnitzel</button>
        </div>
    );
}

export default Schnitzel;