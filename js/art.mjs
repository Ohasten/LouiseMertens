export function artMain(artworks) {
    if(databaseArt.length <= 0) {
        getArtworkData(artworks)
    }
    addContent();
}

var getArtworkData = function(v){
    var content = v.data;
    var getContent = content.map(e => {
        return {
            images: e.attributes.images,
        };
    });
    getContent.forEach(x => {
        databaseArt.push(x);
    });
}

var databaseArt = [];

var addContent = function() {

    var masterContainerDiv = `<div id="art-master-container"> </div>`;
    var masterContainerId = `#art-master-container`;

    var artContainerDiv = `<div id="art-container"></div>`
    var artContainerId = `#art-container`

    var leftMasterDiv = `<div id="art-left-master"> </div>`;
    var leftMasterId = "#art-left-master";

    var rightMasterDiv = `<div id="art-right-master"> </div>`;
    var rightMasterId = `#art-right-master`;


    $(".nav-master").after(masterContainerDiv);
    $(masterContainerId).append(artContainerDiv);

    $(artContainerId).append(leftMasterDiv);
    $(artContainerId).append(rightMasterDiv);
    

    databaseArt.forEach((v, i) => {

        /* START DOM ELEMENTE & SELECTORS */
        var leftContainerImageDiv = `<div id="art-left-container-image-${i}" class="art-left-container-image"></div>`;
        var leftContainerImageId = `#art-left-container-image-${i}`;
        var leftContainerImageClass = ".art-left-container";
        /* END DOM ELEMENTE & SELECTORS */

        /* START ADD CONTENT TO DOM */
    


        // GET LEFT IMAGE
        if(v.images[0].__component === "left.image-left") {
            $(leftMasterId).append(leftContainerImageDiv);


            var leftImageClass = "art-left-image";

            $(leftContainerImageId).append($(`<img>`, { 
                src: "https://louise-mertens-cms.kolbgrafik.de/" + v.images[0].image.data.attributes.url,
                loading: "lazy",
            }).addClass(leftImageClass))
        }
         
        // GET RIGHT IMAGES
        if(v.images[0].__component === "right.image-right") {
            var rightImageClass = "art-right-image";

            for(let x = 0; x < v.images[0].image.data.length; x++) {
                
                var rightContainerImageDiv = `<div id="art-right-container-image-${x}" class="art-right-container-image"></div>`;
                var rightContainerImageId = `#art-right-container-image-${x}`;
                var rightContainerImageClass = ".art-right-container";

                $(rightMasterId).append(rightContainerImageDiv);

                $(rightContainerImageId).append($(`<img>`, { 
                    src: "https://louise-mertens-cms.kolbgrafik.de/" + v.images[0].image.data[x].attributes.url,
                }).addClass(rightImageClass))
            }
        } 
    });

};