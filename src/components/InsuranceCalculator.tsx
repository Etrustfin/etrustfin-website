"use client";

import { useState } from "react";
import { SCHEDULE_URL } from "@/lib/constants";

function fmt(n: number) {
  const rounded = Math.round(n);
  return (rounded < 0 ? "-$" : "$") + Math.abs(rounded).toLocaleString("en-US");
}

export default function InsuranceCalculator() {
  const [income, setIncome] = useState(100000);
  const [years, setYears] = useState(10);
  const [mortgage, setMortgage] = useState(0);
  const [debt, setDebt] = useState(0);
  const [education, setEducation] = useState(0);
  const [finalExp, setFinalExp] = useState(15000);
  const [existing, setExisting] = useState(0);
  const [savings, setSavings] = useState(0);

  const incomeReplacement = income * years;
  const gross = incomeReplacement + mortgage + debt + education + finalExp;
  const offsets = existing + savings;
  const need = Math.max(0, gross - offsets);

  const rows: [string, number][] = [
    [`Income replacement (${years} yrs)`, incomeReplacement],
    ["Remaining mortgage", mortgage],
    ["Other debt", debt],
    ["Future education costs", education],
    ["Final expenses", finalExp],
    ["Existing coverage", -existing],
    ["Liquid savings earmarked", -savings],
  ];

  return (
    <div className="calc-wrap">
      <div className="calc-grid">
        <div className="calc-field">
          <label htmlFor="ci-income">Annual income to replace ($)</label>
          <input
            type="number"
            id="ci-income"
            min={0}
            step={1000}
            value={income}
            onChange={(e) => setIncome(parseFloat(e.target.value) || 0)}
          />
        </div>
        <div className="calc-field">
          <label htmlFor="ci-years">Years of income to replace</label>
          <select
            id="ci-years"
            value={years}
            onChange={(e) => setYears(parseFloat(e.target.value) || 0)}
          >
            <option value={5}>5 years</option>
            <option value={10}>10 years</option>
            <option value={15}>15 years</option>
            <option value={20}>20 years</option>
            <option value={25}>25 years</option>
          </select>
        </div>
        <div className="calc-field">
          <label htmlFor="ci-mortgage">Remaining mortgage balance ($)</label>
          <input
            type="number"
            id="ci-mortgage"
            min={0}
            step={1000}
            value={mortgage}
            onChange={(e) => setMortgage(parseFloat(e.target.value) || 0)}
          />
        </div>
        <div className="calc-field">
          <label htmlFor="ci-debt">Other debt: credit cards, loans ($)</label>
          <input
            type="number"
            id="ci-debt"
            min={0}
            step={500}
            value={debt}
            onChange={(e) => setDebt(parseFloat(e.target.value) || 0)}
          />
        </div>
        <div className="calc-field">
          <label htmlFor="ci-education">Future education costs ($)</label>
          <input
            type="number"
            id="ci-education"
            min={0}
            step={1000}
            value={education}
            onChange={(e) => setEducation(parseFloat(e.target.value) || 0)}
          />
        </div>
        <div className="calc-field">
          <label htmlFor="ci-final">Final expenses ($)</label>
          <input
            type="number"
            id="ci-final"
            min={0}
            step={500}
            value={finalExp}
            onChange={(e) => setFinalExp(parseFloat(e.target.value) || 0)}
          />
        </div>
        <div className="calc-field">
          <label htmlFor="ci-existing">Existing life insurance in force ($)</label>
          <input
            type="number"
            id="ci-existing"
            min={0}
            step={1000}
            value={existing}
            onChange={(e) => setExisting(parseFloat(e.target.value) || 0)}
          />
        </div>
        <div className="calc-field">
          <label htmlFor="ci-savings">Liquid savings and investments earmarked for this ($)</label>
          <input
            type="number"
            id="ci-savings"
            min={0}
            step={1000}
            value={savings}
            onChange={(e) => setSavings(parseFloat(e.target.value) || 0)}
          />
        </div>
      </div>
      <div className="calc-result">
        <h4>Estimated Coverage Need</h4>
        <div className="amount">{fmt(need)}</div>
        <div className="calc-breakdown">
          {rows
            .filter(([, v]) => v !== 0)
            .map(([label, v]) => (
              <div className="line" key={label}>
                <span>{label}</span>
                <span className={v < 0 ? "neg" : undefined}>{fmt(v)}</span>
              </div>
            ))}
        </div>
        <p className="calc-note">
          This is a general estimate for educational purposes only, using one common method among
          several. It is not a personalized recommendation. Your actual need may differ based on
          your full financial picture, and we will walk through that together on a call.
        </p>
      </div>
      <div className="calc-actions">
        <a className="btn btn-dark" href={SCHEDULE_URL} target="_blank" rel="noopener">
          Review My Number on a Call
        </a>
      </div>
    </div>
  );
}
