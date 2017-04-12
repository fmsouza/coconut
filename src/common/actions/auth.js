import * as Stores from 'common/stores';
import * as Action from 'common/actions';
import * as Services from 'common/services';

export const login = (username, password) => Services.login(username, password);

export const logoff = () => {
    Stores.user.clean();
    Action.go('/login');
};