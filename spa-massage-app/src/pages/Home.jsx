import React from 'react';
import { Link } from 'react-router-dom';
import BottomNav from '../components/BottomNav';

const Home = () => {
  return (
    <div className="relative flex h-screen w-full flex-col overflow-hidden max-w-[430px] mx-auto shadow-2xl bg-background-light dark:bg-background-dark font-display text-slate-900 dark:text-slate-100">
      {/* Header Section */}
      <header className="flex flex-col gap-4 px-6 pt-8 pb-4">
        <div className="flex items-center justify-between">
          <div className="flex flex-col">
            <span className="text-xs uppercase tracking-[0.2em] text-primary font-medium">Welcome Back</span>
            <h1 className="text-2xl font-serif font-bold text-slate-900 dark:text-slate-100">Good morning, Elena</h1>
          </div>
          <div className="relative">
            <button className="flex h-12 w-12 items-center justify-center rounded-full bg-white dark:bg-slate-800 shadow-sm border border-primary/10">
              <span className="material-symbols-outlined text-primary">notifications</span>
            </button>
            <span className="absolute top-3 right-3 block h-2 w-2 rounded-full bg-primary border-2 border-white dark:border-slate-800"></span>
          </div>
        </div>
        {/* Search Bar */}
        <div className="relative">
          <label className="flex items-center w-full h-12 px-4 rounded-xl bg-white dark:bg-slate-800 border border-primary/10 shadow-sm">
            <span className="material-symbols-outlined text-primary/60 mr-3">search</span>
            <input className="w-full bg-transparent border-none focus:ring-0 text-sm placeholder:text-slate-400" placeholder="Search treatments or therapists" type="text"/>
          </label>
        </div>
      </header>

      {/* Main Content Area */}
      <main className="flex-1 overflow-y-auto hide-scrollbar pb-24">
        {/* Service Categories */}
        <section className="px-6 py-4">
          <div className="flex justify-between items-center overflow-x-auto hide-scrollbar gap-4">
            <CategoryItem icon="spa" label="Swedish" />
            <CategoryItem icon="physical_therapy" label="Deep Tissue" />
            <CategoryItem icon="self_care" label="Hot Stone" />
            <CategoryItem icon="fragrance" label="Aroma" />
          </div>
        </section>

        {/* Featured Therapists */}
        <section className="py-6">
          <div className="flex items-center justify-between px-6 mb-4">
            <h2 className="text-xl font-serif font-bold text-slate-900 dark:text-slate-100">Featured Therapists</h2>
            <Link className="text-xs font-semibold text-primary uppercase tracking-widest" to="#">View All</Link>
          </div>
          <div className="flex overflow-x-auto hide-scrollbar gap-4 px-6">
            <TherapistCard 
              id="1"
              name="Sarah Jenkins" 
              specialty="Deep Tissue Expert" 
              rating="4.9" 
              image="https://lh3.googleusercontent.com/aida-public/AB6AXuD62oL-qQre8Z-B3Yp_Mlba-byl6KTG5roxJMKUo9Wjyy9w7OHakZ-ivcdMib4H1B88mMjBnA8CxJKOfCqjxS4UfPHL1hodYEOQh1mFAZHBywpiB4-68w_fEFQ_bsGr89_VlDAqQO7NYkULJLJ4GZN5HmCtRfxpA69zo9qHjkJBWGBrksn7bXl9OmYOGUsTOwsI9pGTXu2yEL_WHciO2k1Hv5Zkq6cWQ-leEbf-eZ_ieYF0HLjkVuyRktbJBI2Yebye9JZBlTX5ZUY" 
            />
            <TherapistCard 
              id="2"
              name="David Chen" 
              specialty="Sports Massage Pro" 
              rating="4.8" 
              image="https://lh3.googleusercontent.com/aida-public/AB6AXuBHCAP0tjUqkHWv_krE1JQHUWym6gy1C4LaLk4Mq7Ywd_co0gyyiRL2pimDeVuHeJTQ3Zy8XaHFbVfCqIkbqf9mslb0m1fALaYqsp7t9eAI4xGpH3n74Fli9Fv6juChbry3Egtp0LAj_ob1fCBGSuEgtrWIPzLoHjuIvzuQw__qUdZ767Ug1fzU7YlTmTqh5GSc0Ofp_mICD_kFj2OSU5lRwo27jxRhPO5fiCwb-4dQ2_33qS3SATkvchdWTjl8G9pOerjVOSITyVY" 
            />
          </div>
        </section>

        {/* Recommended Section */}
        <section className="px-6 py-6">
          <h2 className="text-xl font-serif font-bold text-slate-900 dark:text-slate-100 mb-4">Recommended for You</h2>
          <div className="flex flex-col gap-4">
            <RecommendedItem 
              name="Maya Williams"
              rating="5.0"
              desc="Specializing in organic essential oils and holistic relaxation techniques for over 8 years."
              image="https://lh3.googleusercontent.com/aida-public/AB6AXuCMyNY0G-gKqOxlPErHIJ8c0aqF3i7c-WDQK0Vt1WZ8YThzeEsCS7VCPwm-gIdYWhznFd6gLmVZZyt5-srOr82D2rGs9aezr9JZLPhfR_oHtuBxmwkrPZ0Mg0Gtey3-xGUi-6ChB-cBmrMLDTLt_TJ5LKRbjx1bPMctlc-yMt3f6jad-PRBPLN9kzgv1TltQPlBJD6Dsi3AbRHhIua4LKSEsFplA2Dap2vEoO7ig9koARRVj9mmc1p3NILH5jWlusLZgcjdkMXkeGU"
            />
            <RecommendedItem 
              name="Julian Pierce"
              rating="4.7"
              desc="Master of Swedish techniques with a focus on chronic stress relief and improved circulation."
              image="https://lh3.googleusercontent.com/aida-public/AB6AXuC16oVM7PQwqH4w31yUdF5odrjXIjdjhNmPezFxL7rXybKXhLRepbLkONzF4JTo58U6pltx6kdm3OyQZmRCisQn0ef0xlW50kxOdu-6y9DAWw56-nI8T8VmxV6B8s4mds06AMGrh5c-j_YuTQ-r1oW8grvCH1AtXbERbi3zdtn1sJlccmuVR14PfMudAKggvaqTvPgP78sQ0IfwpiUHc8ZjVN_IZ5CuvtowgKmPqEQnAXj46USgkGGyosVRcsUITqC76MvhozeE8Bo"
            />
          </div>
        </section>
      </main>
      <BottomNav />
    </div>
  );
};

