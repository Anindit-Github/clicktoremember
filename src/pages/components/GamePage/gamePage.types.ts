import { Path } from 'react-router-dom';
import { SetUpStateType } from '../../../features/util.types';
export interface Location extends Path {
    state: SetUpStateType;
    key?: string;
}
