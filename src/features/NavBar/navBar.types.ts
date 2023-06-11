export interface NavigateFunction {
    (
        to: '/',
        options: {
            replace: boolean;
            state: null;
        }
    ): void;
    (delta: number): void;
}
