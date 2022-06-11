import { Route } from '@react-navigation/native';

export interface NavigationProviderProps { };

export interface NavigationContextProps {
  currentRoute: Route<string, Object | undefined> | undefined;
};

export const NavigationContextDefaultProps: NavigationContextProps = {
  currentRoute: undefined,
};
