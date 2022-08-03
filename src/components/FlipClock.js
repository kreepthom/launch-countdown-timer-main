import React,{useState} from 'react'
import { runClock } from '../utils/runClock'

const FlipClock = () => {
    const [date, setDate] = useState({ h: '00', m: '00', s: '00',d:'00' })
    const dataTime = [
        { title:'days',time:date.d},
        { title:'hours',time:date.h},
        { title:'minutes',time:date.m},
        { title:'seconds',time:date.s},
    ]
    setInterval(runClock, 1000, setDate)

    return (
        <div className="ContainerMain">
            <h1 className="title">we're launching soon</h1>
            <div className="flip-clock-container">
                {
                    dataTime.map(({title,time}) => (

                    <div key={title} className="flip-clock">

                        <div className="digit digital-unique" data-digital-before={time} data-digital-after={time} >
                            <span></span>
                            <div className={`card `} >
                                {/* <div className="card-face card-face-front ">{time}</div>
                                <div className="card-face card-face-back  ">{time}</div> */}
                            </div>
                        </div>
                        <p className="dateText">{title}</p>
                    </div>

                    ))
                }
            </div>
        </div>
    )
}

export default FlipClock