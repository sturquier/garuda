import { TouchableOpacity, TouchableOpacityProps } from 'react-native';

export const Button = ({ children, ...props }: TouchableOpacityProps) => {
  return (
    <TouchableOpacity accessibilityRole='button' {...props}>
      {children}
    </TouchableOpacity>
  );
};
