export type Theme = readonly ['Numbers', 'Icons'];
export type Players = readonly [1, 2, 3, 4];
export type Grid = readonly ['4x4','6x6']

export type ChildrenProps = {
    children: {
        themes: Theme
        players: Players
        gridSizes: Grid
    }
} 

export type SetUpStateType = {
    theme: Theme[number];
    playerCount: Players[number];
    grid: Grid[number];
};

export type GridDisplayType = {
    theme: Theme[number];
    playerCount: Players[number];
    gridSize: Grid[number];
};

export type PlayerCount = {
    playerCount: Players[number];
};


