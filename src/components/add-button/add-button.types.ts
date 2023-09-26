export type AddButtonProps = {
  name: string;
  size: ButtonSize;
  onClick: () => void;
};

export enum ButtonSize {
  Small = "small",
  Medium = "medium",
  Large = "large",
}
