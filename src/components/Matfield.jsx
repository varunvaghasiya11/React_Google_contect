import React, { useState } from "react";

export function MatField({ label, value, onChange, type="text", required, error, textarea, options }) {
  const [foc, setFoc] = useState(false);
  const up = foc || Boolean(value);
  const cls = `mat-f${up?" up":""}${foc?" foc":""}${error?" err":""}`;
  return (
    <div className={cls}>
      <label>{label}{required&&<span style={{color:"#d93025"}}> *</span>}</label>
      {textarea ? (
        <textarea value={value} onChange={e=>onChange(e.target.value)} onFocus={()=>setFoc(true)} onBlur={()=>setFoc(false)}/>
      ) : options ? (
        <div style={{position:"relative"}}>
          <select value={value} onChange={e=>onChange(e.target.value)} onFocus={()=>setFoc(true)} onBlur={()=>setFoc(false)} style={{paddingRight:32}}>
            <option value=""/>
            {options.map(o=><option key={o} value={o}>{o}</option>)}
          </select>
          <span style={{position:"absolute",right:12,top:"50%",transform:"translateY(-50%)",pointerEvents:"none",color:"#5f6368",fontSize:12}}>▾</span>
        </div>
      ) : (
        <input type={type} value={value} onChange={e=>onChange(e.target.value)} onFocus={()=>setFoc(true)} onBlur={()=>setFoc(false)}/>
      )}
      {error && <div className="mat-err">{error}</div>}
    </div>
  );
}
