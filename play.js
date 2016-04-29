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
