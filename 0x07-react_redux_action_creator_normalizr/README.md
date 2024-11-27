# Project Title: React Redux Action Creator Normalizr

### :open_file_folder: Short Specializations - Front―End Development 
## Overview

This project implements a series of tasks focused on creating a Redux store with action creators and normalizing data using Normalizr. The project utilizes JSON data for notifications and simulates API interactions for user login.

## :closed_book: Resources
* [Normalizr](https://github.com/paularmstrong/normalizr)
* [Normalizing State Shape](https://redux.js.org/usage/structuring-reducers/normalizing-state-shape)
* [Redux Getting started and core concepts](https://redux.js.org/introduction/getting-started)
* [Redux Actions](https://redux.js.org/tutorials/fundamentals/part-2-concepts-data-flow)
* [Async Actions](https://redux.js.org/tutorials/fundamentals/part-6-async-logic)
* [Writing tests for Redux](https://redux.js.org/usage/writing-tests)


## :bulb: Requirements

- Allowed editors: vi, vim, emacs, Visual Studio Code
- All files must end with a new line.
- The project will be run on Ubuntu 18.04 LTS using Node.js version 12.x.x and npm version 6.x.x.
- A `README.md` file is mandatory at the root of the project directory.
- Push all files, including `package.json` and `.babelrc`.
- All functions must be exported.

## Provided Files

- `notifications.json`
- `login-success.json`

## Tasks Overview

1. **Read Data from a JSON**: Import notifications from `notifications.json` and create a function to retrieve notifications by user ID.
2. **Normalize a Nested JSON**: Use Normalizr to normalize notification data into entities.
3. **Filter a Normalized Schema**: Modify the function to work with normalized data.
4. **Create Actions for the Course List**: Implement action creators for selecting courses.
5. **Create Actions for the UI**: Manage user login/logout and display notifications.
6. **Create Actions for the Notification List**: Implement actions for marking notifications as read and setting filters.
7. **Async Action Creators**: Create async actions to handle login requests and responses from a simulated API.

## Installation

1. Clone the repository:
   ```bash
   git clone https://github.com/GammachisT/alx-react.git