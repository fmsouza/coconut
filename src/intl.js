import { pt_BR, en_US } from 'common/strings';

export default locale => {
    switch (locale) {
        
        default:
        case 'en-US':
        case 'en-EN':
            return en_US;

        case 'pt-BR':
        case 'pt-PT':
            return pt_BR;
    }
};
