import { IconDefinition } from '@fortawesome/fontawesome-svg-core';
import { solid } from '@fortawesome/fontawesome-svg-core/import.macro';

// ModalContentContainer/GameEndModal
export const POINT_STORE_INDICES = [0, 1, 2, 3];


// GridDisplay
export const ICON_MAP_SMALL = new Map<number, IconDefinition>();
ICON_MAP_SMALL.set(0, solid('volleyball'));
ICON_MAP_SMALL.set(1, solid('anchor'));
ICON_MAP_SMALL.set(2, solid('dragon'));
ICON_MAP_SMALL.set(3, solid('cogs'));
ICON_MAP_SMALL.set(4, solid('baseball-ball'));
ICON_MAP_SMALL.set(5, solid('cat'));
ICON_MAP_SMALL.set(6, solid('biohazard'));
ICON_MAP_SMALL.set(7, solid('user-secret'));


export const ICON_MAP_LARGE = new Map<number, IconDefinition>(ICON_MAP_SMALL);
ICON_MAP_LARGE.set(8, solid('binoculars'));
ICON_MAP_LARGE.set(9, solid('ankh'));
ICON_MAP_LARGE.set(10, solid('bell'));
ICON_MAP_LARGE.set(11, solid('golf-ball'));
ICON_MAP_LARGE.set(12, solid('coffee'));
ICON_MAP_LARGE.set(13, solid('dog'));
ICON_MAP_LARGE.set(14, solid('egg'));
ICON_MAP_LARGE.set(15, solid('brain'));
ICON_MAP_LARGE.set(16, solid('burn'));
ICON_MAP_LARGE.set(17, solid('football-ball'));


//SetUpButtons
export const DEFAULT_NUM_OF_PLAYERS = 1;
export const DEFAULT_THEME = 'Numbers';
export const DEFAULT_GRID_SIZE = '4x4';

//hooks/useChangeColorOnClick
export const BLUE = '#22313F';
export const YELLOW = '#EAB308';
export const SLATE = '#ABB7B7';


