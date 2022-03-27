import { ApolloProvider } from "@apollo/react-hooks";
import ApolloClient, { InMemoryCache } from "apollo-boost";
import DisplayContainer from "../components/VendingMachine/DisplayContainer";


const VendingMachine = () => {
  const client = new ApolloClient({
    uri: "http://localhost:3000/api/myserver",
    cache: new InMemoryCache()
  });

  // test that i can query info client side
  // client.query({ query: GET_ALL_SODAS }).then(result => console.log(result))

  return (
    <ApolloProvider client={client}>
      <div>
        <h1>Virtual Vending Machine!</h1>
        <DisplayContainer />
      </div>
    </ApolloProvider>
  );
};

export default VendingMachine;
