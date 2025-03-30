if (1 || 0) { // works just like if( true || false )
    alert = ( 'truthy!' );
    }

console.log(alert)



let hour = 9;
if (hour <10 || hour > 18){
    alert = ("The office is closed");
}

console.log (alert)


// Imagine we have a list of variables which can either contain data or be null/undefined .
// How can we find the first one with data?
// We can use OR || :

let currentUser = null;
let defaultUser = "John";
let name = currentUser || defaultUser || "unnamned";
alert = (name);
console.log(alert)

