import { Notifications } from 'common/constants';

let notificationHandler = null;

export const setNotificationRef = (ref) => notificationHandler = ref;

export const notify = ({ message, level = Notifications.INFO, dismiss = 5, position = "br" }) => notificationHandler.addNotification({ message, level, dismiss, position });

export const clearNotifications = () => notificationHandler.clearNotifications();