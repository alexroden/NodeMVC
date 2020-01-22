/**
 * @type string
 */
exports.name = "users";

/**
 * @type Object
 */
exports.attributes = {
	name: String,
	age: Number,
	email: String,
	created_at: { type: Date, default: null },
	updated_at: { type: Date, default: null },
	deleted_at: { type: Date, default: null }
};
