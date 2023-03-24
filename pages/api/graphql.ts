import { createYoga, createSchema } from "graphql-yoga";
import { gql } from "graphql-tag";
import axios from "axios";
import { verifyToken } from "@/server/verifyToken";
import { DecodedIdToken } from "firebase-admin/lib/auth/token-verifier";
import { adminAuth, adminFirestore } from "@/server/firebase-admin-config";

type Context = {
  user?: DecodedIdToken | undefined;
};

const typeDefs = gql`
  type Query {
    product: [Product]
  }
  type Product {
    id: ID
    name: String
    description: String
    price: Int
    vat: Int
    vars: String
    image: String
  }
`;

const resolvers = {
  Query: {
    /*
    product: (root_, args_, context: Context) => {
      return [
        {
          id: 1,
          name: "ahoj",
          description: "swag",
          price: 1000,
          vat: 21,
          vars: "",
          image: "swag",
        },
      ];
    },
    */
    async product() {
      try {
        const products = await adminFirestore.collection("products").get();
        return products.docs.map((prod) => prod.data());
      } catch (error) {
        console.error(error);
      }
    },
  },
};

const schema = createSchema({
  typeDefs,
  resolvers,
});

export const config = {
  api: {
    // Disable body parsing (required for file uploads)
    bodyParser: false,
  },
};

export default createYoga({
  schema,
  // Needed to be defined explicitly because our endpoint lives at a different path other than `/graphql`
  graphqlEndpoint: "/api/graphql",
  context: async (context) => {
    const auth = context.request.headers.get("authoriation");
    return {
      user: auth ? await verifyToken(auth) : undefined,
    };
  },
});
