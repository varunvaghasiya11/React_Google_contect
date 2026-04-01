import React, { useState } from "react";
import { Link } from "react-router-dom";
import { MatField } from "./MatField";
import { IcoBack, IcoCheck } from "./Icons";

export function ContactForm({ initial = {}, onSubmit, onCancel, title, subtitle }) {
  const [f, setF] = useState({
    firstName: initial.firstName || "", lastName: initial.lastName || "",
    email: initial.email || "", phone: initial.phone || "",
    company: initial.company || "", jobTitle: initial.jobTitle || "",
    address: initial.address || "", label: initial.label || "Other", notes: initial.notes || ""
  });
  const [errs, setErrs] = useState({});

  const set = k => v => setF(x => ({ ...x, [k]: v }));
  console.log(f);
  return (
    <div className="form-wrap">
      <div className="form-card">
        <div className="form-head">
          <Link to="/contacts" className="back-btn mb-3 d-inline-flex"><IcoBack />&nbsp;Back</Link>
          <h4 className="mb-1" style={{ fontFamily: "'Google Sans',sans-serif", fontWeight: 400 }}>{title}</h4>
          {subtitle && <p className="text-muted mb-0" style={{ fontSize: 14 }}>{subtitle}</p>}
        </div>
        <div className="form-body">
          <div className="form-sec-lbl">Name</div>
          <div className="row g-3">
            <div className="col-6"><MatField label="First Name" value={f.firstName} onChange={set("firstName")} required error={errs.firstName} /></div>
            <div className="col-6"><MatField label="Last Name" value={f.lastName} onChange={set("lastName")} /></div>
          </div>
          <div className="form-sec-lbl">Contact Info</div>
          <MatField label="Email Address" type="email" value={f.email} onChange={set("email")} required error={errs.email} />
          <MatField label="Phone Number" type="tel" value={f.phone} onChange={set("phone")} />
          <div className="form-sec-lbl">Work</div>
          <div className="row g-3">
            <div className="col-6"><MatField label="Company" value={f.company} onChange={set("company")} /></div>
          </div>
          <div className="form-sec-lbl">Other</div>
          <div className="row g-3">
            <div className="col-6"><MatField label="Label" value={f.label} onChange={set("label")} options={["Work", "Friends", "Family", "Other"]} /></div>
          </div>
          <MatField label="Address" value={f.address} onChange={set("address")} textarea />
        </div>
        <div className="form-footer">
          <button className="btn btn-light rounded-pill px-4" onClick={onCancel}>Cancel</button>
          <button className="btn btn-primary rounded-pill px-4 d-flex align-items-center gap-2" onClick={() => { onSubmit(f); }}>
            <IcoCheck /> Save Contact
          </button>
        </div>
      </div>
    </div>
  );
}
