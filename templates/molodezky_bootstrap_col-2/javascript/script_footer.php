<?php if (AJAX_CART == 'true') { ?>
<script src="<?php echo 'templates/'.CURRENT_TEMPLATE.'/javascript/jscript_ajax_cart.js'; ?>"></script>
<?php } ?>
<?php
if (strstr($PHP_SELF, FILENAME_PRODUCT_INFO)) {
?>
<script src="jscript/jquery/plugins/colorbox/jquery.colorbox-min.js"></script>
<?php
if (file_exists(DIR_FS_CATALOG.'jscript/jquery/plugins/colorbox/i18n/jquery.colorbox-'.$_SESSION['language_code'].'.js')) {
?>
<script src="jscript/jquery/plugins/colorbox/i18n/jquery.colorbox-ru.js"></script>
<?php } ?>
<script>
// Make ColorBox responsive
	jQuery.colorbox.settings.maxWidth  = '95%';
	jQuery.colorbox.settings.maxHeight = '95%';
	// ColorBox resize function
	var resizeTimer;
	function resizeColorBox()
	{
		if (resizeTimer) clearTimeout(resizeTimer);
		resizeTimer = setTimeout(function() {
				if (jQuery('#cboxOverlay').is(':visible')) {
						jQuery.colorbox.load(true);
				}
		}, 300);
	}
	// Resize ColorBox when resizing window or changing mobile device orientation
	jQuery(window).resize(resizeColorBox);
	
$(document).ready(function(){
  $(".lightbox").colorbox({rel:"lightbox", title: false});
  $(".iframe").colorbox({iframe:true, width:"96%", height:"80%", maxWidth: "960px"});
});
</script>
<?php
 }
?>

<script src="<?php echo 'templates/'.CURRENT_TEMPLATE.'/javascript/vamshop.js'; ?>"></script>
<script src="<?php echo 'templates/'.CURRENT_TEMPLATE.'/javascript/bootstrap/jqBootstrapValidation/jqBootstrapValidation.js'; ?>"></script>
<script src="<?php echo 'jscript/jquery/plugins/jquery-ui/jquery-ui-min.js'; ?>"></script>
<script src="<?php echo 'templates/'.CURRENT_TEMPLATE.'/javascript/jquery-cookie/jquery.cookie.js'; ?>"></script>

<?php
if (file_exists(dirname(__FILE__) . '/local_footer.js.php')) include('local_footer.js.php');
?>