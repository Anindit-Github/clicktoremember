import ReactModal from 'react-modal';
import { useRestartHandler, useTimerHandler } from '../../contexts';
import { MenuModalProps } from './menuModal.types';
import { NavBarModal } from '../ModalContentContainer/NavBarModal';
import { GameEndModal } from '../ModalContentContainer';
import { useState } from 'react';

export const MenuModal = ({ showModal, setShowModal, playerCount }: MenuModalProps) => {
    const { dispatch: timerDispatch } = useTimerHandler();
    const { state } = useRestartHandler();
    const [width, setWidth] = useState(330);
    const [height, setHeight] = useState(220);

    const handleCloseModal = () => {
        setShowModal(false);
    };

    const handleModalSize = ({ width, height }: { width: number; height: number }) => {
        setWidth(width);
        setHeight(height);
    };

    return (
        <ReactModal
            isOpen={showModal || state.end}
            onRequestClose={handleCloseModal}
            shouldCloseOnOverlayClick={!state.end}
            shouldCloseOnEsc={!state.end}
            onAfterOpen={() => timerDispatch({ type: 'pauseTime', payload: true })}
            onAfterClose={() => timerDispatch({ type: 'pauseTime', payload: false })}
            style={{
                overlay: {
                    position: 'fixed',
                    top: 0,
                    left: 0,
                    right: 0,
                    bottom: 0,
                    backgroundColor: 'rgba(15, 23, 42, 0.7)'
                },
                content: {
                    position: 'absolute',
                    display: 'flex',
                    flexDirection: 'column',
                    justifyContent: 'center',
                    top: '50%',
                    left: '50%',
                    transform: `translate(-50%,-50%)`,
                    width: `calc(min(90%, ${width}px))`,
                    minHeight: `${height}px`,
                    border: '1px solid #ccc',
                    background: '#fff',
                    overflow: 'hidden',
                    WebkitOverflowScrolling: 'touch',
                    borderRadius: '10px',
                    outline: 'none'
                }
            }}
        >
            {state.end ? <GameEndModal playerCount={playerCount} handleModalSize={handleModalSize} /> : <NavBarModal handleCloseModal={handleCloseModal} handleModalSize={handleModalSize} />}
        </ReactModal>
    );
};
