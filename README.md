Step-by-Step on how to run
1) npm install
2) npm run dev

might need yarn installed
npm install -g yarn

How to use the interface and API Routes
client: http://localhost:3000
server: http://localhost:3000/api/graphql
recommend testing the schema through Insomnia if you don't want the UI
- public/queries.js has all the queries that i tested with

Or structure your HTTP Requests like:
fetch for example:

<!--
fetch('http://localhost:3000/api/graphql', {
  method: 'POST',
  headers: {
    'Content-Type': 'application/json',
  },
  body: JSON.stringify({
    query: `
      query getASoda($id: String!) {
        getSoda(id: $id)
        {
          id
          soda {
            productName
            description
            cost
            maximumQuantityToVend
          }
        }
      }
      `,
    variables: {
      id: (lookup id in data/sodas.json),
    },
  }),
})
  .then((res) => res.json())
  .then((result) => console.log(result));
  -->


  Overall:
  Spent about 3 days on this.
  See "MyUserStoryNotes.txt" on my initial thought process.
  Lesson learned:
  -  Front end is way harder than backend.
  - I should've stuck with Bulma instead of trying to learn Grommet
  I'll try to complete the front end on my own later on
