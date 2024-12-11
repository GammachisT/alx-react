# Redux Connectors and Providers Project

## Learning Objectives

At the end of this project, you are expected to be able to explain to anyone, without the help of Google:

- Redux connectors and how to use them.
- The different functions you can pass to a connector (`mapStateToProps`, `mapDispatchToProps`).
- How to map an action creator to a component using a connector.
- How to map an async action creator to a component with Redux Thunk.
- What Redux Providers are and how to set up your app’s store.
- How you can improve a connector’s performance using Reselect.
- How to use Redux’s dev tools to debug the state of your application.

## Requirements

- Allowed editors: `vi`, `vim`, `emacs`, `Visual Studio Code`.
- All your files should end with a new line.
- A `README.md` file, at the root of the folder of the project, is mandatory.
- All your files will be interpreted/compiled on Ubuntu 18.04 LTS using Node 12.x.x and npm 6.x.x.
- Push all of your files, including `package.json` and `.babelrc`.
- All of your functions must be exported.

## Provided Files

- `dashboard/dist/courses.json`
- `dashboard/dist/login-success.json`
- `dashboard/dist/notifications.json`

## Tasks

### 0. Write mapStateToProps
- Reuse the latest dashboard project you worked on in the React course `0x08-React_Redux_reducer` and install `react-redux`.
- In `App/App.js`, create a function named `mapStateToProps` to connect the `uiReducer` and the `isLoggedIn` property.

### 1. Create a Small Store
- In `index.js`, create a store using `createStore` from Redux that contains the `uiReducer` state.
- Implement a provider passing the store to the main App.

### 2. Test MapStateToProps
- Export the `mapStateToProps` function and test it in `App.test.js` to verify it returns the correct object.

### 3. Update mapStateToProps
- Update `mapStateToProps` to also include `displayDrawer` connected to `isNotificationDrawerVisible`.

### 4. Connect Your Action Creators
- Connect the action creators `displayNotificationDrawer` and `hideNotificationDrawer` to your component.

### 5. Refactor Your Code
- Remove old functions related to drawer handling and define `propTypes` and `defaultProps`.

### 6. Update Your Tests
- Refactor `App.test.js` to remove tests for old functions and update for new attributes.

### 7. Async Actions & Thunk Middleware
- Implement `LoginRequest` and `logout` action creators across the application using Redux Thunk.

### 8. Connect LoginRequest to the App
- Connect the `loginRequest` action creator and update the component accordingly.

### 9. Connect User State to the Footer
- Create a `mapStateToProps` function for the Footer component and connect it.

### 10. Connect Logout Action Creator to the Header
- Create a `mapStateToProps` function for the Header component and connect the logout action creator.

### 11. Modify the uiReducer
- Update the `uiReducer` to handle `LOGIN` and `LOGOUT` actions.

### 12. Modify the Test Suites
- Update tests in `App.test.js`, `Footer.test.js`, and `Header.test.js` to reflect the changes.

### 13. Understand How to Use the Redux Chrome Extension
- Install the Redux DevTools extension and modify `index.js` to support it.

### 14. Combine Store: Root Reducer
- Create `reducers/rootReducer.js` to combine all reducers.

### 15. Combine Store: Modify the Application
- Update `index.js` to create the Redux store using the root reducer.

### 16. Combine Store: Write the Tests
- Modify `App.test.js` for compatibility with the new reducer structure.
- Create `rootReducer.test.js` to test the initial state.

### 17. Connect Notifications: New Action Creator
- Implement action creators in `notificationActionCreators.js` to handle fetching notifications.

### 18. Connect Notifications: Improve Reducer
- Update `notificationReducer.js` to include a loading state and handle API data correctly.

### 19. Connect Notifications to the Reducer
- In `Notifications.js`, map state and action creators to the component.

### 20. Connect Notifications: Clean Up
- Remove outdated functions and files from the project.

### 21. Connect Notifications: Update the Test Suites
- Update existing test suites to reflect recent changes and add new tests for action creators.

### 22. Selectors
- Update `Notifications.js` to use `getUnreadNotifications` and map necessary actions.

### 23. Connect Courses: Create a Course Selector
- Implement a selector in `courseSelector.js` to retrieve course data.

### 24. Connect Courses: Create a Fetch Courses Function
- Create a function in `courseActionCreators.js` to fetch courses from the API.

### 25. Connect the Courses Component
- Update `CourseList.js` to connect with action creators and selectors.

### 26. Memoized Selectors: Redux Reselect
- Implement a memoized selector in `notificationSelector.js`.

### 27. Memoized Selectors: Update the UI
- Modify `Notifications.js` to use the new selector and add filter buttons.

### 28. Memoized Selectors: Update the Test Suite
- Add tests for filter functionality and update existing tests.

### 29. Container/Component
- Create a `NotificationsContainer.js` to manage fetching and state connection, and refactor `Notifications.js`.

## Getting Started

1. Clone the repository:
   ```bash
   git clone https://github.com/GammachisT/alx-react.git
   cd alx-react/0x09-react_redux_connectors_and_providers