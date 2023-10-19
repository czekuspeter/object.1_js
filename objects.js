let user = 
{
    firstName: 'John',
    lastName: 'Smith'
}
console.log(`${user.lastName} ${user.firstName}`);


user.firstName = "Paul";

console.log(`${user.firstName}`);

delete user.firstName;

console.log(`${user.firstName}`);