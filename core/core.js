// CRFM 0.5 headless spatial core. Right-handed: X right, Y forward, Z up.
// Pure math: no DOM, Three.js, or browser dependencies.
export const X=[1,0,0],Y=[0,1,0],Z=[0,0,1],QI=[0,0,0,1];
export const add=(a,b)=>a.map((v,i)=>v+b[i]);
export const sub=(a,b)=>a.map((v,i)=>v-b[i]);
export const scale=(a,s)=>a.map(v=>v*s);
export const dot=(a,b)=>a.reduce((v,x,i)=>v+x*b[i],0);
export const cross=(a,b)=>[a[1]*b[2]-a[2]*b[1],a[2]*b[0]-a[0]*b[2],a[0]*b[1]-a[1]*b[0]];
export const len=a=>Math.hypot(...a);
export function norm(a){const l=len(a);if(!Number.isFinite(l)||l<1e-14)throw Error('undefined vector direction');return scale(a,1/l)}
export const qMul=(a,b)=>[a[3]*b[0]+a[0]*b[3]+a[1]*b[2]-a[2]*b[1],a[3]*b[1]-a[0]*b[2]+a[1]*b[3]+a[2]*b[0],a[3]*b[2]+a[0]*b[1]-a[1]*b[0]+a[2]*b[3],a[3]*b[3]-a[0]*b[0]-a[1]*b[1]-a[2]*b[2]];
export const qConj=q=>[-q[0],-q[1],-q[2],q[3]];
export const qNorm=q=>norm(q);
export function qAxis(axis,angle){const n=norm(axis),s=Math.sin(angle/2);return [...scale(n,s),Math.cos(angle/2)]}
export function qRot(q,v){const n=qNorm(q),u=n.slice(0,3),t=scale(cross(u,v),2);return add(add(v,scale(t,n[3])),cross(u,t))}
export function qAngle(a,b){const r=qMul(qConj(qNorm(a)),qNorm(b));return 2*Math.atan2(Math.hypot(...r.slice(0,3)),Math.abs(r[3]))}
export const crfmToThree=v=>[v[0],v[2],-v[1]];
export const threeToCrfm=v=>[v[0],-v[2],v[1]];
const M=qAxis(X,-Math.PI/2);
export const toThreeQuat=q=>qMul(qMul(M,q),qConj(M));
// Optional reference-point aiming. Pole-safe: when forward aligns with up, use fallback right.
export function aimQuat(pos,target,up=Z){
 const f=norm(sub(target,pos));let r=cross(f,up);
 if(len(r)<1e-10){r=cross(f,Math.abs(f[0])<.9?X:Y)}
 r=norm(r);const u=cross(r,f);
 const m=[r,f,u],t=m[0][0]+m[1][1]+m[2][2];let x,y,z,w,s;
 const m00=r[0],m10=r[1],m20=r[2],m01=f[0],m11=f[1],m21=f[2],m02=u[0],m12=u[1],m22=u[2];
 if(t>0){s=.5/Math.sqrt(t+1);w=.25/s;x=(m21-m12)*s;y=(m02-m20)*s;z=(m10-m01)*s}
 else if(m00>m11&&m00>m22){s=2*Math.sqrt(1+m00-m11-m22);w=(m21-m12)/s;x=.25*s;y=(m01+m10)/s;z=(m02+m20)/s}
 else if(m11>m22){s=2*Math.sqrt(1+m11-m00-m22);w=(m02-m20)/s;x=(m01+m10)/s;y=.25*s;z=(m12+m21)/s}
 else{s=2*Math.sqrt(1+m22-m00-m11);w=(m10-m01)/s;x=(m02+m20)/s;y=(m12+m21)/s;z=.25*s}
 return qNorm([x,y,z,w])
}
export class Trajectory{
 constructor(cap=2400,minSpacing=.2){Object.assign(this,{cap,minSpacing,samples:[],total:0,travel:0,jump:0,pos:null,_brk:true})}
 moveTo(p){if(this.pos)this.travel+=len(sub(p,this.pos));this.pos=[...p];this._add(p,false)}
 jumpTo(p){if(this.pos)this.jump+=len(sub(p,this.pos));this.pos=[...p];this._add(p,true)}
 breakTrail(){this._brk=true}
 _add(p,force){const last=this.samples.at(-1);if(!force&&!this._brk&&last&&len(sub(p,last.p))<this.minSpacing)return;
 this.samples.push({p:[...p],brk:force||this._brk||!last});this._brk=false;this.total++;if(this.samples.length>this.cap)this.samples.shift()}
 segments(){const s=[];for(let i=1;i<this.samples.length;i++)if(!this.samples[i].brk)s.push([this.samples[i-1].p,this.samples[i].p]);return s}
}
export function createState({landmarks=[],pos=[0,-9,1.7],q=QI}={}){
 const lm=Object.freeze(landmarks.map(l=>Object.freeze({name:l.name,pos:Object.freeze([...l.pos])})));
 const traj=new Trajectory();traj.moveTo(pos);return{landmarks:lm,pos:[...pos],q:qNorm(q),traj}
}
// Orbit is an OPTIONAL operation, not a claim that the field is spherical.
export function orbit(s,center,kind,angle){
 const axis=qRot(s.q,kind==='yaw'?Z:X),r=qAxis(axis,angle);
 s.pos=add(center,qRot(r,sub(s.pos,center)));s.q=qNorm(qMul(r,s.q));s.traj.moveTo(s.pos);return s
}
export function rotateLocal(s,axis,angle){s.q=qNorm(qMul(s.q,qAxis(axis,angle)));return s}
export function applyDrag(s,center,dx,dy,radPerPx=.01){if(dx)orbit(s,center,'yaw',dx*radPerPx);if(dy)orbit(s,center,'pitch',dy*radPerPx);return s}
export function translateLocal(s,d){s.pos=add(s.pos,qRot(s.q,d));s.traj.moveTo(s.pos);return s}
export function teleport(s,pos,q){s.traj.jumpTo(pos);s.pos=[...pos];s.q=qNorm(q);return s}
// Navigation instrument lives in screen space. It is NOT a world landmark.
export function createInstrument({screen=[.16,.84],size=.15,q=QI,aperture=[0,0,0]}={}){
 return{screen:[...screen],size,q:qNorm(q),aperture:[...aperture]}
}
export function moveInstrument(i,dx,dy){i.screen=[i.screen[0]+dx,i.screen[1]+dy];return i}
export function turnInstrument(i,axis,angle){i.q=qNorm(qMul(i.q,qAxis(axis,angle)));return i}
