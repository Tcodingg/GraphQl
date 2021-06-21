import { gql } from '@apollo/client'; // allows you to make queries

// load users backend
export const LOAD_USERS = gql`
	query {
		getAllUsers {
			id
			firstName
			email
			password
		}
	}
`;
