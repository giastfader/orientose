import Type from './type';

export default class DateType extends Type {
	_serialize(value) {
		return new Date(value);
	}

	_deserialize(value) {
		return value;
	}

	toJSON(options) {
		var value = this.value;
		return (value && value.getTime) 
			? value.getTime()
			: value.value;
	}

	static getDbType(options) {
		return 'DATETIME';
	}
}