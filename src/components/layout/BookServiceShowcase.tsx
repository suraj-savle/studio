// "use client";

// import React, { useEffect, useRef, useState, useCallback } from 'react';

// // --- SERVICE DATA TYPE CONFIGURATIONS ---
// type Feature = { name: string; desc: string };
// type Page =
//   | { type: 'cover'; title: string; subtitle: string; footer: string }
//   | { type: 'features'; title: string; subtitle: string; items: Feature[] }
//   | { type: 'pricing'; title: string; subtitle: string; tier: string; price: string; features: string[] }
//   | { type: 'cta'; title: string; subtitle?: string; content: string; button: string };

// const PAGES_DATA: Page[] = [
//   // PAGE 1: COVER
//   {
//     type: "cover",
//     title: "Services & Commercial Pricing Catalog",
//     subtitle: "Grab or swipe the page corner to flip through our real-time agency development models, workflows, and deliverables.",
//     footer: "Interactive Digital Catalog • NexusLabs 2026"
//   },

//   // PAGE 2: PORTFOLIO SHOWCASE (PART 1)
//   {
//     type: "pricing",
//     title: "Web Services • Tier I",
//     subtitle: "Essential personal & professional identity spaces.",
//     tier: "Portfolio & Redesign Platforms",
//     price: "₹2,999",
//     features: [
//       "Custom UI/UX & Responsive Core Layout",
//       "Website Redesign Optimization Framework",
//       "Clean Codebases built with Next.js / React",
//       "Unlimited Layout Iterations & Revisions",
//       "2 Months Complimentary Maintenance Support",
//       "Basic SEO Meta-Tag Configurations Mapping"
//     ]
//   },

//   // PAGE 3: PORTFOLIO SHOWCASE (PART 2)
//   {
//     type: "pricing",
//     title: "Web Services • Tier II",
//     subtitle: "High-end commercial landing engines built for conversions.",
//     tier: "Custom Business & E-Commerce",
//     price: "₹6,999",
//     features: [
//       "3-5 Fully Interactive Engineered Pages",
//       "Fast, Responsive & Mobile-First Execution",
//       "Smooth Shopping Experiences & Cart Configurations",
//       "Secure Digital Payment Gateways Integration",
//       "Easy Dynamic Content & Product Inventories",
//       "Unlimited Structural Polish & Revisions",
//       "2 Months Dedicated Post-Launch Support"
//     ]
//   },

//   // PAGE 4: MARKETING SERVICES (PART 1)
//   {
//     type: "pricing",
//     title: "Growth Engines • Tier I",
//     subtitle: "Transitioning operations and visual spaces safely online.",
//     tier: "Identity Design & Digital Migration",
//     price: "₹4,499",
//     features: [
//       "Offline to Online Operational Model Setup",
//       "Premium Brand Identity & Poster Systems",
//       "High-Performance Modern Layout Architecture",
//       "Zero Operational Friction System Migration",
//       "Striking Social Visual Asset Compositions",
//       "1 Month Execution Support Iterations"
//     ]
//   },

//   // PAGE 5: MARKETING SERVICES (PART 2)
//   {
//     type: "pricing",
//     title: "Growth Engines • Tier II",
//     subtitle: "Data-driven targeting setups to scale conversions.",
//     tier: "Auditing & Google Ads Optimization",
//     price: "₹8,999",
//     features: [
//       "Deep Business Diagnostics & Pipeline Audits",
//       "Rigorous Operational Systems Health Review",
//       "Data-Driven Search Engine Campaign Management",
//       "Targeted Google Ads Tuning & Tracking Setup",
//       "Maximum ROI Optimization Pipelines",
//       "Comprehensive Analytics Dashboard Access"
//     ]
//   },

//   // PAGE 6: AUTOMATION SHOWCASE (PART 1)
//   {
//     type: "pricing",
//     title: "System Automation • Tier I",
//     subtitle: "Asynchronous social engagement webhooks.",
//     tier: "Social & Messenger Automation",
//     price: "₹5,499",
//     features: [
//       "Programmatic WhatsApp Broadcast Layers",
//       "Instant Template Message Responses API",
//       "Live Meta Hook Delivery Pipeline Sync",
//       "Instagram Auto-Chat Multi-Route Maps",
//       "Profile DM Keyword Interaction Nodes",
//       "2 Months Full Infrastructure Maintenance"
//     ]
//   },

