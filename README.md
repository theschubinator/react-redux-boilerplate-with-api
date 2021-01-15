# Getting Started

1. This application is a basic boilerplate setup with an existing [React](https://reactjs.org/docs/getting-started.html) with [Redux](https://redux.js.org/) application.

2. In addition, the application is preconfigured with an [OpenApi](https://swagger.io/docs/specification/2-0/basic-structure/) *(formely called Swagger 2.0)* server for mocking api calls.

3. The React application was initilized with the help of [create-react-app](https://create-react-app.dev/ "Create-React-App").

## OpenApi Mock Server

 1. [Documenation](https://github.com/theschubinator/react-redux-boilerplate-with-api/tree/main/api/documentation) - This is where you will define the [path](https://github.com/theschubinator/react-redux-boilerplate-with-api/tree/main/api/documentation/paths) as well as the [definitions](https://github.com/theschubinator/react-redux-boilerplate-with-api/tree/main/api/documentation/definitions/user) for each endpoint within your api.
 2. [Handlers](https://github.com/theschubinator/react-redux-boilerplate-with-api/tree/main/api/handlers) - This is where you will set the actual response that each endpoint within your api will send to your React applicaiton.
    - *Note that the directory path _MUST_ match your api path exactly in order for the server to find the correct response*

## Available Scripts

In the project directory, you can run:

### `yarn start`

This will start a local server for both the OpenApi as well as the React Application.

The React Application will start on [http://localhost:3000].
The OpenApi will start on [http://localhost:8000].

The page will reload if you make edits.\
You will also see any lint errors in the console.

### `yarn test`

Launches the test runner in the interactive watch mode.\
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `yarn build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `yarn eject`

**Note: this is a one-way operation. Once you `eject`, you can’t go back!**

If you aren’t satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you’re on your own.

You don’t have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn’t feel obligated to use this feature. However we understand that this tool wouldn’t be useful if you couldn’t customize it when you are ready for it.
