class UserModel {
    constructor(data) {
        this.firstName = data.userInfos.firstName;
        this.score = data.todayScore ?? data.score;
        this.keyData = data.keyData;
    }
}

export default UserModel;
