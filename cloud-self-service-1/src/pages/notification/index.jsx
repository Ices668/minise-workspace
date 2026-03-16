import { useState } from 'react';
import Content from './components';
import Store from './store';
import { StoreContext } from './context';
import { useAuth } from '../../store/auth-context';

import '../../index.css';

function NotificationWidget() {
    const authStore = useAuth();
    const [store] = useState(() => {
        const s = new Store();
        s.setAuthStore(authStore);
        return s;
    });

    return (
        <StoreContext.Provider value={store}>
            <Content />
        </StoreContext.Provider>
    );
}

export default NotificationWidget;
