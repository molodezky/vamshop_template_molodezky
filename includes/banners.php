<?php
/* -----------------------------------------------------------------------------------------
   $Id: banners.php 899 2007-02-06 20:14:56 VaM $   

   VaM Shop - open source ecommerce solution
   http://vamshop.ru
   http://vamshop.com

   Copyright (c) 2007 VaM Shop
   -----------------------------------------------------------------------------------------
   based on:
   (c) 2004	 xt:Commerce (banners.php,v 1.54 2003/08/25); xt-commerce.com 

   Released under the GNU General Public License
   ---------------------------------------------------------------------------------------*/

  require_once(DIR_FS_INC . 'vam_banner_exists.inc.php');
  require_once(DIR_FS_INC . 'vam_display_banner.inc.php');
  require_once(DIR_FS_INC . 'vam_update_banner_display_count.inc.php');

  if ($banner = vam_banner_exists('dynamic', 'banner')) {
  $vamTemplate->assign('BANNER',vam_display_banner('static', $banner));
  }
  if ($banner = vam_banner_exists('dynamic', 'banner1')) {
  $vamTemplate->assign('BANNER1',vam_display_banner('static', $banner));
  }
  if ($banner = vam_banner_exists('dynamic', 'banner2')) {
  $vamTemplate->assign('BANNER2',vam_display_banner('static', $banner));
  }
  if ($banner = vam_banner_exists('dynamic', 'banner3')) {
  $vamTemplate->assign('BANNER3',vam_display_banner('static', $banner));
  }
  if ($banner = vam_banner_exists('dynamic', 'banner4')) {
  $vamTemplate->assign('BANNER4',vam_display_banner('static', $banner));
  }
  if ($banner = vam_banner_exists('dynamic', 'banner5')) {
  $vamTemplate->assign('BANNER5',vam_display_banner('static', $banner));
  }
  if ($banner = vam_banner_exists('dynamic', 'banner6')) {
  $vamTemplate->assign('BANNER6',vam_display_banner('static', $banner));
  }
  if ($banner = vam_banner_exists('dynamic', 'banner7')) {
  $vamTemplate->assign('BANNER7',vam_display_banner('static', $banner));
  }
  if ($banner = vam_banner_exists('dynamic', 'banner8')) {
  $vamTemplate->assign('BANNER8',vam_display_banner('static', $banner));
  }
  if ($banner = vam_banner_exists('dynamic', 'banner9')) {
  $vamTemplate->assign('BANNER9',vam_display_banner('static', $banner));
  }
  if ($banner = vam_banner_exists('dynamic', 'banner10')) {
  $vamTemplate->assign('BANNER10',vam_display_banner('static', $banner));
  }
  if ($banner = vam_banner_exists('dynamic', 'banner11')) {
  $vamTemplate->assign('BANNER11',vam_display_banner('static', $banner));
  }
  if ($banner = vam_banner_exists('dynamic', 'banner12')) {
  $vamTemplate->assign('BANNER12',vam_display_banner('static', $banner));
  }
  if ($banner = vam_banner_exists('dynamic', 'banner13')) {
  $vamTemplate->assign('BANNER13',vam_display_banner('static', $banner));
  }
  if ($banner = vam_banner_exists('dynamic', 'banner14')) {
  $vamTemplate->assign('BANNER14',vam_display_banner('static', $banner));
  }
  if ($banner = vam_banner_exists('dynamic', 'banner15')) {
  $vamTemplate->assign('BANNER15',vam_display_banner('static', $banner));
  }
  if ($banner = vam_banner_exists('dynamic', 'banner16')) {
  $vamTemplate->assign('BANNER16',vam_display_banner('static', $banner));
  }
  if ($banner = vam_banner_exists('dynamic', 'banner17')) {
  $vamTemplate->assign('BANNER17',vam_display_banner('static', $banner));
  }  
  if ($banner = vam_banner_exists('dynamic', 'banner18')) {
  $vamTemplate->assign('BANNER18',vam_display_banner('static', $banner));
  }
  if ($banner = vam_banner_exists('dynamic', 'banner19')) {
  $vamTemplate->assign('BANNER19',vam_display_banner('static', $banner));
  }
  if ($banner = vam_banner_exists('dynamic', 'banner20')) {
  $vamTemplate->assign('BANNER20',vam_display_banner('static', $banner));
  }
?>