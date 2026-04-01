import React, { useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { useContacts } from "../context/ContactsProvider";
import { TopBar } from "../components/Topbar";
import { ContactForm } from "../components/Contactform";
import { Toast } from "../components/Toast";
import { fullName } from "../utils/utils.js";

export function EditContact() {
  const { id } = useParams();
  const navigate = useNavigate();
  const { getContact, updateContact } = useContacts();
  const [search, setSearch] = useState("");
  const contact = getContact(id);
  if (!contact) {
    navigate("/contacts");
    return null;
  }
  return (
    <div>
      <TopBar search={search} onSearch={setSearch} />
      <ContactForm
        title="Edit Contact"
        subtitle={`Editing ${fullName(contact)}`}
        initial={contact}
        onSubmit={data => {
          updateContact(contact.id, data);
          navigate(`/contacts/${contact.id}`);
        }}
        onCancel={() => navigate(`/contacts/${contact.id}`)}
      />
      <Toast />
    </div>
  );
}
