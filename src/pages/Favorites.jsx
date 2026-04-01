import React, { useState } from "react";
import { Link } from "react-router-dom";
import { useContacts } from "../context/ContactsProvider";
import { TopBar } from "../components/Topbar";
import { ContactRow } from "../components/ContactRow";
import { Toast } from "../components/Toast";
import { fullName } from "../utils/utils.js";

export function Favorites() {
  const { contacts } = useContacts();
  const [search, setSearch] = useState("");
  const [selected, setSelected] = useState(new Set());
  const favs = contacts.filter(c => c.starred).filter(c => !search.trim() || fullName(c).toLowerCase().includes(search.toLowerCase()) || c.email?.toLowerCase().includes(search.toLowerCase())).sort((a, b) => fullName(a).localeCompare(fullName(b)));
  return (
    <div>
      <TopBar search={search} onSearch={setSearch} />
      <div className="page-wrap">
        <div className="d-flex align-items-center gap-2 mb-3">
          <span style={{ fontSize: 24 }}>⭐</span>
          <h5 className="page-ttl mb-0">Favorites</h5>
          <span className="text-muted" style={{ fontSize: 14 }}>({favs.length})</span>
        </div>
        {favs.length === 0 ? (
          <div className="empty-st">
            <div style={{ fontSize: 56, opacity: .2 }}>⭐</div>
            <h5 style={{ color: "#5f6368", fontWeight: 400 }}>{search ? "No matches" : "No favorites yet"}</h5>
            <p className="text-muted">Star contacts to see them here.</p>
            <Link to="/contacts" className="btn btn-primary rounded-pill px-4 mt-2">Browse Contacts</Link>
          </div>
        ) : favs.map(c => <ContactRow key={c.id} contact={c} selected={selected.has(c.id)} onSelect={id => setSelected(s => { const n = new Set(s); n.has(id) ? n.delete(id) : n.add(id); return n; })} />)}
      </div>
      <Toast />
    </div>
  );
}