const CategoryItem = ({ icon, label }) => (
  <div className="flex flex-col items-center gap-2 shrink-0">
    <div className="flex h-16 w-16 items-center justify-center rounded-full bg-primary/10 border border-primary/20">
      <span className="material-symbols-outlined text-primary text-3xl">{icon}</span>
    </div>
    <span className="text-[10px] font-semibold uppercase tracking-wider text-slate-500">{label}</span>
  </div>
);

const TherapistCard = ({ id, name, specialty, rating, image }) => (
  <Link to={`/therapist/${id}`} className="flex flex-col min-w-[200px] bg-white dark:bg-slate-800 rounded-xl overflow-hidden shadow-md border border-primary/5">
    <div className="h-48 w-full bg-cover bg-center" style={{ backgroundImage: `url('${image}')` }}></div>
    <div className="p-4">
      <p className="font-bold text-slate-900 dark:text-slate-100">{name}</p>
      <p className="text-xs text-slate-500 dark:text-slate-400">{specialty}</p>
      <div className="mt-2 flex items-center gap-1">
        <span className="material-symbols-outlined text-primary text-sm" style={{ fontVariationSettings: "'FILL' 1" }}>star</span>
        <span className="text-xs font-bold text-slate-700 dark:text-slate-300">{rating}</span>
      </div>
    </div>
  </Link>
);

const RecommendedItem = ({ name, rating, desc, image }) => (
  <div className="flex items-center gap-4 p-3 bg-white dark:bg-slate-800 rounded-xl border border-primary/5 shadow-sm">
    <div className="size-16 rounded-lg bg-cover bg-center shrink-0" style={{ backgroundImage: `url('${image}')` }}></div>
    <div className="flex-1">
      <div className="flex justify-between items-start">
        <h3 className="font-bold text-sm text-slate-900 dark:text-slate-100">{name}</h3>
        <span className="text-[10px] font-bold text-primary bg-primary/10 px-2 py-0.5 rounded-full uppercase">{rating} ★</span>
      </div>
      <p className="text-[11px] text-slate-500 leading-tight mt-1 line-clamp-2">{desc}</p>
    </div>
  </div>
);

export default Home;
