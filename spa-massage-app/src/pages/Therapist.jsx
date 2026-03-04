import React from 'react';
import { useNavigate, useParams } from 'react-router-dom';

const Therapist = () => {
  const navigate = useNavigate();
  const { id } = useParams();

  return (
    <div className="relative flex h-auto min-h-screen w-full flex-col bg-background-light dark:bg-background-dark overflow-x-hidden max-w-[430px] mx-auto shadow-2xl font-display text-slate-900 dark:text-slate-100">
      <div className="absolute top-0 left-0 right-0 z-10 flex items-center p-4 justify-between bg-gradient-to-b from-black/20 to-transparent">
        <div 
          onClick={() => navigate(-1)}
          className="text-white flex size-10 shrink-0 items-center justify-center rounded-full bg-black/10 backdrop-blur-md cursor-pointer"
        >
          <span className="material-symbols-outlined">arrow_back</span>
        </div>
        <div className="flex size-10 items-center justify-center rounded-full bg-black/10 backdrop-blur-md">
          <button className="text-white">
            <span className="material-symbols-outlined">share</span>
          </button>
        </div>
      </div>

      <div className="relative h-[450px] w-full">
        <div 
          className="absolute inset-0 bg-center bg-cover" 
          style={{ backgroundImage: 'url("https://lh3.googleusercontent.com/aida-public/AB6AXuCZvk_xg81hC1-hVWLaN_Paet7OQIt9LwieRMbUmX8lrCYQyJnauAKCDnysGHQl0HOVOlEFO6gOqvgQVhqQbZUjZjLtAjw5pvB1if3FvU5J39tofjUGVdLcxuMXLpdNvvUVZ8BJGcvlsgWJy3ECQuxm_-gfpa_PUxXkzOZuL3SqafdX-QgI2qlBV3-yRQDDy_2F7tIdftQ0lPN25gSlksr4sCFpCydYCqduluMpMyvKhFiJtWOrED_pX2DQtbIMfevMWyEwT6PLtdw")' }}
        ></div>
        <div className="absolute inset-0 fade-bottom"></div>
      </div>

      <div className="relative -mt-20 px-4 pb-6">
        <div className="bg-white/80 dark:bg-slate-900/80 backdrop-blur-xl rounded-xl p-6 shadow-sm border border-primary/10">
          <div className="flex flex-col items-center text-center">
            <h1 className="font-serif text-3xl font-bold text-slate-900 dark:text-white mb-1">Elena Rodriguez</h1>
            <p className="text-primary font-medium tracking-wide uppercase text-xs mb-3">Aromatherapy Specialist</p>
            <div className="flex items-center gap-6 mb-4">
              <div className="text-center">
                <p className="text-xs text-slate-500 uppercase font-semibold">Experience</p>
                <p className="font-bold text-lg">8 Years</p>
              </div>
              <div className="h-8 w-px bg-primary/20"></div>
              <div className="text-center">
                <p className="text-xs text-slate-500 uppercase font-semibold">Rating</p>
                <div className="flex items-center gap-1">
                  <span className="material-symbols-outlined text-primary text-sm" style={{ fontVariationSettings: "'FILL' 1" }}>star</span>
                  <p className="font-bold text-lg">4.9</p>
                </div>
              </div>
              <div className="h-8 w-px bg-primary/20"></div>
              <div className="text-center">
                <p className="text-xs text-slate-500 uppercase font-semibold">Reviews</p>
                <p className="font-bold text-lg">128</p>
              </div>
            </div>
            <p className="text-sm text-slate-600 dark:text-slate-400 leading-relaxed italic">
              "Dedicated to creating a sanctuary of healing through personalized aromatherapy and deep tissue techniques."
            </p>
          </div>
        </div>
      </div>

      <section className="px-4 py-4">
        <h3 className="font-serif text-xl font-bold mb-4">Next Available</h3>
        <div className="flex gap-3 overflow-x-auto hide-scrollbar pb-2">
          <DateItem day="14" month="Oct" label="Today" active />
          <DateItem day="15" month="Oct" label="Tue" />
          <DateItem day="16" month="Oct" label="Wed" />
          <DateItem day="17" month="Oct" label="Thu" />
        </div>
        <div className="flex gap-2 mt-4 overflow-x-auto hide-scrollbar">
          <TimeItem time="10:30 AM" />
          <TimeItem time="02:00 PM" active />
          <TimeItem time="03:30 PM" />
          <TimeItem time="05:00 PM" />
        </div>
      </section>

      <section className="px-4 py-6">
        <h3 className="font-serif text-xl font-bold mb-4">Service Menu</h3>
        <div className="bg-white dark:bg-slate-900 rounded-xl overflow-hidden border border-primary/10">
          <div className="grid grid-cols-4 gap-2 bg-primary/5 p-3 text-[10px] uppercase font-bold tracking-wider text-slate-500">
            <div className="col-span-1">Treatment</div>
            <div className="text-center">60m</div>
            <div className="text-center">90m</div>
            <div className="text-center">120m</div>
          </div>
          <div className="divide-y divide-primary/5">
            <ServiceRow name="Swedish Massage" p1="120" p2="170" p3="220" />
            <ServiceRow name="Deep Tissue" p1="140" p2="195" p3="250" bg />
            <ServiceRow name="Aromatherapy" p1="135" p2="185" p3="240" />
          </div>
        </div>
      </section>

      <section className="px-4 py-6">
        <div className="flex justify-between items-center mb-4">
          <h3 className="font-serif text-xl font-bold">Guest Reviews</h3>
          <button className="text-primary text-sm font-bold">See All</button>
        </div>
        <div className="space-y-4">
          <ReviewItem name="Julianne Devis" initials="JD" date="2 days ago" review="Elena has magical hands. The aromatherapy session was the highlight of my stay at the hotel. Truly professional." />
          <ReviewItem name="Marcus Reed" initials="MR" date="1 week ago" review="The deep tissue massage was exactly what I needed after a long flight. Elena is incredibly skilled." />
        </div>
      </section>

      <div className="sticky bottom-0 left-0 right-0 p-4 bg-white/90 dark:bg-slate-900/90 backdrop-blur-md border-t border-primary/10">
        <button 
          onClick={() => navigate('/booking')}
          className="w-full h-14 bg-primary text-white rounded-xl font-bold text-lg shadow-lg shadow-primary/30 flex items-center justify-center gap-2 hover:brightness-110 active:scale-[0.98] transition-all"
        >
          Book Now
          <span className="material-symbols-outlined">calendar_month</span>
        </button>
      </div>
    </div>
  );
};

