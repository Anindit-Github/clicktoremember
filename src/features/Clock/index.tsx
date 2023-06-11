import { useRestartHandler, useTimerHandler } from '../../contexts';
import { useTimer } from '../../hooks';



export const Clock = () => {
    const { state, dispatch: timerDispatch } = useTimerHandler();
    const { state: restartState } = useRestartHandler();
    const time = useTimer(state, restartState, timerDispatch);
    return (
            <div className='bg-gray-300 w-[150px] lg:w-[200px] h-20 lg:h-16 flex flex-col justify-center items-center rounded'>
                <p className="font-bold text-base text-gray-500">Timer</p>
                <div>
                    <span className="digits text-2xl font-bold lg:text-base lg:font-semibold">
                        {("0" + Math.floor((time / 60000) % 60)).slice(-2)}:
                    </span>
                    <span className="digits text-2xl font-bold lg:text-base lg:font-semibold">
                        {("0" + Math.floor((time / 1000) % 60)).slice(-2)}:
                    </span>
                    <span className="digits mili-sec text-2xl font-bold lg:text-base lg:font-semibold">
                        {("0" + ((time / 10) % 100)).slice(-2)}
                    </span>
                </div>
            </div>
    
  )
}
