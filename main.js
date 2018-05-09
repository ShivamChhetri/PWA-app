if("serviceWorker" in navigator){
    navigator.serviceWorker.register("../sw.js")
    .then(()=>{
       console.log('SW registered'); 
    })
}




$(document).ready(()=>{
    $('.ride').on('click',(event)=>{
        let get=event.currentTarget;
        $(get).addClass('add');
        $(get).removeClass('change');
        $(get).siblings().removeClass('add');
        $(get).siblings().addClass('change');
        $('#lap'+get.id).siblings().hide();
        $('#lap'+get.id).show();
        $('#bar-body'+get.id).siblings().hide();
        $('#bar-body'+get.id).show();
        if(get.id==3){
            $(".bar-body-container").css('height','230px');
        }else {$(".bar-body-container").css('height','280px');}

    });
});

// SCROLL LEFT
// SCROLL LEFT
$(document).ready(()=>{
    $('#myCarousel').carousel({
        interval: 4000
      })
      
      $('.carousel .item').each(function(){
        var next = $(this).next();
        if (!next.length) {
          next = $(this).siblings(':first');
        }
        next.children(':first-child').clone().appendTo($(this));
        
        for (var i=0;i<1;i++) {
          next=next.next();
          if (!next.length) {
              next = $(this).siblings(':first');
            }
          
          next.children(':first-child').clone().appendTo($(this));
        }
      });
});

/*taxi-type-slider*/
/*taxi-type-slider*/

$(document).ready(()=>{
    let count=1;
    $(".left-arrow").on('click',()=>{
        if(count==1){count=12;}
        else{count--;}
        slider();
        console.log(count);
    });
    $(".right-arrow").on('click',()=>{
        if(count==12){count=1;}
        else{count++;}
        slider();
        console.log(count);
    });
    function slider(){
        $(".taxi-type"+count).siblings().hide();
        $(".taxi-type"+count).show();     
    }

});

$(document).ready(()=>{
    $(".expand").on('click',() =>{
        $('.expand').hide();
        $('.list-hide').show();
    });

    $('.link-hide').on('click',()=>{
        $('.expand').show();
        $('.list-hide').hide();
    })
});