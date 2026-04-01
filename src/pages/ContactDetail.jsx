import React, { useState } from "react";
import { useParams, useNavigate, Link } from "react-router-dom";
import { useContacts } from "../context/ContactsProvider";
import { TopBar } from "../components/Topbar";
import { Toast } from "../components/Toast";
import { IcoBack, IcoStar, IcoEdit, IcoTrash, IcoEmail, IcoPhone, IcoBrief, IcoMap, IcoNote } from "../components/Icons";
import { getColor, getInitials, fullName } from "../utils/utils.js";
import { LABEL_COLORS } from "../components/Sidebar";

export function ContactDetail() {
  const { id } = useParams();
  const navigate = useNavigate();
  const { getContact, deleteContact, toggleStar } = useContacts();
  const [search, setSearch] = useState("");
  const contact = getContact(id);

  if (!contact) return (
    <div>
      <TopBar search={search} onSearch={setSearch} />
      <div className="empty-st mt-5">
        <div style={{ fontSize: 48, opacity: .25 }}>🔍</div>
        <h5 style={{ color: "#5f6368" }}>Contact not found</h5>
        <Link to="/contacts" className="btn btn-primary rounded-pill px-4">Back to Contacts</Link>
      </div>
    </div>
  );

  const lColor = LABEL_COLORS[contact.label] || "#5f6368";

  return (
    <div>
      <TopBar search={search} onSearch={setSearch} />
      <div className="detail-wrap">
        <Link to="/contacts" className="back-btn mb-3 d-inline-flex"><IcoBack />&nbsp;Contacts</Link>

        <div className="d-hero">
          <div className="d-av" style={{ background: getColor(contact) }}>{getInitials(contact)}</div>
          <div className="flex-fill">
            <h3 style={{ fontFamily: "'Google Sans',sans-serif", fontWeight: 400, marginBottom: 4 }}>{fullName(contact)}</h3>
            {(contact.jobTitle || contact.company) && (
              <p className="text-muted mb-2">{[contact.jobTitle, contact.company].filter(Boolean).join(" · ")}</p>
            )}
            {contact.label && (
              <span className="g-chip mb-3 d-inline-flex" style={{ background: lColor + "22", color: lColor }}>{contact.label}</span>
            )}
            <div className="d-flex flex-wrap gap-2 mt-2">
              <button className={`btn-act${contact.starred ? " btn btn-warning btn-sm" : ""}`} style={contact.starred ? { borderRadius: 20, background: "#fef9e7", border: "1px solid #fdd663", color: "#b06000" } : {}}
                onClick={() => toggleStar(contact.id)}>
                <IcoStar f={contact.starred} />&nbsp;{contact.starred ? "Unstar" : "Star"}
              </button>
              <Link to={`/contacts/${contact.id}/edit`} className="btn-act primary"><IcoEdit />&nbsp;Edit</Link>
              <button className="btn-act danger" onClick={() => { deleteContact(contact.id); navigate("/contacts") }}>
                <IcoTrash />&nbsp;Delete
              </button>
            </div>
          </div>
        </div>

        {(contact.email || contact.phone) && (
          <div className="d-section">
            <h6>Contact Info</h6>
            {contact.email && (
              <div className="d-field">
                <span style={{ color: "#5f6368", marginTop: 2 }}><IcoEmail /></span>
                <div><a href={`mailto:${contact.email}`} className="d-fv" style={{ color: "#1a73e8", textDecoration: "none" }}>{contact.email}</a><div className="d-fl">Email</div></div>
              </div>
            )}
            {contact.phone && (
              <div className="d-field">
                <span style={{ color: "#5f6368", marginTop: 2 }}><IcoPhone /></span>
                <div><a href={`tel:${contact.phone}`} className="d-fv" style={{ color: "#1a73e8", textDecoration: "none" }}>{contact.phone}</a><div className="d-fl">Phone</div></div>
              </div>
            )}
          </div>
        )}

        {(contact.company || contact.jobTitle) && (
          <div className="d-section">
            <h6>Work</h6>
            {contact.company && (
              <div className="d-field">
                <span style={{ color: "#5f6368", marginTop: 2 }}><IcoBrief /></span>
                <div><div className="d-fv">{contact.company}</div><div className="d-fl">Company</div></div>
              </div>
            )}
            {contact.jobTitle && (
              <div className="d-field">
                <span style={{ color: "transparent", marginTop: 2 }}><IcoBrief /></span>
                <div><div className="d-fv">{contact.jobTitle}</div><div className="d-fl">Job Title</div></div>
              </div>
            )}
          </div>
        )}

        {contact.address && (
          <div className="d-section">
            <h6>Address</h6>
            <div className="d-field">
              <span style={{ color: "#5f6368", marginTop: 2 }}><IcoMap /></span>
              <div><div className="d-fv">{contact.address}</div><div className="d-fl">Address</div></div>
            </div>
          </div>
        )}

        {contact.notes && (
          <div className="d-section">
            <h6>Notes</h6>
            <div className="d-field">
              <span style={{ color: "#5f6368", marginTop: 2 }}><IcoNote /></span>
              <div><div className="d-fv">{contact.notes}</div></div>
            </div>
          </div>
        )}
      </div>
      <Toast />
    </div>
  );
}
