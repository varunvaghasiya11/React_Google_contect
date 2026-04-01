import React, { useState, createContext, useContext,useEffect } from "react";
import { getContacts,setContacts } from "../utils/localstorage";

// const SAMPLE_CONTACTS = [
//   { id: 1, firstName: "Alice", lastName: "Johnson", email: "alice.johnson@gmail.com", phone: "+1 650-555-0101", company: "Google LLC", jobTitle: "Product Manager", address: "1600 Amphitheatre Pkwy, Mountain View, CA", notes: "Met at I/O 2024", starred: true, label: "Work" },
//   { id: 2, firstName: "Bob", lastName: "Smith", email: "bob.smith@outlook.com", phone: "+1 415-555-0102", company: "Microsoft", jobTitle: "Software Engineer", address: "1 Microsoft Way, Redmond, WA", notes: "", starred: false, label: "Friends" },
//   { id: 3, firstName: "Carol", lastName: "Williams", email: "carol.w@apple.com", phone: "+1 408-555-0103", company: "Apple Inc.", jobTitle: "UI Designer", address: "1 Apple Park Way, Cupertino, CA", notes: "", starred: true, label: "Work" },
//   { id: 4, firstName: "David", lastName: "Brown", email: "david.brown@meta.com", phone: "+1 650-555-0104", company: "Meta", jobTitle: "Data Scientist", address: "1 Hacker Way, Menlo Park, CA", notes: "Birthday: Mar 3", starred: false, label: "Work" },
//   { id: 5, firstName: "Emma", lastName: "Davis", email: "emma.davis@amazon.com", phone: "+1 206-555-0105", company: "Amazon", jobTitle: "Cloud Architect", address: "410 Terry Ave N, Seattle, WA", notes: "", starred: false, label: "Work" },
//   { id: 6, firstName: "Frank", lastName: "Miller", email: "frank.m@netflix.com", phone: "+1 408-555-0106", company: "Netflix", jobTitle: "DevOps Engineer", address: "100 Winchester Cir, Los Gatos, CA", notes: "", starred: false, label: "Friends" },
//   { id: 7, firstName: "Grace", lastName: "Wilson", email: "grace@tesla.com", phone: "+1 650-555-0107", company: "Tesla", jobTitle: "Mech. Engineer", address: "3500 Deer Creek Rd, Palo Alto, CA", notes: "", starred: true, label: "Work" },
//   { id: 8, firstName: "Henry", lastName: "Moore", email: "henry.moore@uber.com", phone: "+1 415-555-0108", company: "Uber", jobTitle: "Backend Engineer", address: "1515 3rd St, San Francisco, CA", notes: "", starred: false, label: "Family" },
//   { id: 9, firstName: "Isla", lastName: "Taylor", email: "isla.taylor@airbnb.com", phone: "+1 415-555-0109", company: "Airbnb", jobTitle: "Growth Marketer", address: "888 Brannan St, San Francisco, CA", notes: "", starred: false, label: "Friends" },
//   { id: 10, firstName: "Jack", lastName: "Anderson", email: "jack.a@spotify.com", phone: "+46 8-555-0110", company: "Spotify", jobTitle: "ML Engineer", address: "Regeringsgatan 19, Stockholm", notes: "", starred: false, label: "Work" },
//   { id: 11, firstName: "Karen", lastName: "Thomas", email: "karen.thomas@linkedin.com", phone: "+1 650-555-0111", company: "LinkedIn", jobTitle: "Recruiter", address: "1000 W Maude Ave, Sunnyvale, CA", notes: "", starred: false, label: "Work" },
//   { id: 12, firstName: "Liam", lastName: "Jackson", email: "liam.j@twitter.com", phone: "+1 415-555-0112", company: "X Corp", jobTitle: "Content Strategist", address: "1355 Market St, San Francisco, CA", notes: "", starred: true, label: "Friends" },
//   { id: 13, firstName: "Mia", lastName: "White", email: "mia.white@salesforce.com", phone: "+1 415-555-0113", company: "Salesforce", jobTitle: "CRM Consultant", address: "415 Mission St, San Francisco, CA", notes: "", starred: false, label: "Work" },
//   { id: 14, firstName: "Noah", lastName: "Harris", email: "noah.harris@adobe.com", phone: "+1 408-555-0114", company: "Adobe", jobTitle: "Creative Director", address: "345 Park Ave, San Jose, CA", notes: "", starred: false, label: "Work" },
//   { id: 15, firstName: "Olivia", lastName: "Martin", email: "olivia.m@stripe.com", phone: "+1 415-555-0115", company: "Stripe", jobTitle: "Finance Lead", address: "510 Townsend St, San Francisco, CA", notes: "", starred: false, label: "Family" },
//   { id: 16, firstName: "Peter", lastName: "Garcia", email: "peter.garcia@shopify.com", phone: "+1 613-555-0116", company: "Shopify", jobTitle: "Partner Manager", address: "150 Elgin St, Ottawa, ON", notes: "", starred: false, label: "Work" },
//   { id: 17, firstName: "Quinn", lastName: "Martinez", email: "quinn.m@figma.com", phone: "+1 415-555-0117", company: "Figma", jobTitle: "Product Designer", address: "760 Market St, San Francisco, CA", notes: "", starred: false, label: "Friends" },
//   { id: 18, firstName: "Rachel", lastName: "Robinson", email: "rachel.r@slack.com", phone: "+1 415-555-0118", company: "Slack", jobTitle: "Customer Success", address: "500 Howard St, San Francisco, CA", notes: "", starred: false, label: "Work" },
//   { id: 19, firstName: "Samuel", lastName: "Clark", email: "samuel.clark@zoom.com", phone: "+1 408-555-0119", company: "Zoom", jobTitle: "Solutions Engineer", address: "55 Almaden Blvd, San Jose, CA", notes: "", starred: false, label: "Work" },
//   { id: 20, firstName: "Tanya", lastName: "Lewis", email: "tanya.l@dropbox.com", phone: "+1 415-555-0120", company: "Dropbox", jobTitle: "Security Analyst", address: "333 Brannan St, San Francisco, CA", notes: "", starred: false, label: "Friends" },
// ];