//   // PAGE 7: AUTOMATION SHOWCASE (PART 2)
//   {
//     type: "pricing",
//     title: "System Automation • Tier II",
//     subtitle: "Complex automated system pipelines.",
//     tier: "N8N Infrastructure & AI Agents",
//     price: "₹12,499",
//     features: [
//       "N8N Backend Workflow Node Mapping",
//       "Deep Multi-Database Cross API Syncing",
//       "Custom Intelligent Chatbot Deployments",
//       "High-Performance LLM Engines Integrations",
//       "Real-Time System Context Task Processing",
//       "3 Months Core Backend Infrastructure Support"
//     ]
//   },

//   // PAGE 8: CALL TO ACTION
//   {
//     type: "cta",
//     title: "Ready to Accelerate Growth?",
//     subtitle: "Let's build something exceptional together.",
//     content: "Our team transforms digital visions into premium, conversion-optimized market products. Contact us today to receive a tailored structural estimate for your custom software workflow stacks.",
//     button: "Initiate Project Call"
//   }
// ];

// export default function BookShowcase() {
//   const bookRef = useRef(null);
//   const leftFrontRef = useRef(null);
//   const rightFrontRef = useRef(null);
//   const leftUnderRef = useRef(null);
//   const rightUnderRef = useRef(null);
//   const flapRef = useRef(null);
//   const flapContentRef = useRef(null);
//   const foldGradientRef = useRef(null);
//   const rafRef = useRef(null);

//   const [leftIndex, setLeftIndex] = useState(0);
//   const [isHovering, setIsHovering] = useState(false);

//   type ActiveSide = 'left' | 'right' | null;
//   const stateRef = useRef({
//     width: 0,
//     height: 0,
//     pageWidth: 0,
//     spineX: 0,
//     diagonal: 0,
//     leftIndex: 0,
//     activeSide: null,
//     activeCorner: null,
//     isDragging: false,
//     cornerThreshold: 100,
//   });

//   const renderPagesContent = useCallback(() => {
//     const idx = stateRef.current.leftIndex;
//     if (leftFrontRef.current) leftFrontRef.current.innerHTML = getPageHTML(idx);
//     if (rightFrontRef.current) rightFrontRef.current.innerHTML = getPageHTML(idx + 1);

//     if (leftFrontRef.current) leftFrontRef.current.style.display = idx < 0 ? 'none' : 'block';
//     if (rightFrontRef.current) rightFrontRef.current.style.display = idx + 1 >= PAGES_DATA.length ? 'none' : 'block';
//   }, []);

//   useEffect(() => {
//     stateRef.current.leftIndex = leftIndex;
//     renderPagesContent();
//   }, [leftIndex, renderPagesContent]);

//   useEffect(() => {
//     const book = bookRef.current;
//     if (!book) return;

//     const handleResize = () => {
//       const rect = book.getBoundingClientRect();
//       const state = stateRef.current;
//       state.width = rect.width;
//       state.height = rect.height;
//       state.pageWidth = rect.width / 2;
//       state.spineX = state.pageWidth;
//       state.diagonal = Math.sqrt(state.pageWidth ** 2 + state.height ** 2);

//       if (!state.isDragging) renderPagesContent();
//     };

//     const resizeObserver = new ResizeObserver(handleResize);
//     resizeObserver.observe(book);
//     handleResize();

//     return () => {
//       resizeObserver.disconnect();
//       if (rafRef.current) cancelAnimationFrame(rafRef.current);
//     };
//   }, [renderPagesContent]);

