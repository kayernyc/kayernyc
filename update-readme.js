require('dotenv').config();

const { Octokit } = require("@octokit/rest");

console.log(process.env.OCTOKEY);

// const octokit = new Octokit({
//   userAgent: 'myApp v1.2.3',
// });