# План тестирования
---

## Содержание
1. [Введение](#введение)
2. [Объект тестирования](#объект-тестирования)
3. [Атрибуты качества](#атрибуты-качества)
4. [Риски](#риски)
5. [Аспекты тестирования](#аспекты-тестирования)
6. [Подходы к тестированию](#подходы-к-тестированию)
7. [Представление результатов](#представление-результатов)
8. [Выводы](#выводы)

## Введение
Данный документ представляет собой план тестирования для проекта Trello Clone.  Цель тестирования - проверка соответствия реального поведения программы проекта и ожидаемого поведения, описанного в [требованиях](https://github.com/kattymwk/TaskManager/blob/main/documentation/requirements).

## Объект тестирования
Объектом тестирования являются следующие функциональные требования:
- Авторизация пользователя.
- Создание рабочего пространства (workspace).
- Создание досок в рамках рабочего пространства.
- Создание колонок в рамках досок.

## Атрибуты качества
1. **Надежность**:
    - Приложение должно корректно обрабатывать действия пользователя и не вызывать сбоев.
2. **Функциональность**:
    - Все функции приложения должны соответствовать заявленным требованиям.
3. **Производительность**:
    - Приложение должно обеспечивать отзывчивость интерфейса при работе с различными элементами (доски, колонки, задачи).
4. **Удобство использования**:
    - Интерфейс приложения должен быть интуитивно понятным и удобным для пользователя.
5. **Совместимость**:
    - Приложение должно корректно работать в различных браузерах (Google Chrome, Firefox, Safari).

## Риски
В процессе тестирования могут возникнуть следующие риски:
- Некорректное взаимодействие с сервером.
- Отсутствие необходимой документации.
- Неправильное отображение интерфейса на различных устройствах.

## Аспекты тестирования
Тестирование будет охватывать следующие аспекты:

### Авторизация пользователя
Этот аспект включает в себя тестирование возможности пользователя успешно войти в систему с использованием своих учетных данных.

### Создание рабочего пространства
Этот аспект включает в себя тестирование процесса создания нового рабочего пространства и проверку корректного отображения созданного пространства.

### Создание досок
Этот аспект включает в себя тестирование возможности пользователя создать новую доску в рамках выбранного рабочего пространства.

### Создание колонок
Этот аспект включает в себя тестирование функционала создания колонок внутри доски и их корректного отображения.

## Подходы к тестированию
Тестирование будет проводиться как ручным, так и автоматизированным методом. Ручное тестирование необходимо для проверки пользовательского опыта, взаимодействия с интерфейсом и общей функциональности. Автоматизированные тесты будут использоваться для повторяемых сценариев и проверки базовых функций.

## Представление результатов
Результаты тестирования будут представлены в виде отчета, включающего:
- Описание проведенных тестов.
- Выявленные дефекты и ошибки.
- Рекомендации по улучшению качества приложения.

## Выводы
На основе результатов тестирования будет сделан вывод о качестве разработанного программного продукта, а также даны рекомендации по  по его улучшению.
[Результаты тестирования](https://github.com/kattymwk/TaskManager/blob/main/test/TestResult.md)
