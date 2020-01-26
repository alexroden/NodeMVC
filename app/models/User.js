const { Model } = require("../../Hudson/Model");

/**
 * @type String
 */
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
	create: (values) => {
		return Model.create(
			this.User.name,
			this.User.attributes,
			values
		);
	},
	delete: (findValues) => {
		return Model.delete(
			this.User.name,
			this.User.attributes,
			findValues
		);
	},
	edit: (findValues, updateValues) => {
		return Model.edit(
			this.User.name,
			this.User.attributes,
			findValues,
			updateValues
		);
	},
	get: (findValues) => {
		return Model.get(
			this.User.name,
			this.User.attributes,
			findValues,
		);
	}
};

module.export = {
	User
};
