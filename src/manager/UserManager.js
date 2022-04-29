import { baseURL } from "../utils/Constant";

export const UserManager = {
    userId: '',
    email: '',
    profilePicture: '',
    mobile: '',
    userName: '',

    
    getUserProfilePicture: () => {
        return baseURL + this.profilePicture;
      },
}


