"use client"
import React, { useEffect, useRef, useState, useCallback } from 'react';

// --- SERVICE DATA ---
type Feature = { name: string; desc: string };
type Page =
  | { type: 'cover'; title: string; subtitle: string; footer: string }
  | { type: 'features'; title: string; subtitle: string; items: Feature[] }
  | { type: 'pricing'; title: string; subtitle: string; tier: string; price: string; features: string[] }
  | { type: 'cta'; title: string; subtitle?: string; content: string; button: string };

const PAGES_DATA: Page[] = [
  {
    type: "cover",
    title: "Our Digital Catalog",
    subtitle: "Turn the page to explore premium web solutions & pricing.",
    footer: "Interactive Showcase • 2026"
  },
  {
    type: "features",
    title: "Premium Website Features",
    subtitle: "Built for modern business demands.",
    items: [
      { name: "⚡ Ultra-Fast Performance", desc: "Sub-second load times utilizing modern headless frameworks." },
      { name: "📱 Fully Responsive Design", desc: "Seamless layouts engineered for mobile, tablet, and desktop screens." },
      { name: "🔒 Enterprise-Grade Security", desc: "Advanced SSL configurations, DDOS prevention, and secure database architecture." }
    ]
  },
  {
    type: "features",
    title: "Advanced Integrations",
    subtitle: "Connect your ecosystem effortlessly.",
    items: [
      { name: "🛍️ Custom E-Commerce", desc: "Scalable checkouts, automated dynamic tax systems, and global gateways." },
      { name: "📊 Full Analytics Dashboards", desc: "Deep user insights tracking conversion metrics out of the box." },
      { name: "🤖 AI-Driven Automation", desc: "Integrated conversational bots and automated user workflows." }
    ]
  },
  {
    type: "pricing",
    title: "Core Core Packages",
    subtitle: "Transparent tiers built to scale your operation.",
    tier: "Startup Essentials",
    price: "$1,499",
    features: [
      "5 Custom Designed Pages",
      "Standard React/Next.js Architecture",
      "Basic SEO Integration",
      "1 Year Complimentary Hosting"
    ]
  },
  {
    type: "pricing",
    title: "Enterprise Solutions",
    subtitle: "For heavy-duty market demands.",
    tier: "Scale & Grow",
    price: "$3,899",
    features: [
      "Unlimited Dynamically Built Pages",
      "Full Headless CMS Integration",
      "Advanced Conversion Optimization",
      "24/7 Dedicated Priority Maintenance"
    ]
  },
  {
    type: "cta",
    title: "Ready to Start?",
    subtitle: "Let's build something exceptional together.",
    content: "Our team transforms digital visions into highly converting market products. Reach out for a tailored consultation estimate today.",
    button: "Contact Engineering Team"
  }
];

