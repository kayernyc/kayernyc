require('dotenv').config();

const { Octokit } = require("@octokit/rest");

const fetchAllChanges = async () => { 
  const octokit = new Octokit({
    userAgent: 'kayernyc v1.2.3',
    auth: process.env.OCTOKEY
  });
  
  const result =  await octokit.graphql(`
  query { 
    repository(name: "til", owner: "kayernyc") {
      id
      pushedAt
      pullRequests(first: 5) {
        edges {
          node {
            id
            files(first: 5) {
              nodes {
                path
              }
              totalCount
            }
          }
        }
      }
    }
  }
  `)
  
  console.log(JSON.stringify(result, null, 2))
}

fetchAllChanges();