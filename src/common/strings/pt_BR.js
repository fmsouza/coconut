export default {
    actions: {
        submit: 'Enviar',
        login: 'Entrar',
        logoff: 'Sair',
        toggleLanguage: 'Mudar idioma',
        addRepository: 'Adicionar repositório'
    },

    forms: {
        login: {
            username: 'Usuário',
            password: 'Senha'
        },
        languageSettings: {
            language: 'Idiomas'
        }
    },

    views: {
        addRepository: {
            title: 'Novo Repositório'
        },

        dashboard: {
            title: 'Painel',
            overview: 'Visão geral'
        },

        forbidden: {
            title: 'ERRO 400 - Acesso negado.'
        },
        
        login: {
            title: 'Entrar'
        },

        notFound: {
            title: 'ERRO 404 - URL não encontrada.'
        },

        settings: {
            title: 'Configurações',
            nav: {
                general: 'Geral',
                language: 'Idiomas',
                about: 'Sobre'
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
            settings: 'Configurções'
        }
    }
};
