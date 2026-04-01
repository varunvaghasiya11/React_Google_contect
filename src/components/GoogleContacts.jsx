import React, { useState } from "react";
import { BrowserRouter as Router, Routes, Route, Navigate } from "react-router-dom";

import { BootstrapCSS, AppStyles } from "../styles/styles";
import { ContactsProvider } from "../context/ContactsProvider";
import { Sidebar } from "./Sidebar";

import { ContactsList } from "../pages/ContactsList";
import { AddContact } from "../pages/AddContact";
import { ContactDetail } from "../pages/ContactDetail";
import { EditContact } from "../pages/EditContact";
import { Favorites } from "../pages/Favorites";
import { Trash } from "../pages/Trash";

export default function GoogleContactsApp() {
  const [sidebarOpen, setSidebarOpen] = useState(true);

  return (
    <ContactsProvider>
      <Router>
        <BootstrapCSS />
        <AppStyles />
        <div className="app-root">
          <Sidebar open={sidebarOpen} onToggle={() => setSidebarOpen(o => !o)} />
          <main className={`main-content ${sidebarOpen ? "s-open" : "s-closed"}`}>
            <Routes>
              <Route path="/" element={<Navigate to="/contacts" replace />} />
              <Route path="/contacts" element={<ContactsList />} />
              <Route path="/contacts/new" element={<AddContact />} />
              <Route path="/contacts/:id" element={<ContactDetail />} />
              <Route path="/contacts/:id/edit" element={<EditContact />} />
              <Route path="/favorites" element={<Favorites />} />
              <Route path="/trash" element={<Trash />} />
            </Routes>
          </main>
        </div>
      </Router>
    </ContactsProvider>
  );
}
