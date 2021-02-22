﻿# Демонстационное приложение Zonex

Посмотреть в работе - https://curillaenator.github.io/Zonex-ClothStore/index.html

Данное приложение деонстрирует мои знания и умения в использовании стандартного стэка технологий вэбразработки.

- разметка страниц выполнена согласно стандартам HTML5
- страницы стилизованы CSS3 (применен препроцессор Sass) и реализована их адаптивность до популярных мобильных разрешений (минимальное разрешение приложения 320px по ширине) 
- JavaSсript (ES6) используется для динамически отображаемого контента и интерактивных элементов приложения (описание ниже)
- jQuery + его библиотека SlickSlider использованы для отображения всех элементов типа "слайдер".

Приложение состоит из:
- главной страницы index.html
- щаблона магазина shop.html 
- шаблона карточки "товара" card.html

В целях демонстрации работы с кодом JS в приложении присутствует небольшая бд (/js/demoBase.js эмулирует некий ответ сервера с данными). Данные из бд парсятся для наполнения контентом всплывающего окна и карточек на главной странице и только карточек в шаблоне магазина.
С помощью JS в шаблоне магазина реализована работа с DOM в виде возожности скрыть или отобразить некоторые поля (фильтры), отобразить 3, 4 или 5 карточек в строке основного поля магазина. 
Скриптами реализованы интерактивные элементы реагирующие на некоторые действия "пользователя" приложения (выбор элементов из категорий фильтра в шаблоне магазина, рейтинг и выбор рамера и цвета в шалоне карточки)

