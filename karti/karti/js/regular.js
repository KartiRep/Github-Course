

function pageLoading()
{
    // Silly Loader Animation to be removed after moveing to live
    $(".loader").fadeIn();
    setTimeout(function() {$(".site-container").fadeIn(); $(".menu-container").fadeIn();},3000);

    setTimeout(function() {$(".loader").fadeOut();},2500);




    $(".menu-link").click(function(){
        menuToggle();
    });


    





    let vh = window.innerHeight * 0.01;
    // Then we set the value in the --vh custom property to the root of the document
    document.documentElement.style.setProperty('--vh', `${vh}px`);



}


function initHome()
{



    pageLoading();


    $(".list-container ul li a").click(function(){
        togglePopUp('popup-location');
    });

    $(".card-filter select").change(function(){
        filterClickMove();
    });

    setTimeout(function() {
    window.sr = ScrollReveal();
    sr.reveal('.header-container', { distance: '-63px', duration: 750 , viewFactor: 0.1 });
    sr.reveal('.welcome_note', {origin:'right' , distance: '100%', duration: 750 , viewFactor: 0.1, delay: 500 });
    sr.reveal('.list-container header', { duration: 750 , viewFactor: 0.5, delay: 1100 });
    sr.reveal('.list-container.first-list li', { scale: 0.85, duration: 1000, viewFactor: 0.1, interval: 200 , delay: 1500 });
    //sr.reveal('.list-container.second-list li', { scale: 0.85, duration: 1000, viewFactor: 0.75, interval: 200});
/*
    var p = $( ".card-filter" );
    var position = p.position();

    var deScroll = 0;
    var whileScroll = false;

    $(document).scroll(function() {
        if(window.scrollY ==1 && deScroll==0)
        {
            setTimeout(function() {window.scrollTo(0,position.top); deScroll = 1;},500);
            
        }
        else{
            if(window.scrollY == position.top-1 && deScroll==1)
            {
                setTimeout(function() {window.scrollTo(0,0); deScroll = 0; },500);
            }
            else 
            {
            
            }
        }
        
        
        

        //else if(window.scrollY > position.top)
            //setTimeout(function() {window.scrollTo(0,0);},1)

    });*/

},4000);

    
}

function initCardDetails()
{
    pageLoading();

}


function initMyCards()
{



    pageLoading();

    $(".delete").click(function(){
        togglePopUp('popup-delete');
    });
    


    setTimeout(function() {
    window.sr = ScrollReveal();
    sr.reveal('.header-container', { distance: '-63px', duration: 750 , viewFactor: 0.1 });
    sr.reveal('.list-container header', { duration: 750 , viewFactor: 0.5, delay: 1100 });
    sr.reveal('.list-container li', { scale: 0.85, duration: 1000, viewFactor: 0.1, interval: 200 });
    
},4000);

    
}

function initProfile()
{



    pageLoading();


    setTimeout(function() {
    window.sr = ScrollReveal();
    sr.reveal('.header-container', { distance: '-63px', duration: 750 , viewFactor: 0.1 });
    sr.reveal('.list-container header', { duration: 750 , viewFactor: 0.5, delay: 250 });
    sr.reveal('.row', { distance: '-20px', duration: 750 , viewFactor: 0, interval: 200, delay: 500 });
    
},4000);

    
}

function initContact()
{



    pageLoading();


    setTimeout(function() {
    window.sr = ScrollReveal();
    sr.reveal('.header-container', { distance: '-63px', duration: 750 , viewFactor: 0.1 });
    sr.reveal('.list-container header', { duration: 750 , viewFactor: 0.5, delay: 250 });
    sr.reveal('.row', { distance: '-20px', duration: 750 , viewFactor: 0, interval: 200, delay: 500 });
    
},4000);

    
}



function togglePopUp(popupName)
{
    if(popupName)
    {
        $(".site-container").addClass("blur");
        $(".popup-shadow").css("display", "flex");
        $("." + popupName).show();
        $("." + popupName).addClass("fadeInUpBig");
        
        //setTimeout( function() {$("." + popupName + " .icon svg").addClass("bounceIn");} ,200);
    }
    else
    {
        $(".site-container").removeClass("blur");
        $(".popup-shadow").fadeOut(); 
        $(".popup-box").addClass("fadeOutDownBig");

        setTimeout( function() {
            $(".popup-box").hide(); 
            $(".popup-box").removeClass("fadeOutDownBig"); 
            $(".popup-box").removeClass("fadeInUpBig");
            $(".popup-box .icon svg").removeClass("bounceIn");
        } ,500);
    }
}

function nextPopUp(popupName)
{
    $(".popup-box").addClass("fadeOutUpBig");

    setTimeout( function() {
        $(".popup-box").hide(); 
        $(".popup-box").removeClass("fadeOutUpBig"); 
        $(".popup-box").removeClass("fadeInUpBig");
        $(".popup-box .icon svg").removeClass("bounceIn");
    } ,500);

    if(popupName)
    {
        setTimeout( function() {
            $(".site-container").addClass("blur");
            $(".popup-shadow").css("display", "flex");
            $("." + popupName).show();
            $("." + popupName).addClass("fadeInUpBig");
            $("." + popupName + " input").focus();
            
            //setTimeout( function() {$("." + popupName + " .icon svg").addClass("bounceIn");} ,500);

        } ,500);
    }
    
}


function menuToggle()
{
    $(".hamburger").toggleClass("is-active");
    $(".menu-container").toggleClass("show");
}

function filterClickMove()
{
    var p = $( ".card-filter" );
    var position = p.position();
    window.scrollTo(0,position.top);
}