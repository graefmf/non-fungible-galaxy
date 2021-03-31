function getAssets(){
    $("#Solar System").html("");

    order_direction =  'desc',
    offset = '0',
    limit = '20'

    const url = `https://api.opensea.io/api/v1/assets?order_direction=${direction}&offset=${offset}&limit=${limit}&collection=non-fungible-galaxy`;

    $.ajax({url:url, dataType:"json"}).then(function(data) {
        console.log(data);
    })
}
