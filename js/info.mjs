export function infoMain(info) {

    addContent( getInfoData(info) )

}

var getInfoData = function(v) {
    var content = v.data;

    return {
        imageOne: content.attributes.imageOne.data.attributes.url,
        imageTwo: content.attributes.imageTwo.data.attributes.url,
        mailAdress: content.attributes.mailAdress,
        description: content.attributes.description.replaceAll("\n", "<br>"),
        exhibitions: content.attributes.exhibitions.replaceAll("\n", "<br>"),
        publications: content.attributes.publications.replaceAll("\n", "<br>"),
        clients: content.attributes.clients.replaceAll("\n", "<br>"),
        studies: content.attributes.studies.replaceAll("\n", "<br>"),
    }  
}

var addContent = function(e) {

    var masterContainerDiv = `<div id="info-master-container"></div>`
    var masterContainerId = `#info-master-container`

    var infoContainerDiv = `<div id="info-container"></div>`
    var infoContainerId = `#info-container`

    var infoImageContainerDiv = `<div id="info-image-container"></div>`
    var infoImageContainerId = `#info-image-container`

    var infoImageOne = `info-image-one` 
    var infoImageTwo = `info-image-two`

    var infoTextContainerDiv = `<div id="info-text-container"></div>`
    var infoTextContainerId = `#info-text-container`

    var infoTextMailDiv = `<div id="info-text-mail"> ${e.mailAdress} </div>`
    var infoTextMailId = `#info-text-mail`

    var infoTextDescriptionDiv = `<div id="info-text-description"> ${e.description} </div>`
    var infoTextDescriptionId = `#info-text-description`

    var infoFactsContainerDiv = `<div id="info-facts-container"></div>`
    var infoFactsContainerId = `#info-facts-container`

    var infoContainerExhibitionsDiv = `<div id="info-container-exhibitions"></div>`
    var infoContainerExhibitionsId = `#info-container-exhibitions`
    var infoContainerPublicationsDiv = `<div id="info-container-publications"></div>`
    var infoContainerPublicationsId = `#info-container-publications`
    var infoContainerClientsDiv = `<div id="info-container-client"></div>`
    var infoContainerClientId = `#info-container-client`
    var infoContainerStudiesDiv = `<div id="info-container-studies"></div>`
    var infoContainerStudiesId = `#info-container-studies`

    var infoContainerTopDiv = `<div id ="info-container-top"></div>`
    var infoContainerTopId = `#info-container-top`
    var infoContainerBotDiv = `<div id ="info-container-bot"></div>`
    var infoContainerBotId = `#info-container-bot`


    var infoHeadlineExhibitionsDiv = `<div id="info-headline-exhibitions"> Exhibitions </div>`
    var infoHeadlineExhibitionsId = `#info-headline-exhibitions`

    var infoTextExhibitionsDiv = `<div id="info-text-exhibitions"> ${e.exhibitions} </div>`
    var infoTextExhibitionsId = `#info-text-exhibitions`

    var infoHeadlineClientsDiv = `<div id="info-headline-client"> Clients & Brands </div>`
    var infoHeadlineClientsId = `#info-headline-client`

    var infoTextClientsDiv = `<div id="info-text-client"> ${e.clients} </div>`
    var infoTextClientsId = `#info-text-client`

    var infoHeadlinePublicationsDiv = `<div id="info-headline-publications"> Selected Publications </div>`
    var infoHeadlinePublicationsId = `#info-headline-publications`

    var infoTextPublicationsDiv = `<div id="info-text-publications"> ${e.publications} </div>`
    var infoTextPublicationsId = `#info-text-publications`


    var infoHeadlineStudiesDiv = `<div id="info-headline-studies"> Studies </div>`
    var infoHeadlineStudiesId = `#info-headline-studies`

    var infoTextStudiesDiv = `<div id="info-text-studies"> ${e.studies} </div>`
    var infoTextStudiesId = `#info-text-studies`

    $(".nav-master").after(masterContainerDiv)
    $(masterContainerId).append(infoContainerDiv)

    $(infoContainerId).append(infoImageContainerDiv)
    $(infoContainerId).append(infoTextContainerDiv)

    $(infoImageContainerId).append($(`<img>`, { 
        src: "https://louise-mertens-cms.kolbgrafik.de/" + e.imageOne,
    }).addClass(infoImageOne))

    $(infoImageContainerId).append($(`<img>`, { 
        src: "https://louise-mertens-cms.kolbgrafik.de/" + e.imageTwo,
    }).addClass(infoImageTwo))
    

    $(infoTextContainerId).append(infoTextMailDiv)
    $(infoTextContainerId).append(infoTextDescriptionDiv)    

    $(infoTextContainerId).append(infoFactsContainerDiv);

    $(infoFactsContainerId).append(infoContainerTopDiv)
    $(infoFactsContainerId).append(infoContainerBotDiv)

    $(infoContainerTopId).append(infoContainerExhibitionsDiv)
    $(infoContainerTopId).append(infoContainerClientsDiv)
    $(infoContainerBotId).append(infoContainerPublicationsDiv)
    $(infoContainerBotId).append(infoContainerStudiesDiv)

    $(infoContainerExhibitionsId).append(infoHeadlineExhibitionsDiv)
    $(infoContainerExhibitionsId).append(infoTextExhibitionsDiv)
    $(infoContainerClientId).append(infoHeadlineClientsDiv)
    $(infoContainerClientId).append(infoTextClientsDiv)
    $(infoContainerPublicationsId).append(infoHeadlinePublicationsDiv)
    $(infoContainerPublicationsId).append(infoTextPublicationsDiv)
    $(infoContainerStudiesId).append(infoHeadlineStudiesDiv)
    $(infoContainerStudiesId).append(infoTextStudiesDiv)
}