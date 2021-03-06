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
        },
        languageSettings: {
            language: 'Language'
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

        forbidden: {
            title: 'ERROR 400 - Access forbidden.'
        },
        
        login: {
            title: 'Login'
        },

        notFound: {
            title: 'ERROR 404 - URL not found.'
        },

        settings: {
            title: 'Settings',
            nav: {
                general: 'General',
                language: 'Language',
                about: 'About'
            }
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
