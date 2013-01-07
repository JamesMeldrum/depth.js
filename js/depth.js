$("#secondBody").height($(window).height())
    x = 1
    $(document).keydown(function(e){
        if (e.keyCode == 39) { 
            goToNext(x)
           return false;
        }
    });
    height = $(window).height()*2;
    width = $(window).width();
    
    
    toptri = height/2 - 200;
    $("#toptri").css('top', toptri)
    
    
//  $(".backPanel").width(width);
    $(".backPanel").height(height)

    $("#mid-1").css('top',height*0.8)
    $("#front-1").css('top',height)
    
    
    $("#buttMid1").click(function(){
        // find active button
        $(".active").removeClass('active')
        $("#buttMid1").addClass('active')
        $('html,body').animate({
                scrollTop: 0
                },1000);
    })
    $("#buttMid2").click(function(){
        $(".active").removeClass('active')
        $("#buttMid2").addClass('active')
        $('html,body').animate({
                scrollTop: $("#secondBody").offset().top
                },1000);
    })
    
    $("#buttMid3").click(function(){
        $(".active").removeClass('active')
        $("#buttMid3").addClass('active')
        goToNext(1)
    })
    $("#buttMid4").click(function(){
        $(".active").removeClass('active')
        $("#buttMid4").addClass('active')
        goToNext(2)
    })
    $("#buttMid5").click(function(){
        $(".active").removeClass('active')
        $("#buttMid5").addClass('active')
        goToNext(3)
    })
    $("#buttMid6").click(function(){
        $(".active").removeClass('active')
        $("#buttMid6").addClass('active')
        goToNext(4)
    })
    $("#buttMid7").click(function(){
        $(".active").removeClass('active')
        $("#buttMid7").addClass('active')
        goToNext(5)
    })  
    var pageBottom, totalPage, pageSize, section;
    
    $(window).scroll(function(){
        
        //////
        //
        // The situation
        //
        //////
        
        /*
            So what we have to do here is figure out where we are
            so we know which elements to move about while scrolling.
            My plan is to use to some simple maths
        */
        
        // where we are
        pageBottom = window.pageYOffset;
        
        // how much are we looking at
        totalPage = $("#mainBody").height();
        
        // Page size --- yes yes i know, i'm limiting it to only one page size atm...
        pageSize = $(".backPanel").height();
        
        // Therefore we are at section
        
        
        section =parseInt(((pageBottom + $(window).height()/2)/pageSize));
        
        // Now lets grab this section
        
        if($("#front-" + section).length || $("#mid-" + section).length){
            midz = $("#mid-" + section).data("z")
            midy = $("#mid-" + section).data("y") ;
            k = 2
            
            frontz = $("#front-" + section).data("z")
            fronty = $("#front-" + section).data("y") ;
    
            percent = ($(window).height()/2 + pageBottom)/(($("#back-1").height()))-(section)
            $("#mid-" + section).css('top', (height*(0.5-percent)*(100-midz)/70 + height/2 - $("#mid-" + section).height()/2 + midy ))
            $("#front-" + section).css('top', ( (height*(0.5-percent)*(100-frontz)/70)  + height/2 - $("#front-" + section).height()/2) + fronty )
              
        }
        
        
        
        
        getPos = $(window).scrollTop() ;
        if (getPos <  $("#initialBack").height()){
            $(".active").removeClass('active')
            $("#buttMid1").addClass('active')   
        }
        if ((getPos >  $("#initialBack").height()) && (getPos <  $("#secondBody").offset().top + $("#secondBody").height())){
            $(".active").removeClass('active')
            $("#buttMid2").addClass('active')   
        }
        if ((getPos >  $("#secondBody").offset().top + $("#secondBody").height()) && (getPos < $("#back-1").offset().top) + $("#back-1").height()){
            $(".active").removeClass('active')
            $("#buttMid3").addClass('active')   
        }
        if ((getPos > $("#back-1").offset().top + $("#back-1").height()) && (getPos < $("#back-2").offset().top + $("#back-2").height())){
            $(".active").removeClass('active')
            $("#buttMid4").addClass('active')   
        }
        if ((getPos > $("#back-2").offset().top + $("#back-2").height()) && (getPos < $("#back-3").offset().top + $("#back-3").height())){
            $(".active").removeClass('active')
            $("#buttMid5").addClass('active')   
        }       
        if ((getPos > $("#back-3").offset().top + $("#back-3").height()) && (getPos < $("#back-4").offset().top + $("#back-4").height())){
            $(".active").removeClass('active')
            $("#buttMid6").addClass('active')   
        }       
        if ((getPos > $("#back-4").offset().top + $("#back-4").height()) && (getPos < $("#back-5").offset().top + $("#back-5").height())){
            $(".active").removeClass('active')
            $("#buttMid7").addClass('active')   
        }                   
    })
    
    function goToNext(x){
        $('html,body').animate({
            scrollTop: $("#back-" + x).offset().top + $("#back-" + x).height()/2 - $(window).height()/2
        },1500);
    
    }
