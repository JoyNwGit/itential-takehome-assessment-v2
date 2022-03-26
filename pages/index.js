import { ApolloProvider } from "@apollo/react-hooks";
import ApolloClient, { gql } from "apollo-boost";
import SodaCard from "../components/VendingMachine/SodaCard";


const Home = ({ data }) => {
  const client = new ApolloClient({
    uri: "http://localhost:3000/api/myserver",
  });

  return (
    <ApolloProvider client={client}>
      <div>
        <h1>NextJS GraphQL Apollo App</h1>
        <SodaCard />
      </div>
    </ApolloProvider>
  );
};

export default Home;
