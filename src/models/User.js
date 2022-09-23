/**
 * Class representing the user infos
 *
 * @property {string} firstname - User's firstname
 */
class UserModel {
    /**
     * @constructor
     * @param {Array} data  - User infos
     */
    constructor(data) {
        this.firstName = data.userInfos.firstName;
    }
}

export default UserModel;
