import { useEffect, useState } from "react"
import "../style.css"
import { useSelector, useDispatch } from "react-redux"
import { start, stop } from "../store/timerSlice"


const Timer = ({time}) => {

    const timer = useSelector(state=> state.timer.value)
    const dispath = useDispatch()
    
    const [timeLeft, setTimeLeft] = useState(time)

    const minutes = Math.floor(timeLeft / 60)
    const seconds = timeLeft - minutes * 60

    useEffect(()=>{
        const interval = setInterval(() => {
            timer &&
            setTimeLeft((timeLeft) => timeLeft >= 1 ? timeLeft - 1 : 0)
        }, 1000)
        if(timeLeft === 0){
            dispath(stop())
        } 
        return () =>{
            clearInterval(interval)
        }
    }, [timeLeft, timer, dispath])

    const handleStart = () =>{
        dispath(start())
    }

    const handleStop = () =>{
        dispath(stop())
    }

    const handleReset = () =>{
        dispath(stop())
        setTimeLeft(time)
    }


    return (
      <div className="Timer">
          <div className="Timer_numbers">
            <span>{minutes}</span>
            <span>:</span>
            <span>{seconds}</span>
          </div>
          <div className="Timer_btn">
              {
                  timer 
                  ? 
                    <button onClick={handleStop}>Stop</button>
                  :
                    <button onClick={handleStart}>Start</button>
              }
              <button onClick={handleReset}>Reset</button>
          </div>
      </div>
    )
  }

export default Timer