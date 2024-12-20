// Create web server
// Set up Express
// Import express module
const express = require('express');
const app = express();
// Import the body-parser module
const bodyParser = require('body-parser');
// Set up body-parser
app.use(bodyParser.json());
// Import the comments module
const comments = require('./comments');

// Create a route that sends all comments
app.get('/comments', (req, res) => {
  res.send(comments.getComments());
});

// Create a route that adds a new comment
app.post('/comments', (req, res) => {
  const comment = req.body.comment;
  comments.addComment(comment);
  res.send(comment);
});

// Create a route that deletes a comment
app.delete('/comments/:id', (req, res) => {
  const id = req.params.id;
  comments.deleteComment(id);
  res.send('Deleted comment with id: ' + id);
});

// Start the server
app.listen(4001, () => {
  console.log('Server is listening on port 4001');
});