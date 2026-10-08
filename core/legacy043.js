// CRFM 0.4.3 regression model, retained separately from target geometry.
const clamp=(v,a,b)=>Math.max(a,Math.min(b,v));
export const legacyAim=(x,y,z)=>({yaw:Math.atan2(x,z),pitch:Math.atan2(.7-y,Math.hypot(x,z))});
export function legacyNavStep(p,vel,dt){const r=Math.max(2,Math.hypot(p[0],p[2])),az=Math.atan2(p[0],p[2])+vel.az*dt,el=clamp(Math.atan2(p[1]-.7,r)+vel.el*dt,-1.25,1.25),nr=Math.max(7,Math.hypot(r,p[1]-.7)),ce=Math.cos(el);return[nr*ce*Math.sin(az),Math.max(.55,.7+nr*Math.sin(el)),nr*ce*Math.cos(az)]}
export const legacyGestureCommand=(dx,dy)=>({az:clamp(dx*.065,-1.25,1.25),el:clamp(-dy*.055,-1.1,1.1)});
