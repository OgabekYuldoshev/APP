import SCREENS from '@src/SCREENS';
import {CentralPaneName} from './types';

const CENTRAL_PANE_TO_RHP_MAPPING: Partial<Record<CentralPaneName, string[]>> = {
    [SCREENS.WORKSPACE.OVERVIEW]: [SCREENS.WORKSPACE.NAME, SCREENS.WORKSPACE.CURRENCY],
    [SCREENS.WORKSPACE.REIMBURSE]: [SCREENS.WORKSPACE.RATE_AND_UNIT],
    [SCREENS.WORKSPACE.MEMBERS]: [SCREENS.WORKSPACE.INVITE, SCREENS.WORKSPACE.INVITE_MESSAGE],
};

export default CENTRAL_PANE_TO_RHP_MAPPING;
