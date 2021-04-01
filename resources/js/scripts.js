function getAssets(){

    order_direction =  'desc';
    offset = '0';
    limit = '20';

    const url = `https://api.opensea.io/api/v1/assets?order_direction=${order_direction}&offset=${offset}&limit=${limit}&collection=non-fungible-galaxy`;

    $.ajax({url:url, dataType:"json"}).then(function(data) {
        console.log(data);


        var owner;
        var link;
        var image;
        var group;
        var num_assets = data.assets.length;

        for(var i = 0; i < num_assets; i++){
            title = data.assets[i].name;
            image = data.assets[i].image_url;
            owner = data.assets[i].owner.user.username;
            link = data.assets[i].permalink;

            for(var j = 0; j < 6; j++){
                if(data.assets[i].traits[j].trait_type == 'Collection'){
                    group = (data.assets[i].traits[j].value).replace(/\s+/g, '-');
                    break;
                }
            }
            
            console.log('#'+ group);
            $('#'+ group).append( 
                    `<div class="col-xs-6 col-sm-4 col-md-3 col-lg-3">
                        <div class="card">
                            <a href="${link}">
                                <img class="card-img-top" src="${image}" alt="No image found" style="width: 20rem;">
                            </a>
                            <div class="card-body text-center">
                                <div class="text">
                                    <h5 class="card-title">Owner: ${owner}</h5>
                                </div>
                            </div>
                        </div>
                    </div>`
            );
            
        } 
    });
}
