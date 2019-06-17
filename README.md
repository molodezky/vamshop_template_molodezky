# vamshop_template_molodezky
 
 Стартовый шаблон для актуальной версии (1.99.4) на основе фреймверка Bootstrap 3.3.7. Используется для натяжки дизайна на CMS Vamshop.
 -
 Изменения в скрипте, необходимые для корректной работы шаблона:
 1. \includes\banners.php - добавлены группы banner1 - banner20.
 2. \includes\header.php - разделитель в хлебных крошках заменен на " / ".
 3. \includes\classes\product.php - рейтинг звездами выведен шрифтом FontAwesome 4.x. Добавлены контурные звезды для рейтинга меньше 5. Добавлена метка для вывода количества товара в комплекте.
 4. \includes\classes\vam_template.php - добавленна поддерка тега {php}{/php}.
 5. \includes\classes\vam_price.php - добавленна обертка для обозначения валюты.
 6. \includes\external\smarty\plugins_vam\outputfilter.note.php - убран текст "Работает на основе VamShop. Создание интернет магазина."
 7. \includes\functions\products_specifications.php - к ID форм фильтров добавлен индивидуальный идентификатор.
 8. \includes\modules\comparison.php - Добавлены стили и тексты для корректного отображения.
 9. \includes\modules\product_info.php - рейтинг звездами выведен шрифтом FontAwesome 4.x. Добавлены контурные звезды для рейтинга меньше 5.
 10. \includes\modules\products_filter.php - добавлена разметка bootstrap
 11. \includes\modules\reviews_all.php - рейтинг звездами выведен шрифтом FontAwesome 4.x. Добавлены контурные звезды для рейтинга меньше 5.
 12. \inc\vam_draw_input_field.inc.php, \inc\vam_draw_pull_down_menu.inc.php, \inc\vam_draw_textarea_field.inc.php - элементам форм добавлены классы bootstrap
 13. \inc\vam_image_button.inc.php, \inc\vam_image_submit.inc.php - кнопкам добавлены классы bootstrap
 14. \media\content\sitemap.php - устаревший файл, можно удалить. Вместо него используем \media\content\catalog.php - сменить в информационной странице с ID8, саму страницу переименовать в "Каталог".
 15. \article_info.php - рейтинг звездами выведен шрифтом FontAwesome 4.x. Добавлены контурные звезды для рейтинга меньше 5.
 16. \article.php - рейтинг звездами выведен шрифтом FontAwesome 4.x. Добавлены контурные звезды для рейтинга меньше 5.
 17. \article_new.php - рейтинг звездами выведен шрифтом FontAwesome 4.x. Добавлены контурные звезды для рейтинга меньше 5.
 18. \product_reviews.php - рейтинг звездами выведен шрифтом FontAwesome 4.x. Добавлены контурные звезды для рейтинга меньше 5.
 19. \product_reviews_info.php - рейтинг звездами выведен шрифтом FontAwesome 4.x. Добавлены контурные звезды для рейтинга меньше 5.
 20. \reviews.php - рейтинг звездами выведен шрифтом FontAwesome 4.x. Добавлены контурные звезды для рейтинга меньше 5.
 21. \shop_content.php - раскомментирован вывод хлебных крошек
 