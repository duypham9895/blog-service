import { GraphQLClient as Client } from 'graphql-request';

const client = new Client('https://blog-app.hasura.app/v1/graphql', {
  headers: {
    'content-type': 'application/json',
    'x-hasura-admin-secret': process.env.HASURA_ADMIN_SECRET,
  },
});

export class GraphClient {
  public static request = client.request.bind(client);
}
