import * as Stores from 'common/stores';
import * as Services from 'common/services';

export const loadRepositories = () => Services.downloadRepositories()
    .then(repositories => Stores.repositories.load(repositories));