export default {
    actions: {
        submit: 'Submit',
        login: 'Login',
        logoff: 'Logoff',
        toggleLanguage: 'Change language',
        addRepository: 'Add repository'
    },

    forms: {
        login: {
            username: 'Username',
            password: 'Password'
        }
    },

    views: {
        addRepository: {
            title: 'Add Repository'
        },

        dashboard: {
            title: 'Dashboard',
            overview: 'Overview'
        },
        
        login: {
            title: 'Login'
        },

        forbidden: {
            title: 'ERROR 400 - Access forbidden.'
        },

        notFound: {
            title: 'ERROR 404 - URL not found.'
        }
    },

    widgets: {
        header: {
            brand: {
                title: 'Coconut'
            }
        },

        profileMenu: {
            settings: 'Settings'
        }
    }
    
};
