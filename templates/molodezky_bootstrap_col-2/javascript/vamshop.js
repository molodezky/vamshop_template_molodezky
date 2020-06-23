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
	if(document.getElementById('productlist')){


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
	
}

// переключение в корзине
 $('#cart_quantity.change-submit :input').change(function(){ $('#cart_quantity.change-submit').submit(); });
 $('.product-table-quantity__btn').click(function() {
  var $input=$(this).parent().find('.product-table-quantity__value input.form-control'),
    val = parseInt($input.val()),
    min = parseInt($input.attr('min')),
    max = parseInt($input.attr('max')),
    step = parseInt($input.attr('step'));
  if($(this).hasClass('btn-minus')){
   if (val == min) return false; $input.val(val-step);
   //var temp = val - step; $input.val(temp >= min ? temp : min);
  }else{
   if (val == max) return false; $input.val(val+step);
   //var temp = val + step; $input.val(temp <= max ? temp : max);
  }
  $input.change();
 });
 
// Geo Modal
			$(function() {
				$("#vamshop-city").autocomplete({
                  appendTo: "#vamshop-cities",
					source : function(request, response) {
						$.ajax({
							url : "https://api.cdek.ru/city/getListByTerm/jsonp.php?callback=?",
							dataType : "jsonp",
							data : {
								q : function() {
									return $("#vamshop-city").val()
								},
								name_startsWith : function() {
									return $("#vamshop-city").val()
								}
							},
							success : function(data) {
								response($.map(data.geonames, function(item) {
									return {
										label : item.cityName,
										value : item.cityName,
										id : item.id
									}
								}));
							}
						});
					},
					minLength : 1,
					select : function(event, ui) {
						//console.log("Yep!");
						//$('#receiverCityId').val(ui.item.id);
					}
});
});            

$(function() {
	$("#submit-modal1").on("click", function(e) {
			e.preventDefault();
		 $.cookie("vamshop-city", $("#vamshop-city").val(), { expires : 10, path: "/" });
			location.reload();
	});
}); 
 
 // Согласие на использование cookie
$('#cookie-alert').on('closed.bs.alert', function (e) {
    e.preventDefault();
   $.cookie("cookie-alert", 1, { expires : 365, path: "/" });
})

// Like
function doLike(id) {
		var data = 'q=includes/modules/ajax/ajaxLike.php&products_id='+id;
		$.ajax({
					url : "index_ajax.php",
					dataType : "html",
					data : data,
					type : "GET",
					success : function(msg) {
					 $("#likes").html(msg);
					 $("#like").removeAttr("onclick");
					 $("#dislike").removeAttr("onclick");
					 $("#like").addClass("rounded-circle border border-primary");
               }
		});
	}
	
// Dislike
function doDislike(id) {
		var data = 'q=includes/modules/ajax/ajaxDislike.php&products_id='+id;
		$.ajax({
					url : "index_ajax.php",
					dataType : "html",
					data : data,
					type : "GET",
					success : function(msg) {
					 $("#dislikes").html(msg);
					 $("#dislike").removeAttr("onclick");
					 $("#like").removeAttr("onclick");
					 $("#dislike").addClass("rounded-circle border border-danger text-danger");
               }
		});
	}	
	
//Voice Search
/* setup vars for our trigger, form, text input and result elements */
if ($(window).width() >= 992 ) {
	var $voiceTrigger = $("#voice-trigger");
	var $searchForm = $("#search");
	var $searchInput = $("#quick_find_keyword");
	var $result = $("#result");
} else {
	var $voiceTrigger = $("#voice-trigger-header");
	var $searchForm = $("#searchheader");
	var $searchInput = $("#quick_find_keyword_header");
	var $result = $("#result-header");
}

/*  set Web Speech API for Chrome or Firefox */
window.SpeechRecognition = window.SpeechRecognition || window.webkitSpeechRecognition;

/* Check if browser support Web Speech API, remove the voice trigger if not supported */
if (window.SpeechRecognition) {

    /* setup Speech Recognition */
    var recognition = new SpeechRecognition();
    recognition.interimResults = true;
    recognition.lang = 'ru-RU';
    recognition.addEventListener('result', _transcriptHandler);

    recognition.onerror = function(event) {
        console.log(event.error);

        /* Revert input and icon CSS if no speech is detected */
        if(event.error == 'no-speech'){
            $voiceTrigger.removeClass('active');
            //$searchInput.attr("placeholder", "Поиск...");
        }
    }
} else {
    $voiceTrigger.remove();
}

jQuery(document).ready(function(){

    /* Trigger listen event when our trigger is clicked */
    $voiceTrigger.on('click touch', listenStart);
});

/* Our listen event */
function listenStart(e){
    e.preventDefault();
    /* Update input and icon CSS to show that the browser is listening */
    $searchInput.attr("placeholder", "Говорите...");
    $voiceTrigger.addClass('active');
    /* Start voice recognition */
    recognition.start();
}

/* Parse voice input */
function _parseTranscript(e) {
    return Array.from(e.results).map(function (result) { return result[0] }).map(function (result) { return result.transcript }).join('')
}