//   // --- VECTOR CALCULATIONS ---
//   const clipPolygon = (points, a, b, c, keepInside) => {
//     const result = [];
//     for (let i = 0; i < points.length; i++) {
//       const p1 = points[i];
//       const p2 = points[(i + 1) % points.length];
//       const d1 = a * p1[0] + b * p1[1] + c;
//       const d2 = a * p2[0] + b * p2[1] + c;
//       const in1 = keepInside ? d1 <= 0 : d1 > 0;
//       const in2 = keepInside ? d2 <= 0 : d2 > 0;

//       if (in1) result.push([p1[0], p1[1]]);
//       if (in1 !== in2) {
//         const t = d1 / (d1 - d2) || 0;
//         result.push([p1[0] + t * (p2[0] - p1[0]), p1[1] + t * (p2[1] - p1[1])]);
//       }
//     }
//     return result;
//   };

//   const reflectPoint = (p, a, b, c) => {
//     const denom = a * a + b * b || 1;
//     const d = (a * p[0] + b * p[1] + c) / denom;
//     return [p[0] - 2 * d * a, p[1] - 2 * d * b];
//   };

//   const toClipPath = (points) => {
//     if (!points || points.length === 0) return 'polygon(0 0)';
//     return 'polygon(' + points.map(p => `${p[0]}px ${p[1]}px`).join(', ') + ')';
//   };

//   const constrainPoint = (mx, my) => {
//     const state = stateRef.current;
//     const { pageWidth, height, spineX, diagonal, activeCorner } = state;
//     if (!activeCorner) return [mx, my];

//     for (let i = 0; i < 3; i++) {
//       const c1x = spineX;
//       const c1y = activeCorner[1];
//       const dx1 = mx - c1x;
//       const dy1 = my - c1y;
//       const dist1 = Math.sqrt(dx1 * dx1 + dy1 * dy1) || 1;

//       if (dist1 > pageWidth) {
//         mx = c1x + (dx1 / dist1) * pageWidth;
//         my = c1y + (dy1 / dist1) * pageWidth;
//       }

//       const c2x = spineX;
//       const c2y = activeCorner[1] === 0 ? height : 0;
//       const dx2 = mx - c2x;
//       const dy2 = my - c2y;
//       const dist2 = Math.sqrt(dx2 * dx2 + dy2 * dy2) || 1;

//       if (dist2 > diagonal) {
//         mx = c2x + (dx2 / dist2) * diagonal;
//         my = c2y + (dy2 / dist2) * diagonal;
//       }
//     }
//     return [mx, my];
//   };

//   const updateFold = (X, Y) => {
//     const state = stateRef.current;
//     const activeCorner = state.activeCorner;
//     if (!activeCorner || !state.activeSide) return;
//     if (X === activeCorner[0] && Y === activeCorner[1]) return;
//     const { width, height, pageWidth, activeSide } = state;

//     const [mx, my] = constrainPoint(X, Y);
//     const frontPage = activeSide === 'right' ? rightFrontRef.current : leftFrontRef.current;

//     const a = activeCorner[0] - mx;
//     const b = activeCorner[1] - my;
//     const midx = (activeCorner[0] + mx) / 2;
//     const midy = (activeCorner[1] + my) / 2;
//     const c = -(a * midx + b * midy);

//     let basePage;
//     let shiftX;
//     if (activeSide === 'right') {
//       basePage = [[pageWidth, 0], [pageWidth, height], [width, height], [width, 0]];
//       shiftX = pageWidth;
//     } else {
//       basePage = [[0, 0], [0, height], [pageWidth, height], [pageWidth, 0]];
//       shiftX = 0;
//     }

//     const frontPoints = clipPolygon(basePage, a, b, c, true);
//     const fpCSS = frontPoints.map(p => [p[0] - shiftX, p[1]]);
//     if (frontPage) frontPage.style.clipPath = toClipPath(fpCSS);

//     const awayPoints = clipPolygon(basePage, a, b, c, false);
//     const flapPoints = awayPoints.map(p => reflectPoint(p, a, b, c));
//     if (flapRef.current) flapRef.current.style.clipPath = toClipPath(flapPoints);

