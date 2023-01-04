export function comMain(commissions) {
    if(databaseCom.length <= 0) {
        getCommissionedData(commissions)
    }
    addContent();
    initSlideshow();
}

var getCommissionedData = function(v){
    var content = v.data;
    var getContent = content.map(e => {
        return {
            description: e.attributes.description.replaceAll("\n", "<br>"), 
            details: e.attributes.details.replaceAll("\n", "<br>"),
            images: e.attributes.images,
        };
    });
    getContent.forEach(x => {
        databaseCom.push(x);
    });
}

/* DATABASE FOR COMMISSIONED */ 
var databaseCom = [];

var addContent = function(){
    var masterContainerDiv = `<div id="com-master-container"> </div>`;
    var masterContainerId = `#com-master-container`;

    var comContainerDiv = `<div id="com-container"></div>`
    var comContainerId = `#com-container`

    $(".nav-master").after(masterContainerDiv);
    $(masterContainerId).append(comContainerDiv)

    databaseCom.forEach((v, i) => {

        /* START DOM ELEMENTE & SELECTORS */

        var sectionDiv = `<section id="com-section-${i}" class="com-section"></section>`;
        var sectionId = `#com-section-${i}`;
        var sectionClass = ".com-section";

        var containerImageDiv = `<div id="com-container-image-${i}" class="com-container-image"></div>`;
        var containerImageId = `#com-container-image-${i}`;
        var containerImageClass = ".com-container-image";

        var containerTextDiv = `<div id="com-container-text-${i}" class="com-container-text"></div>`;
        var containerTextId = `#com-container-text-${i}`;
        var containerTextClass = ".com-container-text";

        var textDescriptionDiv = `<div id="com-text-description-${i}" class="com-text-description"></div>`;
        var textDescriptionId = `#com-text-description-${i}`;
        var textDescriptionClass = ".com-text-description";

        var textDetailsDiv = `<div id="com-text-details-${i}" class="com-text-details"></div>`;
        var textDetailsId = `#com-text-details-${i}`;
        var textDetailsClass = ".com-text-details";

        //SPLIDE
        var splideMasterDiv = `<div id="com-master-${i}" class="splide com-master" role="group" aria-label="Splide Basic HTML Example"> </div>`;
        var splideMasterId = `#com-master-${i}`;
        var spldieMasterClass = ".com-master";

        var splideTrackDiv = `<div id="com-container-image-${i}" class="splide__track com-container-image"> </div>`;
        var splideTrackId = `#com-container-image-${i}`;
        var splideTrackClass = ".com-container-image";

        var splideListDiv = `<ul id="com-container-ul-${i}" class="splide__list com-container-ul"> </ul>`;
        var splideListId = `#com-container-ul-${i}`;
        var splideListClass = ".com-container-ul"
        /* END DOM ELEMENTE & SELECTORS */

        /* START ADD CONTENT TO DOM */
        $(comContainerId).append(sectionDiv);

        $(sectionId).append(splideMasterDiv);
        $(splideMasterId).append(splideTrackDiv);
        $(splideTrackId).append(splideListDiv);

        for(let x = 0; x < v.images.data.length; x++){
            var splideSlideDiv = `<li id="com-li-image-${i}-${x}" class="splide__slide com-li-image"></li>`;
            var splideSlideId = `#com-li-image-${i}-${x}`;
            var splideSlideClass = ".com-li-image";

            var imageClass = `com-image`;

            $(splideListId).append(splideSlideDiv)

            $(splideSlideId).append($(`<img>`, { 
                src: "https://louise-mertens-cms.kolbgrafik.de/" + v.images.data[x].attributes.url,
                loading: "lazy",
            }).addClass(imageClass).addClass("com-ani-reset"))
        }
        $(sectionId).append(containerTextDiv);
        $(containerTextId).append(textDescriptionDiv);
        $(textDescriptionId).append(v.description);
        $(containerTextId).append(textDetailsDiv);
        $(textDetailsId).append(v.details);
        /* END ADD CONTENT TO DOM */
    })
}

var initSlideshow = function() {

    $().ready(function() {
        var elms = $(".splide");
        for ( var i = 0; i < elms.length; i++ ) {
            new Splide( elms[ i ], {
                pagination: false,
                type: 'loop',
                clones: 0,
            } ).mount();
        }
    })

}

/* ANIMATION */
var animationLeft = function() {
    var ani = $(".com-container-image");

    $("#nav-com").click(function(){

        $(".com-master").animate({
            top: 0,
        },300, function(){
            //DONE
        })

    })


}

var animationReset = function(){

    $(".nav-master").click(function(){
        if( $("#com-master-container").css("display") === "none"){
            $(".com-master-container").css({
                "top": "100vh",
            })
        }
    })

}

// animationReset()
// animationLeft()