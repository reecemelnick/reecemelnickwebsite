import React from 'react';
import { createRoot } from 'react-dom/client';

function Profile() {
	return (
		<div>
			<h1>Profile</h1>
			<img src="images/GoogleImage1.png" alt="profilePic" width="250px" />
			<p>Welcome to your profile page!</p>
		</div>
	);
}

function NavBar() {
	return (
		<div>
			<h1>NavBar</h1>
			<ul>
				<li>Home</li>
				<li>About</li>
				<li>Profile</li>
			</ul>
		</div>
	);
}

const App = () => (
	<div>
		<NavBar />
		<h1>Reece Melnick</h1>
		<Profile />
	</div>
);

const root = createRoot(document.getElementById('app'));
root.render(<App />);
