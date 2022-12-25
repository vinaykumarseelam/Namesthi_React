# Namesthi_React

# Emmet : (Gives Boiler Plate Code)

1. Emmet is a build in feature of VSCode, its doesnt require any additional installation.
2. By using shortcuts emmit improves the speed if HTML and CSS workflow, without manually typing full code.
3. Examples : li*2, div.group$*5, nav>ul>li.
Rference link (https://blog.logrocket.com/type-html-faster-react-emmet-vs-code/)

# Difference between a Library and Framework?

Framework : 

1. Collection of Libraries that provides pre written code for everyday programming tasks to a developer.
2. Provides a structure along with rules and guidelines to make sure the architecture is in correct direction.
3. Development is faster and efficient, Complex application.

Examples :

Library : 

1. Collection of pre written code snippets that can be reduced to perform common functoins.
2. Can be plugged into your projects code as needed basis.
3. Faster Development and fewer vulnerabilities to have errors.

Main Difference : 

1. Inversion of control - with a library one has complete control over the aplication flow, you get to decide when and where you want to call the library.
2. With the framework the complete flow is controlled by the framework itself.
# What is CDN? Why do we use it? (Content Delivery Network) :  

A content delivery network (CDN) is a group of geographically distributed servers that speed up the delivery of web content by bringing it closer to where users are.

We use CDN to reduce Latency. Latency is nothing but annoying delay that we experience when trying to access web page or video stream before its fully loads on your device.

# Why is React known as React?

React was developed for applications (Facebook) that have constantly changing data.  Since React is a front-end framework or the “View” in MVC, this means that as the user clicks around and changes the app’s data, the view should “react” or change with those user events. User events being mouse clicks, typing, submitting a form.

# What is crossorigin in script tag?

CORS stands for Cross-Origin Resource Sharing
It is a mechanism that allows resources on a web page to be requested from another domain outside their own domain. 
It defines a way of how a browser and server can interact to determine whether it is safe to allow the cross-origin request. 
CORS allows servers to specify who can access the assets on the server, among many other things.

# What is diference between React and ReactDOM

React library is responsible for creating views.
ReactDOM library is responsible to actually render UI in the browser.
React: https://cdnjs.com/libraries/react
ReactDOM: https://cdnjs.com/libraries/react-dom


# What is difference between react.development.js and react.production.js files via CDN?

The development build is used - as the name suggests - for development reasons. You have Source Maps, debugging and often times hot reloading ability in those builds. 
The production build, on the other hand, runs in production mode which means this is the code running on your client's machine

#  What is async and defer?
When we load web page, two things happens:
HTMP Parsing
Scripts Loading : 1 Fetching the scripts from the external netwrok 2 Executing the script line by line.
Async and Defer are boolean attributes used along with script tags to load external script efficiently in our web page.

Async - means execute code when it is downloaded and do not block DOM construction during downloading process.
Defer - means execute code after it's downloaded and browser finished DOM construction and rendering process.
