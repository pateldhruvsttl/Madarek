import { baseURL } from "../utils/Constant";

export const UserManager = {
    userId: '',
    email: '',
    profilePicture: '',
    mobile: '',
    userName: '',
    userRole:'',
    expert:false,

    
    getUserProfilePicture: () => {
        return baseURL + this.profilePicture;
      },
}


