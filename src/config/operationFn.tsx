import type { SelectOption } from './tsConfig';

export const OptionFn = (arr: String[]): SelectOption[] => {
    let num = 0;
    let option: SelectOption[] = [];
    for (num; num < arr.length; num++) {
        var item = arr[num].split("@");
        option.push(
            {
                label: item[0],
                value: item[1],
            }
        );
    }
    return option;
}