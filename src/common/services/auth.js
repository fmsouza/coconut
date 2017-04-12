import * as Action from 'common/actions';
import * as Stores from 'common/stores';
import { Notifications } from 'common/constants';

export const login = (username, password) => {
    if (username === "admin" && password === "123") {
        Stores.user.storeUserData({
            name: 'Administrator',
            email: 'admin@admin.com',
            username: 'admin',
            token: 'bf9e2d6bt192e6dg19bdeg69',
            role: 'admin'
        });
        Action.go('/dashboard');
    } else Action.notify({ message: 'Failed to login.', level: Notifications.ERROR});
};