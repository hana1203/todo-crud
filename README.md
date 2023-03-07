# todo-crud

User can sign up and log in, and create own todo list. 
Created todo items can be modified and deleted.

## Demo
![로그인](https://user-images.githubusercontent.com/92300124/223406126-d1f2ab69-53a0-48e8-99cc-cdb64b3689c0.gif)
![수정](https://user-images.githubusercontent.com/92300124/223406192-b2f69a12-e7cb-49d4-80f5-d8be325fda02.gif)
![삭제](https://user-images.githubusercontent.com/92300124/223406207-b4c40041-094e-4711-b67f-dfd947ebe534.gif)

## Technical Stack
- Js -> `TypeScript` migration 
- `Create React App`
- `Styled-components`

## Logic
1. Login/Signup
- Checks validation on email(includes @) and password(more than 8 charactors).
- Upon login is successful, server responds with JWT in the response body, then client saves JWT in local storage.
- Depending on login status, redirection occurs.
  - If token exists on login & signup page, the page is redirected to todo page.
  - Similarly, if token exists on todo page, then page is redirected to login page.
  
2. Todo 
- Creates the new todo item on todo list.
- Modifies each todo item.
  - can modifiy checkbox status if completed and todo contents.
  - can cancel its modifying mode and revert to its original status.
- Deletes each todo item.

## API
used free API from wanted
https://pre-onboarding-selection-task.shop/

:: 1. Auth
- SignUp
  - URL: `/auth/signup`
  - Method: `POST`

- LogIn
  - URL: `/auth/signin`
  - Method: `POST`

:: 2. Todo

- createTodo
  - URL: `/todos`
  - Method: `POST`

- getTodos
  - URL: `/todos`
  - Method: `GET`

- updateTodo
  - URL: `/todos/:id`
  - Method: `PUT`

- deleteTodo
  - URL: `/todos/:id`
  - Method: `DELETE`
  
## Setup
- download or clone this repo
- to install: `npm install`
- to start: `npm start`

