<h1>Questions Part</h1>

1. What is the difference between getElementById, getElementsByClassName, and querySelector / querySelectorAll?

Answer : 
getElementById : it will give one element by id ('id name')
getElementsByClassName : it will give all elements with same class name ('class name')
querySelector: we can use id, class in it. it will give only first matching element ('.class name' or '#id name')
querySelector: we can use id, class in it. it will give all matching element ('.class name' or '#id name')

2. How do you create and insert a new element into the DOM?

Answer:
const divContainer = document.getElementById('container');
const p = document.createElement('p');
p.innerText = 'hello world';
divContainer.appendChild(p);

3. What is Event Bubbling? And how does it work?

Answer:
event is going up from below. like children element to parent then parent and continue. example (button -> div -> section -> main -> body)

4. What is Event Delegation in JavaScript? Why is it useful?

Answer:
to control child element from parent. like adding event listener to parent and it will work on every children. very easy to control and works dynamically.

5. What is the difference between 'preventDefault()' and 'stopPropagation()' methods?

Answer:
'preventDefault()'  : it's used for stopping form reload.
'stopPropagation()' : it's used for preventing event bubbling to go parent element.