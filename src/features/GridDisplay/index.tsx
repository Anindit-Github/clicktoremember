import { useMemo } from 'react';
import { useCreateArrayToShuffle } from '../../hooks';
import { useChangeColorOnClick } from '../../hooks/useChangeColorOnClick';
import { useRestartHandler } from '../../contexts/useRestartHandler';
import { useMovesAndPlayersHandler } from '../../contexts/useMovesAndPlayersHandler';
import { ICON_MAP_SMALL, ICON_MAP_LARGE } from '../../constants'
import { IconDefinition } from '@fortawesome/fontawesome-svg-core';
import { GridDisplayType } from '../util.types';
import { Icon } from '../IconGenerator';



export const GridDisplay = ({ gridSize, playerCount, theme }: GridDisplayType) => {
    const { state, dispatch: endActionDispatch } = useRestartHandler();
    const { state: movesAndPlayersState, dispatch: movesAndPlayersDispatch } = useMovesAndPlayersHandler();
    const shuffledArray = useCreateArrayToShuffle(gridSize, state);
    const [colorState, handleDivClick] = useChangeColorOnClick(gridSize, state, endActionDispatch, movesAndPlayersState, movesAndPlayersDispatch, playerCount);

    const gridDivStyle = useMemo(() => (gridSize === '4x4' ? 'grid-4x4-default' : 'grid-6x6-default'), [gridSize]);
    const gridContainerStyle = useMemo(() => (gridSize === '4x4' ? 'grid-container-default grid-cols-4 grid-rows-4' : 'grid-container-default grid-cols-6 grid-rows-6'), [gridSize]);

    const iconOrganizer = useMemo(() => {
        if (theme === 'Icons') {
            if (gridSize === '4x4') return ICON_MAP_SMALL
            return ICON_MAP_LARGE
        }
        return null
    },[theme])

    return (
        <div className={gridContainerStyle}>
            {shuffledArray.map((element, idx) => {
                return (
                    <div className={gridDivStyle} key={idx} onClick={() => handleDivClick(idx, element)} style={{ backgroundColor: colorState[idx] }}>
                        {colorState[idx] !== '#22313F' ? (iconOrganizer ? <Icon icon={ iconOrganizer.get(element) as IconDefinition} /> : element) : null}
                    </div>
                );
            })}
        </div>
    );
};
