import * as Stores from 'common/stores';
import { browserHistory } from 'react-router';

export const allowedFor = (roles) => (nextState, replace) => {
    const { pathname } = nextState.location;
    const user = Stores.user.data;
    if (!user && !pathname.includes('login')) return replace({ pathname: 'login' });
    if (user && !roles) return replace({ pathname: '/' });
    if (user && !roles.includes(user.role)) return replace({ pathname: '400' });
};

export const go = (path) => browserHistory.push(path);