'use strict';
/*
1) Сделать класс DomElement, который содержит свойства
  - selector, 
  - height, 
  - width, 
  - bg, 
  - fontSize
содержит метод, который создает элемент на странице в зависимости от условия:  
- если строка selector начинается с точки, создаем div с классом
- если строка selector  начинается с решетки # то создаем параграф с id
пример:
если передана строка '.block', то функция конструктор создает элемент с class="block"
если передана строка '#best', то функция конструктор создает элемент с id =best"
с помощью cssText задавать стили: 
  - высотой - height,
  - шириной - width, 
  - background - bg
  - размер текста fontSize 
внутрь созданного блока записывать любой текст. Метод записи может быть любым.
2) Создать новый объект на основе класса DomElement
*/


const DomElement = function(selector, height, width, bg, fontSize, text){
  this.selector = selector,
  this.height = height,
  this.width = width,
  this.bg = bg,
  this.fontSize = fontSize,
  this.text = text,
  this.newElem = function(){
    if (selector[0] === '.') {
      let newElement = document.createElement('div');
      newElement.setAttribute("class", this.selector.substr(1));
      newElement.style.cssText = `
      height: ${this.height}px;
      width: ${this.width}px;
      background: ${this.bg};
      font-size: ${this.fontSize}px;`;
      newElement.textContent = this.text;
      document.body.append(newElement);
    } else if (selector[0] === '#') {
      let newElement = document.createElement('p');
      newElement.setAttribute("id", this.selector.substr(1));
      newElement.style.cssText = `
      height: ${this.height}px;
      width: ${this.width}px;
      background: ${this.bg};
      font-size: ${this.fontSize}px;`;
      newElement.textContent = text;
      document.body.append(newElement);
    }
  }
}
const test = new DomElement('.test', 200, 500, 'green', 40, 'Test 1');
const test2 = new DomElement('#test', 300, 1200, 'red', 50, 'Test 2');
test.newElem();
console.log(test);
test2.newElem();
console.log(test2);

