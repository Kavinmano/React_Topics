import { useEffect, useState } from "react"


function Timer(){

    const [count,setCount] = useState(0);
    useEffect(() => {
        console.log('Screen rendered')
        // checkCount();
        setCount(1)
        // setTimeout(() => {
        //     setCount((previousState) => {return previousState + 1})
        // }, 1000)
    })

   function  checkCount()
    {
        if(count > 10)
        {
            setCount(1);
        }
    }

    function updateCount(){
        setCount((previousCount) => { return previousCount+ 1})
    }

    return <>
    
    <h1>I have Rendered {count} Times!</h1>

    <button onClick={updateCount}>Increase count</button>
    </>
}

export default Timer;