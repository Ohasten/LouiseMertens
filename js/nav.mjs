export function navMain() {
    setNavStartDefault();

    getCurrentView()
    logicHideShowContainerClick();
    hideNavCurrent();
}

var artMasterId = "#art-master-container";
var comMasterId = "#com-master-container";
var infoMasterId = "#info-master-container";

var navLouise = "#nav-louise";
var navArt = "#nav-art";
var navCom = "#nav-com";
var navDiary = "#nav-diary";
var navCata = "#nav-cata";

var navEl = ["#nav-louise", "#nav-art", "#nav-com", "#nav-cata"];

var off = "nav-off";


var setNavStartDefault = function() {
    /* DEFAULT LOAD */
    sessionStorage.setItem("view", "art");
    var navDisplay = ["#nav-louise", "#nav-art", "#nav-com", "#nav-diary", "#nav-cata"];
    navDisplay.forEach(v => {
        if(v != navArt) {
            $(v).toggleClass(off)
        } 

    });
}
var getCurrentView = function() {

    $(navArt).click(function(){
        sessionStorage.setItem("view", "art");
    })
    $(navCom).click(function(){
        sessionStorage.setItem("view", "com");
    })
    $(navCata).click(function(){
        // TBD
    })

}
var logicHideShowContainerClick = function() {
    function hideContainer(div, boolean) {
        if(boolean) {
            $(div).css({
                "display": "none",
                "opacity": "0",
                "visibility": "hidden",
                "pointer-events": "none",
            })
        } else {
            $(div).css({
                "display": "unset",
                "opacity": "1",
                "visibility": "visible",
                "pointer-events": "auto",
            })
        }
    }

    $(navLouise).click(function(){
        switch (sessionStorage.getItem("view")) {
            case "art": hideContainer(comMasterId, true) ; break;
            case "com": hideContainer(artMasterId, true) ; break;
        }
    })
    $(navArt).click(function(){
        hideContainer(artMasterId, false)
        hideContainer(infoMasterId, true)
        hideContainer(comMasterId, true)
    })
    $(navCom).click(function(){
        hideContainer(comMasterId, false)
        hideContainer(infoMasterId, true)
        hideContainer(artMasterId, true)
    })
    $(navCata).click(function(){
        //TBD
    })
    
    var canBeClosed = false;
    navEl.forEach(v => {
        $(v).click(function(){
            if(v === navLouise && !canBeClosed) {
                hideContainer(infoMasterId, false)
                canBeClosed = true;
            } else if(canBeClosed) {
                hideContainer(infoMasterId, true)
                canBeClosed = false;
            }
        })
    });
}
var hideNavCurrent = function() {

    $(navLouise).click(function(){
        if($(navLouise).text() === "Louise Mertens"){
            console.log("1")
            $(navCom).removeClass(off)
            $(navArt).removeClass(off)
            // $(navCata).removeClass(off)
        }
        
        if($(navLouise).text() === "Close"){
            console.log("2")
            switch(sessionStorage.getItem("view")){
                case "art": $(navArt).toggleClass(off); break;
                case "com": $(navCom).toggleClass(off); break;
            }
        }
    })
    $(navArt).click(function(){
        $(this).toggleClass(off)
        $(navCom).removeClass(off)

    })
    $(navCom).click(function(){
        $(this).toggleClass(off)
        $(navArt).removeClass(off)

    })
    $(navCata).click(function(){
        // TBD
    })

    var showCloseNext = true;
    navEl.forEach(v => {
        $(v).click(function(){
            if(v === navLouise && showCloseNext) {
                $(navLouise).text("Close");
                showCloseNext = false;
            } else if(!showCloseNext) {
                $(navLouise).text("Louise Mertens");
                showCloseNext = true;
            }
        })
    });

}
var hideInfo = function() {
    $(navLouise).click(function(){

    })
}
