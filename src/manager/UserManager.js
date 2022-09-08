import { baseURL } from "../utils/Constant";

export const UserManager = {
    userId: '',
    email: '',
    profilePicture: '',
    mobile: '',
    userName: '',
    userRole:0,

    
    getUserProfilePicture: () => {
        return baseURL + this.profilePicture;
      },
}


