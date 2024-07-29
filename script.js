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
        

   
    // let testimonials_list = document.querySelectorAll(".test-container")
    // let testimonials_btns = document.querySelectorAll(".test-btn")

    // $('#btn1').click(() => { 
        
    //     testimonials_list.forEach(item => 
    //         $(item).removeClass('active-container')
    //     );
        
    //     testimonials_btns.forEach(btn =>
    //         $(btn).removeClass("test-active-btn")
    //     );

    //     $("#btn1").addClass("test-active-btn");
    //     $(".test-container-1").addClass("active-container");
    // });

    // $('#btn2').click(() => { 
    //     testimonials_list.forEach(item => 
    //         $(item).removeClass('active-container')
    //     );

    //     testimonials_btns.forEach(btn =>
    //         $(btn).removeClass("test-active-btn")
    //     );

    //     $("#btn2").addClass("test-active-btn");


    //     $(".test-container-2").addClass("active-container");

    // });

    // $('#btn3').click(() => { 
        
    //     testimonials_list.forEach(item => 
    //         $(item).removeClass('active-container')
    //     );
    //     testimonials_btns.forEach(btn =>
    //         $(btn).removeClass("test-active-btn")
    //     );

    //     $("#btn3").addClass("test-active-btn");

        
    //     $(".test-container-3").addClass("active-container");
    // });

    // $('#btn4').click(() => { 
        
    //     testimonials_list.forEach(item => 
    //         $(item).removeClass('active-container')
    //     );

    //     testimonials_btns.forEach(btn =>
    //         $(btn).removeClass("test-active-btn")
    //     );

    //     $("#btn4").addClass("test-active-btn");

    //     $(".test-container-4").addClass("active-container");
    // });


    function updateTestimonial(btnId, containerClass) {
        $(".test-container").removeClass('active-container');
        $('.test-btn').removeClass("test-active-btn");
        $(`#${btnId}`).addClass("test-active-btn");
        $(`.${containerClass}`).addClass("active-container");
    }


    $('#btn1').click(() => updateTestimonial("btn1", "test-container-1"));
    $('#btn2').click(() => updateTestimonial("btn2", "test-container-2"));
    $('#btn3').click(() => updateTestimonial("btn3", "test-container-3"));
    $('#btn4').click(() => updateTestimonial("btn4", "test-container-4"));


});


