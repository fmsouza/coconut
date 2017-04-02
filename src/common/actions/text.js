import Stores from 'common/stores';

const { text } = Stores;

export const changeLanguage = (language) => text.changeLanguage(language);
