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
  const query = db('posts').where({id: id})

  return query.then(posts => posts[0])
}

function insert(postData) {
  return db('posts').insert(postData)
}

function update(id, postData) {
  return db('posts').where({id: id}).update({id, ...postData})
}

function remove(id) {
  return db('posts').where({id: id}).del()
}

function findPostComments(postId) {
}

function findCommentById(id) {
}

function insertComment(comment) {
}
