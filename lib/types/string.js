import Type from './type';

export default class StringType extends Type {
	_serialize(value) {
		var val = String(value);

		if(val && this.options.trim) {
			val = val.trim();
		}

		return val;
	}

	_deserialize(value) {
		return value;
	}

	static getDbType(options) {
		return 'STRING';
	}
}