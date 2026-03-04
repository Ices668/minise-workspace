import React from 'react';
import { useNavigate } from 'react-router-dom';
import BottomNav from '../components/BottomNav';

const Profile = () => {
  const navigate = useNavigate();

  return (
    <div className="relative flex min-h-screen w-full flex-col max-w-[430px] mx-auto shadow-2xl bg-background-light dark:bg-background-dark overflow-x-hidden font-sans text-slate-900 dark:text-slate-100 antialiased pb-32">
      {/* Header */}
      <div className="flex items-center p-6 pb-2 justify-between">
        <div 
          onClick={() => navigate(-1)}
          className="text-slate-900 dark:text-slate-100 flex size-10 shrink-0 items-center justify-center cursor-pointer"
        >
          <span className="material-symbols-outlined">arrow_back_ios</span>
        </div>
        <h2 className="font-display text-xl font-bold leading-tight flex-1 text-center">Personal Center</h2>
        <div className="flex w-10 items-center justify-end">
          <button className="text-slate-900 dark:text-slate-100">
            <span className="material-symbols-outlined">settings</span>
          </button>
        </div>
      </div>

      {/* User Profile Section */}
      <div className="flex p-6 flex-col items-center">
        <div className="relative">
          <div 
            className="bg-center bg-no-repeat aspect-square bg-cover rounded-full h-28 w-28 border-2 border-primary p-1" 
            style={{ backgroundImage: 'url("https://lh3.googleusercontent.com/aida-public/AB6AXuB58rxs2Y7xx67cHmF8qzZ-TC6YbfecY7_hK0ZpHrx60vL7xwVtcMIISCdspAwgJlqw3GBcy5wxJOC_oAVG5cotIyggn55NHbVUF0N2RoADEO0eRAVTpAGBhHthUi94fbQExmnNzTXpLsyAQXzIdeJ1LQmOrdFMRMbl6LKdYDjUMagm4T_s1Jfk_Sc4ZarW9end3FfuF4e__jYIOEBnNSiqa3Y9vFb3NOC49v9GyeumVtXuFSoz9NuWINpkSE_9cNVYJRn5JtrWNoE")' }}
          ></div>
          <div className="absolute -bottom-1 left-1/2 -translate-x-1/2 bg-primary text-background-light text-[10px] font-bold px-3 py-1 rounded-full whitespace-nowrap uppercase tracking-wider">
            Gold Member
          </div>
        </div>
        <div className="mt-4 flex flex-col items-center">
          <p className="font-display text-2xl font-bold text-slate-900 dark:text-slate-100">Julianna Smith</p>
          <p className="text-primary/80 text-sm font-medium">Member since Oct 2022</p>
        </div>
      </div>

      {/* Membership Card Section */}
      <div className="px-6 py-2">
        <div className="relative overflow-hidden rounded-xl p-6 shadow-sm border border-primary/20 bg-primary/5 card-shimmer">
          <div className="flex justify-between items-start mb-8">
            <div className="flex flex-col">
              <span className="text-[10px] uppercase tracking-[0.2em] text-primary font-bold">Membership ID</span>
              <p className="font-display text-lg text-slate-800 dark:text-slate-200 tracking-widest">8829 1022 3948</p>
            </div>
            <span className="material-symbols-outlined text-primary text-3xl opacity-60">brand_awareness</span>
          </div>
          <div className="flex justify-between items-end">
            <div className="flex flex-col">
              <span className="text-[10px] uppercase tracking-[0.2em] text-primary font-bold">Loyalty Points</span>
              <p className="font-display text-2xl font-bold text-slate-900 dark:text-slate-100">4,500 <span className="text-sm font-normal">pts</span></p>
            </div>
            <button className="bg-primary hover:bg-primary/90 text-background-light px-4 py-2 rounded-lg text-xs font-bold transition-colors">
              View Benefits
            </button>
          </div>
          <div className="absolute -right-10 -top-10 w-32 h-32 rounded-full bg-primary/10 blur-3xl"></div>
        </div>
      </div>

      {/* Upcoming Appointment */}
      <div className="px-6 pt-8 pb-4">
        <div className="flex justify-between items-center mb-4">
          <h3 className="font-display text-lg font-bold text-slate-900 dark:text-slate-100">Upcoming Appointment</h3>
          <span className="text-primary text-xs font-medium cursor-pointer">View All</span>
        </div>
        <div className="bg-white dark:bg-slate-800/50 rounded-xl p-4 shadow-sm border border-slate-100 dark:border-slate-800 flex gap-4">
          <div className="flex flex-col items-center justify-center bg-primary/10 rounded-lg px-3 py-2 min-w-[60px]">
            <span className="text-primary text-[10px] font-bold uppercase">Dec</span>
            <span className="text-slate-900 dark:text-slate-100 text-xl font-bold font-display">14</span>
          </div>
          <div className="flex-1">
            <p className="font-display font-bold text-slate-900 dark:text-slate-100">Deep Tissue Massage</p>
            <p className="text-slate-500 text-xs flex items-center gap-1 mt-1">
              <span className="material-symbols-outlined text-sm">schedule</span> 14:30 PM (90 min)
            </p>
            <p className="text-slate-500 text-xs flex items-center gap-1 mt-0.5">
              <span className="material-symbols-outlined text-sm">person</span> Therapist: Elena V.
            </p>
          </div>
          <div className="flex items-center">
            <span className="material-symbols-outlined text-primary">chevron_right</span>
          </div>
        </div>
      </div>

      {/* Order History */}
      <div className="px-6 py-4">
        <h3 className="font-display text-lg font-bold text-slate-900 dark:text-slate-100 mb-4">Order History</h3>
        <div className="space-y-3">
          <HistoryItem icon="spa" title="Aromatherapy Session" date="Nov 22, 2023" price="$180.00" />
          <HistoryItem icon="face_5" title="Royal Facial Ritual" date="Nov 05, 2023" price="$240.00" />
        </div>
      </div>

      {/* Settings Menu */}
      <div className="px-6 py-4">
        <h3 className="font-display text-lg font-bold text-slate-900 dark:text-slate-100 mb-4">Settings</h3>
        <div className="bg-white dark:bg-slate-800/30 rounded-xl overflow-hidden shadow-sm border border-slate-100 dark:border-slate-800">
          <SettingsItem icon="person_outline" label="Profile Info" />
          <SettingsItem icon="payments" label="Payment Methods" />
          <SettingsItem icon="language" label="Language" value="English" last />
        </div>
      </div>

      {/* Logout Button */}
      <div className="px-6 py-8 pb-12">
        <button className="w-full py-4 border border-slate-200 dark:border-slate-800 rounded-xl text-slate-400 text-sm font-bold hover:bg-slate-50 dark:hover:bg-slate-800 transition-colors flex items-center justify-center gap-2">
          <span className="material-symbols-outlined text-lg">logout</span>
          Logout
        </button>
      </div>

      <BottomNav />
    </div>
  );
};

