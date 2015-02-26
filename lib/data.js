'use strict';

function Data(schema, fields) {
	this._schema = schema;
	this._data = {};
}

Data.createClass = function(schema) {
	var DataClass = function(fields) {
		Data.call(schema, fields); 
	};

	util.inherits(DataClass, Data);

	//define properties
	schema.traverse(function(fieldName, fieldOptions) {
		Object.defineProperty(DataClass.prototype, fieldName, {
			enumerable: true,
			configurable: true,
			get: function () {
				var value = this._data[fieldName];
				var type = fieldOptions.type;

				if(!value && type instanceof Schema) {
					var DataClass = type.getDataClass();
					this.set(fieldName, new DataClass({}));
				}

				return this._data[fieldName];
			},
			set: function(value) {
				
				this._data[fieldName] = value;
				return this;
			}
		});
	});

	return DataClass;
};

module.exports = Data;