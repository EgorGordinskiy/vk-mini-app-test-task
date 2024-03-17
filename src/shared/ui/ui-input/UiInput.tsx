import { FC, forwardRef } from "react";
import {
  Input as VKUIInput,
  InputProps as VKUIInputProps,
} from "@vkontakte/vkui";

interface UiInputProps extends VKUIInputProps {}

export const UiInput: FC<UiInputProps> = forwardRef<
  HTMLInputElement,
  UiInputProps
>((props, ref) => {
  return <VKUIInput {...props} getRef={ref} />;
});
