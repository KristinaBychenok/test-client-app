export type AddButtonProps = {
  name: string;
  size: ButtonSize;
  onClick: () => void;
  isLoading: boolean;
};

export enum ButtonSize {
  Small = "small",
  Medium = "medium",
  Large = "large",
}
