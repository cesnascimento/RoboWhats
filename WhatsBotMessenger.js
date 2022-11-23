const wppconnect = require('@wppconnect-team/wppconnect');

function sleep(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
}

wppconnect.create({
    session: 'whatsbot',
    autoClose: false,
    puppeteerOptions: { args: ['--no-sandbox'] }
})
    .then((client) => (
        numeros = ['21988472108', '21997143491', '21981592997', '22663388974', '21985380861', '21964030200', '21980059293', '21981923438', '21996285603', '21982188442', '21994986147', '21981052196', '21998801859', '21969795454', '21997015480', '21995161604', '21982610551', '21999851971', '21991026385', '21988608764', '21999718802', '', '21985448610', '21964380160', '21973464032', '22996978238', '21987313608', '21992287398', '21996119983', '21986680401', '21999812009', '21971145516', '21964158030', '21992016101', '21988069762', '21999440075', '88888673', '21979383859', '21999793704', '21997636184', '21986605903', '21996162121', '54996295731', '1932636363', '92982282527', '21998540904', '21999718619', '21998969377', '21992668319', '21992302926'],
        numeros.forEach(numero => {
            console.log(numero)
            client.sendFile(
                '55'+numero+'@c.us',
                'Novo WhatsApp para Fórmula Magistral Dermage.pdf',
                'Pharmage-pdf',
            )
                .then((result) => {
                    console.log('Result: ', result); //return object success
                })
                .catch((erro) => {
                    console.error('Error when sending: ', erro); //return object error
                }),
            client.sendText(
                '55'+numero+'@c.us', 
                '👋 Novo WhatsApp para Fórmula Magistral Dermage: (21) 995757066 e (21) 99564-0090. Entre em contato para realizar o seu orçamento')
                .then((result) => {
                  console.log('Result: ', result); //return object success
                })
                .catch((erro) => {
                  console.error('Error when sending: ', erro); //return object error
                })
            sleep(300000)
        })
    ))