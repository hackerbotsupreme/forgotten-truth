// MongoDB Getting Started

// MongoDB
// MongoDB is a document 
// database and can be 
// installed locally or 
// hosted in the cloud.

// SQL vs Document Databases

// SQL databases are considered 
// relational databases. They 
// store related data in 
// separate tables. When 
// data is needed, it is 
// queried from multiple 
// tables to join the data 
// Wback together.

// MongoDB is a document 
// database which is often 
// referred to as a 
// non-relational database. 
// This does not mean that 
// relational data cannot 
// be stored in document 
// databases. It means 
// that relational data 
// is stored differently. 
// A better way to refer 
// to it is as a non-tabular 
// database.

// MongoDB stores data in 
// flexible documents. 
// Instead of having multiple 
// tables you can simply 
// keep all of your related 
// data together. This makes 
// reading your data very fast.

// You can still have multiple 
// groups of data too. In 
// MongoDB, instead of tables 
// these are called collections.

// Local vs Cloud Database
// MongoDB can be installed 
// locally, which will all1ow 
// you to host your own MongoDB 
// server on your hardware. 
// This requires you to manage 
// your server, upgrades, and 
// any other maintenance.

// You can download and use the 
// MongoDB open source Community 
// Server on your hardware for free.

// However, for this course 
// we are going o use MongoDB 
// Atlas, a cloud database 
// platform. This is much easier 
// than hosting your own local database.

// To be able to experiment with 
// the code examples, you will 
// need access to a MongoDB 
// database.

// Sign up for a free MongoDB 
// Atlas account to get started.

// Creating a Cluster
// After you have created your 
// account, set up a free 
// "Shared Cluster" then 
// choose your preferred 
// cloud provider and region.

// By default, MongoDB Atlas 
// is completely locked down 
// and has no external access.

// You will need to set up 
// a user and add your IP 
// address to the list of 
// allowed IP addresses.

// Under "Database Access", 
// create a new user and 
// keep track of the username 
// and password.

// Next, under "Network Access", 
// add your current IP address 
// to allow access from your 
// computer.

// Install MongoDB Shell (mongosh)
// There are many ways to 
// connect to your MongoDB 
// database.

// We will start by using 
// the MongoDB Shell, mongosh.

// Use the official instructions 
// to install mongosh on your 
// operating system.

// To verify that it has been 
// installed properly, open 
// your terminal and type:
// mongosh --version

// You should see that the 
// latest verion is 
// installed.

// The version used 
// in this tutorial 
// is v1.3.1.

// Connect to the database
// To connect to your database, 
// you will need your database 
// specific connection string.

// In the MongoDB Atlas dashboard, 
// under "Databases", click the 
// "Connect" button for your Cluster.

// Next, choose "Connect with 
// the MongoDB Shell".

// Copy your connection string.

// Example
// Your connection string 
// should look similar to this:

// mongosh "mongodb+srv://cluster0.ex4ht.mongodb.net/myFirstDatabase" --apiVersion 1 --username YOUR_USER_NAME

// Paste your connection string 
// into your terminal and press enter.

// You will be prompted to enter 
// your database user password 
// that you created earlier.

// You are now connected to 
// the database!

// What Next?
// In the following sections we 
// will use 'mongosh' to create, 
// read, update, and delete (CRUD) 
// items in your database.

// After getting the basics down, 
// we will move on to using 
// MongoDB with other backend 
// technologies like Node.js.