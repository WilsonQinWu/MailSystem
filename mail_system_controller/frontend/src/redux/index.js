import { actions as loginActions } from './auth/authRedux';
import { actions as layoutActions } from './layout/layoutRedux';

export const allActions = {
    ...loginActions,
    ...layoutActions
}