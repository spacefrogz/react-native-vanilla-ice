export type AbsolutePopUpType = {
  messageText: string;
  buttonText: string;
  buttonLink: string;
  isFirstButtonDisabled: boolean;
};

export type DismissablePopUpType = {
  messageText: string;
  buttonText?: string;
  buttonLink?: string;
  dismissButtonText?: string;
};

export type AbsolutePopUpData = AbsolutePopUpType & {
  highestDisplayVersion: string;
};

export type DismissablePopUpData = DismissablePopUpType & {
  highestDisplayVersion: string;
};
