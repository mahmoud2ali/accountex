$(document).ready(function () {
    $(window).on('scroll', ()=>{
        if($(this).scrollTop() > 50)
        {
            $('header').addClass('scrolled');
        }
        else{
            $('header').removeClass('scrolled');
    
        }
    })
    
    
    let imgArr = ["./imgs/slider-1-1920x879.jpg", "./imgs/slider-2-1920x879.jpg" ,"./imgs/slider-3.jpg"]
    
    let home = $("#home")
    let i = 0;
    
    
    function changeBackground()
    {
        home.css('background-image', `url(${imgArr[i]})`);
        home.addClass("activeImg")
        
        setTimeout(()=>{
            home.removeClass('activeImg');
        }, 2000)

        i = (i + 1) % imgArr.length;
    }
    changeBackground();
    setInterval(changeBackground, 5000)


    $(".asidebtn").click(()=>{ 
        $(".navigation-list-items").slideToggle();       

    });
        
});


