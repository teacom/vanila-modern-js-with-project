const http = new easyHTTP();

//!Create Data
const data = {
  title: 'Custom Post',
  body: 'This is a custom post'
};

//* Retrieve POST - GET method
http.get('https://jsonplaceholder.typicode.com/posts/1', function (err, post) {
  if (err) {
    console.log(err);
  } else {
    console.log(post);
  }
})

//* Retrieve POSTS - GET method
http.get('https://jsonplaceholder.typicode.com/posts', function (err, posts) {
  if (err) {
    console.log(err);
  } else {
    console.log(posts);
  }
})

//* Create Post - POST method
http.post('https://jsonplaceholder.typicode.com/posts', data, function (err, post) {
  if (err) {
    console.log(err);
  } else {
    console.log(post);
  }
});

//* Update Post - PUT method
http.put('https://jsonplaceholder.typicode.com/posts/1', data, function (err, post) {
  if (err) {
    console.log(err);
  } else {
    console.log(post);
  }
});

//* Delete Post - DELETE method
http.delete('https://jsonplaceholder.typicode.com/posts/1', function (err, response) {
  if (err) {
    console.log(err);
  } else {
    console.log(response);
  }
})
