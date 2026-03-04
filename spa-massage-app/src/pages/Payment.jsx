import React from 'react';
import { useNavigate } from 'react-router-dom';

const Payment = () => {
  const navigate = useNavigate();

  return (
    <div className="relative flex h-screen w-full flex-col overflow-x-hidden max-w-[430px] mx-auto bg-background-light dark:bg-background-dark font-sans text-slate-900 dark:text-slate-100">
      {/* Top Navigation */}
      <div className="flex items-center p-4 pb-2 justify-between sticky top-0 bg-background-light/90 dark:bg-background-dark/90 backdrop-blur-md z-10">
        <div 
          onClick={() => navigate(-1)}
          className="text-slate-900 dark:text-slate-100 flex size-12 shrink-0 items-center justify-start cursor-pointer"
        >
          <span className="material-symbols-outlined">arrow_back_ios</span>
        </div>
        <h2 className="font-display text-lg font-bold leading-tight tracking-tight flex-1 text-center pr-12 text-slate-900 dark:text-slate-100 uppercase tracking-widest">Order Confirmation</h2>
      </div>

      <div className="flex-1 overflow-y-auto pb-32">
        {/* Order Summary Card */}
        <div className="p-4">
          <div className="flex flex-col items-stretch justify-start rounded-xl overflow-hidden shadow-sm border border-primary/10 bg-white dark:bg-zinc-900">
            <div 
              className="w-full bg-center bg-no-repeat aspect-[16/9] bg-cover" 
              style={{ backgroundImage: 'url("https://lh3.googleusercontent.com/aida-public/AB6AXuD-xMmWprg-qsk8HmNwCP-d0ULALBGswS7T0r9B_RLkf8gRGYd9Ra4ujnaMEG_802RKg-PkYcWAZrNB6iVkbTa1bmrdM0OaJjwXBASfiMNqbJliaICShlF3EZsWl6OkibXDE5x4fxYP6DTV6Cav0hnLYJhvqUo8Ug14Gd-zhlIyE6WtYyF_VqNACj5C_KZERZtaMfwIQl63SveCfSMPakkmWvSV_fs-hSqV9_5fOs81Yo185F0WEKUJcug00UXFodMr8doRX8t-1Uo")' }}
            ></div>
            <div className="flex w-full flex-col items-stretch justify-center gap-2 p-5">
              <div className="flex justify-between items-start">
                <p className="font-display text-xl font-bold text-slate-900 dark:text-slate-100">90min Deep Tissue Massage</p>
                <span className="text-primary material-symbols-outlined">spa</span>
              </div>
              <div className="space-y-1 mt-2">
                <SummaryItem icon="person" text="Therapist: Seraphina" />
                <SummaryItem icon="calendar_today" text="Oct 24, 2023 • 14:00" />
                <SummaryItem icon="meeting_room" text="In-Room Service: Room 402" />
              </div>
            </div>
          </div>
        </div>

        {/* Price Breakdown */}
        <div className="px-6 py-4">
          <h3 className="font-display text-base font-bold uppercase tracking-widest text-primary mb-4">Price Breakdown</h3>
          <div className="space-y-3">
            <PriceRow label="Service Price" value="$220.00" />
            <PriceRow label="Taxes (10%)" value="$22.00" />
            <PriceRow label="Service Fee" value="$15.00" border />
            <div className="flex justify-between items-center pt-2">
              <p className="font-display text-lg font-bold text-slate-900 dark:text-slate-100">Total Amount</p>
              <p className="font-display text-2xl font-bold text-primary">$257.00</p>
            </div>
          </div>
        </div>

        {/* Payment Method */}
        <div className="px-6 py-6">
          <h3 className="font-display text-base font-bold uppercase tracking-widest text-primary mb-4">Payment Method</h3>
          <div className="space-y-3">
            <PaymentOption icon="credit_card" label="Credit Card" checked />
            <PaymentOption icon="account_balance_wallet" label="WeChat Pay" />
            <PaymentOption icon="payments" label="Alipay" />
          </div>
        </div>
      </div>

      {/* Footer Action */}
      <div className="fixed bottom-0 left-0 right-0 p-6 bg-background-light/80 dark:bg-background-dark/80 backdrop-blur-lg max-w-[430px] mx-auto z-50">
        <button 
          onClick={() => { alert('Order Placed Successfully!'); navigate('/'); }}
          className="w-full bg-primary hover:bg-primary/90 text-white font-display font-bold py-4 rounded-xl shadow-lg transition-colors uppercase tracking-widest text-sm"
        >
          Place Order • $257.00
        </button>
      </div>
    </div>
  );
};

const SummaryItem = ({ icon, text }) => (
  <div className="flex items-center gap-2 text-slate-600 dark:text-slate-400">
    <span className="material-symbols-outlined text-sm">{icon}</span>
    <p className="text-sm font-medium">{text}</p>
  </div>
);

const PriceRow = ({ label, value, border }) => (
  <div className={`flex justify-between items-center ${border ? 'pb-3 border-b border-primary/10' : ''}`}>
    <p className="text-slate-500 dark:text-slate-400 text-sm">{label}</p>
    <p className="text-slate-900 dark:text-slate-100 font-medium">{value}</p>
  </div>
);

const PaymentOption = ({ icon, label, checked }) => (
  <label className={`flex items-center justify-between p-4 rounded-xl border-2 ${checked ? 'border-primary' : 'border-primary/10'} bg-white dark:bg-zinc-900 cursor-pointer`}>
    <div className="flex items-center gap-3">
      <span className={`material-symbols-outlined ${checked ? 'text-primary' : 'text-slate-400'}`}>{icon}</span>
      <span className={`font-medium ${checked ? 'text-slate-900 dark:text-slate-100' : 'text-slate-600 dark:text-slate-400'}`}>{label}</span>
    </div>
    <input checked={checked} readOnly className="w-5 h-5 text-primary focus:ring-primary border-primary/30" name="payment" type="radio"/>
  </label>
);

export default Payment;