//     const p1_front = activeSide === 'right' ? [width, 0] : [pageWidth, 0];
//     const p1_flap = reflectPoint(p1_front, a, b, c);
//     const p2_front = activeSide === 'right' ? [pageWidth, 0] : [0, 0];
//     const p2_flap = reflectPoint(p2_front, a, b, c);
//     const transX = p1_flap[0];
//     const transY = p1_flap[1];
//     const angleRot = Math.atan2(p2_flap[1] - p1_flap[1], p2_flap[0] - p1_flap[0]);

//     if (flapContentRef.current) {
//       flapContentRef.current.style.transformOrigin = '0 0';
//       flapContentRef.current.style.transform = `translate(${transX}px, ${transY}px) rotate(${angleRot}rad)`;
//     }

//     const dxG = mx - activeCorner[0];
//     const dyG = my - activeCorner[1];
//     const angleG = Math.atan2(dyG, dxG);
//     if (foldGradientRef.current) {
//       foldGradientRef.current.style.transform = `translate(${midx}px, ${midy}px) rotate(${angleG}rad)`;
//       const progress = Math.min(Math.abs(mx - activeCorner[0]) / width, 1);
//       const opacity = Math.sin(progress * Math.PI);
//       foldGradientRef.current.style.opacity = opacity.toFixed(3);
//     }
//   };

//   const startDrag = (side, corner, x, y) => {
//     const state = stateRef.current;
//     state.activeSide = side;
//     state.activeCorner = corner;
//     state.isDragging = true;
//     if (flapRef.current) flapRef.current.style.display = 'block';

//     if (side === 'right') {
//       if (rightUnderRef.current) rightUnderRef.current.innerHTML = getPageHTML(state.leftIndex + 3);
//       if (flapContentRef.current) {
//         flapContentRef.current.innerHTML = getPageHTML(state.leftIndex + 2);
//         flapContentRef.current.className = 'flap-content is-left';
//         flapContentRef.current.style.left = '0';
//         flapContentRef.current.style.right = 'auto';
//       }
//     } else {
//       if (leftUnderRef.current) leftUnderRef.current.innerHTML = getPageHTML(state.leftIndex - 2);
//       if (flapContentRef.current) {
//         flapContentRef.current.innerHTML = getPageHTML(state.leftIndex - 1);
//         flapContentRef.current.className = 'flap-content is-right';
//         flapContentRef.current.style.right = '0';
//         flapContentRef.current.style.left = 'auto';
//       }
//     }
//     updateFold(x, y);
//   };

//   const handlePointerDown = (e) => {
//     const book = bookRef.current;
//     if (!book) return;
//     const rect = book.getBoundingClientRect();
//     const x = e.clientX - rect.left;
//     const y = e.clientY - rect.top;
//     const { width, height, cornerThreshold: TH } = stateRef.current;

//     stateRef.current.leftIndex = leftIndex;

//     try {
//       const pid = e.nativeEvent.pointerId;
//       if (typeof pid === 'number' && typeof book.setPointerCapture === 'function') book.setPointerCapture(pid);
//     } catch {}

//     if (x > width - TH && y < TH && leftIndex + 1 < PAGES_DATA.length - 1)
//       startDrag('right', [width, 0], x, y);
//     else if (x > width - TH && y > height - TH && leftIndex + 1 < PAGES_DATA.length - 1)
//       startDrag('right', [width, height], x, y);
//     else if (x < TH && y < TH && leftIndex > 0)
//       startDrag('left', [0, 0], x, y);
//     else if (x < TH && y > height - TH && leftIndex > 0)
//       startDrag('left', [0, height], x, y);
//   };

//   const handlePointerMove = (e) => {
//     if (!stateRef.current.isDragging) return;
//     const book = bookRef.current;
//     if (!book) return;
//     const rect = book.getBoundingClientRect();
//     const nx = e.clientX - rect.left;
//     const ny = e.clientY - rect.top;

//     if (rafRef.current) cancelAnimationFrame(rafRef.current);
//     rafRef.current = requestAnimationFrame(() => {
//       updateFold(nx, ny);
//       rafRef.current = null;
//     });
//   };

