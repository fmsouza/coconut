export const save = (key, value) => window.localStorage.setItem(key, value);

export const remove = (key) => window.localStorage.removeItem(key);

export const load = (key) => window.localStorage.getItem(key);
