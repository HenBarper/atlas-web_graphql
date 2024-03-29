import React from 'react';
import { ApolloProvider } from 'react-apollo';
import ApolloClient from 'apollo-boost';
// components
import TaskList from './components/TaskList';
import AddTask from './components/AddTask';
import AddProject from './components/AddProject';
// apollo client setup
const client = new ApolloClient({
  uri: 'http://localhost:3000/graphql', // Set the URI for your GraphQL server
});
function App() {
  return (
    <ApolloProvider client={client}>
      <div id = "main" >
        <div id = "bg" ></div> 
        <h1> Holberton school tasks </h1> 
        <TaskList/>
        <AddProject/>
        <AddTask/>
      </div>
    </ApolloProvider>
  );
}

export default App;
