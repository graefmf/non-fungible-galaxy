function getAssets(){
    $("#Solar-System").html("");

    order_direction =  'desc';
    offset = '0';
    limit = '20';

    const url = `https://api.opensea.io/api/v1/assets?order_direction=${order_direction}&offset=${offset}&limit=${limit}&collection=non-fungible-galaxy`;

    $.ajax({url:url, dataType:"json"}).then(function(data) {
        console.log(data);


        var row = '<div class="row">';
        var owner;
        var link;
        var image;
        var num_assets = 10;
        for(var i = 0; i < num_assets; i++){
            title = data.assets[0].name;
            image = data.assets[0].image_url;
            owner = data.assets[0].owner.user.username;
            link = data.assets[0].permalink;

            row += `<div class="col-sm">
                <div class="card" style="width: 20rem;">
                    <a href="${link}">
                        <img class="card-img-top" src="${image}" alt="No image found" width=256" height="256">
                    </a>
                    <div class="card-body">
                        <div class="text">
                            <h5 class="card-title">Owner: ${owner}</h5>
                        </div>
                    </div>
                </div>
            </div>`;

            console.log(row);

            if(i == num_assets-1){
                row += '</div>';
            }else if((i+1)%6 == 0){
                row += '</div>';
                row += '<div class="row">';
            }
            
        }
       $("#Solar-System").html(row);
    });
}
