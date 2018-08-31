/**
* jquery.matchHeight-min.js master
* https://github.com/liabru/jquery-match-height
* License: MIT
*/
(function(c){var n=-1,f=-1,g=function(a){return parseFloat(a)||0},r=function(a){var b=null,d=[];c(a).each(function(){var a=c(this),k=a.offset().top-g(a.css("margin-top")),l=0<d.length?d[d.length-1]:null;null===l?d.push(a):1>=Math.floor(Math.abs(b-k))?d[d.length-1]=l.add(a):d.push(a);b=k});return d},p=function(a){var b={byRow:!0,property:"height",target:null,remove:!1};if("object"===typeof a)return c.extend(b,a);"boolean"===typeof a?b.byRow=a:"remove"===a&&(b.remove=!0);return b},b=c.fn.matchHeight=
function(a){a=p(a);if(a.remove){var e=this;this.css(a.property,"");c.each(b._groups,function(a,b){b.elements=b.elements.not(e)});return this}if(1>=this.length&&!a.target)return this;b._groups.push({elements:this,options:a});b._apply(this,a);return this};b._groups=[];b._throttle=80;b._maintainScroll=!1;b._beforeUpdate=null;b._afterUpdate=null;b._apply=function(a,e){var d=p(e),h=c(a),k=[h],l=c(window).scrollTop(),f=c("html").outerHeight(!0),m=h.parents().filter(":hidden");m.each(function(){var a=c(this);
a.data("style-cache",a.attr("style"))});m.css("display","block");d.byRow&&!d.target&&(h.each(function(){var a=c(this),b=a.css("display");"inline-block"!==b&&"inline-flex"!==b&&(b="block");a.data("style-cache",a.attr("style"));a.css({display:b,"padding-top":"0","padding-bottom":"0","margin-top":"0","margin-bottom":"0","border-top-width":"0","border-bottom-width":"0",height:"100px"})}),k=r(h),h.each(function(){var a=c(this);a.attr("style",a.data("style-cache")||"")}));c.each(k,function(a,b){var e=c(b),
f=0;if(d.target)f=d.target.outerHeight(!1);else{if(d.byRow&&1>=e.length){e.css(d.property,"");return}e.each(function(){var a=c(this),b=a.css("display");"inline-block"!==b&&"inline-flex"!==b&&(b="block");b={display:b};b[d.property]="";a.css(b);a.outerHeight(!1)>f&&(f=a.outerHeight(!1));a.css("display","")})}e.each(function(){var a=c(this),b=0;d.target&&a.is(d.target)||("border-box"!==a.css("box-sizing")&&(b+=g(a.css("border-top-width"))+g(a.css("border-bottom-width")),b+=g(a.css("padding-top"))+g(a.css("padding-bottom"))),
a.css(d.property,f-b+"px"))})});m.each(function(){var a=c(this);a.attr("style",a.data("style-cache")||null)});b._maintainScroll&&c(window).scrollTop(l/f*c("html").outerHeight(!0));return this};b._applyDataApi=function(){var a={};c("[data-match-height], [data-mh]").each(function(){var b=c(this),d=b.attr("data-mh")||b.attr("data-match-height");a[d]=d in a?a[d].add(b):b});c.each(a,function(){this.matchHeight(!0)})};var q=function(a){b._beforeUpdate&&b._beforeUpdate(a,b._groups);c.each(b._groups,function(){b._apply(this.elements,
this.options)});b._afterUpdate&&b._afterUpdate(a,b._groups)};b._update=function(a,e){if(e&&"resize"===e.type){var d=c(window).width();if(d===n)return;n=d}a?-1===f&&(f=setTimeout(function(){q(e);f=-1},b._throttle)):q(e)};c(b._applyDataApi);c(window).bind("load",function(a){b._update(!1,a)});c(window).bind("resize orientationchange",function(a){b._update(!0,a)})})(jQuery);

// Responsive equal height

