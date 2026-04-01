import React from "react";
import { Link } from "react-router-dom";
import { useContacts } from "../context/ContactsProvider";
import { IcoStar, IcoEdit, IcoTrash } from "./Icons";
import { getColor, getInitials, fullName } from "../utils/utils.js";

export function ContactRow({ contact, selected, onSelect }) {
  const { toggleStar, deleteContact } = useContacts();
  return (
    <div className={`c-row${selected ? " sel" : ""}`}>
      <Link to={`/contacts/${contact.id}`} style={{ display: "contents" }}>
        <div className="c-av" style={{ background: getColor(contact) }}>{getInitials(contact)}</div>
        <div className="c-info">
          <div className="c-name">{fullName(contact)}</div>
          <div className="c-sub">{[contact.jobTitle, contact.company].filter(Boolean).join(" · ")}</div>
        </div>
        <div className="c-email">{contact.email}</div>
        <div className="c-phone">{contact.phone}</div>
      </Link>
      <div className="c-acts">
        <button className="ico-btn" style={{ color: contact.starred ? "#f9ab00" : "#5f6368" }} title={contact.starred ? "Unstar" : "Star"}
          onClick={e => { e.preventDefault(); e.stopPropagation(); toggleStar(contact.id) }}>
          <IcoStar f={contact.starred} />
        </button>
        <Link to={`/contacts/${contact.id}/edit`} className="ico-btn" title="Edit" onClick={e => e.stopPropagation()}>
          <IcoEdit />
        </Link>
        <button className="ico-btn" style={{ color: "#d93025" }} title="Delete"
          onClick={e => { e.preventDefault(); e.stopPropagation(); deleteContact(contact.id) }}>
          <IcoTrash />
        </button>
      </div>
    </div>
  );
}
