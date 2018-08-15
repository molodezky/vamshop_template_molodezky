# vamshop_template_molodezky
 
 Стартовый шаблон для актуальной версии (1.91) на основе фреймверка Bootstrap 3.3.7. Используется для натяжки дизайна на CMS Vamshop.
 -
 Изменения в скрипте, необходимые для корректной работы шаблона:
 1. \includes\header.php:
    - убран атрибут "type="text/javascript";
    - разделитель в хлебных крошках заменен на " / "
 2. \includes\classes\product.php - рейтинг звездами выведен шрифтом FontAwesome 4.x.
 3. \includes\classes\vam_template.php - добавленна поддерка тега {php}{/php}.
 4. \includes\external\smarty\plugins_vam\outputfilter.note.php - убран текст "Работает на основе VamShop. Создание интернет магазина."
 5. \inc\vam_draw_input_field.inc.php, \inc\vam_draw_pull_down_menu.inc.php, \inc\vam_draw_textarea_field.inc.php - элементам форм добавлены классы bootstrap
 6. \inc\vam_image_button.inc.php, \inc\vam_image_submit.inc.php - кнопкам добавлены классы bootstrap
 7. \javascript\jscript_ajax_cart.js - добавлен вызов модального окна "Товар в корзине"
 8. \shop_content.php - раскомментирован вывод хлебных крошек
