import { randomArt } from "./art.mjs";

export function navMain() {
    setDefault();
    initNav();
}

var artMasterId = "#art-master-container";
var comMasterId = "#com-master-container";
var infoMasterId = "#info-master-container";

var masterArr = ["#art-master-container", "#com-master-container", "#info-master-container"]

var navMaster = ".nav-master"

var navLouise = "#nav-louise";
var navArt = "#nav-art";
var navCom = "#nav-com";
var navDiary = "#nav-diary";
var navCata = "#nav-cata";
var navBack = "#nav-back";
var navMail = "#nav-mail"

var navEl = ["#nav-louise", "#nav-art", "#nav-com", "#nav-cata"];
var navToggleEl = ["#nav-art", "#nav-com", "#nav-cata"];

var off = "nav-off";
var on = "nav-on";

var setDefault = function() {
    /* DEFAULT LOAD */
    sessionStorage.setItem("view", "art");
    sessionStorage.setItem("info", "closed");
    document.body.scrollTop = 0;
    document.documentElement.scrollTop = 0;
    var navDisplay = ["#nav-louise", "#nav-art", "#nav-com", "#nav-diary", "#nav-mail","#nav-cata"];
    navDisplay.forEach(v => {
        if(v != navArt) {
            $(v).toggleClass(off)
        } 

    });
}

var initNav = function() {

    $(navLouise).click(function(){
        setPreviousScrollPosition()

        switchContainerTo(infoMasterId)
        toggleNavEl(this)
        addCloseBtn(this)
        btnCloseContainerInfo()
        resetScroll(this)

        /* IMPORT FUNCTION */
        // randomInfo();
    })

    $(navArt).click(function(){
        setCurrentView("view", "art")
        switchContainerTo(artMasterId)
        toggleNavEl(this)
        addCloseBtn(this)
        resetScroll(this)

        /* IMPORT FUNCTION */
        randomArt();
    })

    $(navCom).click(function(){
        setCurrentView("view", "com")
        switchContainerTo(comMasterId)
        toggleNavEl(this)
        addCloseBtn(this)
        resetScroll(this)
    })
    $(navCata).click(function(){
        // TBD
    })

    addBackToTopBtn();
    $(navBack).click(function(){
        toTop(0)
    })

}

/* MICRO FUNCTIONS */
function setCurrentView(heading, value) {
    sessionStorage.setItem(heading, value);
}
var previousScrollPosition;
function setPreviousScrollPosition() {
    if(parseInt(getScrollPosition()) > 0) {
        previousScrollPosition = parseInt(getScrollPosition());
    } 
}
function showContainer(id, boolean) {
    if(boolean) {
        $(id).css({
            "display": "unset",
            "opacity": "1",
            "visibility": "visible",
            "pointer-events": "auto",
        })
    } else {
        $(id).css({
            "display": "none",
            "opacity": "0",
            "visibility": "hidden",
            "pointer-events": "none",
        })
    }
}
function convertID(el) {
    return `#${el.id}`
}
function getScrollPosition() {
    var result = $(document).scrollTop()

    return result;
}
function toTop(int) {
    document.body.scrollTop = int;
    document.documentElement.scrollTop = int;
}
/* MICRO FUNCTIONS */

function switchContainerTo(destination) {
    masterArr.forEach(v => {
        if(v === destination) {
            showContainer(v, true); 
        } else {
            showContainer(v, false);
        }
    });
}
function btnCloseContainerInfo() {
    if($(navLouise).text() === "Louise Mertens +") {

        var previousView = sessionStorage.getItem("view")
        var previousViewId = `#${previousView}-master-container`;
        var previousViewNav = `#nav-${previousView}`

        //TOGGLE CONTAINER
        showContainer(previousViewId, true);
        showContainer(infoMasterId, false);

        //RESET NAVBAR
        $(previousViewNav).addClass(off)
    }
}
function toggleNavEl(x) {
    var id = convertID(x)

    navToggleEl.forEach(v => {
        if(v === id) {
            $(v).addClass(off)
        } else {
            $(v).removeClass(off)
        }        
    });
}
function addCloseBtn(x) {
    var id = convertID(x)

    $.fn.extend({
        toggleText: function(a, b){
            return this.text(this.text() == b ? a : b);
        }
    });

    if(id === navLouise) {
        $(navLouise).toggleText("Louise Mertens +", "Close")
    } else {
        $(navLouise).text("Louise Mertens +")
    }     

}
function resetScroll(x) {
    if($(x).text() === "Louise Mertens +") {
        var scroll = previousScrollPosition;

        toTop(scroll)
        previousScrollPosition = 0;
    } else {
        toTop(0)
    }
}
function addBackToTopBtn() {
    $(document).scroll(function(){
        if ($(document).scrollTop() > 40) {
            $(navBack).removeClass(off)
        } else {
            $(navBack).addClass(off)
        }
    })    
}