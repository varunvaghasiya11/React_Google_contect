import React from "react";
import { useContacts } from "../context/ContactsProvider";

export function Toast() {
  const { toast, setToast } = useContacts();
  if (!toast) return null;
  return (
    <div className="g-toast-wrap">
      <div className="g-toast">
        <span>{toast.msg}</span>
        {toast.action && <span className="g-toast-act" onClick={() => { toast.cb?.(); setToast(null) }}>{toast.action}</span>}
      </div>
    </div>
  );
}
