function getAssets(){
    $("#Solar-System").html("");

    order_direction =  'desc';
    offset = '0';
    limit = '20';

    const url = `https://api.opensea.io/api/v1/assets?order_direction=${order_direction}&offset=${offset}&limit=${limit}&collection=non-fungible-galaxy`;

    $.ajax({url:url, dataType:"json"}).then(function(data) {
        console.log(data);


        var row = '<div class="row">';
        var title;
        var owner;
        var image;
        var num_assets = data.assets.length;
        for(var i = 0; i < num_assets; i++){
            title = data.assets[i].name;
            image = data.assets[i].image_url;
            owner = data.assets[i].owner.user.username;

            row += `<div class="col-sm">
                <div class="card" style="width: 20rem;">
                    <img class="card-img-top" src="${image}" alt="No image found">
                    <div class="card-body">
                        <h5 class="card-title">${title}</h5>
                        <h5 class="card-title">${owner}</h5>
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
