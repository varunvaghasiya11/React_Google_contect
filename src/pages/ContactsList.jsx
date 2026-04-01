import React, { useState, useMemo } from "react";
import { Link, useSearchParams } from "react-router-dom";
import { useContacts } from "../context/ContactsProvider";
import { TopBar } from "../components/Topbar.jsx";
import { ContactRow } from "../components/ContactRow.jsx";
import { Toast } from "../components/Toast.jsx";
import { LABEL_COLORS } from "../components/Sidebar.jsx";
import { fullName } from "../utils/utils.js";
import { IcoTrash, IcoAdd } from "../components/Icons.jsx";

export function ContactsList() {
  const { contacts, deleteContact } = useContacts();
  const [search, setSearch] = useState("");
  const [selected, setSelected] = useState(new Set());
  const [searchParams] = useSearchParams();
  const labelFilter = searchParams.get("label");

  const filtered = useMemo(() => {
    let list = contacts;
    if (labelFilter) list = list.filter(c => c.label === labelFilter);
    if (search.trim()) {
      const q = search.toLowerCase();
      list = list.filter(c => fullName(c).toLowerCase().includes(q) || c.email?.toLowerCase().includes(q) || c.phone?.includes(q) || c.company?.toLowerCase().includes(q));
    }
    return [...list].sort((a, b) => fullName(a).localeCompare(fullName(b)));
  }, [contacts, search, labelFilter]);

  const grouped = useMemo(() => {
    const map = {};
    filtered.forEach(c => { const k = fullName(c)[0]?.toUpperCase() || "#"; if (!map[k]) map[k] = []; map[k].push(c); });
    return Object.entries(map).sort(([a], [b]) => a.localeCompare(b));
  }, [filtered]);

  const toggleSelect = id => setSelected(s => { const n = new Set(s); n.has(id) ? n.delete(id) : n.add(id); return n; });
  const bulkDelete = () => { selected.forEach(id => deleteContact(id)); setSelected(new Set()); };

  return (
    <div>
      <TopBar search={search} onSearch={setSearch} />
      <div className="page-wrap">
        {labelFilter && (
          <div className="d-flex align-items-center gap-2 mb-3">
            <h5 className="page-ttl mb-0">{labelFilter}</h5>
            <span className="g-chip" style={{ background: LABEL_COLORS[labelFilter] + "22", color: LABEL_COLORS[labelFilter] }}>{filtered.length} contacts</span>
            <Link to="/contacts" className="btn btn-sm btn-light rounded-pill ms-2">Clear filter</Link>
          </div>
        )}

        {selected.size > 0 && (
          <div className="bulk-bar">
            <input type="checkbox" checked={selected.size === filtered.length} onChange={() => setSelected(selected.size === filtered.length ? new Set() : new Set(filtered.map(c => c.id)))} style={{ width: 16, height: 16 }} />
            <span>{selected.size} selected</span>
            <button className="btn btn-sm btn-outline-danger rounded-pill ms-auto d-flex align-items-center gap-1" onClick={bulkDelete}>
              <IcoTrash /> Delete selected
            </button>
            <button className="btn btn-sm btn-light rounded-pill" onClick={() => setSelected(new Set())}>Cancel</button>
          </div>
        )}

        {filtered.length > 0 && (
          <div className="c-row" style={{ cursor: "default", paddingBottom: 0 }}>
            <div style={{ width: 40 }} />
            <div className="c-info ps-3" style={{ fontSize: 11, fontWeight: 600, color: "#5f6368", textTransform: "uppercase", letterSpacing: ".5px" }}>Name</div>
            <div className="c-email" style={{ fontSize: 11, fontWeight: 600, color: "#5f6368", textTransform: "uppercase" }}>Email</div>
            <div className="c-phone" style={{ fontSize: 11, fontWeight: 600, color: "#5f6368", textTransform: "uppercase" }}>Phone</div>
            <div style={{ width: 120 }} />
          </div>
        )}

        {grouped.length === 0 ? (
          <div className="empty-st">
            <div style={{ fontSize: 64, opacity: .2 }}>👤</div>
            <h5 style={{ color: "#5f6368", fontWeight: 400 }}>{search ? "No contacts found" : "No contacts yet"}</h5>
            <p className="text-muted">{search ? `No results for "${search}"` : "Add your first contact to get started."}</p>
            {!search && <Link to="/contacts/new" className="btn btn-primary rounded-pill px-4 mt-2">+ Add Contact</Link>}
          </div>
        ) : (
          grouped.map(([letter, group]) => (
            <div key={letter}>
              <div className="grp-lbl">{letter}</div>
              {group.map(c => <ContactRow key={c.id} contact={c} selected={selected.has(c.id)} onSelect={toggleSelect} />)}
            </div>
          ))
        )}
      </div>
      <Link to="/contacts/new" className="g-fab" title="New contact"><IcoAdd /></Link>
      <Toast />
    </div>
  );
}
