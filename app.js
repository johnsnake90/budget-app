/*

BUDGET APP:
Created during "Complete JavaScript Course by " @ Udemy by 

DONE:
- organize work
- create git repository
- first commit

TODO:

Functions for:

- Add event handler (CONTROLLER)
- Get input values (UI)
- Add the new item to our data structure (DATA)
- Add the new item to the UI (UI)
- Calculate budget (DATA)
- Update the UI (UI)

*/

//Budget controller
var budgetController = (function() {
    
//TODO
    
})();


//UI controller
var UIController = (function() {
    
    return {
      getInput: function() {
          return {
                        
          type: document.querySelector('.add__type').value, //Will be either income or expenses
          description: document.querySelector('.add__description').value,
          value:  document.querySelector('.add__value').value
          };   
      }  
    };
    
})();


//Global app controller
var controller = (function(budgetCtrl, UICtrl) {
    
    var ctrlAddItem = function() {
    //TODO:
       
       //1. Get the filled input data
       
       
       
       //2. Add the tiem to the budget controller.
       
       
       
       //3. Add the item to the UI.
       
       
       
       //4. Calc the budget.
       
       
       
       //5. Display budget
       
       console.log('It works');
       
    }
    
    document.querySelector('.add__btn').addEventListener('click',ctrlAddItem);
    
    document.addEventListener('keypress', function(event) {
        if (event.keyCode === 13 || event.which === 13) {
            ctrlAddItem();
        }
        
    });
    
})(budgetController, UIController);

