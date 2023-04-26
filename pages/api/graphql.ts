import { createYoga, createSchema } from "graphql-yoga";
import { gql } from "graphql-tag";
import axios from "axios";
import { verifyToken } from "@/server/verifyToken";
import { DecodedIdToken } from "firebase-admin/lib/auth/token-verifier";
import { adminAuth, adminFirestore } from "@/server/firebase-admin-config";
import { log } from "console";

type Context = {
  user?: DecodedIdToken | undefined;
};

const typeDefs = gql`
  type Query {
    products: [Product]
    singleProduct(MyId: Int): Product
    addProduct(Data: Product): [Product]
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
    async products() {
      try {
        const products = await adminFirestore.collection("products").get();
        return products.docs.map((prod) => prod.data());
      } catch (error) {
        console.error(error);
      }
    },

    async singleProduct(args: any) {
      try {
        const products = await adminFirestore
          .collection("products")
          .where("ID", "==", args)
          .get();
        return products.docs.map((prod) => prod.data());
      } catch (error) {
        console.error(error);
      }
    },
    addProduct: async (_: any, { input }: any) => {
      const { title, content } = input;
      const newProdRef = await adminFirestore
        .collection("products")
        .add({ title: title, content: content });
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