/* Convert our voice input into text and submit the form */
function _transcriptHandler(e) {
    var speechOutput = _parseTranscript(e)
    $searchInput.val(speechOutput);
    //$result.html(speechOutput);
    if (e.results[0].isFinal) {
        $searchForm.submit();
    }
}

// Lazy Load
$(document).ready(function(){
	var lazyLoadInstance = new LazyLoad({
		elements_selector: ".lazy",
		//use_native: true
	});
});

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
	
// антиспам Быстрый заказ
$(function($){

    $('.form-anti-botbo, .form-anti-bot-2bo').hide(); // hide inputs from users
    var answer = $('.form-anti-botbo input#anti-bot-abo').val(); // get answer
    $('.form-anti-botbo input#anti_bot_qbo').val( answer ); // set answer into other input

    if ( $('form#buyoneForm input#anti_bot_qbo').length == 0 ) {
        var current_date = new Date();
        var current_year = current_date.getFullYear();
        $('form#buyoneForm').append('<input type="hidden" name="anti_bot_qbo" id="anti_bot_qbo" value="'+current_year+'" />'); // add whole input with answer via javascript to form
    }

});

// Передаем имя и ссылку в форму быстрого заказа
$(document).ready(function(){
    $('.ProductBuyOne .btn').on('click',function(){
        var productsname = $(this).attr("data-name");
        var productslink = $(this).attr("data-link");
        $("#productbo").attr("value", productsname);
        $("#product_urlbo").attr("value", productslink);
    }); 
});
  
// Форма Быстрый заказ
$(function() {
$("#BuyOne input, #BuyOne textarea").jqBootstrapValidation(
{
  preventSubmit: true,
  submitError: function($form, event, errors) {
},
submitSuccess: function($form, event) {
  event.preventDefault();
  var namebo = $("input#namebo").val();  
  var phonebo = $("input#phonebo").val(); 
  var emailbo = $("input#emailbo").val(); 
  var messagebo = $("textarea#messagebo").val();
  var productbo = $("input#productbo").val();
  var product_urlbo = $("input#product_urlbo").val();
  var anti_bot_qbo = $("input#anti_bot_qbo").val();
  var anti_bot_e_email_urlbo = $("input#anti_bot_e_email_urlbo").val();
  var firstNamebo = name;
  if (firstNamebo.indexOf(' ') >= 0) {
  firstNamebo = namebo.split(' ').slice(0, -1).join(' ');
  }

$.ajax({
 url: "buy_one.php",
 type: "POST",
 data: {namebo: namebo, phonebo: phonebo, productbo: productbo, product_urlbo: product_urlbo, anti_bot_qbo: anti_bot_qbo, anti_bot_e_email_urlbo: anti_bot_e_email_urlbo},
 cache: false,
 success: function() {  
 // Success message
 $('#successbo').html("<div class='alert alert-success'>");
 $('#successbo > .alert-success')
 .append("Спасибо! Мы свяжемся с Вами в ближайшее время для уточнения деталей заказа.");
 $('#successbo > .alert-success')
  .append('</div>');
$('#sendbuttonbo').remove();  
//clear all fields
$('#buyoneForm').trigger("reset");
setTimeout(function() {
  $("#BuyOne").modal('hide');
  $(".modal-backdrop").removeClass('show');
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
$('#buyoneForm').trigger("reset");
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
$('#namebo').focus(function() {
     $('#successbo').html('');
  });  
  
  
// Форма Быстрый заказ на карточке товара
$(function() {
$("#BuyOneProductInfo input, #BuyOneProductInfo textarea").jqBootstrapValidation(
{
  preventSubmit: true,
  submitError: function($form, event, errors) {
},
submitSuccess: function($form, event) {
  event.preventDefault();
  var namebo = $("input#namebo").val();  
  var phonebo = $("input#phonebo").val(); 
  var emailbo = $("input#emailbo").val(); 
  var messagebo = $("textarea#messagebo").val();
  var productbo = $("input#productbo").val();
  var product_urlbo = $("input#product_urlbo").val();
  var anti_bot_qbo = $("input#anti_bot_qbo").val();
  var anti_bot_e_email_urlbo = $("input#anti_bot_e_email_urlbo").val();
  var firstNamebo = name;
  if (firstNamebo.indexOf(' ') >= 0) {
  firstNamebo = namebo.split(' ').slice(0, -1).join(' ');
  }

$.ajax({
 url: "buy_one.php",
 type: "POST",
 data: {namebo: namebo, phonebo: phonebo, productbo: productbo, product_urlbo: product_urlbo, anti_bot_qbo: anti_bot_qbo, anti_bot_e_email_urlbo: anti_bot_e_email_urlbo},
 cache: false,
 success: function() {  
 // Success message
 $('#successbo').html("<div class='alert alert-success'>");
 $('#successbo > .alert-success')
 .append("Спасибо! Мы свяжемся с Вами в ближайшее время для уточнения деталей заказа.");
 $('#successbo > .alert-success')
  .append('</div>');
$('#sendbuttonbo').remove();  
//clear all fields
$('#buyoneForm').trigger("reset");
setTimeout(function() {
  $("#BuyOneProductInfo").modal('hide');
  $(".modal-backdrop").removeClass('show');
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
$('#buyoneForm').trigger("reset");
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
$('#namebo').focus(function() {
     $('#successbo').html('');
  }); 	