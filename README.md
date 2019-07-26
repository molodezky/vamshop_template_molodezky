# vamshop_template_molodezky
 
 Стартовый шаблон для актуальной версии (1.99.6) на основе фреймверка Bootstrap 3.4.1. Используется для натяжки дизайна на CMS Vamshop.
 -
 Изменения в скрипте, необходимые для корректной работы шаблона:
 1. \admin\includes\javascript\tinymce\skins\lightgray\skin.min.css - добавлен z-index для полноэкранного редактора (налезает меню)
 2. \includes\banners.php - добавлены группы banner1 - banner20.
 3. \includes\header.php - разделитель в хлебных крошках заменен на " / ".
 4. \includes\classes\product.php - рейтинг звездами выведен шрифтом FontAwesome 4.x. Добавлены контурные звезды для рейтинга меньше 5. Добавлена метка для вывода количества товара в комплекте.
 5. \includes\classes\vam_template.php - добавленна поддерка тега {php}{/php}.
 6. \includes\classes\vam_price.php - добавленна обертка для обозначения валюты.
 7. \includes\external\smarty\plugins_vam\outputfilter.note.php - убран текст "Работает на основе VamShop. Создание интернет магазина."
 8. \includes\functions\products_specifications.php - к ID форм фильтров добавлен индивидуальный идентификатор.
 9. \includes\modules\comparison.php - Добавлены стили и тексты для корректного отображения.
 10. \includes\modules\order_details_cart.php - правки из-за проблем с ajax страницы корзины. Кнопкам +- изменены классы bootstrap.
 11. \includes\modules\product_info.php - рейтинг звездами выведен шрифтом FontAwesome 4.x. Добавлены контурные звезды для рейтинга меньше 5.
 12. \includes\modules\products_filter.php - добавлена разметка bootstrap
 13. \includes\modules\reviews_all.php - рейтинг звездами выведен шрифтом FontAwesome 4.x. Добавлены контурные звезды для рейтинга меньше 5.
 14. \inc\vam_draw_input_field.inc.php, \inc\vam_draw_pull_down_menu.inc.php, \inc\vam_draw_textarea_field.inc.php - элементам форм добавлены классы bootstrap
 15. \inc\vam_image_button.inc.php, \inc\vam_image_submit.inc.php - кнопкам добавлены классы bootstrap
 16. \media\content\sitemap.php - устаревший файл, можно удалить. Вместо него используем \media\content\catalog.php - сменить в информационной странице с ID8, саму страницу переименовать в "Каталог".
 17. \article_info.php - рейтинг звездами выведен шрифтом FontAwesome 4.x. Добавлены контурные звезды для рейтинга меньше 5.
 18. \article.php - рейтинг звездами выведен шрифтом FontAwesome 4.x. Добавлены контурные звезды для рейтинга меньше 5.
 19. \article_new.php - рейтинг звездами выведен шрифтом FontAwesome 4.x. Добавлены контурные звезды для рейтинга меньше 5.
 20. \product_reviews.php - рейтинг звездами выведен шрифтом FontAwesome 4.x. Добавлены контурные звезды для рейтинга меньше 5.
 21. \product_reviews_info.php - рейтинг звездами выведен шрифтом FontAwesome 4.x. Добавлены контурные звезды для рейтинга меньше 5.
 22. \reviews.php - рейтинг звездами выведен шрифтом FontAwesome 4.x. Добавлены контурные звезды для рейтинга меньше 5.
 23. \shop_content.php - раскомментирован вывод хлебных крошек.
 24. \shopping_cart.php - правки из-за проблем с ajax страницы корзины. 