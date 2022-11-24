const wppconnect = require('@wppconnect-team/wppconnect')

wppconnect
    .create()
    .then((client) => start(client))
    .catch((error) => console.log(error));

function sleep(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
}

async function start(client) {
    numeros = ['21969616066']
    for (let numero of numeros) {
        await client.sendFile(
            '55' + numero + '@c.us',
            'Novo WhatsApp para Fórmula Magistral Dermage.pdf',
            { type: 'Pharmage-pdf' },
        )
            .then((result) => {
                console.log('Result: ', result); //return object success
            })
            .catch((erro) => {
                console.error('Error when sending: ', erro); //return object error
            })
        await sleep(300000)
        await client.sendText(
            '55' + numero + '@c.us',
            '👋 Novo WhatsApp para Fórmula Magistral Dermage: (21) 995757066 e (21) 99564-0090. Entre em contato para realizar o seu orçamento'
            ,
        )
            .then((result) => {
                console.log('Result: ', result); //return object success
            })
            .catch((erro) => {
                console.error('Error when sending: ', erro); //return object error
            })
    }
}