# Калькулятор

### Описание
Консольный калькулятор, реализованный с помощью обратной польской нотации.

Калькулятор поддерживает целые и десятично-дробные числа, операции +, -, *, /, скобки.

### Локальная установка
Cклонируйте проект

  `git clone https://github.com/Konstanteeen/node-js-console-calculator`

  В папке с проектом выполнить команды:

  * `npm install`
  * `npm build`
  
  Для запуска калькулятора:
  * `npm run start`

  Для запуска тестов:
   * `npm run test`

### Добавление новых операций в калькулятор

   * Открыть файл src/operations.js
   * В массив с операциями operationList добавить новую операцию в виде:
   
    {
      operator: '/',
      precedence: 2,
      func: (a, b) => b / a
    }
    
