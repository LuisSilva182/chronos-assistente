comandos = [
    {
     entrada:'acessar memórias',
     retorno_escrito: 'Sim, senhor!',
     retorno_falado: 'Sim, senhor!',
     rota: '/memorias/',
     especial: false   
    },
    {
        entrada:'qual é o seu nome',
        retorno_escrito: 'Meu nome é Chronos!',
        retorno_falado: 'Meu nome é Chronos',
        rota: false,
        especial:false 
    },
    {
        entrada:'enviar e-mail',
        retorno_escrito: 'Para quem gostaria de enviar?',
        retorno_falado: 'Para quem gostaria de enviar?',
        rota: false,
        especial: function(){
            falar('Para quem gostaria de enviar?','Para quem gostaria de enviar?',false);
            app.dialog.alert('Disparou o evento!');
        } 
    },
    
    {
        entrada:'o palmeiras tem mundial',
        retorno_escrito:'sim o palmeiras tem mundial em 1951',
        retorno_falado:'sim o palmeiras tem mundial em 1951',
        rota: false,
        especial: false
    },
    {
        entrada:'conte uma piada',
        retorno_escrito:'porque tem uma cama elástica no polo norte',
        retorno_falado:'porque tem uma cama elástíca no polo norte,,para o urso polar',
        rota: false,
        especial: false
    },

    {
        entrada:'conte outra piada',
        retorno_escrito:'porque o pinheiro nao se perde na floresta',
        retorno_falado:'porque o pinheiro nao se perde na floresta,,porque ele tem um mapinha',
        rota: false,
        especial: false
    },

    {
        entrada:'quem é o seu criador',
        retorno_escrito:'meu criador é o luis fernando',
        retorno_falado:'meu criador é o luis fernando',
        rota: false,
        especial: false
    },
    {
        entrada:'qual melhor jogador do mundo',
        retorno_escrito:'rony rustico',
        retorno_falado:'rony rustico',
        rota: false,
        especial: false

    },
    {
        entrada:'qual sua cor preferida',
        retorno_escrito:'a cor preferida e azul',
        retorno_falado:'a cor preferida e o azul',
        rota: false,
        especial: false

    },

    {
        entrada:'qual seu animal preferido',
        retorno_escrito:'é o urso pandala',
        retorno_falado:'é o urso pandala',
        rota: false,
        especial: false

    },

    
]