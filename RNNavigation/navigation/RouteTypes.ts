export type RootParamList = {
  Home: undefined;
  About1: { username?: string; mood?: string } | undefined;
  About2: { budget?: number; currency?: string } | undefined;
};