const HistoryItem = ({ icon, title, date, price }) => (
  <div className="flex items-center justify-between py-3 border-b border-slate-100 dark:border-slate-800">
    <div className="flex gap-3 items-center">
      <div className="bg-slate-100 dark:bg-slate-800 p-2 rounded-lg">
        <span className="material-symbols-outlined text-slate-400">{icon}</span>
      </div>
      <div>
        <p className="font-medium text-sm text-slate-900 dark:text-slate-100">{title}</p>
        <p className="text-slate-400 text-[10px]">{date}</p>
      </div>
    </div>
    <p className="font-display font-bold text-sm text-primary">{price}</p>
  </div>
);

const SettingsItem = ({ icon, label, value, last }) => (
  <a className={`flex items-center justify-between p-4 hover:bg-slate-50 dark:hover:bg-slate-800 transition-colors ${!last ? 'border-b border-slate-100 dark:border-slate-800' : ''}`} href="#">
    <div className="flex items-center gap-3">
      <span className="material-symbols-outlined text-slate-400 text-xl">{icon}</span>
      <span className="text-sm font-medium">{label}</span>
    </div>
    <div className="flex items-center gap-1">
      {value && <span className="text-xs text-slate-400">{value}</span>}
      <span className="material-symbols-outlined text-slate-300">chevron_right</span>
    </div>
  </a>
);

export default Profile;
