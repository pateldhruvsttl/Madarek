import { baseURL } from "../utils/Constant";

export const UserManager = {
    userId: '',
    email: '',
    profilePicture: '',
    mobile: '',
    userName: '',
    userRole:'',

    
    getUserProfilePicture: () => {
        return baseURL + this.profilePicture;
      },
}


