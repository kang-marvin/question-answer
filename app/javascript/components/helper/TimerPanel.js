import React, { useEffect, useState } from "react"

const CalculateRemainingTime = (remainingTime) => {
  const minutes = ToPadStart(Math.floor((remainingTime % 3600) / 60))
  const seconds = ToPadStart(Math.floor(remainingTime % 60))

  return `${minutes}:${seconds}`
}

const ToPadStart = (time) => {
  return time.toString().padStart(2,'0')
}

const TimerColor = (count) => {
  if (count < 6) {
    return 'bg-red-400'
  } else if (count < 11) {
    return 'bg-yellow-400'
  } else {
    return 'bg-green-400'
  }
}

const TimerPanel = props => {

  const { countdown, stopTimer, timerReference } = props

  if (countdown === null) {
    return null
  }

  const [timer, setTimer] = useState(countdown)

  useEffect(() => {
    if (timer > 0) {
      const timerInterval = setTimeout(() => {
        setTimer(timer - 1)
      }, 1000);
      timerReference.current = timerInterval

      return () => clearTimeout(timerInterval);
    } else {
      stopTimer()
    }
  }, [timer])

  return (
    <div className={`
      overflow-hidden shadow-lg p-4
      aspect-square flex flex-col
      items-center justify-center ${TimerColor(timer)}
      text-slate-200 rounded-sm gap-1
    `}>
      <h4 className="text-4xl font-medium">
        {CalculateRemainingTime(timer)}
      </h4>
      {timer <= 0 && (
        <span className="font-small text-sm">
          time is up
        </span>
      )}
    </div>
  )
}

export default TimerPanel
