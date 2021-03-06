"use strict";

var _interopRequire = function (obj) { return obj && obj.__esModule ? obj["default"] : obj; };

var _prototypeProperties = function (child, staticProps, instanceProps) { if (staticProps) Object.defineProperties(child, staticProps); if (instanceProps) Object.defineProperties(child.prototype, instanceProps); };

var _get = function get(object, property, receiver) { var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { return get(parent, property, receiver); } } else if ("value" in desc && desc.writable) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } };

var _inherits = function (subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) subClass.__proto__ = superClass; };

var _classCallCheck = function (instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } };

var Type = _interopRequire(require("./type"));

var ObjectType = (function (Type) {
	function ObjectType(data, options) {
		_classCallCheck(this, ObjectType);

		_get(Object.getPrototypeOf(ObjectType.prototype), "constructor", this).call(this, data, options);

		this._schema = options.type;
		this._value = new this._schema.DataClass();
	}

	_inherits(ObjectType, Type);

	_prototypeProperties(ObjectType, {
		getDbType: {
			value: function getDbType(options) {
				return "EMBEDDED";
			},
			writable: true,
			configurable: true
		}
	}, {
		set: {
			value: function set(key, value) {
				this._value[key] = value;
			},
			writable: true,
			configurable: true
		},
		_serialize: {
			value: function _serialize(props) {
				for (var propName in props) {
					this.set(propName, props[propName]);
				}
				return this._value;
			},
			writable: true,
			configurable: true
		},
		_deserialize: {
			value: function _deserialize() {
				return this._value;
			},
			writable: true,
			configurable: true
		},
		toJSON: {
			value: function toJSON(options) {
				return this._value.toJSON(options);
			},
			writable: true,
			configurable: true
		}
	});

	return ObjectType;
})(Type);

module.exports = ObjectType;