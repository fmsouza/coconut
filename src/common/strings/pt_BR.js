import React from 'react';

export default {
    header: {
        brand: {
            title: 'Coconut'
        },
        navmenu: {
            link: {
                login: 'Entrar',
                toggleLanguage: 'Mudar idioma'
            }
        }
    },
    
    dashboard: {
        title: 'Painel'
    },

    home: {
        title: 'Seja bem-vindo ao React',
        intro: count => (
                <span>
                    Essa aplicação é um boilerplate com React + MobX + Bootstrap<br/>
                    e apresenta um código com o exemplo de uma aplicação de contador<br/>
                    só para mostrar como a arquitetura funciona.<br/><br/>
                    Contagem: {count}
                </span>
            )
    },
    
    login: {
        title: 'Entrar',
        inputs: {
            username: 'Usuário',
            password: 'Senha',
            submitButton: 'Entrar'
        }
    }
};
