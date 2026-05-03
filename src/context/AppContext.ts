import React from 'react';
import { AppContextType } from '../types';

const AppContext = React.createContext<AppContextType>({} as AppContextType);

export default AppContext;
