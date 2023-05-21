import React from 'react'

const Blogs = () => {
	return (
		<div>
			<div className="flex flex-col text-start text-white mb-10">
				<h2 className="text-2xl text-white">1. What is an access token and refresh token? How do they work and where should we store them on the client-side?
</h2>
				<p className="text-xl text-white">Answer: Access token is a credential that represents the authorization granted to a user or client application to access specific resources on a server. When a user successfully logs in or authenticates, the server issues an access token. This token is then included in subsequent API requests to provide authentication. A refresh token is a long-lived credential that is used to obtain a new access token when the current one expires. Unlike access tokens, refresh tokens are not typically sent with every API request. They are secured on client side and are exchanged for a new access token when needed. They can be stored in client side by storing tokens in secure HTTP-only cookies, using browser storage mechanisms and implementing token rotation. </p>
			</div>
			<div className="flex flex-col text-start text-white mb-10">
				<h2 className="text-2xl text-white">2. Compare SQL and NoSQL databases?

</h2>
				<p className="text-xl text-white">
				Answer: SQL databases are based on a structured schema and use SQL for querying. NoSQL databases are schema-less and offer flexibility in data storage. SQL is suitable for structured data and defined relationships, while NoSQL is scalable and handles unstructured data effectively.
				</p>
			</div>
			<div className="flex flex-col text-start text-white mb-10">
				<h2 className="text-2xl text-white">3. What is express js? What is Next JS?
</h2>
				<p className="text-xl text-white">
				Answer: Express.js is a web application framework for Node.js, while NestJS is a progressive, TypeScript-based framework built on top of Express.js for building scalable server-side applications.
				</p>
			</div>
			<div className="flex flex-col text-start text-white mb-10">
				<h2 className="text-2xl text-white">4. What is MongoDB aggregate and how does it work?
</h2>
				<p className="text-xl text-white">
				Answer: The aggregate function of MongoDB is used for advanced data processing and aggregation. It takes an array of stages as input and performs various operations on collections, enabling complex data manipulations.
				</p>
			</div>

		</div>
	);
};

export default Blogs;
