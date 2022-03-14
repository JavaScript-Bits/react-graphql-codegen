import './App.css'
import {gql, useQuery} from "@apollo/client";
import {useGetUsersQuery} from "./generated/graphql";

function App() {
  const {loading, error, data} = useGetUsersQuery()
  console.log(data)

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error :(</p>;


  return (
    <div className="App">
      <header className="App-header">
        <p>Hello Vite + React!</p>
        {data?.users.map((user, i) => <span key={i}>{user.username} <br/> {user.email}</span>)}
      </header>
    </div>
  )
}

export default App
