import { useFeatureFlag } from "configcat-react";
import { TouchableOpacity, Text, StyleProp, ViewStyle } from "react-native";

export function SignupButton({ buttonStyles }: { buttonStyles?: StyleProp<ViewStyle> }) {
    const { value: isSignupButtonEnabled } = useFeatureFlag(
        'signupButton',
        false
    )

    return isSignupButtonEnabled && (
        <TouchableOpacity style={buttonStyles}>
            <Text>SIGNUP</Text>
        </TouchableOpacity >
    )
}

