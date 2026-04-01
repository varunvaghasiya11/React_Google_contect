import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useContacts } from "../context/ContactsProvider";
import { TopBar } from "../components/Topbar";
import { ContactForm } from "../components/Contactform";
import { Toast } from "../components/Toast";

export function AddContact() {
  const navigate = useNavigate();
  const { addContact } = useContacts();

  const [search, setSearch] = useState("");
  return (
    <div>
      <TopBar search={search} onSearch={setSearch} />
      <ContactForm
        title="New Contact"
        subtitle="Add someone to your contacts"
        onSubmit={data => {
          const id = addContact(data);
          navigate(`/contacts/${id}`);
        }}
        onCancel={() => navigate("/contacts")}
      />
      <Toast />
    </div>
  );
}