//   const handlePointerUp = (e) => {
//     const state = stateRef.current;
//     if (!state.isDragging) return;
//     state.isDragging = false;

//     if (rafRef.current) {
//       cancelAnimationFrame(rafRef.current);
//       rafRef.current = null;
//     }

//     const book = bookRef.current;
//     if (!book || !state.activeCorner || !state.activeSide) return;
//     const rect = book.getBoundingClientRect();
//     const x = e.clientX - rect.left;
//     const y = e.clientY - rect.top;
//     const { width, activeSide, activeCorner } = state;

//     const isComplete = (activeSide === 'right' && x < width / 2 + 100) || (activeSide === 'left' && x > width / 2 - 100);

//     const targetX = isComplete ? (activeSide === 'right' ? 0 : width) : activeCorner[0];
//     const targetY = activeCorner[1];

//     const startX = x;
//     const startY = y;
//     const startTime = performance.now();

//     function animate(time) {
//       const progress = Math.min((time - startTime) / 360, 1);
//       const ease = 1 - Math.pow(1 - progress, 3);

//       updateFold(startX + (targetX - startX) * ease, startY + (targetY - startY) * ease);

//       if (progress < 1) {
//         requestAnimationFrame(animate);
//       } else {
//         if (flapRef.current) flapRef.current.style.display = 'none';
//         const frontPage = activeSide === 'right' ? rightFrontRef.current : leftFrontRef.current;
//         if (frontPage) frontPage.style.clipPath = 'none';

//         if (isComplete) {
//           setLeftIndex(prev => prev + (activeSide === 'right' ? 2 : -2));
//         }
//         state.activeSide = null;
//       }
//     }
//     requestAnimationFrame(animate);
//   };

//   // --- RENDERING HOOK STRATEGY ---
//   function getPageHTML(index) {
//     const page = PAGES_DATA[index];
//     if (!page) return "";

//     let contents = "";
//     if (page.type === "cover") {
//       contents = `
//         <div style="display:flex; flex-direction:column; justify-content:center; height:100%; text-align:center; padding: 20px;">
//           <div style="margin-bottom:auto;"></div>
//           <span style="display:inline-block; font-size:48px; margin-bottom:24px;">📖</span>
//           <h1 style="font-size:28px; line-height:1.3; font-weight:700; margin-bottom:16px; color:#18181b; letter-spacing:-0.02em;">${page.title}</h1>
//           <p style="font-size:13px; line-height:1.6; color:#52525b; max-width:320px; margin:0 auto;">${page.subtitle}</p>
//           <div style="margin-top:48px; display:flex; gap:12px; justify-content:center;">
//             <span style="background:#0066cc10; backdrop-filter:blur(4px); padding:6px 12px; border-radius:40px; font-size:10px; font-weight:600; color:#0066cc;">Grab Corner</span>
//             <span style="background:#0066cc10; backdrop-filter:blur(4px); padding:6px 12px; border-radius:40px; font-size:10px; font-weight:600; color:#0066cc;">Swipe to Flip</span>
//           </div>
//           <div style="margin-top:auto; padding-top:40px;">
//             <div style="position:absolute; bottom:32px; left:0; right:0; font-size:10px; font-weight:500; letter-spacing:0.5px; color:#a1a1aa;">${page.footer}</div>
//           </div>
//         </div>
//       `;
//     } else if (page.type === "pricing") {
//       const isHighlight = page.price === "₹6,999" || page.price === "₹12,499";
//       contents = `
//         <div style="display:flex; flex-direction:column; height:100%;">
//           <div>
//             <div style="margin-bottom:16px;">
//               <span style="font-size:10px; font-weight:600; text-transform:uppercase; letter-spacing:1.5px; color:#0066cc; background:#0066cc10; padding:4px 10px; border-radius:20px; display:inline-block;">${page.title}</span>
//             </div>
//             <h2 style="font-size:20px; font-weight:700; margin:0 0 6px 0; color:#18181b; letter-spacing:-0.02em;">${page.tier}</h2>
//             <p style="font-size:11px; color:#71717a; margin:0 0 20px 0; line-height:1.5;">${page.subtitle}</p>
            
