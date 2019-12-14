1. What problem does the context API help solve?
Bringing Down the State to deeply embeded Components.

1. In your own words, describe `actions`, `reducers` and the `store` and their role in Redux. What does each piece do? Why is the store known as a 'single source of truth' in a redux application?
actions - logic behind the function
reducer - describes the action, sets the state,
store - application wide state
its known single source of truth since the state is always in the root of the app.

1. What is the difference between Application state and Component state? When would be a good time to use one over the other?
Component state would be better over the Application state when the application is small to mid scale, application state state are only good for large scale apps.

1. Describe `redux-thunk`, what does it allow us to do? How does it change our `action-creators`?
lets us return a function as an action and use dispatch directly.

1. What is your favorite state management system you've learned and this sprint? Please explain why!
context api for it's simplicity
