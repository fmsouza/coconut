export default {
    actions: {
        submit: 'Submit',
        login: 'Login',
        logoff: 'Logoff',
        toggleLanguage: 'Change language'
    },

    forms: {
        login: {
            username: 'Username',
            password: 'Password'
        }
    },

    views: {
        dashboard: {
            title: 'Dashboard'
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
