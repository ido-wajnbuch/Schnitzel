import React, { useEffect } from 'react';

const Schnitzel: React.FC = () => 
{
    const [seconds, setSeconds] = React.useState(0);
    const [isRunning, setIsRunning] = React.useState(false);
    
    useEffect(() => {
        if (isRunning) {
            const timer = setInterval(() => {setSeconds(prev => prev + 1);}, 1000);
            return () => clearInterval(timer);
        }
    }, [isRunning]);

    function OnButtonClicked() 
    {
        if(seconds == 0 || seconds % 6 == 0)
        {
            alert("I GOT SCHNITZEL");
            setIsRunning(true);
        }
        else
        {
            const secondsLeft = 6 - (seconds % 6);
            alert(`NEED TO WAIT 6 SECONDS BETWEEN SCHNITZELS. ${secondsLeft} SECONDS LEFT`);
        }
    }

    return (
        <div>
            <button onClick={() => OnButtonClicked()}>I want schnitzel</button>
            {seconds}
        </div>
    );
}

export default Schnitzel;