//             <div style="background:${isHighlight ? 'linear-gradient(135deg, #0066cc08 0%, #0066cc02 100%)' : '#fafafa'}; border:1px solid ${isHighlight ? '#0066cc20' : '#e4e4e7'}; padding:16px; border-radius:16px; margin-bottom:20px;">
//               <div style="font-size:36px; font-weight:800; color:#18181b; letter-spacing:-0.03em;">${page.price}</div>
//               <div style="font-size:10px; color:#71717a; margin-top:4px;">one-time investment</div>
//             </div>
//           </div>

//           <div style="flex:1;">
//             <div style="display:flex; align-items:center; gap:8px; margin-bottom:12px;">
//               <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="#0066cc" stroke-width="2"><path d="M20 6L9 17L4 12"/></svg>
//               <span style="font-size:10px; font-weight:600; text-transform:uppercase; color:#71717a; letter-spacing:1px;">What's Included</span>
//             </div>
//             <ul style="text-align:left; padding-left:0; margin:0; list-style:none; display:flex; flex-direction:column; gap:10px;">
//               ${page.features.map(f => `<li style="display:flex; gap:10px; align-items:flex-start; font-size:11px; color:#3f3f46; line-height:1.4;"><span style="color:#0066cc; font-size:14px;">✦</span> ${f}</li>`).join('')}
//             </ul>
//           </div>
          
//           <button style="margin-top:24px; width:100%; background:#18181b; color:white; border:none; padding:12px; font-size:12px; font-weight:600; border-radius:40px; cursor:pointer; transition:all 0.2s;" onmouseover="this.style.background='#0066cc'" onmouseout="this.style.background='#18181b'">
//             Select Plan →
//           </button>
//         </div>
//       `;
//     } else if (page.type === "cta") {
//       contents = `
//         <div style="display:flex; flex-direction:column; justify-content:center; height:100%; text-align:center; padding:20px;">
//           <div style="margin-bottom:auto;"></div>
//           <span style="font-size:48px; margin-bottom:16px;">🚀</span>
//           <h2 style="font-size:24px; font-weight:700; letter-spacing:-0.02em; color:#18181b; margin:0 0 12px 0;">${page.title}</h2>
//           <p style="font-size:12px; color:#52525b; line-height:1.6; margin:0 0 28px 0; max-width:280px; margin-left:auto; margin-right:auto;">${page.content}</p>
//           <button style="background:#0066cc; color:#fff; border:none; padding:14px 28px; font-size:13px; font-weight:600; border-radius:40px; cursor:pointer; transition:all 0.2s; box-shadow:0 4px 14px rgba(0,102,204,0.25);" onmouseover="this.style.transform='scale(1.02)'" onmouseout="this.style.transform='scale(1)'">
//             ${page.button}
//           </button>
//           <div style="margin-top:auto; padding-top:32px;"></div>
//         </div>
//       `;
//     }

//     const isLeft = index % 2 === 0;
//     const pageNumPosition = isLeft ? 'left:20px;' : 'right:20px;';

//     return `
//       <div style="height:100%; display:flex; flex-direction:column; position:relative;">
//         ${contents}
//         <div style="position: absolute; bottom: 20px; color: #d4d4d8; font-size: 10px; font-weight:500; ${pageNumPosition}">${String(index + 1).padStart(2, '0')}</div>
//       </div>
//     `;
//   }

//   // Layout Styles Definition
//   const containerStyle = {
//     overflow: 'clip',
//     width: '100vw',
//     height: '100vh',
//     display: 'flex',
//     justifyContent: 'center',
//     alignItems: 'center',
//     background: 'linear-gradient(135deg, #f5f7fa 0%, #eef2f6 100%)',
//     fontFamily: 'system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif'
//   };

