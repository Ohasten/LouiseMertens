export function aniMain() {
    initDefaultAnimation()
    initNavAnimation()
}

/* NAV ANINMATIONS */
var navLouise = "#nav-louise";
var navArt = "#nav-art";
var navCom = "#nav-com";
var navCata = "#nav-cata";
var navToggleEl = ["#nav-art", "#nav-com", "#nav-cata"];
var initNavAnimation = function() {
    var time = 1500;

    $(navLouise).click(function(){

    })
    $(navArt).click(function(){
        resetAnimations(this)
        artAnimationLeft(time)
    })
    $(navCom).click(function(){
        resetAnimations(this)
        comAnimationLeft(time)
    })
    $(navCata).click(function(){
        // TBD
    })
}
/* NAV ANINMATIONS */

/* LOGIC */

var resetAnimations = function(x) {
    function reset(el){
        $(el).css({
            "display": "none",
        })
    }

    var getId =`#${x.id}`;

    if(getId === navArt) {
        reset(".com-ani-reset")
    } else if(getId === navCom) {
        reset(".art-ani-reset")
    }
}

/* LOGIC */


/* DEFAULT START */
var initDefaultAnimation = function() {
    var first = 1500
    artAnimationLeft(first)
    
    setTimeout(function(){
        artAnimationRight(500)
        navAnimation(500)
    }, (first + 200))
}
/* DEFAULT START */

/* ART */
var artAnimationLeft = function(duration) {
    $(".art-left-image").slideDown(duration, function() {
            
    });
}

var artAnimationRight = function(duration){
    $(".art-right-image").animate({
        opacity: 1
    }, duration, function(){

    })
}
/* ART */


/* NAV */
var navAnimation = function(duration) {
    $(".nav-element").animate({
        opacity: 1,
    }, duration, function(){

    })
}
/* NAV */

/* COM */
var comAnimationLeft = function(duration) {
    $(".com-image").slideDown(duration, function() {
    });
}