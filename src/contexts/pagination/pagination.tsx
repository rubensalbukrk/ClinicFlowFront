import React, {createContext} from 'react';

type paginationContextProp = {
    page: 'inteligence' 
    | 'pacients' 
    | 'agender' 
    | 'stock' 
    | 'finance'
    | 'plans'
    | 'team'
    | 'anamnesia'
}

const PaginationContext = createContext();


