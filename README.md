# Question Answer

## 1. Difference between getElementById, getElementsByClassName, and querySelector / querySelectorAll
- **getElementById**:  
  - Select a single element by its id.  
  - Always returns one element.

- **getElementsByClassName**:  
  - Selects all elements that match a class name.  
  - it will returns an HTMLCollection  
  - Example: document.getElementsByClassName("item").

- **querySelector**:  
  - Select the first element that matches a CSS selector.  
  - Can target classes, ids, attributes  
  - Example: document.querySelector(".i").

- **querySelectorAll**:  
  - Selects all elements that match a CSS selector.  
  - Returns a NodeList. 
  - Example: document.querySelectorAll("ul li").

## 2. How to Create and Insert a New Element into the DOM
1. Create an element with document.createElement("tagName")
2. appendChild() add inside the parent as the last child.  


