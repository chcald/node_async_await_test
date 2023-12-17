const fetch = require('node-fetch')

async function getName(userName) {
    const url = `https://api.github.com/users/${userName}`
    const resp = await fetch(url)
    const json = await resp.json()

    if (resp.status !== 200)
        throw Error('Username does not exist!')

     return json.name   
}

(async function() {
    try {
        const name = await getName('chcald')
        console.log(name)
    } catch(e){
        console.log(`${e}`)
    }

})()