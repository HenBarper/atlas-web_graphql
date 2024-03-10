# GraphQL API

## Learning Objectives
1. GraphQL: GraphQL is a query language for APIs and a runtime for executing those queries with your existing data. It allows clients to request only the data they need, and nothing more, making it more efficient than traditional REST APIs. With GraphQL, you define your API schema, and clients can query that schema to get the exact data they require.

1. GraphiQL: GraphiQL is an in-browser IDE for exploring GraphQL APIs. It provides an interactive environment where you can write and execute GraphQL queries, see the results, and explore the schema of your GraphQL server.

1. Testing Queries using GraphiQL:

    - Open GraphiQL in your browser.
    - Enter your GraphQL endpoint URL.
    - Write your GraphQL queries or mutations in the editor.
    - Press the play button to execute the query.
    - View the results in the right panel.

1. Apollo: Apollo is a comprehensive GraphQL toolkit that includes various libraries and tools for building GraphQL applications. It provides client libraries for various frontend frameworks (like React, Angular, Vue.js), a server library for building GraphQL servers, and tools for caching, state management, and more.

1. Connecting to MongoDB:

    - You can use libraries like mongoose or mongodb in Node.js to connect to MongoDB.
    - Install the required package using npm or yarn.
    - Configure the connection by providing the MongoDB URI, database name, and any required options.
    - Use the library's methods to perform CRUD operations on your MongoDB database.

1. Making Queries from React:

    - Use Apollo Client, a GraphQL client for React applications.
    - Install @apollo/client package.
    - Configure Apollo Client by providing the URI of your GraphQL server.
    - Use the useQuery hook to execute GraphQL queries and fetch data.
    - Render the data in your React components.

1. Making GraphQL Server accept requests from another server:

    - Enable CORS (Cross-Origin Resource Sharing) on your GraphQL server to allow requests from other origins.
    - In your GraphQL server code, set the appropriate CORS headers to permit requests from specific origins or all origins.
    - Ensure that the server-side code properly handles and processes requests from different origins.
