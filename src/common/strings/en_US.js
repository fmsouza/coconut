import React from 'react';

export default {
    header: {
        brand: {
            title: 'Coconut'
        },
        navmenu: {
            link: {
                login: 'Login',
                toggleLanguage: 'Change language'
            }
        }
    },
    
    dashboard: {
        title: 'Dashboard'
    },

    home: {
        title: 'Welcome to React',
        intro: count => (
                <span>
                    This is a boilerplate with React + MobX + Bootstrap<br/>
                    and it presents the example code for a counter application<br/>
                    just to show the architecture working.<br/><br/>
                    Counter: {count}
                </span>
            )
    },
    
    login: {
        title: 'Login',
        inputs: {
            username: 'Username',
            password: 'Password',
            submitButton: 'Submit'
        }
    },

    profilemenu: {
        logoff: 'Logoff'
    }
};