export default function BookShowcase() {
  const bookRef = useRef<HTMLDivElement | null>(null);
  const leftFrontRef = useRef<HTMLDivElement | null>(null);
  const rightFrontRef = useRef<HTMLDivElement | null>(null);
  const leftUnderRef = useRef<HTMLDivElement | null>(null);
  const rightUnderRef = useRef<HTMLDivElement | null>(null);
  const flapRef = useRef<HTMLDivElement | null>(null);
  const flapContentRef = useRef<HTMLDivElement | null>(null);
  const foldGradientRef = useRef<HTMLDivElement | null>(null);
  const rafRef = useRef<number | null>(null);

  const [leftIndex, setLeftIndex] = useState<number>(0);

  // Core geometric state tracked across renders
  type ActiveSide = 'left' | 'right' | null;
  const stateRef = useRef<{
    width: number;
    height: number;
    pageWidth: number;
    spineX: number;
    diagonal: number;
    leftIndex: number;
    activeSide: ActiveSide;
    activeCorner: [number, number] | null;
    isDragging: boolean;
    cornerThreshold: number;
  }>({
    width: 0,
    height: 0,
    pageWidth: 0,
    spineX: 0,
    diagonal: 0,
    leftIndex: 0,
    activeSide: null,
    activeCorner: null,
    isDragging: false,
    cornerThreshold: 100,
  });

  // render pages into front layer elements
  const renderPagesContent = useCallback((): void => {
    const idx = stateRef.current.leftIndex;
    if (leftFrontRef.current) leftFrontRef.current.innerHTML = getPageHTML(idx);
    if (rightFrontRef.current) rightFrontRef.current.innerHTML = getPageHTML(idx + 1);

    if (leftFrontRef.current) leftFrontRef.current.style.display = idx < 0 ? 'none' : 'block';
    if (rightFrontRef.current) rightFrontRef.current.style.display = idx + 1 >= PAGES_DATA.length ? 'none' : 'block';
  }, []);

  // Sync index to geometric ref state
  useEffect(() => {
    stateRef.current.leftIndex = leftIndex;
    renderPagesContent();
  }, [leftIndex, renderPagesContent]);

  useEffect(() => {
    const book = bookRef.current;
    if (!book) return;

    const handleResize = () => {
      const rect = book.getBoundingClientRect();
      const state = stateRef.current;
      state.width = rect.width;
      state.height = rect.height;
      state.pageWidth = rect.width / 2;
      state.spineX = state.pageWidth;
      state.diagonal = Math.sqrt(state.pageWidth ** 2 + state.height ** 2);

      if (!state.isDragging) renderPagesContent();
    };

    const resizeObserver = new ResizeObserver(handleResize);
    resizeObserver.observe(book);
    handleResize();

    return () => {
      resizeObserver.disconnect();
      if (rafRef.current) cancelAnimationFrame(rafRef.current);
    };
  }, [renderPagesContent]);

  // --- RENDERING STRATEGY ---
  // Returns raw string HTML matching your structural geometry constraints
  function getPageHTML(index: number): string {
    const page = PAGES_DATA[index];
    if (!page) return "";

    let contents = "";
    if (page.type === "cover") {
      contents = `
        <div style="display:flex; flex-direction:column; justify-content:center; height:100%; text-align:center; padding: 20px;">
          <h1 style="font-size:32px; margin-bottom:10px; color:#111;">${page.title}</h1>
          <p style="font-size:16px; color:#555;">${page.subtitle}</p>
          <div style="margin-top:40px; color:#0066cc; font-weight:bold; font-size:14px; text-transform:uppercase; letter-spacing:1px;">Swipe or Grab Corner to Open ➔</div>
          <div style="position:absolute; bottom:40px; left:0; right:0; font-size:12px; color:#999;">${page.footer}</div>
        </div>
      `;
    } else if (page.type === "features") {
      contents = `
        <h2 style="font-size:22px; border-bottom:2px solid #eee; padding-bottom:10px; margin-bottom:15px; color:#222;">${page.title}</h2>
        <p style="font-size:14px; margin-bottom:20px; color:#666; font-style:italic;">${page.subtitle}</p>
        <div style="display:flex; flex-direction:column; gap:15px;">
          ${page.items.map(item => `
            <div>
              <strong style="display:block; font-size:15px; color:#111; margin-bottom:2px;">${item.name}</strong>
              <span style="font-size:13px; color:#555; line-height:1.4;">${item.desc}</span>
            </div>
          `).join('')}
        </div>
      `;
    } else if (page.type === "pricing") {
      contents = `
        <h2 style="font-size:22px; margin-bottom:5px; color:#222;">${page.title}</h2>
        <p style="font-size:13px; color:#777; margin-bottom:20px;">${page.subtitle}</p>
        <div style="background:#f8f9fa; border:1px solid #e9ecef; padding:20px; border-radius:8px; text-align:center;">
          <h3 style="margin:0; font-size:16px; color:#555; text-transform:uppercase; letter-spacing:0.5px;">${page.tier}</h3>
          <div style="font-size:36px; font-weight:800; color:#0066cc; margin:10px 0;">${page.price}</div>
          <ul style="text-align:left; padding-left:20px; margin:15px 0 0 0; font-size:13px; color:#444; display:flex; flex-direction:column; gap:8px;">
            ${page.features.map(f => `<li>${f}</li>`).join('')}
          </ul>
        </div>
      `;
    } else if (page.type === "cta") {
      contents = `
        <div style="display:flex; flex-direction:column; justify-content:center; height:100%; text-align:center; padding:20px;">
          <h2 style="font-size:26px; color:#111; margin-bottom:10px;">${page.title}</h2>
          <p style="font-size:14px; color:#555; line-height:1.6; margin-bottom:25px;">${page.content}</p>
          <button style="background:#0066cc; color:#fff; border:none; padding:12px 24px; font-size:14px; font-weight:bold; border-radius:6px; cursor:pointer; transition: background 0.2s;">
            ${page.button}
          </button>
        </div>
      `;
    }

    const isLeft = index % 2 === 0;
    const pageNumPosition = isLeft ? 'left:20px;' : 'right:20px;';

    return `
      ${contents}
      <div style="position: absolute; bottom: 20px; color: #aaa; font-size: 13px; font-weight:bold; ${pageNumPosition}">${index + 1}</div>
    `;
  };
  // --- VECTOR CALCULATIONS ---
  const clipPolygon = (points: number[][], a: number, b: number, c: number, keepInside: boolean): number[][] => {
    const result: number[][] = [];
    for (let i = 0; i < points.length; i++) {
      const p1 = points[i];
      const p2 = points[(i + 1) % points.length];
      const d1 = a * p1[0] + b * p1[1] + c;
      const d2 = a * p2[0] + b * p2[1] + c;
      const in1 = keepInside ? d1 <= 0 : d1 > 0;
      const in2 = keepInside ? d2 <= 0 : d2 > 0;

      if (in1) result.push([p1[0], p1[1]]);
      if (in1 !== in2) {
        const t = d1 / (d1 - d2) || 0;
        result.push([p1[0] + t * (p2[0] - p1[0]), p1[1] + t * (p2[1] - p1[1])]);
      }
    }
    return result;
  };

  const reflectPoint = (p: number[], a: number, b: number, c: number): number[] => {
    const denom = a * a + b * b || 1;
    const d = (a * p[0] + b * p[1] + c) / denom;
    return [p[0] - 2 * d * a, p[1] - 2 * d * b];
  };

  const toClipPath = (points: number[][]): string => {
    if (!points || points.length === 0) return 'polygon(0 0)';
    return 'polygon(' + points.map(p => `${p[0]}px ${p[1]}px`).join(', ') + ')';
  };

  const constrainPoint = (mx: number, my: number): [number, number] => {
    const state = stateRef.current;
    const { pageWidth, height, spineX, diagonal, activeCorner } = state;
    if (!activeCorner) return [mx, my];

    for (let i = 0; i < 3; i++) {
      const c1x = spineX;
      const c1y = activeCorner[1];
      const dx1 = mx - c1x;
      const dy1 = my - c1y;
      const dist1 = Math.sqrt(dx1 * dx1 + dy1 * dy1) || 1;

      if (dist1 > pageWidth) {
        mx = c1x + (dx1 / dist1) * pageWidth;
        my = c1y + (dy1 / dist1) * pageWidth;
      }

      const c2x = spineX;
      const c2y = activeCorner[1] === 0 ? height : 0;
      const dx2 = mx - c2x;
      const dy2 = my - c2y;
      const dist2 = Math.sqrt(dx2 * dx2 + dy2 * dy2) || 1;

      if (dist2 > diagonal) {
        mx = c2x + (dx2 / dist2) * diagonal;
        my = c2y + (dy2 / dist2) * diagonal;
      }
    }
    return [mx, my];
  };

  const updateFold = (X: number, Y: number) => {
    const state = stateRef.current;
    const activeCorner = state.activeCorner;
    if (!activeCorner || !state.activeSide) return;
    if (X === activeCorner[0] && Y === activeCorner[1]) return;
    const { width, height, pageWidth, activeSide } = state;

    const [mx, my] = constrainPoint(X, Y);

    const frontPage = activeSide === 'right' ? rightFrontRef.current : leftFrontRef.current;

    const a = activeCorner[0] - mx;
    const b = activeCorner[1] - my;
    const midx = (activeCorner[0] + mx) / 2;
    const midy = (activeCorner[1] + my) / 2;
    const c = -(a * midx + b * midy);

    let basePage: number[][];
    let p1_front: number[];
    let p2_front: number[];
    let shiftX: number;
    if (activeSide === 'right') {
      basePage = [[pageWidth, 0], [pageWidth, height], [width, height], [width, 0]];
      p1_front = [width, 0];
      p2_front = [pageWidth, 0];
      shiftX = pageWidth;
    } else {
      basePage = [[0, 0], [0, height], [pageWidth, height], [pageWidth, 0]];
      p1_front = [pageWidth, 0];
      p2_front = [0, 0];
      shiftX = 0;
    }

    const frontPoints = clipPolygon(basePage, a, b, c, true);
    const fpCSS = frontPoints.map(p => [p[0] - shiftX, p[1]]);
    if (frontPage) frontPage.style.clipPath = toClipPath(fpCSS);

    const awayPoints = clipPolygon(basePage, a, b, c, false);
    const flapPoints = awayPoints.map(p => reflectPoint(p, a, b, c));
    if (flapRef.current) flapRef.current.style.clipPath = toClipPath(flapPoints);

    const p1_flap = reflectPoint(p1_front, a, b, c);
    const p2_flap = reflectPoint(p2_front, a, b, c);
    const transX = p1_flap[0];
    const transY = p1_flap[1];
    const angleRot = Math.atan2(p2_flap[1] - p1_flap[1], p2_flap[0] - p1_flap[0]);

    if (flapContentRef.current) {
      flapContentRef.current.style.transformOrigin = '0 0';
      flapContentRef.current.style.transform = `translate(${transX}px, ${transY}px) rotate(${angleRot}rad)`;
    }

    const dxG = mx - activeCorner[0];
    const dyG = my - activeCorner[1];
    const angleG = Math.atan2(dyG, dxG);
    if (foldGradientRef.current) {
      foldGradientRef.current.style.transform = `translate(${midx}px, ${midy}px) rotate(${angleG}rad)`;
      const progress = Math.min(Math.abs(mx - activeCorner[0]) / width, 1);
      const opacity = Math.sin(progress * Math.PI);
      foldGradientRef.current.style.opacity = opacity.toFixed(3);
    }
  };

  const startDrag = (side: 'left' | 'right', corner: [number, number], x: number, y: number) => {
    const state = stateRef.current;
    state.activeSide = side;
    state.activeCorner = corner;
    state.isDragging = true;
    if (flapRef.current) flapRef.current.style.display = 'block';

    if (side === 'right') {
      if (rightUnderRef.current) rightUnderRef.current.innerHTML = getPageHTML(state.leftIndex + 3);
      if (flapContentRef.current) {
        flapContentRef.current.innerHTML = getPageHTML(state.leftIndex + 2);
        flapContentRef.current.className = 'flap-content is-left';
        flapContentRef.current.style.left = '0';
        flapContentRef.current.style.right = 'auto';
      }
    } else {
      if (leftUnderRef.current) leftUnderRef.current.innerHTML = getPageHTML(state.leftIndex - 2);
      if (flapContentRef.current) {
        flapContentRef.current.innerHTML = getPageHTML(state.leftIndex - 1);
        flapContentRef.current.className = 'flap-content is-right';
        flapContentRef.current.style.right = '0';
        flapContentRef.current.style.left = 'auto';
      }
    }
    updateFold(x, y);
  };

  // --- SYNTHETIC POINTER INTERRUPTS ---
  const handlePointerDown = (e: React.PointerEvent<HTMLDivElement>) => {
    const book = bookRef.current;
    if (!book) return;
    const rect = book.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    const { width, height, cornerThreshold: TH } = stateRef.current;

    // sync leftIndex into stateRef
    stateRef.current.leftIndex = leftIndex;

    try {
      const pid = (e.nativeEvent as PointerEvent).pointerId;
      if (typeof pid === 'number' && typeof book.setPointerCapture === 'function') book.setPointerCapture(pid);
    } catch {}

    if (x > width - TH && y < TH && leftIndex + 1 < PAGES_DATA.length - 1)
      startDrag('right', [width, 0], x, y);
    else if (x > width - TH && y > height - TH && leftIndex + 1 < PAGES_DATA.length - 1)
      startDrag('right', [width, height], x, y);
    else if (x < TH && y < TH && leftIndex > 0)
      startDrag('left', [0, 0], x, y);
    else if (x < TH && y > height - TH && leftIndex > 0)
      startDrag('left', [0, height], x, y);
  };

  const handlePointerMove = (e: React.PointerEvent<HTMLDivElement>) => {
    if (!stateRef.current.isDragging) return;
    const book = bookRef.current;
    if (!book) return;
    const rect = book.getBoundingClientRect();
    const nx = e.clientX - rect.left;
    const ny = e.clientY - rect.top;

    if (rafRef.current) cancelAnimationFrame(rafRef.current);
    rafRef.current = requestAnimationFrame(() => {
      updateFold(nx, ny);
      rafRef.current = null;
    });
  };

  const handlePointerUp = (e: React.PointerEvent<HTMLDivElement>) => {
    const state = stateRef.current;
    if (!state.isDragging) return;
    state.isDragging = false;

    if (rafRef.current) {
      cancelAnimationFrame(rafRef.current);
      rafRef.current = null;
    }

    const book = bookRef.current;
    if (!book || !state.activeCorner || !state.activeSide) return;
    const rect = book.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    const { width, activeSide, activeCorner } = state;

    const isComplete = (activeSide === 'right' && x < width / 2 + 100) || (activeSide === 'left' && x > width / 2 - 100);

    const targetX = isComplete ? (activeSide === 'right' ? 0 : width) : activeCorner[0];
    const targetY = activeCorner[1];

    const startX = x;
    const startY = y;
    const startTime = performance.now();

    function animate(time: number) {
      const progress = Math.min((time - startTime) / 360, 1);
      const ease = 1 - Math.pow(1 - progress, 3);

      updateFold(startX + (targetX - startX) * ease, startY + (targetY - startY) * ease);

      if (progress < 1) {
        requestAnimationFrame(animate);
      } else {
        if (flapRef.current) flapRef.current.style.display = 'none';
        const frontPage = activeSide === 'right' ? rightFrontRef.current : leftFrontRef.current;
        if (frontPage) frontPage.style.clipPath = 'none';

        if (isComplete) {
          setLeftIndex(prev => prev + (activeSide === 'right' ? 2 : -2));
        }
        state.activeSide = null;
      }
    }
    requestAnimationFrame(animate);
  };

  // inline functional styles matching component design variables
  const containerStyle: React.CSSProperties = {
    overflow: 'clip',
    width: '100vw',
    height: '100vh',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    fontFamily: 'system-ui, -apple-system, sans-serif'
  };

  const bookContainerStyle: React.CSSProperties = {
    width: 'min(1000px, 60vw)',
    height: '85vh',
    position: 'relative',
    background: '#e4e4e4',
    boxShadow: '0 15px 40px rgba(0,0,0,0.4)',
    cursor: 'grab',
    touchAction: 'none',
    userSelect: 'none'
  };

  const commonPageStyle: React.CSSProperties = {
    width: '50%',
    height: '100%',
    position: 'absolute',
    top: 0,
    padding: '45px',
    boxSizing: 'border-box',
    backgroundColor: '#ffffff',
  };

  return (
    <div style={containerStyle}>
      <div 
        ref={bookRef} 
        style={bookContainerStyle}
        onPointerDown={handlePointerDown}
        onPointerMove={handlePointerMove}
        onPointerUp={handlePointerUp}
      >
        {/* Under layers used for calculations during flip */}
        <div 
          ref={leftUnderRef} 
          style={{
            ...commonPageStyle, 
            left: 0, 
            backgroundImage: 'linear-gradient(to left, rgba(0,0,0,0.15) 0%, rgba(0,0,0,0) 8%)'
          }} 
        />
        <div 
          ref={rightUnderRef} 
          style={{
            ...commonPageStyle, 
            left: '50%', 
            backgroundImage: 'linear-gradient(to right, rgba(0,0,0,0.15) 0%, rgba(0,0,0,0) 8%)',
            borderLeft: '1px solid #e0e0e0'
          }} 
        />

        {/* Visible front layers */}
        <div 
          ref={leftFrontRef} 
          style={{
            ...commonPageStyle, 
            left: 0, 
            zIndex: 2,
            backgroundImage: 'linear-gradient(to left, rgba(0,0,0,0.15) 0%, rgba(0,0,0,0) 8%)'
          }} 
        />
        <div 
          ref={rightFrontRef} 
          style={{
            ...commonPageStyle, 
            left: '50%', 
            zIndex: 2,
            backgroundImage: 'linear-gradient(to right, rgba(0,0,0,0.15) 0%, rgba(0,0,0,0) 8%)',
            borderLeft: '1px solid #e0e0e0'
          }} 
        />

        {/* Dynamic flipping flap container */}
        <div 
          ref={flapRef} 
          style={{
            width: '100%', 
            height: '100%', 
            position: 'absolute', 
            top: 0, 
            left: 0, 
            zIndex: 5,
            filter: 'drop-shadow(0px 4px 12px rgba(0,0,0,0.35))',
            pointerEvents: 'none',
            display: 'none'
          }}
        >
          <div 
            ref={flapContentRef} 
            style={{
              width: '50%', 
              height: '100%', 
              position: 'absolute', 
              top: 0, 
              left: 0, 
              padding: '45px', 
              boxSizing: 'border-box', 
              backgroundColor: '#fafafa'
            }}
          />
          <div 
            ref={foldGradientRef} 
            style={{
              position: 'absolute',
              width: '300%',
              height: '300%',
              left: '-150%',
              top: '-150%',
              background: 'linear-gradient(to right, transparent 49.3%, rgba(0,0,0,0.25) 50%, rgba(255,255,255,0.6) 51%, rgba(0,0,0,0.04) 55%, transparent 60%)',
              pointerEvents: 'none'
            }}
          />
        </div>
      </div>
    </div>
  );
}