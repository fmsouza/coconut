import pt_BR from './pt_BR';
import en_US from './en_US';
import getIntl from 'intl';

export { pt_BR, en_US };

export default getIntl(navigator.language);
