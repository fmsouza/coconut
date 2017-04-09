export default {
    actions: {
        submit: 'Enviar',
        login: 'Entrar',
        logoff: 'Sair',
        toggleLanguage: 'Mudar idioma'
    },

    forms: {
        login: {
            username: 'Usuário',
            password: 'Senha'
        }
    },

    views: {
        dashboard: {
            title: 'Painel'
        },
        
        login: {
            title: 'Entrar'
        },

        forbidden: {
            title: 'ERRO 400 - Acesso negado.'
        },

        notFound: {
            title: 'ERRO 404 - URL não encontrada.'
        }
    },

    widgets: {
        header: {
            brand: {
                title: 'Coconut'
            }
        },

        profileMenu: {
            settings: 'Configurções'
        }
    }
};
