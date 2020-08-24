const knex = require('knex');
const knexConfig = require('../knexfile.js');
const db = knex(knexConfig.development);

module.exports = {
  find,
  findById,
  insert,
  update,
  remove,
  findPostComments,
  findCommentById,
  insertComment,
};

function find() {
  const query = db('posts')

  return query.then(posts => posts)
}

function findById(id) {
}

function insert(post) {
}

function update(id, post) {
}

function remove(id) {
}

function findPostComments(postId) {
}

function findCommentById(id) {
}

function insertComment(comment) {
}
