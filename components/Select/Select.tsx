import {
  Picker,
  PickerProps,
  PickerItemProps,
} from '@react-native-picker/picker';

interface ISelect extends PickerProps {
  items: PickerItemProps[];
}

export const Select = ({
  selectedValue,
  onValueChange,
  items,
  ...props
}: ISelect) => {
  return (
    <Picker
      selectedValue={selectedValue}
      onValueChange={onValueChange}
      {...props}
    >
      {items.map((item) => (
        <Picker.Item {...item} />
      ))}
    </Picker>
  );
};