if ($(window).width() > 768) {
$(window).load(function() {
    $('.Categories').matchHeight();
    $('.Categories-int').matchHeight();
	$('.Product').matchHeight();
	$('.Product-int').matchHeight();	
    $('.ProductImage').matchHeight();
    $('.ProductName').matchHeight();
    $('.ProductDesc').matchHeight();
    $('.ProductManufacturer').matchHeight();
    $('.OrderBlock').matchHeight();
    $('.OrderBlock-int').matchHeight();
    $('.filter').matchHeight();
    // новости и статьи
    $('.NewsImage').matchHeight();
    $('.NewsName').matchHeight();
    // общее равнение
    $('.equal-block').matchHeight();
});
}

// смена табличного вывода на лист
window.onload = function() {
    if (localStorage.getItem('productsheet') !== null && localStorage.getItem('productsheet') !== 'sheettable') {
        var productlist = localStorage.getItem('productsheet');
        document.getElementById('productlist').className = productlist;
    }
    //удаляем класс для просмотра таблицей
    document.getElementById('sheettable').onclick = function() {
        console.log('work');
        document.getElementById('productlist').className = 'sheettable';
        localStorage.setItem('productsheet','sheettable');
    }

    // добавляем класс для просмотра списком
    document.getElementById('sheetlist').onclick = function() {
        console.log('work');
        document.getElementById('productlist').className = 'sheetlist';
        localStorage.setItem('productsheet','sheetlist');
    }
}

// антиспам Перезвоните мне
$(function($){

    $('.form-anti-bot, .form-anti-bot-2').hide(); // hide inputs from users
    var answer = $('.form-anti-bot input#anti-bot-a').val(); // get answer
    $('.form-anti-bot input#anti_bot_q').val( answer ); // set answer into other input

    if ( $('form#contactForm input#anti_bot_q').length == 0 ) {
        var current_date = new Date();
        var current_year = current_date.getFullYear();
        $('form#contactForm').append('<input type="hidden" name="anti_bot_q" id="anti_bot_q" value="'+current_year+'" />'); // add whole input with answer via javascript to form
    }

});

// Форма Перезвоните мне
$(function() {
$("#CallBack input, #CallBack textarea").jqBootstrapValidation(
{
  preventSubmit: true,
  submitError: function($form, event, errors) {
},
submitSuccess: function($form, event) {
  event.preventDefault();
  var name = $("input#name").val();  
  var phone = $("input#phone").val(); 
  var email = $("input#email").val(); 
  var message = $("textarea#message").val();
  var anti_bot_q = $("input#anti_bot_q").val();
  var anti_bot_e_email_url = $("input#anti_bot_e_email_url").val();
  var firstName = name;
  if (firstName.indexOf(' ') >= 0) {
  firstName = name.split(' ').slice(0, -1).join(' ');
  }

$.ajax({
 url: "call_back.php",
 type: "POST",
 data: {name: name, phone: phone, anti_bot_q: anti_bot_q, anti_bot_e_email_url: anti_bot_e_email_url},
 cache: false,
 success: function() {  
 // Success message
 $('#success').html("<div class='alert alert-success'>");
 $('#success > .alert-success')
 .append("Спасибо! Ваше сообщение отправлено.");
 $('#success > .alert-success')
  .append('</div>');
$('#sendbutton').remove();  
//clear all fields
$('#contactForm').trigger("reset");
setTimeout(function() {
  $("#CallBack").modal('hide');
}, 3000);
},

error: function() { 
// Fail message
//$('#success').html("<div class='alert alert-danger'>");
//$('#success > .alert-danger').html("<button type='button' class='close' data-dismiss='alert' aria-hidden='true'>&times;")
//.append( "</button>");
//$('#success > .alert-danger').append("<strong>Извините "+firstName+" кажется проблемы на сервере отправки писем...</strong> Вы не могли бы написать напрямую на адрес <a href='youremail@mail.com?Subject=Перезвоните мне'>youremail@mail.com</a> ? Приносим извинения за это неудобство!");
//$('#success > .alert-danger').append('</div>');
  //clear all fields
$('#contactForm').trigger("reset");
   },
     });
         },
         filter: function() {
                   return $(this).is(":visible");
         },
       });

      $("a[data-toggle=\"tab\"]").click(function(e) {
                    e.preventDefault();
                    $(this).tab("show");
        });
  });


/*When clicking on Full hide fail/success boxes */ 
$('#name').focus(function() {
     $('#success').html('');
  });