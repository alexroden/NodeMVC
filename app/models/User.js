const { Model } = require("../../Hudson/Model");

exports.name = "users";

/**
 * @type Object
 */
exports.attributes = {
	name: String,
	age: Number,
	email: String,
	created_at: Date,
	updated_at: Date,
	deleted_at: Date
};

/**
 * @type Object
 */
exports.User = {
	create: Model.create,
	delete: Model.delete,
	edit: Model.edit,
	get: Model.get
};

module.export = {
	User
};
