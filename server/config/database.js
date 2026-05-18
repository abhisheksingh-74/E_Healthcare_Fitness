const mongoose = require("mongoose");
const dns = require("dns");
require("dotenv").config();
const removeExpiredAvailability = require("../utils/removeExpiredAvailability");

exports.connect = () => {
	const uri = process.env.MONGODB_URL?.trim();
	if (!uri) {
		console.error("MONGODB_URL is not defined in .env or environment variables.");
		process.exit(1);
	}

	// Force Node DNS to use reliable public resolvers for MongoDB SRV lookups.
	dns.setServers(["8.8.8.8", "1.1.1.1"]);

	mongoose
		.connect(uri)
		.then(() => {
			console.log("DB Connection Success");
			removeExpiredAvailability();
		})
		.catch((err) => {
			console.error("DB Connection Failed");
			console.error(err);
			process.exit(1);
		});
};
