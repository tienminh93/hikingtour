$(function(){
    $('.slide-intro').slick({
        infinite: true,
        slidesToShow: 6,
        slidesToScroll: 1,
        arrows:false,
        autoplay:true,
        responsive: [
          {
            breakpoint: 991,
            settings: {
              slidesToShow: 3,
            }
          },
          {
            breakpoint: 400,
            settings: {
              slidesToShow: 2,
            }
          }
        ]
      });
});

$( function() {
  $( "#datepicker" ).datepicker();
} );

$(document).ready(function(){
  $("#flip").click(function(){
    $("#panel").slideToggle("slow");
  });
});



$(document).ready(function(){
  $(".flips").click(function(){
    $(this).toggleClass("active");
    $(this).parent().find(".panels").slideToggle("slow");
    $(this).parent().siblings().find('.panels').slideUp("slow");;
    $(this).parent().siblings().find('.flips').removeClass("active");
  });
});

$(function(){
  $('.deal-slide').slick({
      infinite: true,
      slidesToShow: 3,
      slidesToScroll: 1,
      arrows:true,
      dots:false,
      autoplay:true,
    });
});

$(function(){
  $('.partner-logo').slick({
      infinite: true,
      slidesToShow: 4,
      slidesToScroll: 2,
      arrows:false,
      dots:true,
      autoplay:false,
    });
});

$(function(){
  $('.section4-card .card-info').slick({
      infinite: true,
      slidesToShow: 3,
      slidesToScroll: 1,
      arrows:false,
      autoplay:true,
      responsive: [
        {
          breakpoint: 991,
          settings: {
            slidesToShow: 2,
          }
        },
        {
          breakpoint: 400,
          settings: {
            slidesToShow: 1,
          }
        }
      ]
    });
});

$(function(){
  $('.about .about-card').slick({
      infinite: true,
      slidesToShow: 1,
      slidesToScroll: 1,
      arrows:false,
      autoplay:true
    });
});

$(function(){
  $(".small-img ul li").click(function(){
    $img = $(this).find("img").attr("src");
    $(".big-img img").attr("src",$img);
  });
});


// nhấn nút back tp top
$(".backtop").click(function() {
  $("html, body").animate({ scrollTop: 0 }, "fast");
  return false;
});

window.onscroll = function() {scrollFunction()};

function scrollFunction() {
  if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
    document.getElementById("back-to-top").classList.add("show");
  } else {
    document.getElementById("back-to-top").classList.remove("show");
  }
}

// nhấn nút submit
$(".fa-paper-plane").click(function() {
    alert("Thank you for send email");
    $(".footer-email input").val("");
});

$(".send button").click(function() {
  alert("Thank you for send infomation");
  $(".mess textarea").val("");
  $(".name input").val("");
});

class numberRush {
  constructor(tagId, options) {
      this.tagId = tagId;
      this.tagName = document.getElementById(`${tagId}`);
      this.speed = this._speed(options)
      this.maxNumber = this._maxNumber(options)
      this.steps = this._steps(options)
      this.render()
  }
  scrollActiv = true
  render(){
      let obgTag = this.tagName;
      let numberTag = this._numberRen(obgTag)
      let timeTag = this.speed;
      let numberMax = this.maxNumber;
      let mrginTop = obgTag.offsetTop;
      window.addEventListener('scroll',()=>{
          let mrginTop = obgTag.offsetTop;
          let scrollop = window.scrollY + window.innerHeight;
          if(scrollop > mrginTop && this.scrollActiv === true){
              this._activeView(obgTag, timeTag, numberMax, numberTag)
          }
      })
      if(mrginTop < window.innerHeight){
          this._activeView(obgTag, timeTag, numberMax, numberTag)
      }
  }
  _activeView(obgTag, timeTag, numberMax, numberTag){
      this.scrollActiv = false;
      if(obgTag.className != `activ-${this.tagId}`){
          obgTag.classList.add(`activ-${this.tagId}`)
          this._numRash(obgTag, timeTag, numberMax, numberTag)
      }
  }
  _numberRen(obgTag){
      let numberBefore = obgTag.innerText;
      let numberAfter = Number(numberBefore)
      return numberAfter
  }
  _numRash(obgTag, timeTag, numberMax, numberTag){
      if(numberTag < numberMax){
          setTimeout(()=>{
              let summm = this._numSteep(numberTag, numberMax);
              obgTag.innerText = summm
              this._numRash(obgTag, timeTag, numberMax, summm)
          }, timeTag)
      }
  }
  _numSteep(numberTag, numberMax){
      if (numberTag + this.steps < numberMax){
          return numberTag + this.steps;
      } else {
          let numberSteep = numberMax - numberTag;
          return numberTag + numberSteep;
      }
  }
  _speed(options){
      if (options === undefined || options.speed === undefined){
          return 5;
      } else {
          return options.speed;
      }
  }
  _maxNumber(options){
      let dataMaxNumber = Number(this.tagName.dataset.maxNumber)
      if (this.tagName.dataset.maxNumber !== undefined){
          return dataMaxNumber
      } else if(options === undefined || options.maxNumber === undefined || dataMaxNumber === undefined){
          return 300;
      } else {
          return options.maxNumber;
      }
  }
  _steps(options){
      if (options === undefined || options.steps === undefined){
          return 1;
      } else {
          return options.steps;
      }
  }
}
