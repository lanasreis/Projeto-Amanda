const db = {};

db.title1 = [
    {
        id: 1,
        title: "Bradesco"
    },

    {
        id: 2,
        title: "Callink"
    },

    {
        id: 3,
        title: "Claro"
    },

    {
        id: 4,
        title: "Cielo"
    },
];

db.title2 = [
    {
        id: 1,
        fk: 3,
        title: "Criação"
    },

    {
        id: 2,
        fk: 3,
        title: "Ajuste de Login"
    },

    {
        id: 3,
        fk: 3,
        title: "Desligamento"
    },

    {
        id: 4,
        fk: 3,
        title: "Revogação de Acessos"
    },

    {
        id: 2,
        fk: 3,
        title: "Sistemas"
    },
];

db.title3 = [
    {
        id: 1,
        fk: 3,
        title: "Black Vip"
    },

    {
        id: 2,
        fk: 3,
        title: "Claro Móvel Propesct"
    },

    {
        id: 3,
        fk: 3,
        title: "Claro Flex"
    }
];

db.description = [
    {
        id: 1,
        fk: 1,
        script: `
        BOM DIA
        BRUNA,
        SEGUE DADOS DOS COLABORADORES PARA CRIAÇÃO DE PERFIL.
        QUANTIDADE DE USUÁRIOS: 26
        USUÁRIOS: ALVANDO ALVES COSTA
        OBRIGADA.
        `
    }
];
