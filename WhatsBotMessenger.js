const wppconnect = require('@wppconnect-team/wppconnect')


function sleep(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
}


wppconnect.create(
    {
        session: 'chip1',
        puppeteerOptions: {
            userDataDir: './tokens/mySessionChip1', // or your custom directory
        },
    }
)
    .then((client) => startClient1(client))
    .catch((error) => console.log(error))
sleep(60000)
wppconnect.create(
    {
        session: 'chip2',
        puppeteerOptions: {
            userDataDir: './tokens/mySessionChip2', // or your custom directory
        },
    }
)
    .then((client) => startClient2(client))
    .catch((error) => console.log(error))


async function startClient1(client) {
    numeros1 = ['6281500515', '21981185201', '21992188180', '21982826951', '21991232751', '11982797773', '21999891561', '21993816830', '21999128875', '21996340769', '21999999999', '21967557775', '21971230905', '21994837886', '21994105720', '21964267277', '21968062099', '21996137580', '21994948511', '5599762354', '21993609478', '21986661012', '21999551473', '21996469744', '21994429250', '21995953907', '988021000', '21964338072',
        '21982170458', '21981719924', '24935422', '21969071359', '21964077770', '21998379195', '21996534321', '21897992950', '21983048776', '21975369319', '21981039345', '6183534713', '11984310171', '21988913362', '13996151735', '21996295092', '11972522704', '11983718041', '41988112348', '21996126558', '11993769005', '2131278401', '21990312125']
    for (let numero of numeros1) {
        /* await client.sendFile(
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
        await sleep(300000) */
        await client.sendText(
            '55' + numero + '@c.us',
            '👋 Novo WhatsApp para Fórmula Magistral Dermage: (21) 995757066 e (21) 99564-0090. Entre em contato para realizar o seu orçamento. Para manipular sua forma clique aqui',
            {
                "useTemplateButtons": "true",
                buttons: [
                    {
                        url: 'https://api.whatsapp.com/send/?phone=5521995801498&text&type=phone_number&app_absent=0',
                        text: 'Whatsapp',
                    }
                ]

            }
        )
            .then((result) => {
                console.log('Result: ', result); //return object success
            })
            .catch((erro) => {
                console.error('Error when sending: ', erro); //return object error
            })
        await sleep(300000)
    }
}
async function startClient2(client) {
    numeros2 = ['21988130087', '21993171018', '21988649845', '21991219031', '21994813848', '21994692684', '21999816653', '21999619097', '21981232815', '21964961894', '21995201825', '21999820899', '21999984151', '41996244917', '21991422203', '32999186508', '21987555414', '21992284905', '21979809090', '34998133030', '21992597993', '21979795511', '21982504709', '21981511826', '3175801111', '21998811972', '21997512764', '21998693701', '21988541020', '21999510875', '21981026646', '21976440303', '21988016208', '21996113600', '21991837251', '21999641090', '21983692229', '21987881213', '21997499093', '11999039123', '21991266436', '21998861146', '21996092383', '2191043159', '21979847189', '21993072971', '21982485091', '21992824480', '21979237773', '3499185352']
    for (let numero of numeros2) {
        await client.sendText(
            '55' + numero + '@c.us',
            '👋 Novo WhatsApp para Fórmula Magistral Dermage: (21) 995757066 e (21) 99564-0090. Entre em contato para realizar o seu orçamento. Para manipular sua forma clique aqui',
            {
                "useTemplateButtons": "true",
                buttons: [
                    {
                        url: 'https://api.whatsapp.com/send/?phone=5521995801498&text&type=phone_number&app_absent=0',
                        text: 'Whatsapp',
                    }
                ]

            }
        )
            .then((result) => {
                console.log('Result: ', result); //return object success
            })
            .catch((erro) => {
                console.error('Error when sending: ', erro); //return object error
            })
        await sleep(300000)
    }
}