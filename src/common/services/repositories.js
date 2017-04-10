import moment from 'moment';

export const downloadRepositories = () => {
    return Promise.resolve([
        {
            name: 'coconut',
            namespace: 'fmsouza',
            status: 'success',
            lastBuildTime: moment().format('DD/MM/YYYY hh:mm'),
            id: 57865
        },
        {
            name: 'revinter',
            namespace: 'fmsouza',
            status: 'failed',
            lastBuildTime: moment().format('DD/MM/YYYY hh:mm'),
            id: 97097
        },
        {
            name: 'proxy',
            namespace: 'riobus',
            status: 'pending',
            lastBuildTime: moment().format('DD/MM/YYYY hh:mm'),
            id: 31456
        }
    ]);
};