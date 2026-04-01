const PALETTE = ["#4285F4","#EA4335","#FBBC05","#34A853","#FF6D00","#8E24AA","#00897B","#E53935","#039BE5","#F4511E"];
export const colorFor = name => { let h=0; for(let i=0;i<name.length;i++) h=name.charCodeAt(i)+((h<<5)-h); return PALETTE[Math.abs(h)%PALETTE.length]; };
export const initials = name => { const p=name.trim().split(" "); return p.length>=2?(p[0][0]+p[p.length-1][0]).toUpperCase():name.slice(0,2).toUpperCase(); };
export const fullName = c => `${c.firstName} ${c.lastName}`.trim();
export const getColor = c => colorFor(fullName(c));
export const getInitials = c => initials(fullName(c));
