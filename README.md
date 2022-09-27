# Checkpoint 1

For Checkpoint #1, I want you to create a complete backend api service that can be used to manage a single element.
Examples of a element are : User, ToDoItem, Recipe, Contact, Student, FootbalTeam, Book, Politician, MemberOfCongress, HouseListing, etc ..

The breakdown is:

- 10pts: Static HTML page that displays that displays what api routes are provided by your service
- 50pts: 5 Valid api routes that
  - list all the elements (it would be nice if the elements listed only had
    basic information)
  - get a specific element by its id
  - add an element
  - delete an element by id
  - update an element by id
- 10pts: Your application should connect to a MySql Database to store the data
- 10pts: a readme explaining how the internals of your server works, or sufficient comments throughout the code to explain how things are connected
- 10pts: a separate routes file
- 10pts: a separate controller file

## Routes

### Get All Users: get(/users)

- Returns user_id, first_name, Last_name and job_title for all users in the
  users table.

### Get User by ID: get(/users/:id)

- Returns all table data associated with the user id indicated in the "path"
  parameter.

### Create New User: post(/users)

- Inputs new user with information from the request body.
- Once new user is created we send a response the includes the new user object.

### Update User: put(/users/:id)

- Updates existing record indicated by the client as a path parameter.
- Once record is updated a response is sent that includes the updated user
  object.

### Delete User: delete(/users/:id)

- Using a path parameter to identify a user that will be deleted.
- After the delete user query is executed, we send a response with the number of
  rows "affected".