const DateItem = ({ day, month, label, active }) => (
  <div className={`flex-shrink-0 flex flex-col items-center justify-center w-20 h-24 rounded-lg ${active ? 'bg-primary text-white shadow-md' : 'bg-white dark:bg-slate-800 border border-primary/20'}`}>
    <span className={`text-xs uppercase font-bold ${!active && 'text-slate-500'}`}>{label}</span>
    <span className="text-2xl font-bold">{day}</span>
    <span className={`text-xs ${!active && 'text-slate-500'}`}>{month}</span>
  </div>
);

const TimeItem = ({ time, active }) => (
  <button className={`px-5 py-2 rounded-full border text-sm font-medium transition-all ${active ? 'bg-primary/20 border-primary text-primary font-bold' : 'border-primary/30 hover:bg-primary/10'}`}>
    {time}
  </button>
);

const ServiceRow = ({ name, p1, p2, p3, bg }) => (
  <div className={`grid grid-cols-4 gap-2 p-4 items-center ${bg && 'bg-primary/5'}`}>
    <div className="col-span-1 font-bold text-sm">{name}</div>
    <div className="text-center text-sm font-medium text-primary">${p1}</div>
    <div className="text-center text-sm font-medium text-primary">${p2}</div>
    <div className="text-center text-sm font-medium text-primary">${p3}</div>
  </div>
);

const ReviewItem = ({ name, initials, date, review }) => (
  <div className="p-4 bg-white dark:bg-slate-800 rounded-lg shadow-sm border border-primary/5">
    <div className="flex justify-between items-start mb-2">
      <div className="flex items-center gap-2">
        <div className="w-8 h-8 rounded-full bg-primary/20 flex items-center justify-center font-bold text-primary text-xs">{initials}</div>
        <div>
          <p className="text-xs font-bold">{name}</p>
          <div className="flex text-[10px] text-primary">
            {[1, 2, 3, 4, 5].map(i => (
              <span key={i} className="material-symbols-outlined text-[12px]" style={{ fontVariationSettings: "'FILL' 1" }}>star</span>
            ))}
          </div>
        </div>
      </div>
      <span className="text-[10px] text-slate-400">{date}</span>
    </div>
    <p className="text-xs text-slate-600 dark:text-slate-400 leading-relaxed italic">"{review}"</p>
  </div>
);

export default Therapist;
