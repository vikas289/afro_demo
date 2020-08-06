var database=[
    {
    username: "vikas",
    password:"123"
},
{
    username:"aslam",
    password:"567"
}
]

var newsfeed=[
    {
        username:"rahul",
        comment:" hi all"
    }
]

var uid=prompt('enter a user id to login');
var upass=prompt('enter a password to login');
register(uid, upass)

function register(uid, upass){
    database.push({
        username: uid, 
        password: upass
    })
}


var userId= prompt('what is your user name');
var pass= prompt('what is your password');

logIn(userId, pass);

function logIn (userId, pass) {
    if( log( userId, pass ) ){
        console.log(newsfeed);
    }
    else{
        alert('please enter your id &password correctly');
    }
}

function log(userId, pass){
    for (var i=0; i<database.length; i++) 
    {
       if( database[i].username=== userId && database[i].password=== pass){
        return true;
       }
    }
    return false;
}