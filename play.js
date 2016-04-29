import update from 'react-addons-update';

let student = {name:’John Caster’, grades:[’A’,’C’,’B’]}

//The update method accepts two parameters. The first one is the object or array that you want to update.
//The second parameter is an object that describes WHERE the mutation should take place and WHAT kind of mutation you want to make
let newStudent = update(student, {grades:{$push: [’A’]}})

//If you want to completely change the array, you use the command $set instead of $push:
let newStudent = update(student, {grades:{$set: [’A’,’A’,’B’]}})

let originalTicket={
  company: ’Dalta’,
  flightNo: ’0990’,
  departure: {
    airport: ’LAS’,
    time: ’2016-08-21T10:00:00.000Z’
  },
  arrival: {
    airport: ’MIA’,
    time: ’2016-08-21T14:41:10.000Z’
  },
  codeshare: [
    {company:’GL’, flightNo:’9840’},
    {company:’TM’, flightNo:’5010’}
  ]
}

//totally new object with only one different property
let newTicket = update(originalTicket, {
                         arrival: {
                           airport: {$set: ’MCO’}
                         }
                       });

//It’s also possible to use array indexes to find WHERE a mutation should happen. For example,
//if you want to mutate the first codeshare object (the array elopement at index 0),
let newTicket = update(originalTicket,{
                         codeshare: {
                           0: { $set: {company:’AZ’, flightNo:’7320’} }
                         }

//delete method using update
 deleteTask(cardId, taskId, taskIndex){
   // Find the index of the card
   let cardIndex = this.state.cards.findIndex((card)=>card.id == cardId);

   // Create a new object without the task
   let nextState = update(this.state.cards, {
     [cardIndex]: {
       tasks: {$splice: [[taskIndex,1]] }
     }
   });

   // set the component state to the mutated object
   this.setState({cards:nextState});

   // Call the API to remove the task on the server
   fetch(`${API_URL}/cards/${cardId}/tasks/${taskId}`, {
     method: ’delete’,
     headers: API_HEADERS
   });
 }

 //toggle method
 toggleTask(cardId, taskId, taskIndex){
    // Find the index of the card
    let cardIndex = this.state.cards.findIndex((card)=>card.id == cardId);
    // Save a reference to the task’s ’done’ value
    let newDoneValue;
    // Using the $apply command, you will change the done value to its opposite
    let nextState = update(this.state.cards, {
      [cardIndex]: {
        tasks: {
          [taskIndex]: {
            done: { $apply: (done) => {
                newDoneValue = !done
                return newDoneValue;
              }
            }
          }
        }
      }
    });

    // set the component state to the mutated object
    this.setState({cards:nextState});

    // Call the API to toggle the task on the server
    fetch(`${API_URL}/cards/${cardId}/tasks/${taskId}`, {
        method: ’put’,
        headers: API_HEADERS,
        body: JSON.stringify({done:newDoneValue})
    });
  }

  //add method with update
  addTask(cardId, taskName){
      // Find the index of the card
      let cardIndex = this.state.cards.findIndex((card)=>card.id == cardId);

      // Create a new task with the given name and a temporary ID
      let newTask = {id:Date.now(), name:taskName, done:false};

      // Create a new object and push the new task to the array of tasks
      let nextState = update(this.state.cards, {
                        [cardIndex]: {
                          tasks: {$push: [newTask] }
                        }
                      });

      // set the component state to the mutated object
      this.setState({cards:nextState});

      // Call the API to add the task on the server
      fetch(`${API_URL}/cards/${cardId}/tasks`, {
        method: ’post’,
        headers: API_HEADERS,
        body: JSON.stringify(newTask)
      })
      .then((response) => response.json())
      .then((responseData) => {
        // When the server returns the definitive ID
        // used for the new Task on the server, update it on React
        newTask.id=responseData.id
        this.setState({cards:nextState});
      });
    }
