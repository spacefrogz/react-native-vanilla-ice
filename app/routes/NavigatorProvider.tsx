 import React, { createContext, useEffect, useState, useContext } from 'react';
 import {
   createNavigationContainerRef,
   NavigationContainer,
   Route,
 } from '@react-navigation/native';
import { NavigationContextDefaultProps, NavigationContextProps, NavigationProviderProps } from '../resources/types/navigationTypes';
import LoggerService from '../services/LoggerService';
 
 export const navigateToScreen = (screen: string) => {
   if (navigationRef.isReady()) {
     // @ts-ignore
     navigationRef.navigate(screen);
   }
 };
 
 const NavigationContext = createContext<NavigationContextProps>(
   NavigationContextDefaultProps,
 );
 
 const navigationRef = createNavigationContainerRef();
 
 const NavigationProvider: React.FC<NavigationProviderProps> = ({
   children,
 }) => {
   const [currentRoute, setCurrentRoute] = useState<
     Route<string, Object | undefined> | undefined
   >(undefined);
 
   useEffect(() => {
     if (currentRoute) {
       LoggerService.info(`Current Route - ${currentRoute?.name}`, currentRoute);
     }
   }, [currentRoute]);
 
   return (
     <NavigationContext.Provider value={{ currentRoute }}>
       <NavigationContainer
         ref={navigationRef}
         onReady={() => setCurrentRoute(navigationRef.current?.getCurrentRoute)}
         onStateChange={state => {
           LoggerService.info('Navigation State: ', state);
           setCurrentRoute(navigationRef.current?.getCurrentRoute());
         }}>
         {children}
       </NavigationContainer>
     </NavigationContext.Provider>
   );
 };
 
 const useNavigationState = () => useContext(NavigationContext);
 
 export default NavigationProvider;
 export { useNavigationState };
 