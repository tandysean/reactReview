From the React.js site: <blockquote>React is a declarative, efficient, and flexible JavaScript library for building user interfaces."</blockquote>

## Overview
React manages the view and the view alone through nested components that pass data through ```state``` and ```props```.

A React component encapsulates markup and functionality in one place which is very convenient. It uses JSX as a templating language. You should not think of JSX as breaking separation of concerns principle of SOLID. React only knows how to render markup and only cares about the view. It doesn't know where your data came from, how it's stored, or how to manipulate it. This is not a separation of concerns. It is the same as using Handlebars or Angular templating. They all compile to Javascript. If you render your react on the server, then you serve plain HTML.

You are not obliged to use JSX, but it's XML/HTML-like syntax is extremely easy to learn and it is very intuitive to use.

## Components
There are several types of components. The top two are:

### Functional component
Used when you don't need to access state.
```
  function Welcome(props) {
    return <h1>Hello, {props.name}</h1>;
  }
```

### Container component
Used when you need to access state.
```
  class Welcome extends React.Component {
    render() {
      return <h1>Hello, {this.props.name}</h1>;
    }
  }
```

You can also initialize state with a constructor:
```
  class Welcome extends React.Component {
    constructor() {
      super();
      this.state = { value: null };
    }
    render() {
      return <h1>Hello, {this.props.name}</h1>;
    }
  }
```
There is only one acceptable way to change state by calling
```this.setState({something: something});```

NOTE: The ```this``` value is only refers to the object in the
 constructor and render methods so you will have to bind function calls declared in the class explicitely in one of these two locations.

NOTE: ```State``` should be stored at the highest component and passed to children via props. You can pass callbacks or data via props that will be operated on by child components.

### Controlled component
A form would be an example of a controlled component. It manages data entered from the user and performs operations on/with that data.

From the React documentation,
<blockquote>In HTML, form elements such as ```<input>```, ```<textarea>```, and ```<select>``` typically maintain their own state and update it based on user input. In React, mutable state is typically kept in the state property of components, and only updated with setState().</blockquote>

If we make React ```state``` the single source of truth, a component that renders a form can also control what happens in that form.

Container components have access to all the React.Component goodies. To keep things clean we use lifecycle methods such as ```ComponentDidMount()``` and ```ComponentDidUpdate()``` to run operations, get Async data, and clean up state.
