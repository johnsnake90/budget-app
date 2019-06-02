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
    
    var Expense = function(id, description, value) {
        this.id = id;
        this.description = description;
        this.value = value;
    };
    
    var Income = function(id, description, value) {
        this.id = id;
        this.description = description;
        this.value = value;
    };
    
    
    var data = {
        allItems: {
            exp: [],
            inc: []
        },
        totals: {
            exp: 0,
            inc: 0
        }
    };
    
    return {
        addItem: function(type, des, val) {
            var newItem, ID;
            
            //ID = last ID + 1
            
            
            //Create new ID
            if (data.allItems[type].length > 0) {
                ID = data.allItems[type][data.allItems[type].length - 1].id + 1;
            } else {
                ID = 0;
            }
            
            
            
            
            //Create new item based on type
            if (type === 'exp') {
              newItem = new Expense(ID, des, val);
            } else if (type === 'inc') {
                newItem = new Income(ID, des, val);
            }
            
            //Push it into data structure
            data.allItems[type].push(newItem);
            
            //Return the new element
            return newItem;
        }
    };
    
    
})();



//UI controller
var UIController = (function() {
    
    var DOMstrings = {
        inputType: '.add__type',
        inputDescription: '.add__description',
        inputValue: '.add__value',
        inputBtn: '.add__btn'
    };
    
    return {
      getInput: function() {
          return {            
            type: document.querySelector(DOMstrings.inputType).value, //Will be either income or expenses
            description: document.querySelector(DOMstrings.inputDescription).value,
            value:  document.querySelector(DOMstrings.inputValue).value
          };   
      },
        
        getDOMstrings: function() {
            return DOMstrings;
    }
        
    };
    
})();


//Global app controller
var controller = (function(budgetCtrl, UICtrl) {
    
    var DOM = UICtrl.getDOMstrings();
    
    var setupEventListeners = function() {
    document.querySelector(DOM.inputBtn).addEventListener('click',ctrlAddItem);
    
    document.addEventListener('keypress', function(event) {
        if (event.keyCode === 13 || event.which === 13) {
            ctrlAddItem();
            }
         
        });
    };
    
    
    var ctrlAddItem = function() {
        var input, newItem;
       
       //1. Get the filled input data
       var input = UICtrl.getInput();
       console.log(input);
       
       //2. Add the item to the budget controller.
       var newItem = budgetCtrl.addItem(input.type, input.description, input.value);
       
       
       //3. Add the item to the UI.
       
       
       
       //4. Calc the budget.
       
       
       
       //5. Display budget
       
       console.log('It works');
       
    };
    
    return {
        init: function() {
            console.log('Application has started.');
            setupEventListeners();
        }
    };
    
})(budgetController, UIController);

controller.init();
