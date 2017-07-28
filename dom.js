/**
 * removeAllSpans -  функция, которая удаляет все элементы span со страницы
 */

function removeAllSpans () {
    var spans = document.querySelectorAll("span");
    spans.forEach(function(elem) {
        elem.remove();
    });
}

// removeAllSpans();

/**
 * firstChild -  функция, которая будет кроссбразурено возвращать firstChild (не текстовую ноду).
 *
 * @param {Node} parent node
 * @return {Node}
 */

function firstChild (parent) {
    var el = document.querySelector(parent).children;

    return el[0];
}

// console.log( firstChild('div') );

/**
 * lastChild -  функция, будет кроссбраузерно возвращать lastChild (не текстовую ноду).
 *
 * @param {Node} parent node
 * @return {Node}
 */

function lastChild (parent) {
    return document.querySelector(parent).lastElementChild;
}

// console.log( lastChild('div') );

/**
 * next -  функция, которая будет кроссбраузерно возвращать следующий элемент
 * (не текстовую ноду, работа наподобие next() в jQuery).
 *
 * @param {Node} node
 * @return {Node}
 */

function next (node) {
    return document.querySelector(node).nextElementSibling;
}

// console.log( next('div') );

/**
 * prev -  функция, которая будет кроссбраузерно возвращать предыдущий элемент
 * (не текстовую ноду, работа наподобие prev() в jQuery).
 *
 * @param {Node} node
 * @return {Node}
 */

function prev (node) {
    var prevEl = document.querySelector(node).previousElementSibling;

    return prevEl ? prevEl : 'Я - первый!';
}

// console.log( prev('body') );

/**
 * OPTIONAL
 * closest -  функция, которая будет идти вверх по DOM (по родительским елементам) от переданного ей элемента в первом
 аргументе пока не найдет элемент переданный во втором аргументе в эту функцию и вернёт этот элемент (то есть второй).
 * https://developer.mozilla.org/en-US/docs/Web/API/Element/closest
 *
 * Example:
 * closest(document.querySelector('[data-url="http://google.ru"]'), 'aside'); // return <aside>...</aside>
 *
 * @param {Node} node
 * @param {String} selector
 * @return {Node}
 */

function closest (node, selector) {
    // var elem = document.querySelector(node);
    // return elem.closest(selector);
    return document.querySelector(node).closest(selector);
}

// console.log( closest('[data-url="http://google.ru"]', 'aside') );