//   const bookContainerStyle = {
//     width: 'min(1000px, 85vw)',
//     height: 'min(660px, 80vh)',
//     position: 'relative',
//     background: '#e8eaed',
//     borderRadius: '20px',
//     boxShadow: '0 40px 70px -15px rgba(0,0,0,0.25), 0 0 0 1px rgba(255,255,255,0.1) inset',
//     cursor: 'grab',
//     touchAction: 'none',
//     userSelect: 'none',
//     transition: 'box-shadow 0.3s ease',
//   };

//   const commonPageStyle = {
//     width: '50%',
//     height: '100%',
//     position: 'absolute',
//     top: 0,
//     padding: '32px 36px',
//     boxSizing: 'border-box',
//     backgroundColor: '#ffffff',
//     transition: 'box-shadow 0.2s ease',
//   };

//   return (
//     <div style={containerStyle}>
//       <div 
//         ref={bookRef} 
//         style={bookContainerStyle}
//         onPointerDown={handlePointerDown}
//         onPointerMove={handlePointerMove}
//         onPointerUp={handlePointerUp}
//         onMouseEnter={() => setIsHovering(true)}
//         onMouseLeave={() => setIsHovering(false)}
//       >
//         {/* Under layers for preloading */}
//         <div ref={leftUnderRef} style={{ ...commonPageStyle, left: 0, borderTopLeftRadius: '20px', borderBottomLeftRadius: '20px', backgroundImage: 'linear-gradient(to left, rgba(0,0,0,0.04) 0%, rgba(0,0,0,0) 8%)' }} />
//         <div ref={rightUnderRef} style={{ ...commonPageStyle, left: '50%', borderTopRightRadius: '20px', borderBottomRightRadius: '20px', backgroundImage: 'linear-gradient(to right, rgba(0,0,0,0.04) 0%, rgba(0,0,0,0) 8%)', borderLeft: '1px solid #f0f0f0' }} />

//         {/* Core visible pages */}
//         <div ref={leftFrontRef} style={{ ...commonPageStyle, left: 0, zIndex: 2, borderTopLeftRadius: '20px', borderBottomLeftRadius: '20px', backgroundImage: 'linear-gradient(to left, rgba(0,0,0,0.04) 0%, rgba(0,0,0,0) 8%)' }} />
//         <div ref={rightFrontRef} style={{ ...commonPageStyle, left: '50%', zIndex: 2, borderTopRightRadius: '20px', borderBottomRightRadius: '20px', backgroundImage: 'linear-gradient(to right, rgba(0,0,0,0.04) 0%, rgba(0,0,0,0) 8%)', borderLeft: '1px solid #f0f0f0' }} />

//         {/* Flip animation layers */}
//         <div 
//           ref={flapRef} 
//           style={{
//             width: '100%', 
//             height: '100%', 
//             position: 'absolute', 
//             top: 0, 
//             left: 0, 
//             zIndex: 5,
//             filter: 'drop-shadow(-4px 8px 20px rgba(0,0,0,0.2))', 
//             pointerEvents: 'none', 
//             display: 'none'
//           }}
//         >
//           <div ref={flapContentRef} style={{ width: '50%', height: '100%', position: 'absolute', top: 0, left: 0, padding: '32px 36px', boxSizing: 'border-box', backgroundColor: '#ffffff' }} />
//           <div ref={foldGradientRef} style={{ position: 'absolute', width: '300%', height: '300%', left: '-150%', top: '-150%', background: 'linear-gradient(to right, transparent 49%, rgba(0,0,0,0.08) 50%, rgba(255,255,255,0.2) 50.5%, rgba(0,0,0,0.02) 52%, transparent 58%)', pointerEvents: 'none' }} />
//         </div>
        
//         {/* Corner hint indicators */}
//         {!stateRef.current.isDragging && !isHovering && (
//           <div style={{ position: 'absolute', bottom: '16px', right: '16px', zIndex: 10, pointerEvents: 'none' }}>
//             <div style={{ background: 'rgba(0,0,0,0.5)', backdropFilter: 'blur(8px)', padding: '6px 12px', borderRadius: '40px', fontSize: '10px', color: 'white', fontWeight: 500 }}>
//               ✦ Drag corners to flip
//             </div>
//           </div>
//         )}
//       </div>
//     </div>
//   );
// }