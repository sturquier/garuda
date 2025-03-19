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
      accessibilityLabel='Select picker'
      selectedValue={selectedValue}
      onValueChange={onValueChange}
      {...props}
    >
      {items.map((item, index) => (
        <Picker.Item key={index} {...item} />
      ))}
    </Picker>
  );
};
