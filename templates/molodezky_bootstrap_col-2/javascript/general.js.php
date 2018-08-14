<?php
/* -----------------------------------------------------------------------------------------
   $Id: general.js 899 2007-02-06 20:14:56 VaM $   

   VaM Shop - open source ecommerce solution
   http://vamshop.ru
   http://vamshop.com

   Copyright (c) 2007 VaM Shop
   -----------------------------------------------------------------------------------------
   based on: 
   (c) 2004 xt:Commerce (general.js,v 1.1 2004/03/17); xt-commerce.com 

   Released under the GNU General Public License
   ---------------------------------------------------------------------------------------*/


   // this javascriptfile get includes at every template page in shop, you can add your template specific
   // js scripts here
?>
<script src="<?php echo 'templates/'.CURRENT_TEMPLATE.'/javascript/bootstrap/bootstrap.min.js'; ?>"></script> 
<link href='https://fonts.googleapis.com/css?family=Open+Sans:400,300,600,700&subset=latin,cyrillic-ext' rel='stylesheet' type='text/css'>

<script>
$(document).ready(function(){
	// hide #back-top first
	$("#back-top").css('visibility', 'visible');	
	$("#back-top").hide();
	
	// fade in #back-top
	$(function () {
		$(window).scroll(function () {
			if ($(this).scrollTop() > 100) {
				$('#back-top').fadeIn();
			} else {
				$('#back-top').fadeOut();
			}
		});

		// scroll body to 0px on click
		$('#back-top a').click(function () {
			$('body,html').animate({
				scrollTop: 0
			}, 800);
			return false;
		});
	});

});
</script>

<?php
if (strstr($PHP_SELF, FILENAME_PRODUCT_INFO) or strstr($PHP_SELF, FILENAME_SHOPPING_CART)) {
?>
 
<script>
$(document).ready(function() {
                $('.minus').click(function () {
                        var $input = $(this).parent().find('input[type=text]');
                        var count = parseInt($input.val()) - 1;
                        count = count < 1 ? 1 : count;
                        $input.val(count);
                        $input.change();
                        return false;
                });
 
                $('.plus').click(function () {
                        var $input = $(this).parent().find('input[type=text]');
                        $input.val(parseInt($input.val()) + 1);
                        $input.change();
                        return false;
                });
});
</script>

<?php
}
?>

<script>
	
	function CartFade() {
		$('div.reg_form').fadeIn(500);
		$("body").append("<div id='overlay'></div>");
		$('#overlay').show().css({'filter' : 'alpha(opacity=80)'});
	};	

	function CartFadeOut() {
		$('div.reg_form').fadeOut(100);
		$('#overlay').remove('#overlay');

	};	


$(function () {

	$('a.show_popup').click(function () {

		$('div.'+$(this).attr("rel")).fadeIn(500);
		$("body").append("<div id='overlay'></div>");
		$('#overlay').show().css({'filter' : 'alpha(opacity=80)'});
		return false;				
	});	
	$('a.close2').click(function () {
		$(this).parent().fadeOut(100);
		$('#overlay').remove('#overlay');
		return false;
	});

	
});	

</script>

<?php
if (strstr($PHP_SELF, FILENAME_PRODUCTS_NEW)) {
$vamTemplate->assign('11',' class="current"');
}
if (strstr($PHP_SELF, FILENAME_SPECIALS)) {
$vamTemplate->assign('12',' class="current"');
}
if (strstr($PHP_SELF, FILENAME_REVIEWS)) {
$vamTemplate->assign('13',' class="current"');
}
if (strstr($PHP_SELF, FILENAME_NEWS)) {
$vamTemplate->assign('14',' class="current"');
}
if (strstr($PHP_SELF, FILENAME_ARTICLE_INFO) or strstr($PHP_SELF, FILENAME_ARTICLES) or strstr($PHP_SELF, FILENAME_ARTICLES_NEW)) {
$vamTemplate->assign('15',' class="current"');
}
if (strstr($PHP_SELF, FILENAME_CREATE_ACCOUNT)) {
$vamTemplate->assign('16',' class="current"');
}
if (strstr($PHP_SELF, FILENAME_ADVANCED_SEARCH)) {
$vamTemplate->assign('17',' class="current"');
}
if (strstr($PHP_SELF, FILENAME_FEATURED)) {
$vamTemplate->assign('18',' class="current"');
}
if (strstr($PHP_SELF, FILENAME_CONTENT) && $_GET['coID'] == 1) {
$vamTemplate->assign('21',' class="current"');
}
if (strstr($PHP_SELF, FILENAME_CONTENT) && $_GET['coID'] == 4) {
$vamTemplate->assign('24',' class="current"');
}
if (strstr($PHP_SELF, FILENAME_CONTENT) && $_GET['coID'] == 7) {
$vamTemplate->assign('27',' class="current"');
}
?>