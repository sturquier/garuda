import { StyleSheet } from 'react-native';
import PagerView, { PagerViewProps } from 'react-native-pager-view';

export const Pager = ({ children, ...props }: PagerViewProps) => {
  return (
    <PagerView style={styles.pager} {...props}>
      {children}
    </PagerView>
  );
};

const styles = StyleSheet.create({
  pager: {
    flex: 1,
  },
});
