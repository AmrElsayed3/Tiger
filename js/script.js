/*global $,console*/
$(document).ready(function () {
  
    "use strict";   
    
/*----------------------------Smooth Scroll To Element--------------------------------------*/
        
    $(".tiger-list .menu-list li a ,.tiger-collapse .anchor li a").click(function (e) {
       
        e.preventDefault();
        $('html,body').animate({
            
            scrollTop: $('#' + $(this).data('scroll')).offset().top -60
        }, 1000);
        
    });
    
/*------------------------------------------------------------------------------------------*/
/*-----------------------------------Section about------------------------------------------*/
    
    $(".down a").click(function (e) {
       
        e.preventDefault();
        $('html,body').animate({
            
            scrollTop: $('#' + $(this).data('scroll')).offset().top-60
        }, 1000);
        
    });
/*------------------------------------------------------------------------------------------*/
/*--------------------------------------Home------------------------------------------------*/
    
    $(".about .index a").click(function (e) {
       
        e.preventDefault();
        $('html,body').animate({
            
            scrollTop: $('#' + $(this).data('scroll')).offset().top
        }, 1000);
        
    });
    
    $(".about .cont a").click(function (e) {
       
        e.preventDefault();
        $('html,body').animate({
            
            scrollTop: $('#' + $(this).data('scroll')).offset().top
        }, 1000);
        
    });
/*------------------------------------------------------------------------------------------*/
/*-----------------------------------Resize the list----------------------------------------*/
    
    $(".tiger-list .resize").click(function (e) {
       
        e.preventDefault();
        
        var fixed_menu = $(this).parent(".leftpar-inner").parent(".tiger-list");
        
        fixed_menu.toggleClass("visible");

        if (fixed_menu.hasClass("visible")) {
        
            $('body').animate({

                marginLeft:0

            },200);
            
            fixed_menu.animate({
                
                left: "-300px"

            }, 1);

        } else {
            
            $("body").animate({
               
                marginLeft: "300px"    
            
            });
            
            fixed_menu.animate({
            
                left: 0
            
            }, 1);
        }        
    });
   
/*------------------------------------------------------------------------------------------*/
/*--------------------------------Tiger List Effect----------------------------------------*/
        
    $('.tiger-list .menu-list ul li a').hover(function (){
        
        $(this).find('span').animate({
        
            width:'50px' 
           
        },300);
            
        
    },function (){
    
        $(this).find('span').animate({
        
            width:0 
           
        },300);
            
        
    });
    
    $(window).scroll(function(){
/*----------------------------------Animated Progress Bar-----------------------------------*/
        
        
        if($(window).scrollTop() > $('.skills').offset().top-300){
        
        
            $('.progress .ti').addClass('open')
   
         
        }

        
        var a = 0;        
        
        var oTop = $('.award').offset().top - window.innerHeight;
  
        if (a == 0 && $(window).scrollTop() > oTop) {
           
            $('.counter-value').each(function() {
      
                var $this = $(this),
        
                    countTo = $this.attr('data-count');
     
                $({
       
                    countNum: $this.text()
      
                }).animate({
         
                    countNum: countTo
        
                },
                          
                           {

          
                    duration: 500,
          
                    easing: 'swing',
          
                    step: function() {
            
                        $this.text(Math.floor(this.countNum));
          
                    },
          
                    complete: function() {
           
                        $this.text(this.countNum);
          
                    }
       
                });
            });
            a = 1;
        }
        
/*------------------------------------------------------------------------------------------*/  
/*------------------------------------- Button to top---------------------------------------*/
        
        if ($(window).scrollTop() >= 1000) {
           
            $(".tiger-top").addClass('opened');
       
        } else {
            $(".tiger-top").removeClass('opened');
        }
        
        
    });
    
/*------------------------------------------------------------------------------------------*/  
/*--------------------------------------Click To Go top-------------------------------------*/
    
    $('.tiger-top').click(function(e){
       e.preventDefault();
        $('html , body').animate({
            scrollTop:0
        },500)
    });
    
/*------------------------------------------------------------------------------------------*/  
/*------------------------------------Work link---------------------------------------------*/
   
    $('.work-link li a.designe').click(function (e){
    
        e.preventDefault();
        
        if($(window).width() >= 771 && $(window).width() < 1198){
        
            $('.photog,.develop').animate({
            
                width:0,
                
                padding:0
            
            },function(){
            
                $('.photog,.develop').css('display','none')
            
            });
            
            $('.design').animate({
            
                width:'43%',
                
                padding:'40px'
            
            },function(){
            
                $('.design').css('display','block')
            
            });
            
            $(this).addClass('current').parent().siblings().children().removeClass('current');
            
        }
        
        else if($(window).width() >= 483 && $(window).width() < 768 ){
        
            $('.photog,.develop').animate({
            
                width:0,
                
                padding:0
            
            },function(){
            
                $('.photog,.develop').css('display','none')
            
            });
            
            $('.design').animate({
            
                width:'43%',
                
                padding:'40px'
            
            },function(){
            
                $('.design').css('display','block')
            
            });
            
            $(this).addClass('current').parent().siblings().children().removeClass('current');
        }
        
        else if($(window).width() < 561){
            
            $('.photog,.develop').animate({
            
                width:0,
                
                padding:0
            
            },function(){
            
                $('.photog,.develop').css('display','none')
            
            });
            
            $('.design').animate({
            
                width:'100%',
                
                padding:'40px'
            
            },function(){
            
                $('.design').css('display','block')
            
            });
            
            $(this).addClass('current').parent().siblings().children().removeClass('current');
        
        }
        
        else{
            
            $('.photog,.develop').animate({
                
                width:0,
                
                padding:0
            
            },function(){
            
                $('.photog ,.develop').css('display','none')
            
            });
            
            $('.design').animate({
            
                width:'33%',
                
                padding:'40px'
            
            },function(){
            
                $('.design').css('display','block')
            
            });
            
            $(this).addClass('current').parent().siblings().children().removeClass('current');
        
        }
    
    });
    
/*------------------------------------------------------------------------------------------*/
/*------------------------------------------------------------------------------------------*/
    
    $('.work-link li a.photogr').click(function (e){
        
        e.preventDefault();
        
        if($(window).width() >= 771 && $(window).width() < 1198){
            
            $('.design,.develop').animate({
                
                width:0,
                
                padding:0
            
            },function(){
            
                $('.design,.develop').css('display','none')
            
            });

            $('.photog').animate({
                
                width:'43%',
                
                padding:'40px'
            
            },function(){

                $('.photog').css('display','block')
            
            });

            
            $(this).addClass('current').parent().siblings().children().removeClass('current')
        
        }
        
        else if($(window).width() >= 483 && $(window).width() < 768 ){
            
            $('.design,.develop').animate({
            
                width:0,
                
                padding:0
            
            },function(){
            
                $('.design,.develop').css('display','none')
            
            });

            $('.photog').animate({
               
                width:'43%',
                
                padding:'40px'
            
            },function(){

                $('.photog').css('display','block')
            });

            $(this).addClass('current').parent().siblings().children().removeClass('current')
         
        }
        
        else if($(window).width() < 561){
        
            $('.design,.develop').animate({
            
                width:0,
                
                padding:0
            
            },function(){
            
                $('.design,.develop').css('display','none')
            
            });

            $('.photog').animate({
                
                width:'100%',
                
                padding:'40px'
            
            },function(){

                $('.photog').css('display','block')
           
            });

            $(this).addClass('current').parent().siblings().children().removeClass('current') 

        }
        else{
            
            $('.design,.develop').animate({
            
                width:0,
                
                padding:0
            
            },function(){
            
                $('.design,.develop').css('display','none')
            
            });

            $('.photog').animate({
            
                width:'33%',
                
                padding:'40px'
            
            },function(){

                $('.photog').css('display','block')
            
            });

            $(this).addClass('current').parent().siblings().children().removeClass('current')

        }
    });
    
/*------------------------------------------------------------------------------------------*/
/*------------------------------------------------------------------------------------------*/
    
    $('.work-link li a.developm').click(function (e){
    
        e.preventDefault();
        
        if($(window).width() >= 771 && $(window).width() < 1198){
        
            $('.design,.photog').animate({
            
                width:0,
                
                padding:0
            
            },function(){
            
                $('.design,.photog').css('display','none')
            
            });

            $('.develop').animate({
            
                width:'43%',
                
                padding:'40px'
            
            },function(){

                $('.develop').css('display','block')
            
            });

            $(this).addClass('current').parent().siblings().children().removeClass('current')
        }
        
        else if($(window).width() >= 483 && $(window).width() < 768 ){
        
            $('.design,.photog').animate({
                
                width:0,
                
                padding:0
            
            },function(){
            
                $('.design,.photog').css('display','none')
            
            });

            $('.develop').animate({

                width:'43%',
                
                padding:'40px'
            
            },function(){

                $('.develop').css('display','block')
            
            });

            $(this).addClass('current').parent().siblings().children().removeClass('current')
        }
        else if($(window).width() < 561){ 
            
            $('.design,.photog').animate({
            
                width:0,
                
                padding:0
            
            },function(){
            
                $('.design,.photog').css('display','none')
            
            });

            $('.develop').animate({
                
                width:'100%',
                
                padding:'40px'
            
            },function(){

                $('.develop').css('display','block')
            
            });

            $(this).addClass('current').parent().siblings().children().removeClass('current')

        }
        else{
            
            $('.design,.photog').animate({
            
                width:0,
                
                padding:0
            },function(){
               
                $('.design,.photog').css('display','none')
            
            });

            $('.develop').animate({
            
                width:'31%',
                
                padding:'40px'

            },function(){

                $('.develop').css('display','block')
            
            });

            $(this).addClass('current').parent().siblings().children().removeClass('current')
        }
    
    });
/*------------------------------------------------------------------------------------------*/
/*------------------------------------------------------------------------------------------*/

    $('.work-link li a.all').click(function (e){
        
        e.preventDefault();
        
        if($(window).width() >= 771 && $(window).width() < 1198){
        
            $('.work .block').animate({
            
                width:'43%',
                
                padding:'40px'
            
            },function(){

                $('.work .block').css('display','block')
            
            });

            $(this).addClass('current').parent().siblings().children().removeClass('current')
        }

        else if($(window).width() >= 483 && $(window).width() < 768 ){
           
            $('.work .block').animate({
            
                width:'43%',
                
                padding:'40px'
            
            },function(){

                $('.work .block').css('display','block')
            
            });

            $(this).addClass('current').parent().siblings().children().removeClass('current')
        }
        else if($(window).width() < 561){ 
            
            $('.work .block').animate({
            
                width:'100%',
                
                padding:'40px'
            
            },function(){

                $('.work .block').css('display','block')
            
            });

            $(this).addClass('current').parent().siblings().children().removeClass('current')

        }
        else{
           
            $('.work .block').animate({
               
                width:'31%',
                
                padding:'40px'
            
            },function(){

                $('.work .block').css('display','block')
            });

            $(this).addClass('current').parent().siblings().children().removeClass('current') 
        }


    });
        
/*------------------------------------------------------------------------------------------*/
/*------------------------------------------------------------------------------------------*/  

    $(window).resize(function(){
        
        if($(window).width() >= 771 && $(window).width() < 1198){
        
            $('.work .block').animate({
            
                width:'43%',
                
                padding:'40px'
            
            },50)
        }

        else if($(window).width() >= 483 && $(window).width() < 768 ){
            
            $('.work .block').animate({
                
                width:'100%',
                
                padding:'40px'
            
            },50);

        }
        else if($(window).width() < 561){ 
            
            $('.work .block').animate({
                
                width:'100%',
                
                padding:'40px'
            
            },50);
        }
        else{
           $('.work .block').animate({
                
               width:'30%',
                
               padding:'40px'
            
           },50);

        }
    });
/*------------------------------------------------------------------------------------------*/
/*------------------------------------------------------------------------------------------*/
/*------------------------------------Typing text-------------------------------------------*/

    var TxtType = function (el, toRotate, period) {
        
        this.toRotate = toRotate;
        
        this.el = el;
        
        this.loopNum = 0;
        
        this.period = parseInt(period, 10) || 2000;
        
        this.txt = '';
        
        this.tick();
        
        this.isDeleting = false;
    
    };

    TxtType.prototype.tick = function () {
        
        var i = this.loopNum % this.toRotate.length;
        
        var fullTxt = this.toRotate[i];

        if (this.isDeleting) {
        
            this.txt = fullTxt.substring(0, this.txt.length - 1);
        } else {
        
            this.txt = fullTxt.substring(0, this.txt.length + 1);
        }

        this.el.innerHTML = '<span class="wrap">' + this.txt + '</span>';

        var that = this;
        
        var delta = 200 - Math.random() * 100;

        if (this.isDeleting) { delta /= 2; }

        if (!this.isDeleting && this.txt === fullTxt) {
        
            delta = this.period;
        
            this.isDeleting = true;
            
        } else if (this.isDeleting && this.txt === '') {
        
            this.isDeleting = false;
        
            this.loopNum++;
        
            delta = 500;
        }

        setTimeout(function () {
        
            that.tick();
            
        }, delta);
    };

    window.onload = function () {
        
        var elements = document.getElementsByClassName('typewrite');
        
        for (var i=0; i<elements.length; i++) {
        
            var toRotate = elements[i].getAttribute('data-type');
            
            var period = elements[i].getAttribute('data-period');
            
            if (toRotate) {
            
                new TxtType(elements[i], JSON.parse(toRotate), period);
            
            }
        
        }
    
    };
/*------------------------------------------------------------------------------------------*/  
/*-----------------------------------Hover Section About------------------------------------*/
    
    $(".about").hover(function (){
       
        $(".about .photo").animate({
        
            left:"-23px",
           
            top:"-25px"
           
       },1000) 
    
    },function (){
        
        $(".about .photo").animate({
         
            left:"-30px",
           
            top:"-35px"
        
        },1000)
    });
    
/*------------------------------------------------------------------------------------------*/  
/*-------------------------------------Buttons Effect---------------------------------------*/
    
    $('.toggle').click(function(){
        
        $('.tiger-collapse').toggleClass("visible");
        
        if ($('.tiger-collapse').hasClass("visible")){
        
            $('.tiger-collapse').animate({
            
                top:"86px"
       
            },500);
            
             $('.toggle span:last-of-type').animate({
            
                 width:0,
            
                 height:0
            },1);
            
            $('.toggle span:nth-of-type(2)').addClass('rotate');
            
            $('.toggle span:first-of-type').addClass('rotate2');
            
        }else{
            
            $('.tiger-collapse').animate({
            
                top:"-165px"
       
            },500);
            
            $('.toggle span:last-of-type').animate({
            
                 width:"35px",
            
                 height:"2px"
             },100);
           
            $('.toggle span:nth-of-type(2)').removeClass('rotate');
            
            $('.toggle span:first-of-type').removeClass('rotate2');
            
        }
        
    });
    
    $(window).resize(function(){
       
        if($(window).width()>1053){
        
            $('.tiger-collapse').animate({
            
                top:'-300px'
           
            },1)
           
            
            $('.tiger-collapse').toggleClass("visible");
            
            $('.toggle span:last-of-type').animate({
            
                 width:"35px",
            
                 height:"2px"
            
            },100);
            
            $('.toggle span:nth-of-type(2)').removeClass('rotate');
            
            $('.toggle span:first-of-type').removeClass('rotate2');
      
        } 
    
    });
    
});