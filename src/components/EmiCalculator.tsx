'use client';

import { useState, useMemo } from 'react';
import { Calculator, Banknote, ShieldCheck, HelpCircle } from 'lucide-react';

export default function EmiCalculator() {
  const [propertyPriceCrore, setPropertyPriceCrore] = useState<number>(5.0); // 5 Crore BDT default
  const [downPaymentPercent, setDownPaymentPercent] = useState<number>(30); // 30% down payment
  const [interestRate, setInterestRate] = useState<number>(10.5); // 10.5% standard BD home loan rate
  const [tenureYears, setTenureYears] = useState<number>(15); // 15 years

  // Calculations
  const propertyPriceBdt = propertyPriceCrore * 10000000;
  const downPaymentBdt = (propertyPriceBdt * downPaymentPercent) / 100;
  const loanAmountBdt = propertyPriceBdt - downPaymentBdt;

  const monthlyEmi = useMemo(() => {
    const monthlyRate = interestRate / 12 / 100;
    const totalMonths = tenureYears * 12;
    if (loanAmountBdt <= 0 || monthlyRate <= 0) return 0;

    const emi = 
      (loanAmountBdt * monthlyRate * Math.pow(1 + monthlyRate, totalMonths)) / 
      (Math.pow(1 + monthlyRate, totalMonths) - 1);

    return Math.round(emi);
  }, [loanAmountBdt, interestRate, tenureYears]);

  const totalPayment = monthlyEmi * tenureYears * 12;
  const totalInterest = Math.max(0, totalPayment - loanAmountBdt);

  const formatBdt = (amount: number) => {
    return new Intl.NumberFormat('en-BD', {
      style: 'currency',
      currency: 'BDT',
      maximumFractionDigits: 0,
    }).format(amount).replace('BDT', '৳');
  };

  return (
    <div style={{
      backgroundColor: '#ffffff',
      border: '1px solid #e2e8f0',
      borderRadius: '20px',
      padding: '36px',
      maxWidth: '860px',
      margin: '0 auto',
      boxShadow: '0 10px 30px rgba(0, 0, 0, 0.06)'
    }}>
      
      {/* Header */}
      <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '28px', borderBottom: '1px solid #e9ecef', paddingBottom: '16px' }}>
        <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
          <div style={{ width: '42px', height: '42px', borderRadius: '10px', background: '#fff0f2', display: 'flex', alignItems: 'center', justifyContent: 'center', color: '#e60023' }}>
            <Calculator size={22} />
          </div>
          <div>
            <h3 style={{ fontFamily: 'var(--font-heading)', fontSize: '20px', color: '#111827', margin: 0 }}>
              Monthly EMI Estimator
            </h3>
            <p style={{ fontSize: '13px', color: '#6b7280', margin: '2px 0 0' }}>
              Calibrated for IDLC, BRAC Bank, DBH & leading Bangladeshi housing financiers.
            </p>
          </div>
        </div>
        <span style={{
          backgroundColor: '#f1f5f9',
          color: '#475569',
          fontSize: '11px',
          fontWeight: 700,
          padding: '4px 10px',
          borderRadius: '4px',
          textTransform: 'uppercase',
          letterSpacing: '0.05em'
        }}>
          Max 70% Financing
        </span>
      </div>

      {/* Grid Inputs */}
      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '28px' }}>
        
        {/* Left Side: Inputs */}
        <div style={{ display: 'flex', flexDirection: 'column', gap: '20px' }}>
          
          {/* Property Price Slider */}
          <div>
            <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '8px' }}>
              <label style={{ fontSize: '13px', color: '#4b5563', fontWeight: 600 }}>Property Valuation (BDT)</label>
              <span style={{ fontSize: '15px', color: '#e60023', fontWeight: 700 }}>
                ৳{propertyPriceCrore.toFixed(2)} Crore
              </span>
            </div>
            <input 
              type="range" 
              min="2.5" 
              max="25.0" 
              step="0.25"
              value={propertyPriceCrore}
              onChange={(e) => setPropertyPriceCrore(parseFloat(e.target.value))}
              style={{ width: '100%', accentColor: '#e60023', cursor: 'pointer' }}
            />
            <div style={{ display: 'flex', justifyContent: 'space-between', fontSize: '11px', color: '#9ca3af', marginTop: '4px' }}>
              <span>৳2.5 Cr</span>
              <span>৳12.5 Cr</span>
              <span>৳25.0 Cr</span>
            </div>
          </div>

          {/* Down Payment Slider */}
          <div>
            <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '8px' }}>
              <label style={{ fontSize: '13px', color: '#4b5563', fontWeight: 600 }}>Down Payment ({downPaymentPercent}%)</label>
              <span style={{ fontSize: '14px', color: '#111827', fontWeight: 600 }}>
                {formatBdt(downPaymentBdt)}
              </span>
            </div>
            <input 
              type="range" 
              min="20" 
              max="60" 
              step="5"
              value={downPaymentPercent}
              onChange={(e) => setDownPaymentPercent(parseInt(e.target.value))}
              style={{ width: '100%', accentColor: '#e60023', cursor: 'pointer' }}
            />
            <div style={{ display: 'flex', justifyContent: 'space-between', fontSize: '11px', color: '#9ca3af', marginTop: '4px' }}>
              <span>20% (Min)</span>
              <span>40%</span>
              <span>60%</span>
            </div>
          </div>

          {/* Interest Rate & Tenure */}
          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '16px' }}>
            <div>
              <label style={{ display: 'block', fontSize: '13px', color: '#4b5563', fontWeight: 600, marginBottom: '6px' }}>Interest Rate (%)</label>
              <input 
                type="number" 
                step="0.1" 
                min="7.0" 
                max="16.0"
                value={interestRate}
                onChange={(e) => setInterestRate(parseFloat(e.target.value) || 0)}
                style={{
                  width: '100%',
                  padding: '10px 12px',
                  borderRadius: '6px',
                  background: '#f8fafc',
                  border: '1px solid #cbd5e1',
                  color: '#111827',
                  fontSize: '14px',
                  fontWeight: 600,
                  outline: 'none',
                }}
              />
            </div>
            <div>
              <label style={{ display: 'block', fontSize: '13px', color: '#4b5563', fontWeight: 600, marginBottom: '6px' }}>Loan Tenure (Years)</label>
              <select 
                value={tenureYears}
                onChange={(e) => setTenureYears(parseInt(e.target.value))}
                style={{
                  width: '100%',
                  padding: '10px 12px',
                  borderRadius: '6px',
                  background: '#f8fafc',
                  border: '1px solid #cbd5e1',
                  color: '#111827',
                  fontSize: '14px',
                  fontWeight: 600,
                  outline: 'none',
                }}
              >
                <option value="5">5 Years</option>
                <option value="10">10 Years</option>
                <option value="15">15 Years</option>
                <option value="20">20 Years</option>
                <option value="25">25 Years</option>
              </select>
            </div>
          </div>

        </div>

        {/* Right Side: Estimated EMI Output Card */}
        <div style={{
          backgroundColor: '#fff0f2',
          border: '1px solid #fecdd3',
          borderRadius: '16px',
          padding: '28px',
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'space-between',
        }}>
          <div>
            <span style={{ fontSize: '12px', color: '#e60023', textTransform: 'uppercase', letterSpacing: '0.1em', fontWeight: 700 }}>
              Estimated Monthly Installment
            </span>
            <div style={{ 
              fontFamily: 'var(--font-heading)', 
              fontSize: 'clamp(28px, 4vw, 38px)', 
              color: '#e60023', 
              fontWeight: 700, 
              margin: '8px 0 16px' 
            }}>
              {formatBdt(monthlyEmi)}
              <span style={{ fontSize: '14px', color: '#6b7280', fontWeight: 500 }}> / month</span>
            </div>

            <div style={{ display: 'flex', flexDirection: 'column', gap: '10px', borderTop: '1px solid #fed7aa', paddingTop: '16px' }}>
              <div style={{ display: 'flex', justifyContent: 'space-between', fontSize: '13px' }}>
                <span style={{ color: '#4b5563' }}>Principal Loan:</span>
                <span style={{ color: '#111827', fontWeight: 600 }}>{formatBdt(loanAmountBdt)}</span>
              </div>
              <div style={{ display: 'flex', justifyContent: 'space-between', fontSize: '13px' }}>
                <span style={{ color: '#4b5563' }}>Estimated Total Interest:</span>
                <span style={{ color: '#111827', fontWeight: 600 }}>{formatBdt(totalInterest)}</span>
              </div>
              <div style={{ display: 'flex', justifyContent: 'space-between', fontSize: '13px' }}>
                <span style={{ color: '#4b5563' }}>Total Repayment:</span>
                <span style={{ color: '#111827', fontWeight: 700 }}>{formatBdt(totalPayment)}</span>
              </div>
            </div>
          </div>

          <div style={{ marginTop: '24px' }}>
            <a 
              href="tel:16760" 
              className="btn-red"
              style={{ width: '100%', padding: '12px', fontSize: '13px', textDecoration: 'none' }}
            >
              <span>Apply for Bank Pre-Approval (16760)</span>
            </a>
          </div>

        </div>

      </div>

    </div>
  );
}
