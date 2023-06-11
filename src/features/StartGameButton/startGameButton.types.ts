import { SetUpStateType } from '../util.types';

export interface NavigateFunction {
    (
        to: '/game',
        options: {
            state: SetUpStateType;
        }
    ): void;
    (delta: number): void;
}

export type StartGameButtonProps = {
    setUpState: SetUpStateType;
};
