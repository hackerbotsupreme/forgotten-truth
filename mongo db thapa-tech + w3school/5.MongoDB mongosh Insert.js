// MongoDB mongosh Insert
// Insert Documents
// There are 2 methods to insert 
// documents into a MongoDB database.

// To insert a single document(single object), 
// use the insertOne() method.
insertOne()

// This method inserts a 
// single object into the 
// database.

// Note: When typing in the 
// shell, after opening an 
// object with curly braces 
// "{" you can press enter 
// to start a new line in 
// the editor without 
// executing the command. 
// The command will execute 
// when you press enter after 
// closing the braces.

// Example
db.posts.insertOne({
  title: "Post Title 1",
  body: "Body of post.",
  category: "News"
})

// Note: If you try to insert 
// documents into a collection 
// that does not exist, MongoDB 
// will create the collection 
// automatically.

// To insert multiple documents 
// at once, use the insertMany() 
// method.
insertMany()
// This method inserts an array 
// of objects into the database.

// Example
db.posts.insertMany([  
  {
    title: "Post Title 2",
    body: "Body of post.",
    category: "Event"
  },
  {
    title: "Post Title 3",
    body: "Body of post.",
    category: "Technology"
  },
  {
    title: "Post Title 4",
    body: "Body of post.",
    category: "Event"
  }
])