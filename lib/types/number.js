import Type from './type';

export default class NumberType extends Type {
	_serialize(value) {
		return Number(value);
	}

	_deserialize(value) {
		return value;
	}

	static getDbType(options) {
		return 'DOUBLE';
	}
}