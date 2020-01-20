/**
 * @type string
 */
exports.name = "user2";

/**
 * @type Object
 */
exports.attributes = {
	name: String,
	created_at: { type: Date, default: null },
	updated_at: { type: Date, default: null },
	deleted_at: { type: Date, default: null }
};
