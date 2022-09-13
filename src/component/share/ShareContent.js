import { Share } from 'react-native'
const url = 'http://madarek.io/'

export const onShare = async (props) => {
    try {
        const result = await Share.share({
            message: `${url}${props}`
        });
        if (result.action === Share.sharedAction) {
            if (result.activityType) {
                return;
            }
            else {
                return;
            }
        }
        else if (result.action === Share.dismissedAction) {
            return;
        }
    } catch (error) {
        alert(error.message);
    }
};