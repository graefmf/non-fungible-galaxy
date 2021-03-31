function getAssets(){
    $("#Solar System").html("");

    const fetch = require('node-fetch');

    const url = 'https://api.opensea.io/api/v1/assets';

    const options = {
        method: 'GET',
        qs: {
            order_direction: 'desc',
            offset: '0',
            limit: '20',
            collection: 'non-fungible-galaxy'
        }
    };

    fetch(url, options)
        .then(res => res.json())
        .then(json => console.log(json))
        .catch(err => console.error('error:' + err));
}
