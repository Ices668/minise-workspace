import { useEffect, useState } from 'react';
import { observer } from 'mobx-react-lite';
import {
  ArrowRightOnRectangleIcon,
  BellIcon,
  MoonIcon,
  ServerIcon,
  ShieldCheckIcon,
  SparklesIcon,
  SunIcon,
} from '@heroicons/react/24/outline';
import AdminContent from './pages/admin';
import HomeContent from './pages/home';
import LoginContent from './pages/login';
import NotificationContent from './pages/notification';
import { setLogoutCallback } from './api/api-client';
import ResetPasswordModal from './common/components/ResetPasswordModal';
import { AuthContext } from './store/auth-context';
import AuthStore from './store/auth-store';

const AppView = observer(function AppView() {
  const [authStore] = useState(() => new AuthStore());
  const [activePage, setActivePage] = useState('home');
  const [isDarkMode, setIsDarkMode] = useState(() => localStorage.getItem('darkMode') === 'true');

  useEffect(() => {
    setLogoutCallback(() => authStore.logout());
  }, [authStore]);

  useEffect(() => {
    document.documentElement.classList.toggle('light', !isDarkMode);
    document.documentElement.classList.toggle('dark', isDarkMode);
    localStorage.setItem('darkMode', String(isDarkMode));
  }, [isDarkMode]);

  useEffect(() => {
    if (authStore.isLoggedIn) {
      authStore.loadUnreadCount();
    }
  }, [authStore, authStore.isLoggedIn]);

  const handleLogout = () => {
    authStore.logout();
    setActivePage('home');
  };

  const resolvedPage =
    activePage === 'admin' && authStore.user?.role !== 'ADMIN'
      ? 'home'
      : activePage;

  const renderPageContent = () => {
    switch (resolvedPage) {
      case 'admin':
        return <AdminContent />;
      case 'notification':
        return <NotificationContent />;
      case 'home':
      default:
        return <HomeContent />;
    }
  };

  if (!authStore.isLoggedIn) {
    return (
      <AuthContext.Provider value={authStore}>
        <LoginContent />
      </AuthContext.Provider>
    );
  }

  return (
    <AuthContext.Provider value={authStore}>
      <div className="min-h-screen bg-[var(--bg-primary)] text-[var(--text-primary)]">
        {authStore.needResetPassword && <ResetPasswordModal authStore={authStore} />}

        <header className="sticky top-0 z-40 w-full border-b border-[var(--border-color)] bg-[var(--bg-secondary)]/80 backdrop-blur-xl">
          <div className="container mx-auto flex h-16 items-center justify-between px-6">
            <div className="flex items-center gap-10">
              <button
                type="button"
                className="group flex items-center gap-2.5"
                onClick={() => setActivePage('home')}
              >
                <div className="flex h-9 w-9 items-center justify-center rounded-xl bg-gradient-to-tr from-blue-600 to-indigo-500 shadow-lg shadow-blue-500/20 transition-transform group-hover:scale-110">
                  <SparklesIcon className="h-5 w-5 text-white" />
                </div>
                <div className="flex flex-col">
                  <h1 className="text-sm font-black uppercase leading-none tracking-tight text-[var(--text-primary)]">Cloud</h1>
                  <p className="mt-0.5 text-[10px] font-bold uppercase leading-none tracking-[0.2em] text-[var(--primary-color)]">Service</p>
                </div>
              </button>

              <nav className="hidden items-center gap-1 md:flex">
                <button
                  type="button"
                  onClick={() => setActivePage('home')}
                  className={`flex items-center gap-2 rounded-xl px-4 py-2 text-xs font-bold uppercase tracking-wider transition-all ${
                    resolvedPage === 'home'
                      ? 'bg-[var(--primary-color)] text-white shadow-lg shadow-blue-500/20'
                      : 'text-[var(--text-tertiary)] hover:bg-[var(--bg-tertiary)] hover:text-[var(--text-primary)]'
                  }`}
                >
                  <ServerIcon className="h-4 w-4" />
                  我的服务器
                </button>
                {authStore.user?.role === 'ADMIN' && (
                  <button
                    type="button"
                    onClick={() => setActivePage('admin')}
                    className={`flex items-center gap-2 rounded-xl px-4 py-2 text-xs font-bold uppercase tracking-wider transition-all ${
                      resolvedPage === 'admin'
                        ? 'bg-[var(--primary-color)] text-white shadow-lg shadow-blue-500/20'
                        : 'text-[var(--text-tertiary)] hover:bg-[var(--bg-tertiary)] hover:text-[var(--text-primary)]'
                    }`}
                  >
                    <ShieldCheckIcon className="h-4 w-4" />
                    管理员
                  </button>
                )}
              </nav>
            </div>

            <div className="flex items-center gap-4">
              <div className="flex items-center gap-1 rounded-2xl border border-[var(--border-color)]/50 bg-[var(--bg-tertiary)]/50 p-1">
                <button
                  type="button"
                  onClick={() => setActivePage('notification')}
                  className={`relative rounded-xl p-2 transition-all ${
                    resolvedPage === 'notification'
                      ? 'bg-white text-[var(--primary-color)] shadow-sm dark:bg-slate-700'
                      : 'text-[var(--text-tertiary)] hover:text-[var(--text-primary)]'
                  }`}
                >
                  <BellIcon className="h-4 w-4" />
                  {authStore.unreadCount > 0 && (
                    <span className="absolute right-1.5 top-1.5 h-1.5 w-1.5 rounded-full bg-rose-500 ring-2 ring-[var(--bg-secondary)]" />
                  )}
                </button>

                <button
                  type="button"
                  onClick={() => setIsDarkMode((current) => !current)}
                  className="rounded-xl p-2 text-[var(--text-tertiary)] transition-all hover:text-[var(--text-primary)]"
                >
                  {isDarkMode ? <SunIcon className="h-4 w-4" /> : <MoonIcon className="h-4 w-4" />}
                </button>
              </div>

              <div className="flex items-center gap-3 border-l border-[var(--border-color)] pl-4">
                <div className="hidden flex-col items-end sm:flex">
                  <span className="mb-1 text-[10px] font-bold uppercase leading-none text-[var(--text-tertiary)]">User</span>
                  <span className="text-xs font-black leading-none text-[var(--text-primary)]">
                    {authStore.user?.nickname || authStore.user?.email || ''}
                  </span>
                </div>
                <div className="group relative">
                  <div className="flex h-9 w-9 cursor-pointer items-center justify-center rounded-xl border-2 border-[var(--border-color)] bg-gradient-to-br from-slate-200 to-slate-300 transition-all group-hover:border-[var(--primary-color)] dark:from-slate-700 dark:to-slate-800">
                    <span className="text-xs font-black text-slate-600 dark:text-slate-300">
                      {(authStore.user?.nickname || authStore.user?.email || 'U').charAt(0).toUpperCase()}
                    </span>
                  </div>
                  <button
                    type="button"
                    onClick={handleLogout}
                    className="invisible absolute right-0 top-full mt-2 rounded-xl border border-[var(--border-color)] bg-white p-2 opacity-0 shadow-xl transition-all group-hover:visible group-hover:opacity-100 active:scale-95 dark:bg-slate-800"
                    title="登出"
                  >
                    <ArrowRightOnRectangleIcon className="h-4 w-4 text-rose-500" />
                  </button>
                </div>
              </div>
            </div>
          </div>
        </header>

        <main className="min-h-[calc(100vh-64px)]">{renderPageContent()}</main>
      </div>
    </AuthContext.Provider>
  );
});

export default AppView;
