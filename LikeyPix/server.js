const config ={
    host: "localhost",
    port: 5432,
    database: "likeypixdb",
    user: "postgres"
  }

const pgp = require('pg-promise')();
const db = pgp(config);

// demo query--------------------------------------------
// db.query(`
//   SELECT * FROM users 
// `)
// .then((results)=>{
//     results.forEach((user)=>{
//         console.log(`${user.name}: ${user.email}`);
//     })
// })

// .catch((e)=>{
//     console.log("woopsie");
//     console.log(e);
// })


// Read----------------------------------------------
//get all users
function getAllUsers(){
    db.many(`
      SELECT * FROM users
    `)
    .then((users)=>{
        users.forEach((user)=>{
            console.log(`${user.name}: ${user.email}`);
        });
    })
    .catch((e)=>{
        console.log(e);
    })
}


//get all posts
function getAllPosts(){
    db.many(`
        SELECT * FROM posts ORDER BY user_id
    `)
    .then((posts)=>{
        posts.forEach((post)=>{
            console.log(`${post.user_id}: ${post.url}`)
        });
    })
    .catch((e)=>{
      console.log(e)  
    })
};
getAllPosts()

//get all posts by a specific user


// Create-----------------------------------------------------------

// Udate
// delete

//ok to leave this out for an express app.
// we want this for our command-line app.
pgp.end()