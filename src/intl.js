import { pt_BR, en_US } from 'common/strings';

export default locale => {
    switch (locale) {
        
        default:
        case 'en-US':
        case 'en-EN':
        case 'en':
            return en_US;

        case 'pt-BR':
        case 'pt-PT':
        case 'pt':
            return pt_BR;
    }
};
