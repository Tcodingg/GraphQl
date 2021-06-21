import React, { useState } from 'react';
import { CREATE_USER_MUTATION } from '../graphql/Mutations';

export default function From() {
	const [firstName, setFirstName] = useState('');
	const [lastName, setLastName] = useState('');
	const [email, setEmail] = useState('');
	const [password, setPassword] = useState('');

	const addUser = () => {};
	return (
		<div>
			<input
				type='text'
				placeholder='first name'
				onChange={(e) => setFirstName(e.target.value)}
			/>
			<input
				type='text'
				placeholder='last name'
				onChange={(e) => setLastName(e.target.value)}
			/>
			<input
				type='text'
				placeholder='email'
				onChange={(e) => setEmail(e.target.value)}
			/>
			<input
				type='password'
				placeholder='password'
				onChange={(e) => setPassword(e.target.value)}
			/>
			<button onClick={addUser}> Create User</button>
		</div>
	);
}
