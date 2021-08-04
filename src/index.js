import { ApolloServer } from 'apollo-server';
import schema from './sch # Comments in GraphQL strings (such as this one) start with the hash (#) symbol.


const server = new ApolloServer({ schema });

server.listen().then(({ url }) => {
  console.log(`Server ready at ${url}`);
});
