const {
	DB_NAME,
	MongoClient,
	url
} = require("../config/database");

MongoClient.connect(url, (error, db) => {
	if (error) throw error;
	let dbo = db.db(DB_NAME);
	dbo.createCollection("user", (error, res) => {
		if (error) throw error;
		console.log("User Collection Created!");
		db.close();
	});
});
