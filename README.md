# vamshop_template_molodezky
 
 Стартовый шаблон для актуальной версии (1.99.22) на основе фреймверка Bootstrap 3.4.1. Используется для натяжки дизайна на CMS Vamshop.
 -
 Изменения в скрипте, необходимые для корректной работы шаблона:

 1. \includes\header.php - разделитель в хлебных крошках заменен на " / ".
 2. \includes\classes\product.php - Добавлена метка для вывода количества товара в комплекте.
 3. \includes\classes\vam_template.php - добавленна поддерка тега {php}{/php}.
 4. \includes\classes\vam_price.php - добавленна обертка для обозначения валюты.
 5. \includes\functions\products_specifications.php - к ID форм фильтров добавлен индивидуальный идентификатор.
 6. \includes\modules\comparison.php - Добавлены стили и тексты для корректного отображения.
 7. \includes\modules\products_filter.php - добавлена разметка bootstrap
 8. \inc\vam_image_button.inc.php, \inc\vam_image_submit.inc.php - кнопкам добавлены классы bootstrap
 9. \media\content\sitemap.php - устаревший файл, можно удалить. Вместо него используем \media\content\catalog.php - сменить в информационной странице с ID8, саму страницу переименовать в "Каталог".
 10. \shop_content.php - раскомментирован вывод хлебных крошек.