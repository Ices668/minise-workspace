import React from 'react';
import { useNavigate } from 'react-router-dom';

const Booking = () => {
  const navigate = useNavigate();

  return (
    <div className="relative flex h-auto min-h-screen w-full flex-col overflow-x-hidden max-w-md mx-auto shadow-2xl bg-background-light dark:bg-background-dark font-display text-slate-900 dark:text-slate-100">
      {/* Top Navigation */}
      <div className="flex items-center p-4 pb-2 justify-between sticky top-0 bg-background-light/80 dark:bg-background-dark/80 backdrop-blur-md z-50">
        <div 
          onClick={() => navigate(-1)}
          className="text-slate-900 dark:text-slate-100 flex size-10 shrink-0 items-center justify-center cursor-pointer"
        >
          <span className="material-symbols-outlined">arrow_back_ios</span>
        </div>
        <h2 className="text-slate-900 dark:text-slate-100 text-lg font-bold leading-tight tracking-tight flex-1 text-center">Book Appointment</h2>
        <div className="size-10"></div>
      </div>

      {/* Selected Therapist Card */}
      <div className="p-4">
        <div className="flex items-center justify-between gap-4 rounded-xl bg-white dark:bg-zinc-900 p-4 shadow-sm border border-primary/10">
          <div className="flex items-center gap-4">
            <div className="size-16 rounded-full overflow-hidden bg-primary/20 flex-shrink-0 border-2 border-primary/20">
              <img className="w-full h-full object-cover" src="https://lh3.googleusercontent.com/aida-public/AB6AXuBWx4m4zlPLh2Tm2tVuM3OizGpCXyDBy5GiePQbZ7S6qEOFfQwifj-zSH3t1GP59UZtBHf9eahum5EE7MWJ5EgRRm8D9a8x12ZmG0ayVqPheBJBG9kPu5Ag5K6ANKrzfPYYJruJcU052vsaDtUwzscIiFPhCX98Z5tmGIt_mdq-O4WAaOzBPzAN-VmUUgudOFrty4H8LuvHIuD3ozkqbOi6PDjOWHhoTcUJ0Op12U5f5KwiNUdN9mNp5nA-HMtLqcRjLbWxJWRM7mw" alt="Therapist" />
            </div>
            <div className="flex flex-col">
              <p className="text-primary text-xs font-semibold uppercase tracking-wider">Your Specialist</p>
              <p className="text-slate-900 dark:text-slate-100 text-base font-bold leading-tight">Elena Rodriguez</p>
              <p className="text-slate-500 dark:text-slate-400 text-sm font-normal">Lead Massage Therapist</p>
            </div>
          </div>
          <button className="flex items-center justify-center rounded-full h-9 px-4 bg-primary/10 text-primary text-xs font-bold hover:bg-primary/20 transition-colors uppercase tracking-tight">
            Change
          </button>
        </div>
      </div>

      {/* Service Configuration */}
      <div className="px-4 py-2 space-y-4">
        <div className="grid grid-cols-2 gap-3">
          <div className="flex flex-col gap-1.5">
            <label className="text-xs font-bold text-slate-500 dark:text-slate-400 uppercase ml-1">Massage Type</label>
            <div className="relative group">
              <select className="w-full bg-white dark:bg-zinc-900 border border-primary/20 rounded-lg py-2.5 px-3 text-sm appearance-none focus:outline-none focus:ring-1 focus:ring-primary focus:border-primary">
                <option>Swedish Massage</option>
                <option>Deep Tissue</option>
                <option>Hot Stone</option>
                <option>Aromatherapy</option>
              </select>
              <span className="material-symbols-outlined absolute right-2 top-2.5 text-primary pointer-events-none">expand_more</span>
            </div>
          </div>
          <div className="flex flex-col gap-1.5">
            <label className="text-xs font-bold text-slate-500 dark:text-slate-400 uppercase ml-1">Duration</label>
            <div className="relative group">
              <select className="w-full bg-white dark:bg-zinc-900 border border-primary/20 rounded-lg py-2.5 px-3 text-sm appearance-none focus:outline-none focus:ring-1 focus:ring-primary focus:border-primary">
                <option>60 Minutes</option>
                <option>90 Minutes</option>
                <option>120 Minutes</option>
              </select>
              <span className="material-symbols-outlined absolute right-2 top-2.5 text-primary pointer-events-none">timer</span>
            </div>
          </div>
        </div>
      </div>

      {/* Date Selection */}
      <div className="pt-6 pb-2">
        <div className="flex items-center justify-between px-4 mb-2">
          <h3 className="text-slate-900 dark:text-slate-100 text-lg font-bold">Select Date</h3>
          <div className="flex gap-2">
            <button className="p-1 rounded-full bg-primary/5 hover:bg-primary/10 text-primary">
              <span className="material-symbols-outlined text-lg leading-none">chevron_left</span>
            </button>
            <button className="p-1 rounded-full bg-primary/5 hover:bg-primary/10 text-primary">
              <span className="material-symbols-outlined text-lg leading-none">chevron_right</span>
            </button>
          </div>
        </div>
        <div className="px-4">
          <div className="bg-white dark:bg-zinc-900 rounded-xl p-4 border border-primary/10">
            <p className="text-center font-bold text-sm mb-4 text-slate-600 dark:text-slate-300">October 2023</p>
            <div className="grid grid-cols-7 gap-y-1">
              {['S', 'M', 'T', 'W', 'T', 'F', 'S'].map(day => (
                <p key={day} className="text-slate-400 text-xs font-bold text-center pb-2">{day}</p>
              ))}
              <div className="col-start-4 flex justify-center py-2"><span className="text-sm font-medium">1</span></div>
              <div className="flex justify-center py-2"><span className="text-sm font-medium">2</span></div>
              <div className="flex justify-center py-2"><span className="text-sm font-medium">3</span></div>
              <div className="flex justify-center py-2"><span className="text-sm font-medium">4</span></div>
              <div className="flex justify-center py-2">
                <span className="size-9 flex items-center justify-center rounded-full bg-primary text-white text-sm font-bold shadow-md shadow-primary/30">5</span>
              </div>
              <div className="flex justify-center py-2"><span className="text-sm font-medium">6</span></div>
              <div className="flex justify-center py-2"><span className="text-sm font-medium">7</span></div>
              {[8,9,10,11,12,13,14].map(d => (
                 <div key={d} className="flex justify-center py-2"><span className={`text-sm font-medium ${d===12 ? 'text-primary' : ''}`}>{d}</span></div>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Time Selection */}
      <div className="pt-6 pb-2">
        <h3 className="text-slate-900 dark:text-slate-100 text-lg font-bold px-4 mb-4">Select Time</h3>
        <div className="flex gap-3 overflow-x-auto px-4 hide-scrollbar pb-2">
          <button className="flex-none px-6 py-2.5 rounded-lg border border-primary/30 text-primary text-sm font-bold hover:bg-primary/5 transition-colors">09:00 AM</button>
          <button className="flex-none px-6 py-2.5 rounded-lg bg-primary text-white text-sm font-bold shadow-md shadow-primary/30">10:30 AM</button>
          <button className="flex-none px-6 py-2.5 rounded-lg border border-primary/30 text-primary text-sm font-bold hover:bg-primary/5 transition-colors">12:00 PM</button>
          <button className="flex-none px-6 py-2.5 rounded-lg border border-primary/30 text-primary text-sm font-bold hover:bg-primary/5 transition-colors">01:30 PM</button>
        </div>
      </div>

      {/* Special Requests */}
      <div className="p-4 pt-6">
        <label className="text-slate-900 dark:text-slate-100 text-lg font-bold block mb-2">Special Requests</label>
        <textarea className="w-full h-24 rounded-xl border border-primary/20 bg-white dark:bg-zinc-900 p-4 text-sm focus:outline-none focus:ring-1 focus:ring-primary focus:border-primary placeholder:text-slate-400" placeholder="Any preferences or medical conditions we should know about? (e.g., allergies, pressure level)"></textarea>
      </div>

      {/* Bottom Action */}
      <div className="mt-auto p-4 pb-8 space-y-4">
        <div className="flex items-center justify-between px-2">
          <div className="flex flex-col">
            <span className="text-xs text-slate-500 font-bold uppercase tracking-wider">Estimated Total</span>
            <span className="text-2xl font-extrabold text-slate-900 dark:text-slate-100">$185.00</span>
          </div>
          <div className="flex items-center text-primary gap-1">
            <span className="material-symbols-outlined text-sm">verified_user</span>
            <span className="text-[10px] font-bold uppercase tracking-widest">Safe Payment</span>
          </div>
        </div>
        <button 
          onClick={() => navigate('/payment')}
          className="w-full bg-primary py-4 rounded-xl text-white font-bold text-lg shadow-lg shadow-primary/25 hover:bg-primary/90 active:scale-[0.98] transition-all"
        >
          Confirm Booking
        </button>
      </div>
    </div>
  );
};

export default Booking;