const Ctx = createContext(null);

export function ContactsProvider({ children }) {
  const [toast, setToast] = useState(null);
  const [contacts, setcontacts] = useState(getContacts());

  const showToast = (msg, action, cb) => {
    setToast({ msg, action, cb });
    setTimeout(() => setToast(null), 4000);
  };

  useEffect(() => {
    setContacts(contacts);
  }, [contacts]);

  const addContact = (data) => {
    setcontacts([...contacts, { ...data, id: Date.now() }])
  };

  const updateContact = (id, data) => {
    setcontacts(contacts.map(c => c.id === id ? { ...c, ...data } : c))
  };
  const deleteContact = (id) => {
    setcontacts(contacts.filter(c => c.id !== id))
  };
  const toggleStar = (id) => {
    setcontacts(contacts.map(c => c.id === id ? { ...c, starred: !c.starred } : c))
  };
  const restoreContact = (id) => {
    setcontacts(contacts.map(c => c.id === id ? { ...c, deleted: false } : c))
  };
  const delFromTrash = (id) => {
    setcontacts(contacts.filter(c => c.id !== id))
  };
  const getContact = (id) => contacts.find(c => c.id === Number(id)) || contacts[0];

  return (
    <Ctx.Provider value={{
      contacts: contacts,
      trash: [],
      toast,
      setToast,
      addContact,
      updateContact,
      deleteContact,
      toggleStar,
      restoreContact,
      delFromTrash,
      getContact
    }}>
      {children}
    </Ctx.Provider>
  );
}

export const useContacts = () => useContext(Ctx);
