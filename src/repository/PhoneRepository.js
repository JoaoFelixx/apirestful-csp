const { mysqlConnection: MySQL } = require('../connection');

class PhoneRepository {

  async add(_id, phoneNumber) {
    return await MySQL.promise().execute(
      'INSERT INTO `phones` (phone_id, phone_number) VALUES (?,?)',
      [_id, phoneNumber]
    )
  }

  async removeById(_id) {
    return await MySQL.promise().execute(
      'DELETE FROM `phones` WHERE phone_id = ?',
      [_id]
    )
  }

  async edit(_id, phone_number) {
    return await MySQL.promise().execute(
      'UPDATE `phones` SET phone_number = ? WHERE phone_id = ?',
      [phone_number, _id]
    ) 
  } 
}

module.exports = PhoneRepository;