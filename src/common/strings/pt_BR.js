import React from 'react';

export default {
    header: {
        brand: {
            title: 'Aplicação com React'
        },
        navmenu: {
            link: {
                increment: 'Incrementar',
                reset: 'Resetar',
                login: 'Entrar'
            }
        }
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
        title: 'Login',
        inputs: {
            username: 'Usuário',
            password: 'Senha',
            submitButton: 'Entrar'
        }
    }
};
