# vamshop_template_molodezky
 
 Стартовый шаблон для актуальной версии (1.87) на основе фреймверка Bootstrap 3.3.7. Используется для натяжки дизайна на CMS Vamshop.
 -
 Изменения в скрипте, необходимые для корректной работы шаблона:
 1. \includes\classes\vam_template.php - добавленна поддерка тега {php}{/php}.
 2. \includes\external\smarty\plugins_vam\outputfilter.note.php - убран текст "Работает на основе VamShop. Создание интернет магазина."
 3. \inc\vam_draw_input_field.inc.php, \inc\vam_draw_pull_down_menu.inc.php, \inc\vam_draw_textarea_field.inc.php - элементам форм добавлены классы bootstrap
 4. \inc\vam_image_button.inc.php, \inc\vam_image_submit.inc.php - кнопкам добавлены классы bootstrap
 5. \shop_content.php - раскомментирован вывод хлебных крошек
