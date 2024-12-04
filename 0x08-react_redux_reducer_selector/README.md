# 0x08. React Redux reducer+selector

## Project Overview

This project focuses on implementing Redux reducers and selectors in a React application. You will learn how to manage state using reducers, ensure immutability, and improve performance through selectors.


## Technologies Used

- **Front-end**: React
- **Language**: JavaScript (ES6)
- **State Management**: Redux
- **Libraries**: Immutable.js, Normalizr

## Learning Objectives

By the end of this project, you should be able to explain:

- The purpose of a reducer and its role in your application
- Why reducers should be pure and avoid mutations
- The use of Immutable.js within reducers
- The role of Normalizr in state management
- What selectors are and when to use them

## Resources

Read or watch the following materials:

- [Reducers](#)
- [Selectors](#)
- [Writing Tests](#)
- [Immutable Map Documentation](#)
- [Normalizr](#)
- [Normalizing State Shape](#)

## Requirements

- Allowed editors: vi, vim, emacs, Visual Studio Code
- All files must end with a new line
- Files will be interpreted/compiled on Ubuntu 18.04 LTS using Node.js 12.x.x and npm 6.x.x
- A `README.md` file at the root of the project is mandatory
- Push all files including `package.json` and `.babelrc`
- All functions must be exported

## Tasks

### 0. Write a Basic Reducer (Mandatory)

1. Reuse the latest dashboard project from the React course `0x08-React_Redux_action_creator+normalizr`.
2. Create the initial state in `reducers/uiReducer.js`:
   - `isNotificationDrawerVisible`: Boolean
   - `isUserLoggedIn`: Boolean
   - `user`: Empty Object

3. Implement the reducer function:
   - Handle actions: `DISPLAY_NOTIFICATION_DRAWER`, `HIDE_NOTIFICATION_DRAWER`, `LOGIN_SUCCESS`, `LOGIN_FAILURE`, `LOGOUT`.

4. Write tests in `reducers/uiReducer.test.js` to verify the functionality.

### 1. Use Immutable for the UI Reducer (Mandatory)

- Install Immutable.js and update `uiReducer.js` to use `Map` from Immutable.js.
- Update tests accordingly.

### 2. Create a Reducer for Courses (Mandatory)

1. Create a load action in `courseActionTypes.js`.
2. Write a reducer function in `courseReducer.js` with the default state as an empty array.
3. Handle actions: `FETCH_COURSE_SUCCESS`, `SELECT_COURSE`, `UNSELECT_COURSE`.
4. Write tests in `courseReducer.test.js`.

### 3. Create the Reducer for Notifications (Mandatory)

1. Create a load action in `notificationActionTypes.js`.
2. Write a reducer function in `notificationReducer.js` with default state as an object.
3. Handle actions: `FETCH_NOTIFICATIONS_SUCCESS`, `MARK_AS_READ`, `SET_TYPE_FILTER`.
4. Write tests in `notificationReducer.test.js`.

### 4. Normalizr & Immutable (Mandatory)

1. Create schemas in `schema/courses.js` and `schema/notifications.js`.
2. Update reducers to use normalized data and Immutable.js.
3. Update test files as necessary.

### 5. Selectors (Mandatory)

1. Create selectors in `src/selectors/notificationSelector.js`:
   - `filterTypeSelected`
   - `getNotifications`
   - `getUnreadNotifications`

2. Write tests in `notificationSelector.test.js`.

## Repository

- **GitHub Repository**: [alx-react](https://github.com/alx-react)
- **Directory**: `0x08-react_redux_reducer_selector`
- **Files**: 
  - `task_0/dashboard/src/reducers/uiReducer.js`
  - `task_1/dashboard/src/reducers/uiReducer.js`
  - `task_2/dashboard/src/reducers/courseReducer.js`
  - `task_3/dashboard/src/reducers/notificationReducer.js`
  - `task_4/dashboard/src/schema/courses.js`
  - `task_5/dashboard/src/selectors/notificationSelector.js`

## Copyright

Copyright © 2024 ALX, All rights reserved.