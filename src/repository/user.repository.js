// Imports
import UserModel from '../model/user.js';

class UserRepository {

    static async findall() {
            return await UserModel.find() ;
    }

    static async findById(id) {
        return await UserModel.findById(id) ;
    }

    static async findByName(name) {
        return await UserModel.findOne({ name }) ;
    }

    static async findByEmail(email) {
        return await UserModel.findOne({ email }) ;
    }

    static async create(userData) {
        const user = new UserModel(userData) ;
        return await user.save() ;
    }

    static async update(id, userData) {
        return await UserModel.findByIdAndUpdate(id, userData, {
            new: true,
            runValidators: true,}) ;
    }

    static async delete(id) {
        return await UserModel.findByIdAndDelete(id) ;
    }
}

// Export
export default UserRepository ;