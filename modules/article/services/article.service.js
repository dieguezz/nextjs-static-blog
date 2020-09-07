import { gql } from "@apollo/client";
import apolloClient from "../../core/services/apolloClient.service";

export async function getAll() {
  return apolloClient
    .query({
      query: gql`
        {
          articles {
            canonical
            description
            id
            created_at
            title
          }
        }
      `,
    })
    .then((result) => result.data.articles);
}

export async function getByCanonical(canonical) {
  return apolloClient
    .query({
      query: gql`
        {
          articleByCanonical(canonical: "${canonical}") {
            title
            body
          }
        }
      `,
    })
    .then((result) => {
      return result.data.articleByCanonical;
    });
}
