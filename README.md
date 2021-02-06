# Hiring test: React #1
Given is a simple prototype of an application, made using the React library.

The purpose of the application is to manage a list of tasks for people:
we can add a person, and with each person we can add a task.

The purpose of this test is to optimize the application.

# The development environment
You'll need the latest LTS version of [NodeJS](https://nodejs.org/). After
installing it run the following in the top directory
```shell
npm install
```
to install all the dependencies.

The source code is inside the [src](src) and [static](static) directories.
The application can be started with:
```shell
npm start
```
This starts the built-in web server on port 8088. Application can then be
loaded from the URL `http://localhost:8088`.

# The Assignment
The application contains strategically placed statements `console.log()`, whose
purpose it is to illustrate the path taken by code (code path). The output can
be seen in the browser's console. Based on this output, or code path, we can see
that at the application start the top App component is rendered three times. Further
we can see that at each adding of a person, or of a task, the entire application
is re-rendered two times.

We can conclude that the application "suffers" from duplicate (triplicate)
rendering. Is it possible to optimize it in such a way that the number of
needed renders is reduced? Ideally the application should be rendered only
once per an event (application startup, or a state change such as adding a
person). Is that achievable?

Note that you shouldn't change any CSS; the solution should consist only of
changes to the JavaScript code, and no HTML and/or CSS (styling) output should
be modified. Said otherwise: the DOM should remain identical.

Explain how it is possible to reduce the number of renderings per event, or
why this is impossible. If the reduction is possible, then change the code
correspondingly and attach it to your answer.

