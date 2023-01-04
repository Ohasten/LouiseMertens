export function artMain(artworks) {
    if(databaseArt.length <= 0) {
        getArtworkData(artworks)
    }
    addContent()
    loopBigImg()
    randomArt()
}

export function randomArt() {
    /* SIZING IMAGES */
    var minWidth = 50;
    var maxWidth = 100;
    var minHeight = 40;
    var maxHeight = 80;
    var minTop = 0; //NOT ACTIVE
    var maxTop = 0; //NOT ACTIVE
    var minRight = 0;
    var maxRight = 0;
    var minBottom = 10;
    var maxBottom = 20;
    var minLeft = 5;
    var maxLeft = 30;

    randomImg( minWidth, maxWidth, minHeight, maxHeight, minTop, maxTop, minRight, maxRight, minBottom, maxBottom, minLeft, maxLeft);
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
    
        // ADD LEFT IMAGE
        if(v.images[0].__component === "left.image-left") {
            $(leftMasterId).append(leftContainerImageDiv);

            var leftImageClass = "art-left-image";

            $(leftContainerImageId).append($(`<img>`, { 
                src: "https://louise-mertens-cms.kolbgrafik.de/" + v.images[0].image.data.attributes.url,
                loading: "lazy",
            }).addClass(leftImageClass).addClass("art-ani-reset"))


        }
         
        // ADD RIGHT IMAGES
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
var loopBigImg = function() {

    $().ready(function(){
        var leftMasterId = "#art-left-master";
        var rightMasterId = `#art-right-master`;
    
        var getLeft = parseInt($(leftMasterId).css("height"))
        var getRight = parseInt($(rightMasterId).css("height"))
        
        if(getLeft < getRight) {    
            var exContainer = $(".art-left-container-image");
            var exContainerLength = $(".art-left-container-image").length;
            var exContainerCounter = 0;
            
            var getAddedSize = getLeft;
            while (getAddedSize < getRight){
                getAddedSize += parseInt($(".art-left-container-image").css("height"))
                
                $(leftMasterId).append(exContainer[exContainerCounter].outerHTML)
                exContainerCounter++;
                if(exContainerCounter >= exContainerLength) {
                    exContainerCounter = 0
                }
            }
    
        }
    })

}
function getImages() {
    var imageSelector = ".art-right-container-image";
    var images = $(imageSelector)
    var imagesArr = [];

    for(let i = 0; i < images.length; i++){
        imagesArr.push( images[i].id )
    }

    return imagesArr;
}
var randomImg = function(minW, maxW, minH, maxH, minT, maxT, minR, maxR, minB, maxB, minL, maxL) {

    function getImageSize(minW, maxW, minH, maxH, minT, maxT, minR, maxR, minB, maxB, minL, maxL) {

        function getRandomBetween(min, max) {
            return Math.round( (Math.random() * (max - min + 1) + min) )
        }

        var calcWidth = getRandomBetween(minW, maxW);
        var calcHeight = getRandomBetween(minH, maxH);
        var calcTop = getRandomBetween(minT, maxT);
        var calcRight = getRandomBetween(minR, maxR);
        var calcBottom = getRandomBetween(minB, maxB);
        var calcLeft = getRandomBetween(minL, maxL);

        return {
            width: calcWidth,
            height: calcHeight,
            top: calcTop,
            right: calcRight,
            bottom: calcBottom,
            left: calcLeft,
        }
    }

    var images = getImages();

    $.each(images, function (i, v) { 
        var size = getImageSize(minW, maxW, minH, maxH, minT, maxT, minR, maxR, minB, maxB, minL, maxL);
        if(i >= 2) {
            $(`#${v}`).css({
                "width": size.width + "%",
                "height": size.height + "vh",
                "margin-right": size.right + "%",
                "margin-left": size.left + "%",
            })
        }

        if((i % 2) === 1 ){
            $(`#${v}`).css({
                "margin-bottom": size.bottom + "vh",
            })
        }

    });
}