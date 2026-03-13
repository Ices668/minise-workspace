import React, { useState } from 'react';

const createWidget = (Content, StoreContext, Store) => {
    return function Widget() {
        const [store] = useState(new Store());
        return (
            <StoreContext.Provider value={store}>
                <Content />
            </StoreContext.Provider>
        );
    };
}

const createContextAndStore = () => {
    const StoreContext = React.createContext();
    const useStore = () => React.useContext(StoreContext);
    return { StoreContext, useStore };
}

export { createWidget, createContextAndStore };
