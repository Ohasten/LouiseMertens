export function comMain(commissions) {
    if(databaseCom.length <= 0) {
        getCommissionedData(commissions)
    }
    addContent();
    initSlideshow();
    // wrapperScrollSnap();
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

// var addContent = function(){
//     databaseCom.forEach((v, i) => {

//         /* START DOM ELEMENTE & SELECTORS */
//         var sectionDiv = `<section id="com-section-${i}" class="com-section"></section>`;
//         var sectionId = `#com-section-${i}`
//         var sectionClass = ".com-section";

//         var containerImageDiv = `<div id="com-container-image-${i}" class="com-container-image"></div>`;
//         var containerImageId = `#com-container-image-${i}`;
//         var containerImageClass = ".com-container-image";

//         var containerTextDiv = `<div id="com-container-text-${i}" class="com-container-text"></div>`;
//         var containerTextId = `#com-container-text-${i}`;
//         var containerTextClass = ".com-container-text";

//         var textDescriptionDiv = `<div id="com-text-description-${i}" class="com-text-description"></div>`;
//         var textDescriptionId = `#com-text-description-${i}`;
//         var textDescriptionClass = ".com-text-description";

//         var textDetailsDiv = `<div id="com-text-details-${i}" class="com-text-details"></div>`;
//         var textDetailsId = `#com-text-details-${i}`;
//         var textDetailsClass = ".com-text-details";
//         /* END DOM ELEMENTE & SELECTORS */

//         /* START ADD CONTENT TO DOM */
//         $("body").append(sectionDiv);
//         $(sectionId).append(containerImageDiv);

//         for(let x = 0; x < v.images.data.length; x++){
//             /* START DOM ELEMENTE & SELECTORS */
//             var imageClass = `com-image`;
//             var imageId = `com-image-${x}`;
//             /* END DOM ELEMENTE & SELECTORS */

//             $( containerImageId ).append($(`<img>`, { 
//                 src: "https://louise-mertens-cms.kolbgrafik.de/" + v.images.data[x].attributes.url,
//             }).addClass(imageClass).attr("id", imageId));
//         }
//         $(sectionId).append(containerTextDiv);
//         $(containerTextId).append(textDescriptionDiv);
//         $(textDescriptionId).append(v.description);
//         $(containerTextId).append(textDetailsDiv);
//         $(textDetailsId).append(v.details);
//         /* END ADD CONTENT TO DOM */
//     })
// }

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
            }).addClass(imageClass))
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
    document.addEventListener( 'DOMContentLoaded', function() {
        var splide = new Splide( '.splide', {});
        splide.mount();
    });

    var elms = document.getElementsByClassName( 'splide' );
    for ( var i = 0; i < elms.length; i++ ) {
        new Splide( elms[ i ] ).mount();
    }

    Splide.defaults = {
        type: 'loop',
        pagination: false,
    }
}

var wrapperScrollSnap = function() {
    $("body").wrapInner(`<div class="com-scroll-snap"></div>`);
    $(".com-scroll-snap").css("height", "100vh");
    $(".com-scroll-snap").css("overflow-y", "scroll");
    $(".com-scroll-snap").css("scroll-snap-type", "y mandatory");

    $(".com-section").css("scroll-snap-align", "start");
}

