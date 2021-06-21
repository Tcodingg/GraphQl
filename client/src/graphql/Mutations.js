import { gql } from '@apollo/client';

// mutate the data
export const CREATE_USER_MUTATION = gql`

// arguments that are going to be recieved
	mutation createUser(
		$firstName: String!
		$lastName: String!
		$email: String
		$password: String!
	) {

    // create new user
		createUser(
      firstName: $firstName,
      lastName: $lastName,
      password: $password){
    }{
      id // if you want to track the id
    }
	}
`;
