import React, { useState, useMemo } from "react";
import {
  Search, MapPin, Calendar, ArrowLeftRight, Bus, Star, BatteryCharging,
  Lightbulb, Wind, ShieldCheck, Video, Droplet, Clock, ChevronRight,
  ChevronLeft, Check, X, User, Users, Phone, Mail, CreditCard, Wallet,
  Landmark, QrCode, Download, Share2, CalendarPlus, Navigation, Home,
  Ticket as TicketIcon, MapPinned, UserCircle2, SlidersHorizontal, ArrowUpDown,
  Tag, Gift, LifeBuoy, FileText, Plus, Pencil, Trash2, TrendingUp,
  IndianRupee, BarChart3, Percent, Package, Sparkles, ChevronDown, Bell,
  CreditCard as CardIcon, LogOut, Radio,
} from "lucide-react";
import {
  ResponsiveContainer, LineChart, Line, BarChart, Bar, XAxis, YAxis,
  CartesianGrid, Tooltip, PieChart, Pie, Cell,
} from "recharts";

/* ----------------------------------------------------------------------
   MMG · Mallikarjuna Travels — Design tokens
------------------------------------------------------------------------- */

const GlobalStyle = () => (
  <style>{`
    @import url('https://fonts.googleapis.com/css2?family=Sora:wght@500;600;700;800&family=Inter:wght@400;500;600;700&display=swap');

    :root{
      --bg: #F7F8F5;
      --paper: #FFFFFF;
      --sky: #3E9EDB;
      --sky-deep: #0B6FB4;
      --sky-deepest: #075A94;
      --charcoal: #23262B;
      --charcoal-soft: #6A7078;
      --line: #E4E8EB;
      --marigold: #E8A63A;
      --marigold-soft: #FBEED9;
      --success: #2E9E67;
      --success-soft: #E4F5EC;
      --danger: #D65C50;
      --danger-soft: #FBEAE8;
      --female: #D8628F;
      --female-soft: #FBEAF1;
      --radius-lg: 20px;
      --radius-md: 14px;
      --radius-sm: 10px;
      --shadow-card: 0 2px 14px rgba(20,40,60,0.07);
      --shadow-pop: 0 12px 32px rgba(11,111,180,0.18);
      font-family: 'Inter', -apple-system, sans-serif;
    }
    *{ box-sizing:border-box; }
    body,html{ margin:0; padding:0; }
    .mmg-root{
      background: var(--bg);
      min-height:100vh;
      display:flex;
      justify-content:center;
      color: var(--charcoal);
      -webkit-font-smoothing:antialiased;
    }
    .mmg-phone{
      width:100%;
      max-width:430px;
      min-height:100vh;
      background: var(--paper);
      position:relative;
      display:flex;
      flex-direction:column;
      box-shadow: 0 0 0 1px var(--line);
    }
    @media (min-width:760px){
      .mmg-root{ padding:28px 12px; }
      .mmg-phone{ min-height:900px; border-radius:34px; box-shadow: 0 30px 70px rgba(15,35,55,0.16), 0 0 0 10px #10141a; overflow:hidden; }
    }
    .mmg-scroll{ flex:1; overflow-y:auto; padding-bottom:86px; }
    .mmg-scroll::-webkit-scrollbar{ display:none; }

    h1,h2,h3,h4{ font-family:'Sora',sans-serif; margin:0; color:var(--charcoal); }
    p{ margin:0; }
    button{ font-family:inherit; cursor:pointer; }

    .topbar{ display:flex; align-items:center; gap:12px; padding:18px 20px 8px; }
    .icon-btn{ width:38px; height:38px; border-radius:50%; border:1px solid var(--line); background:var(--paper); display:flex; align-items:center; justify-content:center; color:var(--charcoal); }
    .icon-btn:active{ background:var(--bg); }

    .brand-row{ display:flex; align-items:center; gap:10px; }
    .brand-mark{ width:42px; height:42px; border-radius:12px; background:linear-gradient(155deg,var(--sky),var(--sky-deep)); display:flex; align-items:center; justify-content:center; flex-shrink:0; }
    .brand-name{ font-family:'Sora',sans-serif; font-weight:700; font-size:17px; letter-spacing:0.2px; color:var(--charcoal); line-height:1.1; }
    .brand-sub{ font-size:11px; color:var(--charcoal-soft); font-weight:500; margin-top:1px; }

    .section{ padding:18px 20px; }
    .section-title{ font-size:15px; font-weight:700; margin-bottom:12px; display:flex; align-items:center; justify-content:space-between; }
    .section-title span.link{ font-size:12.5px; font-weight:600; color:var(--sky-deep); }

    .card{ background:var(--paper); border:1px solid var(--line); border-radius:var(--radius-lg); box-shadow:var(--shadow-card); }
    .search-card{ margin:6px 20px 0; padding:18px; }
    .field-row{ display:flex; align-items:center; border-bottom:1px solid var(--line); padding:12px 2px; gap:12px; }
    .field-row:last-of-type{ border-bottom:none; }
    .field-label{ font-size:10.5px; text-transform:uppercase; letter-spacing:0.6px; color:var(--charcoal-soft); font-weight:600; }
    .field-value{ font-size:16px; font-weight:700; margin-top:2px; }
    .field-sub{ font-size:12px; color:var(--charcoal-soft); margin-top:1px; }
    .swap-btn{ width:34px; height:34px; border-radius:50%; background:var(--marigold-soft); border:none; display:flex; align-items:center; justify-content:center; color:var(--marigold); flex-shrink:0; }

    .btn-primary{ background:linear-gradient(180deg,var(--sky),var(--sky-deep)); color:#fff; border:none; border-radius:var(--radius-md); padding:15px; font-weight:700; font-size:15.5px; width:100%; display:flex; align-items:center; justify-content:center; gap:8px; box-shadow:var(--shadow-pop); }
    .btn-primary:active{ filter:brightness(0.95); }
    .btn-primary[disabled]{ opacity:0.45; box-shadow:none; }
    .btn-outline{ background:var(--paper); border:1.5px solid var(--sky-deep); color:var(--sky-deep); border-radius:var(--radius-md); padding:12px; font-weight:700; font-size:14px; width:100%; }
    .btn-ghost{ background:transparent; border:none; color:var(--sky-deep); font-weight:700; font-size:13.5px; }

    .quick-dates{ display:flex; gap:8px; padding:14px 20px 4px; }
    .chip{ border:1px solid var(--line); background:var(--paper); border-radius:100px; padding:8px 14px; font-size:12.5px; font-weight:600; color:var(--charcoal); display:flex; align-items:center; gap:6px; white-space:nowrap; }
    .chip.active{ background:var(--sky-deepest); border-color:var(--sky-deepest); color:#fff; }
    .chip-row{ display:flex; gap:8px; overflow-x:auto; padding:2px 20px 4px; }
    .chip-row::-webkit-scrollbar{ display:none; }

    .route-pill{ display:flex; align-items:center; justify-content:space-between; background:var(--paper); border:1px solid var(--line); border-radius:var(--radius-md); padding:13px 15px; margin-bottom:10px; }
    .route-pill:last-child{ margin-bottom:0; }
    .route-pill .r-cities{ font-weight:700; font-size:13.5px; display:flex; align-items:center; gap:6px; }
    .route-pill .r-fare{ font-size:12px; color:var(--charcoal-soft); margin-top:3px; }

    .offer-card{ min-width:230px; background:linear-gradient(120deg,#0B6FB4,#3E9EDB); border-radius:var(--radius-md); padding:16px; color:#fff; margin-right:12px; }
    .offer-row{ display:flex; overflow-x:auto; padding:2px 20px 6px; }
    .offer-row::-webkit-scrollbar{ display:none; }

    .shortcut-grid{ display:grid; grid-template-columns:1fr 1fr; gap:12px; padding:0 20px 6px; }
    .shortcut{ background:var(--paper); border:1px solid var(--line); border-radius:var(--radius-md); padding:14px; display:flex; flex-direction:column; gap:8px; }
    .shortcut .sc-ic{ width:34px; height:34px; border-radius:9px; background:var(--marigold-soft); color:var(--marigold); display:flex; align-items:center; justify-content:center; }

    /* Results screen */
    .sort-bar{ display:flex; gap:8px; padding:12px 20px; overflow-x:auto; border-bottom:1px solid var(--line); }
    .sort-bar::-webkit-scrollbar{ display:none; }
    .result-count{ padding:14px 20px 4px; font-size:12.5px; color:var(--charcoal-soft); font-weight:600; }
    .bus-card{ margin:10px 20px; padding:16px; }
    .bus-card .op-row{ display:flex; justify-content:space-between; align-items:flex-start; }
    .op-name{ font-weight:700; font-size:15px; }
    .op-type{ font-size:12px; color:var(--charcoal-soft); margin-top:2px; }
    .rating-pill{ background:var(--success-soft); color:var(--success); font-size:11.5px; font-weight:700; padding:3px 8px; border-radius:7px; display:flex; align-items:center; gap:3px; }
    .time-row{ display:flex; align-items:center; gap:10px; margin-top:14px; }
    .time-block{ text-align:center; }
    .time-val{ font-weight:700; font-size:15px; }
    .time-loc{ font-size:11px; color:var(--charcoal-soft); max-width:80px; }
    .time-line{ flex:1; display:flex; flex-direction:column; align-items:center; gap:3px; }
    .time-line .dur{ font-size:10.5px; color:var(--charcoal-soft); font-weight:600; }
    .dotted{ width:100%; height:1px; border-top:2px dotted var(--line); position:relative; }
    .amenity-row{ display:flex; gap:7px; margin-top:13px; flex-wrap:wrap; }
    .amenity-chip{ width:28px; height:28px; border-radius:8px; background:var(--bg); display:flex; align-items:center; justify-content:center; color:var(--sky-deep); }
    .bus-card-foot{ display:flex; justify-content:space-between; align-items:center; margin-top:14px; padding-top:13px; border-top:1px solid var(--line); }
    .fare-val{ font-size:18px; font-weight:800; color:var(--charcoal); }
    .fare-sub{ font-size:11.5px; color:var(--success); font-weight:600; }
    .btn-small{ background:var(--sky-deep); color:#fff; border:none; padding:9px 16px; border-radius:9px; font-weight:700; font-size:13px; display:flex; align-items:center; gap:4px; }

    .filter-sheet{ background:var(--paper); border-top:1px solid var(--line); padding:16px 20px 20px; }
    .filter-group{ margin-bottom:16px; }
    .filter-group-title{ font-size:12px; font-weight:700; text-transform:uppercase; letter-spacing:0.5px; color:var(--charcoal-soft); margin-bottom:8px; }
    .filter-opts{ display:flex; gap:8px; flex-wrap:wrap; }

    /* Bus details */
    .bus-hero{ height:190px; background:linear-gradient(150deg,#0B6FB4,#3E9EDB 60%,#8FCBEF); display:flex; align-items:center; justify-content:center; position:relative; overflow:hidden; }
    .bus-hero svg{ position:relative; z-index:1; }
    .detail-tabs{ display:flex; border-bottom:1px solid var(--line); padding:0 20px; }
    .detail-tab{ padding:14px 0; margin-right:24px; font-size:13.5px; font-weight:700; color:var(--charcoal-soft); border-bottom:2px solid transparent; }
    .detail-tab.active{ color:var(--sky-deepest); border-color:var(--sky-deepest); }
    .info-line{ display:flex; align-items:flex-start; gap:12px; padding:12px 0; border-bottom:1px solid var(--line); }
    .info-line:last-child{ border-bottom:none; }
    .info-ic{ width:34px; height:34px; border-radius:9px; background:var(--bg); display:flex; align-items:center; justify-content:center; color:var(--sky-deep); flex-shrink:0; }
    .amenity-grid{ display:grid; grid-template-columns:repeat(4,1fr); gap:14px; padding:6px 20px 4px; }
    .amenity-tile{ display:flex; flex-direction:column; align-items:center; gap:7px; text-align:center; }
    .amenity-tile .a-ic{ width:44px; height:44px; border-radius:12px; background:var(--bg); display:flex; align-items:center; justify-content:center; color:var(--sky-deep); }
    .amenity-tile span{ font-size:10.5px; color:var(--charcoal-soft); font-weight:600; line-height:1.2; }
    .review-card{ padding:13px 0; border-bottom:1px solid var(--line); }
    .review-card:last-child{ border-bottom:none; }

    .premium-band{ margin:8px 20px 0; padding:16px; border-radius:var(--radius-lg); background:linear-gradient(155deg,#FBEED9,#FFFDF8); border:1px solid #F1DCAE; }
    .premium-grid{ display:grid; grid-template-columns:1fr 1fr 1fr; gap:11px; margin-top:12px; }
    .premium-item{ display:flex; flex-direction:column; align-items:center; gap:5px; text-align:center; }
    .premium-item .p-ic{ width:36px; height:36px; border-radius:10px; background:#fff; border:1px solid #F1DCAE; display:flex; align-items:center; justify-content:center; color:var(--marigold); }
    .premium-item span{ font-size:9.5px; font-weight:600; color:var(--charcoal-soft); }

    /* Sticky bottom bar */
    .sticky-bar{ position:absolute; left:0; right:0; bottom:0; background:var(--paper); border-top:1px solid var(--line); padding:13px 20px; display:flex; align-items:center; gap:14px; }
    .sticky-total{ flex:1; }
    .sticky-total .lbl{ font-size:11px; color:var(--charcoal-soft); font-weight:600; }
    .sticky-total .val{ font-size:18px; font-weight:800; }
    .sticky-bar .btn-primary{ width:auto; padding:14px 26px; }

    /* Seat map */
    .legend-row{ display:flex; gap:14px; padding:4px 20px 14px; flex-wrap:wrap; }
    .legend-item{ display:flex; align-items:center; gap:6px; font-size:11.5px; color:var(--charcoal-soft); font-weight:600; }
    .legend-swatch{ width:16px; height:16px; border-radius:5px; }
    .deck-wrap{ padding:0 20px 20px; }
    .deck-title{ font-size:12.5px; font-weight:700; color:var(--charcoal-soft); margin:14px 0 10px; text-transform:uppercase; letter-spacing:0.5px; }
    .seat-grid{ display:grid; grid-template-columns:repeat(2,1fr) 26px repeat(1,1fr); gap:9px; }
    .seat{ height:46px; border-radius:9px; display:flex; align-items:center; justify-content:center; font-size:11.5px; font-weight:700; border:1.5px solid transparent; }
    .seat.available{ background:#fff; border-color:var(--line); color:var(--charcoal); }
    .seat.selected{ background:var(--sky-deep); color:#fff; border-color:var(--sky-deep); }
    .seat.occupied{ background:#F1F2F3; color:#B7BBC0; }
    .seat.female{ background:var(--female-soft); color:var(--female); border-color:#F3CBDD; }
    .seat.reserved{ background:var(--marigold-soft); color:var(--marigold); border-color:#F1DCAE; }
    .seat.gap{ background:transparent; }

    /* Boarding/Dropping */
    .bd-tabs{ display:flex; margin:14px 20px 8px; background:var(--bg); border-radius:100px; padding:4px; }
    .bd-tab{ flex:1; text-align:center; padding:9px; border-radius:100px; font-size:13px; font-weight:700; color:var(--charcoal-soft); background:transparent; border:none; }
    .bd-tab.active{ background:var(--paper); color:var(--sky-deepest); box-shadow:0 1px 4px rgba(0,0,0,0.08); }
    .point-row{ display:flex; align-items:center; gap:13px; padding:14px 20px; border-bottom:1px solid var(--line); }
    .point-row.selected{ background:#EFF7FE; }
    .radio-dot{ width:20px; height:20px; border-radius:50%; border:2px solid var(--line); display:flex; align-items:center; justify-content:center; flex-shrink:0; }
    .radio-dot.on{ border-color:var(--sky-deep); }
    .radio-dot.on::after{ content:''; width:10px; height:10px; border-radius:50%; background:var(--sky-deep); }

    /* Forms */
    .form-group{ padding:0 20px; margin-bottom:14px; }
    .form-label{ font-size:12px; font-weight:700; color:var(--charcoal-soft); margin-bottom:6px; display:block; }
    .form-input{ width:100%; border:1.5px solid var(--line); border-radius:var(--radius-sm); padding:12px 13px; font-size:14.5px; font-family:inherit; color:var(--charcoal); background:var(--paper); }
    .form-input:focus{ outline:none; border-color:var(--sky-deep); }
    .gender-row{ display:flex; gap:8px; }
    .gender-opt{ flex:1; border:1.5px solid var(--line); border-radius:var(--radius-sm); padding:10px; text-align:center; font-size:13px; font-weight:600; color:var(--charcoal-soft); }
    .gender-opt.active{ border-color:var(--sky-deep); color:var(--sky-deep); background:#EFF7FE; }
    .passenger-tag{ display:flex; align-items:center; justify-content:space-between; padding:11px 14px; background:var(--bg); border-radius:var(--radius-sm); margin:0 20px 10px; font-size:13px; font-weight:700; }

    /* Payment */
    .fare-line{ display:flex; justify-content:space-between; padding:9px 0; font-size:13.5px; color:var(--charcoal-soft); }
    .fare-line.total{ border-top:1px dashed var(--line); margin-top:6px; padding-top:13px; font-weight:800; color:var(--charcoal); font-size:15px; }
    .fare-line .neg{ color:var(--success); }
    .pay-opt{ display:flex; align-items:center; gap:13px; padding:14px; border:1.5px solid var(--line); border-radius:var(--radius-md); margin-bottom:10px; }
    .pay-opt.active{ border-color:var(--sky-deep); background:#EFF7FE; }
    .pay-ic{ width:38px; height:38px; border-radius:10px; background:var(--bg); display:flex; align-items:center; justify-content:center; color:var(--sky-deep); }
    .coupon-row{ display:flex; align-items:center; justify-content:space-between; border:1.5px dashed var(--marigold); background:var(--marigold-soft); border-radius:var(--radius-sm); padding:11px 14px; margin:0 20px 16px; }

    /* Ticket */
    .ticket-wrap{ margin:8px 20px 0; border-radius:var(--radius-lg); overflow:hidden; box-shadow:var(--shadow-card); border:1px solid var(--line); }
    .ticket-head{ background:linear-gradient(135deg,#0B6FB4,#3E9EDB); padding:20px; color:#fff; }
    .ticket-body{ padding:18px 20px; background:#fff; }
    .tk-grid{ display:grid; grid-template-columns:1fr 1fr; gap:14px 10px; margin-bottom:16px; }
    .tk-item .lbl{ font-size:10.5px; text-transform:uppercase; color:var(--charcoal-soft); font-weight:700; letter-spacing:0.4px; }
    .tk-item .val{ font-size:14px; font-weight:700; margin-top:3px; }
    .ticket-perf{ border-top:2px dashed var(--line); position:relative; padding-top:18px; margin-top:4px; }
    .punch{ position:absolute; width:20px; height:20px; background:var(--bg); border-radius:50%; top:-10px; }
    .ticket-actions{ display:grid; grid-template-columns:1fr 1fr; gap:10px; padding:16px 20px 20px; }
    .qr-box{ width:110px; height:110px; margin:0 auto; border-radius:12px; overflow:hidden; border:1px solid var(--line); }

    /* Tracking */
    .map-area{ height:220px; background:linear-gradient(160deg,#DFF0FB,#F4FAFD); position:relative; overflow:hidden; }
    .timeline{ padding:6px 20px 20px; }
    .tl-item{ display:flex; gap:14px; }
    .tl-marker{ display:flex; flex-direction:column; align-items:center; }
    .tl-dot{ width:14px; height:14px; border-radius:50%; background:var(--line); flex-shrink:0; margin-top:2px; }
    .tl-dot.done{ background:var(--success); }
    .tl-dot.current{ background:var(--sky-deep); box-shadow:0 0 0 5px #DDEEFA; }
    .tl-bar{ width:2px; flex:1; background:var(--line); margin:2px 0; }
    .tl-bar.done{ background:var(--success); }
    .tl-content{ padding-bottom:26px; }
    .tl-city{ font-weight:700; font-size:14px; }
    .tl-status{ font-size:12px; color:var(--charcoal-soft); margin-top:2px; }

    /* Bookings */
    .booking-card{ margin:10px 20px; padding:15px; }
    .booking-top{ display:flex; justify-content:space-between; align-items:flex-start; }
    .status-badge{ font-size:10.5px; font-weight:700; padding:3px 9px; border-radius:100px; text-transform:uppercase; letter-spacing:0.3px; }
    .status-badge.upcoming{ background:var(--success-soft); color:var(--success); }
    .status-badge.completed{ background:#EEF0F2; color:var(--charcoal-soft); }
    .status-badge.cancelled{ background:var(--danger-soft); color:var(--danger); }
    .booking-actions{ display:flex; gap:8px; margin-top:13px; }
    .booking-actions button{ flex:1; padding:9px; border-radius:9px; font-size:12.5px; font-weight:700; }

    /* Profile */
    .profile-head{ display:flex; align-items:center; gap:14px; padding:22px 20px; background:linear-gradient(135deg,#0B6FB4,#3E9EDB); color:#fff; }
    .avatar{ width:56px; height:56px; border-radius:50%; background:rgba(255,255,255,0.2); display:flex; align-items:center; justify-content:center; font-weight:800; font-size:20px; border:2px solid rgba(255,255,255,0.5); }
    .menu-item{ display:flex; align-items:center; gap:14px; padding:14px 20px; border-bottom:1px solid var(--line); }
    .menu-ic{ width:36px; height:36px; border-radius:10px; background:var(--bg); color:var(--sky-deep); display:flex; align-items:center; justify-content:center; flex-shrink:0; }

    /* Bottom nav */
    .bottom-nav{ position:absolute; left:0; right:0; bottom:0; background:var(--paper); border-top:1px solid var(--line); display:flex; padding:8px 6px 12px; }
    .nav-item{ flex:1; display:flex; flex-direction:column; align-items:center; gap:4px; background:none; border:none; color:var(--charcoal-soft); font-size:10.5px; font-weight:600; padding:4px 0; }
    .nav-item.active{ color:var(--sky-deepest); }

    /* Admin */
    .admin-wrap{ background:var(--bg); min-height:100vh; width:100%; }
    .admin-shell{ max-width:1180px; margin:0 auto; display:flex; min-height:100vh; }
    .admin-side{ width:220px; background:#111A22; color:#fff; padding:22px 14px; flex-shrink:0; }
    .admin-side .brand-row{ padding:0 8px 24px; }
    .admin-nav-item{ display:flex; align-items:center; gap:11px; padding:11px 12px; border-radius:10px; color:#AEB8C2; font-size:13.5px; font-weight:600; margin-bottom:2px; background:none; border:none; width:100%; text-align:left; }
    .admin-nav-item.active{ background:#1D2A36; color:#fff; }
    .admin-main{ flex:1; padding:26px 30px; overflow-x:hidden; }
    .admin-topline{ display:flex; justify-content:space-between; align-items:center; margin-bottom:22px; }
    .kpi-grid{ display:grid; grid-template-columns:repeat(4,1fr); gap:16px; margin-bottom:22px; }
    .kpi-card{ background:#fff; border:1px solid var(--line); border-radius:var(--radius-md); padding:16px; }
    .kpi-card .k-lbl{ font-size:11.5px; color:var(--charcoal-soft); font-weight:700; display:flex; align-items:center; gap:6px; }
    .kpi-card .k-val{ font-size:23px; font-weight:800; margin-top:8px; }
    .kpi-card .k-delta{ font-size:11.5px; font-weight:700; color:var(--success); margin-top:4px; display:flex; align-items:center; gap:4px; }
    .panel{ background:#fff; border:1px solid var(--line); border-radius:var(--radius-md); padding:18px; margin-bottom:18px; }
    .panel-title{ font-size:14px; font-weight:700; margin-bottom:14px; }
    .charts-row{ display:grid; grid-template-columns:1.4fr 1fr; gap:16px; }
    .admin-table{ width:100%; border-collapse:collapse; font-size:13px; }
    .admin-table th{ text-align:left; font-size:11px; text-transform:uppercase; letter-spacing:0.4px; color:var(--charcoal-soft); padding:9px 10px; border-bottom:1px solid var(--line); }
    .admin-table td{ padding:11px 10px; border-bottom:1px solid var(--line); }
    .admin-table tr:last-child td{ border-bottom:none; }
    .table-toolbar{ display:flex; justify-content:space-between; align-items:center; margin-bottom:14px; }
    .btn-dark{ background:var(--sky-deepest); color:#fff; border:none; border-radius:9px; padding:10px 16px; font-weight:700; font-size:13px; display:flex; align-items:center; gap:6px; }
    .pill-tag{ font-size:11px; font-weight:700; padding:3px 9px; border-radius:100px; }
    @media (max-width:900px){ .admin-side{ display:none; } .kpi-grid{ grid-template-columns:1fr 1fr; } .charts-row{ grid-template-columns:1fr; } }
  `}</style>
);

/* ----------------------------------------------------------------------
   Logo
------------------------------------------------------------------------- */
const Logo = ({ size = 42 }) => (
  <div className="brand-mark" style={{ width: size, height: size }}>
    <svg width={size * 0.58} height={size * 0.58} viewBox="0 0 24 24" fill="none">
      <path d="M4 19V7.5L12 3l8 4.5V19" stroke="#fff" strokeWidth="1.8" strokeLinejoin="round" />
      <path d="M8 19v-6h8v6" stroke="#fff" strokeWidth="1.8" strokeLinejoin="round" />
      <circle cx="12" cy="10.2" r="1.6" fill="#E8A63A" />
    </svg>
  </div>
);

const BrandHeader = () => (
  <div className="brand-row">
    <Logo />
    <div>
      <div className="brand-name">Mallikarjuna Travels</div>
      <div className="brand-sub">Driven by Trust. Powered by Excellence.</div>
    </div>
  </div>
);

/* ----------------------------------------------------------------------
   Mock data
------------------------------------------------------------------------- */
const CITIES = ["Bengaluru", "Hyderabad", "Chennai", "Vijayawada", "Pune", "Mumbai", "Tirupati", "Goa"];

const POPULAR_ROUTES = [
  { from: "Bengaluru", to: "Hyderabad", fare: 1699 },
  { from: "Bengaluru", to: "Chennai", fare: 899 },
  { from: "Hyderabad", to: "Vijayawada", fare: 799 },
  { from: "Bengaluru", to: "Goa", fare: 1299 },
];

const OFFERS = [
  { code: "MMG100", title: "Flat ₹100 off", sub: "On your first 3 bookings" },
  { code: "WEEKEND50", title: "₹50 cashback", sub: "Weekend trips via UPI" },
  { code: "MMGSLEEP", title: "10% off Sleeper", sub: "On AC Sleeper coaches" },
];

const AMENITIES_LIST = [
  { key: "water", label: "Water Bottle", icon: Droplet },
  { key: "kit", label: "Travel Kit", icon: Package },
  { key: "charge", label: "Charging Point", icon: BatteryCharging },
  { key: "light", label: "Reading Light", icon: Lightbulb },
  { key: "blanket", label: "Blanket", icon: Sparkles },
  { key: "ac", label: "AC", icon: Wind },
  { key: "cctv", label: "CCTV", icon: Video },
  { key: "gps", label: "GPS Tracking", icon: Navigation },
  { key: "emergency", label: "Emergency Support", icon: ShieldCheck },
];

function makeBuses() {
  const base = [
    { id: "MT101", model: "Volvo 9600 · Multi-Axle", type: "AC Sleeper", dep: "8:00 PM", arr: "5:30 AM", dur: "9h 30m", from: "Electronic City", to: "Miyapur", seats: 18, fare: 1699, rating: 4.6, reviews: 812 },
    { id: "MT204", model: "BharatBenz · 2+1", type: "AC Semi-Sleeper", dep: "9:15 PM", arr: "6:10 AM", dur: "8h 55m", from: "Silk Board", to: "Secunderabad", seats: 9, fare: 1499, rating: 4.4, reviews: 540 },
    { id: "MT318", model: "Volvo B11R", type: "AC Seater / Sleeper", dep: "10:00 PM", arr: "6:45 AM", dur: "8h 45m", from: "Hebbal", to: "Miyapur", seats: 22, fare: 1899, rating: 4.7, reviews: 1120 },
    { id: "MT452", model: "BharatBenz · Sleeper", type: "Non-AC Sleeper", dep: "7:30 PM", arr: "5:00 AM", dur: "9h 30m", from: "Tin Factory", to: "Secunderabad", seats: 4, fare: 1199, rating: 4.1, reviews: 298 },
    { id: "MT560", model: "Volvo 9600", type: "AC Sleeper", dep: "11:00 PM", arr: "7:40 AM", dur: "8h 40m", from: "Electronic City", to: "Miyapur", seats: 14, fare: 1799, rating: 4.5, reviews: 675 },
  ];
  return base;
}
const BUSES = makeBuses();

const BOARDING_POINTS = [
  { name: "Electronic City", time: "6:45 PM", note: "Near Wipro Gate 2" },
  { name: "Silk Board", time: "7:00 PM", note: "Opposite BWSSB office" },
  { name: "Tin Factory", time: "7:25 PM", note: "Near Metro Pillar 12" },
  { name: "Hebbal", time: "7:45 PM", note: "Esteem Mall bus bay" },
];
const DROPPING_POINTS = [
  { name: "Miyapur", time: "5:00 AM", note: "Metro station entrance" },
  { name: "Secunderabad", time: "5:25 AM", note: "Near railway station" },
  { name: "Ameerpet", time: "5:45 AM", note: "Bus bay, Main road" },
];

function genSeats() {
  const seats = [];
  ["lower", "upper"].forEach((deck) => {
    for (let i = 1; i <= 9; i++) {
      ["A", "B", "C"].forEach((col, ci) => {
        const idx = i * 3 + ci;
        const id = `${deck === "lower" ? "L" : "U"}${i}${col}`;
        let status = "available";
        if (idx % 7 === 0) status = "occupied";
        else if (idx % 11 === 0) status = "female";
        else if (idx % 13 === 0) status = "reserved";
        seats.push({ id, deck, row: i, col, status, price: deck === "lower" ? 1699 : 1599, isGap: col === "B" });
      });
    }
  });
  return seats;
}

/* ----------------------------------------------------------------------
   Small shared components
------------------------------------------------------------------------- */
const TopBar = ({ title, onBack, right }) => (
  <div className="topbar">
    {onBack && (
      <button className="icon-btn" onClick={onBack}><ChevronLeft size={19} /></button>
    )}
    <h3 style={{ fontSize: 16.5, flex: 1 }}>{title}</h3>
    {right}
  </div>
);

const Screen = ({ children }) => <div className="mmg-scroll">{children}</div>;

/* ----------------------------------------------------------------------
   HOME
------------------------------------------------------------------------- */
function HomeScreen({ form, setForm, go, swap }) {
  return (
    <Screen>
      <div className="topbar" style={{ justifyContent: "space-between" }}>
        <BrandHeader />
        <button className="icon-btn"><Bell size={18} /></button>
      </div>

      <div style={{ padding: "6px 20px 0" }}>
        <h2 style={{ fontSize: 21, lineHeight: 1.25 }}>Where are you<br />travelling today?</h2>
      </div>

      <div className="card search-card">
        <div className="field-row">
          <MapPin size={19} color="var(--sky-deep)" />
          <div style={{ flex: 1 }}>
            <div className="field-label">From</div>
            <div className="field-value">{form.from}</div>
          </div>
          <button className="swap-btn" onClick={swap}><ArrowLeftRight size={16} /></button>
        </div>
        <div className="field-row">
          <MapPin size={19} color="var(--marigold)" />
          <div style={{ flex: 1 }}>
            <div className="field-label">To</div>
            <div className="field-value">{form.to}</div>
          </div>
        </div>
        <div className="field-row">
          <Calendar size={19} color="var(--sky-deep)" />
          <div style={{ flex: 1 }}>
            <div className="field-label">Date of journey</div>
            <div className="field-value">{form.date}</div>
          </div>
        </div>
      </div>

      <div className="quick-dates">
        {["Today", "Tomorrow", "This weekend"].map((d) => (
          <button key={d} className={`chip ${form.dateChip === d ? "active" : ""}`}
            onClick={() => setForm((f) => ({ ...f, dateChip: d, date: d === "Today" ? "12 Sep" : d === "Tomorrow" ? "13 Sep" : "20 Sep" }))}>
            {d}
          </button>
        ))}
      </div>

      <div style={{ padding: "14px 20px 4px" }}>
        <button className="btn-primary" onClick={() => go("results")}>
          <Search size={17} /> Search Buses
        </button>
      </div>

      <div className="shortcut-grid" style={{ marginTop: 18 }}>
        <button className="shortcut" onClick={() => go("bookings")}>
          <div className="sc-ic"><TicketIcon size={17} /></div>
          <div style={{ fontWeight: 700, fontSize: 13 }}>My Bookings</div>
          <div style={{ fontSize: 11, color: "var(--charcoal-soft)" }}>View & manage tickets</div>
        </button>
        <button className="shortcut" onClick={() => go("tracking")}>
          <div className="sc-ic"><Navigation size={17} /></div>
          <div style={{ fontWeight: 700, fontSize: 13 }}>Track Bus</div>
          <div style={{ fontSize: 11, color: "var(--charcoal-soft)" }}>Live location & ETA</div>
        </button>
      </div>

      <div className="section">
        <div className="section-title">Recent searches</div>
        <div className="route-pill">
          <div>
            <div className="r-cities"><MapPin size={13} /> Bengaluru → Hyderabad</div>
            <div className="r-fare">Searched 2 days ago</div>
          </div>
          <ChevronRight size={17} color="var(--charcoal-soft)" />
        </div>
      </div>

      <div className="section" style={{ paddingTop: 0 }}>
        <div className="section-title">Popular routes <span className="link">See all</span></div>
        {POPULAR_ROUTES.map((r) => (
          <div className="route-pill" key={r.from + r.to} onClick={() => { setForm((f) => ({ ...f, from: r.from, to: r.to })); go("results"); }}>
            <div>
              <div className="r-cities">{r.from} → {r.to}</div>
              <div className="r-fare">Starting ₹{r.fare}</div>
            </div>
            <ChevronRight size={17} color="var(--charcoal-soft)" />
          </div>
        ))}
      </div>

      <div className="section" style={{ paddingTop: 0 }}>
        <div className="section-title">Offers for you</div>
        <div className="offer-row">
          {OFFERS.map((o) => (
            <div className="offer-card" key={o.code}>
              <Tag size={18} />
              <div style={{ fontWeight: 800, fontSize: 15, marginTop: 10 }}>{o.title}</div>
              <div style={{ fontSize: 12, opacity: 0.9, marginTop: 3 }}>{o.sub}</div>
              <div style={{ marginTop: 10, fontSize: 11, background: "rgba(255,255,255,0.2)", display: "inline-block", padding: "4px 9px", borderRadius: 6, fontWeight: 700, letterSpacing: 0.5 }}>{o.code}</div>
            </div>
          ))}
        </div>
      </div>
    </Screen>
  );
}

/* ----------------------------------------------------------------------
   RESULTS
------------------------------------------------------------------------- */
function ResultsScreen({ form, go, selectBus }) {
  const [sort, setSort] = useState("Recommended");
  const [showFilters, setShowFilters] = useState(false);
  const sorted = useMemo(() => {
    const arr = [...BUSES];
    if (sort === "Cheapest") arr.sort((a, b) => a.fare - b.fare);
    if (sort === "Earliest") arr.sort((a, b) => a.dep.localeCompare(b.dep));
    if (sort === "Rated") arr.sort((a, b) => b.rating - a.rating);
    return arr;
  }, [sort]);

  return (
    <Screen>
      <TopBar title={`${form.from} → ${form.to}`} onBack={() => go("home")}
        right={<div style={{ fontSize: 11.5, color: "var(--charcoal-soft)", fontWeight: 600 }}>{form.date}</div>} />

      <div className="sort-bar">
        {["Recommended", "Cheapest", "Earliest", "Fastest", "Rated"].map((s) => (
          <button key={s} className={`chip ${sort === s ? "active" : ""}`} onClick={() => setSort(s)}>
            <ArrowUpDown size={12} /> {s}
          </button>
        ))}
        <button className="chip" onClick={() => setShowFilters((v) => !v)} style={{ marginLeft: "auto" }}>
          <SlidersHorizontal size={12} /> Filters
        </button>
      </div>

      {showFilters && (
        <div className="filter-sheet">
          <div className="filter-group">
            <div className="filter-group-title">Bus type</div>
            <div className="filter-opts">
              {["AC", "Non-AC", "Sleeper", "Seater"].map((f) => <span key={f} className="chip">{f}</span>)}
            </div>
          </div>
          <div className="filter-group">
            <div className="filter-group-title">Departure time</div>
            <div className="filter-opts">
              {["Before 6AM", "6AM–12PM", "12PM–6PM", "After 6PM"].map((f) => <span key={f} className="chip">{f}</span>)}
            </div>
          </div>
          <div className="filter-group">
            <div className="filter-group-title">Operator & rating</div>
            <div className="filter-opts">
              {["Mallikarjuna Travels", "4.0+ rated", "Boarding: Silk Board"].map((f) => <span key={f} className="chip">{f}</span>)}
            </div>
          </div>
          <button className="btn-outline" onClick={() => setShowFilters(false)}>Apply filters</button>
        </div>
      )}

      <div className="result-count">{sorted.length} buses found · {form.from} to {form.to}</div>

      {sorted.map((bus) => (
        <div className="card bus-card" key={bus.id} onClick={() => { selectBus(bus); go("busDetails"); }}>
          <div className="op-row">
            <div>
              <div className="op-name">Mallikarjuna Travels</div>
              <div className="op-type">{bus.model} · {bus.type}</div>
            </div>
            <div className="rating-pill"><Star size={11} fill="currentColor" /> {bus.rating}</div>
          </div>

          <div className="time-row">
            <div className="time-block">
              <div className="time-val">{bus.dep}</div>
              <div className="time-loc">{bus.from}</div>
            </div>
            <div className="time-line">
              <div className="dur">{bus.dur}</div>
              <div className="dotted" />
            </div>
            <div className="time-block">
              <div className="time-val">{bus.arr}</div>
              <div className="time-loc">{bus.to}</div>
            </div>
          </div>

          <div className="amenity-row">
            {AMENITIES_LIST.slice(0, 5).map((a) => (
              <div className="amenity-chip" key={a.key}><a.icon size={13} /></div>
            ))}
          </div>

          <div className="bus-card-foot">
            <div>
              <div className="fare-val">₹{bus.fare}</div>
              <div className="fare-sub">{bus.seats} seats available</div>
            </div>
            <button className="btn-small">View Seats <ChevronRight size={14} /></button>
          </div>
        </div>
      ))}
    </Screen>
  );
}

/* ----------------------------------------------------------------------
   BUS DETAILS
------------------------------------------------------------------------- */
function BusDetailsScreen({ bus, go }) {
  const [tab, setTab] = useState("overview");
  if (!bus) return null;
  return (
    <Screen>
      <div className="bus-hero">
        <button className="icon-btn" style={{ position: "absolute", top: 16, left: 16, background: "rgba(255,255,255,0.85)" }} onClick={() => go("results")}>
          <ChevronLeft size={19} />
        </button>
        <svg width="220" height="110" viewBox="0 0 220 110" fill="none">
          <rect x="10" y="24" width="180" height="58" rx="14" fill="#ffffff" fillOpacity="0.95" />
          <rect x="20" y="34" width="34" height="22" rx="4" fill="#3E9EDB" />
          <rect x="62" y="34" width="30" height="22" rx="4" fill="#3E9EDB" />
          <rect x="100" y="34" width="30" height="22" rx="4" fill="#3E9EDB" />
          <rect x="138" y="34" width="30" height="22" rx="4" fill="#3E9EDB" />
          <circle cx="45" cy="90" r="11" fill="#23262B" />
          <circle cx="155" cy="90" r="11" fill="#23262B" />
          <rect x="190" y="46" width="14" height="26" rx="4" fill="#E8A63A" />
        </svg>
      </div>

      <div className="section" style={{ paddingBottom: 8 }}>
        <h2 style={{ fontSize: 19 }}>Mallikarjuna Travels</h2>
        <p style={{ fontSize: 13, color: "var(--charcoal-soft)", marginTop: 3 }}>{bus.model} · {bus.type}</p>
        <div style={{ display: "flex", gap: 8, marginTop: 10 }}>
          <span className="rating-pill"><Star size={11} fill="currentColor" /> {bus.rating} ({bus.reviews})</span>
          <span className="chip">Bus No. KA-05-{bus.id}</span>
        </div>
      </div>

      <div className="detail-tabs">
        {["overview", "amenities", "reviews"].map((t) => (
          <button key={t} className={`detail-tab ${tab === t ? "active" : ""}`} onClick={() => setTab(t)}>
            {t[0].toUpperCase() + t.slice(1)}
          </button>
        ))}
      </div>

      {tab === "overview" && (
        <div className="section">
          <div className="info-line">
            <div className="info-ic"><Clock size={16} /></div>
            <div>
              <div style={{ fontWeight: 700, fontSize: 13.5 }}>{bus.dep} → {bus.arr} · {bus.dur}</div>
              <div style={{ fontSize: 12, color: "var(--charcoal-soft)" }}>{bus.from} to {bus.to}</div>
            </div>
          </div>
          <div className="info-line">
            <div className="info-ic"><ShieldCheck size={16} /></div>
            <div>
              <div style={{ fontWeight: 700, fontSize: 13.5 }}>Cancellation policy</div>
              <div style={{ fontSize: 12, color: "var(--charcoal-soft)" }}>Free cancellation up to 6 hrs before departure. Partial refund after.</div>
            </div>
          </div>
          <div className="info-line">
            <div className="info-ic"><Radio size={16} /></div>
            <div>
              <div style={{ fontWeight: 700, fontSize: 13.5 }}>Live tracking available</div>
              <div style={{ fontSize: 12, color: "var(--charcoal-soft)" }}>Track this bus in real time once boarded.</div>
            </div>
          </div>
          <div className="info-line">
            <div className="info-ic"><User size={16} /></div>
            <div>
              <div style={{ fontWeight: 700, fontSize: 13.5 }}>Operated by MMG · Mallikarjuna Travels</div>
              <div style={{ fontSize: 12, color: "var(--charcoal-soft)" }}>18 years of service · 4,200+ trips completed</div>
            </div>
          </div>
        </div>
      )}

      {tab === "amenities" && (
        <div className="amenity-grid" style={{ paddingBottom: 16 }}>
          {AMENITIES_LIST.map((a) => (
            <div className="amenity-tile" key={a.key}>
              <div className="a-ic"><a.icon size={18} /></div>
              <span>{a.label}</span>
            </div>
          ))}
        </div>
      )}

      {tab === "reviews" && (
        <div className="section">
          {[
            { n: "Ramesh K.", t: "Comfortable sleeper, clean blankets and the tracking link was accurate.", r: 5 },
            { n: "Sindhu P.", t: "Boarding point was easy to find, driver called ahead of time.", r: 4 },
            { n: "Farhan A.", t: "Smooth journey, AC worked well through the night.", r: 5 },
          ].map((rv) => (
            <div className="review-card" key={rv.n}>
              <div style={{ display: "flex", justifyContent: "space-between" }}>
                <div style={{ fontWeight: 700, fontSize: 13 }}>{rv.n}</div>
                <div style={{ display: "flex", gap: 2 }}>
                  {Array.from({ length: rv.r }).map((_, i) => <Star key={i} size={12} fill="var(--marigold)" color="var(--marigold)" />)}
                </div>
              </div>
              <p style={{ fontSize: 12.5, color: "var(--charcoal-soft)", marginTop: 5 }}>{rv.t}</p>
            </div>
          ))}
        </div>
      )}

      <div className="premium-band">
        <div style={{ display: "flex", alignItems: "center", gap: 8 }}>
          <Sparkles size={16} color="var(--marigold)" />
          <div style={{ fontWeight: 700, fontSize: 13.5 }}>MMG Premium Experience</div>
        </div>
        <div className="premium-grid">
          {["Travel Pouch", "Water Bottle", "Wet Wipes", "Biscuits", "Moong Dal", "Dental Kit", "Ear Plugs", "Eye Mask", "Sanitizer"].map((p) => (
            <div className="premium-item" key={p}>
              <div className="p-ic"><Check size={15} /></div>
              <span>{p}</span>
            </div>
          ))}
        </div>
      </div>

      <div style={{ height: 90 }} />
      <div className="sticky-bar">
        <div className="sticky-total">
          <div className="lbl">Starting from</div>
          <div className="val">₹{bus.fare}</div>
        </div>
        <button className="btn-primary" onClick={() => go("seats")}>Select Seats</button>
      </div>
    </Screen>
  );
}

/* ----------------------------------------------------------------------
   SEAT SELECTION
------------------------------------------------------------------------- */
function SeatScreen({ seats, selected, toggleSeat, go }) {
  const total = selected.reduce((s, x) => s + x.price, 0);
  const renderDeck = (deckName, label) => (
    <div className="deck-wrap">
      <div className="deck-title">{label}</div>
      <div className="seat-grid">
        {seats.filter((s) => s.deck === deckName).map((s) => {
          const isSel = selected.some((x) => x.id === s.id);
          const cls = s.isGap ? "gap" : isSel ? "selected" : s.status;
          return (
            <button key={s.id} className={`seat ${cls}`}
              disabled={s.isGap || s.status === "occupied" || s.status === "reserved"}
              onClick={() => toggleSeat(s)}>
              {s.isGap ? "" : (isSel ? <Check size={14} /> : s.id)}
            </button>
          );
        })}
      </div>
    </div>
  );

  return (
    <Screen>
      <TopBar title="Select your seats" onBack={() => go("busDetails")} />
      <div className="legend-row">
        <div className="legend-item"><span className="legend-swatch" style={{ background: "#fff", border: "1.5px solid var(--line)" }} /> Available</div>
        <div className="legend-item"><span className="legend-swatch" style={{ background: "var(--sky-deep)" }} /> Selected</div>
        <div className="legend-item"><span className="legend-swatch" style={{ background: "#F1F2F3" }} /> Occupied</div>
        <div className="legend-item"><span className="legend-swatch" style={{ background: "var(--female-soft)", border: "1.5px solid #F3CBDD" }} /> Female only</div>
        <div className="legend-item"><span className="legend-swatch" style={{ background: "var(--marigold-soft)", border: "1.5px solid #F1DCAE" }} /> Reserved</div>
      </div>
      {renderDeck("lower", "Lower deck · ₹1,699")}
      {renderDeck("upper", "Upper deck · ₹1,599")}
      <div style={{ height: 90 }} />
      <div className="sticky-bar">
        <div className="sticky-total">
          <div className="lbl">{selected.length ? `Selected: ${selected.map((s) => s.id).join(", ")}` : "No seats selected"}</div>
          <div className="val">₹{total || 0}</div>
        </div>
        <button className="btn-primary" disabled={!selected.length} onClick={() => go("boarding")}>Continue</button>
      </div>
    </Screen>
  );
}

/* ----------------------------------------------------------------------
   BOARDING / DROPPING
------------------------------------------------------------------------- */
function BoardingScreen({ boarding, setBoarding, dropping, setDropping, go }) {
  const [tab, setTab] = useState("board");
  const list = tab === "board" ? BOARDING_POINTS : DROPPING_POINTS;
  const current = tab === "board" ? boarding : dropping;
  const setCurrent = tab === "board" ? setBoarding : setDropping;

  return (
    <Screen>
      <TopBar title="Boarding & dropping point" onBack={() => go("seats")} />
      <div className="bd-tabs">
        <button className={`bd-tab ${tab === "board" ? "active" : ""}`} onClick={() => setTab("board")}>Boarding point</button>
        <button className={`bd-tab ${tab === "drop" ? "active" : ""}`} onClick={() => setTab("drop")}>Dropping point</button>
      </div>
      {list.map((p) => (
        <div key={p.name} className={`point-row ${current === p.name ? "selected" : ""}`} onClick={() => setCurrent(p.name)}>
          <div className={`radio-dot ${current === p.name ? "on" : ""}`} />
          <div style={{ flex: 1 }}>
            <div style={{ fontWeight: 700, fontSize: 14 }}>{p.name}</div>
            <div style={{ fontSize: 12, color: "var(--charcoal-soft)" }}>{p.note}</div>
          </div>
          <div style={{ fontWeight: 700, fontSize: 13, color: "var(--sky-deep)" }}>{p.time}</div>
        </div>
      ))}
      <div style={{ height: 90 }} />
      <div className="sticky-bar">
        <button className="btn-primary" disabled={!boarding || !dropping} onClick={() => go("passenger")}>
          Continue <ChevronRight size={16} />
        </button>
      </div>
    </Screen>
  );
}

/* ----------------------------------------------------------------------
   PASSENGER DETAILS
------------------------------------------------------------------------- */
function PassengerScreen({ selected, passengers, setPassengers, go }) {
  const update = (i, key, val) => {
    setPassengers((p) => {
      const next = [...p];
      next[i] = { ...next[i], [key]: val };
      return next;
    });
  };
  const primary = passengers[0] || {};
  const ready = primary.name && primary.age && primary.mobile;

  return (
    <Screen>
      <TopBar title="Passenger details" onBack={() => go("boarding")} />
      {selected.map((seat, i) => {
        const p = passengers[i] || {};
        return (
          <div key={seat.id}>
            <div className="passenger-tag">Seat {seat.id} <span style={{ color: "var(--charcoal-soft)", fontWeight: 500 }}>₹{seat.price}</span></div>
            <div className="form-group">
              <label className="form-label">Full name</label>
              <input className="form-input" placeholder="e.g. Aditi Rao" value={p.name || ""} onChange={(e) => update(i, "name", e.target.value)} />
            </div>
            <div style={{ display: "flex", gap: 12, padding: "0 20px", marginBottom: 14 }}>
              <div style={{ flex: 1 }}>
                <label className="form-label">Age</label>
                <input className="form-input" placeholder="28" value={p.age || ""} onChange={(e) => update(i, "age", e.target.value)} />
              </div>
              <div style={{ flex: 2 }}>
                <label className="form-label">Gender</label>
                <div className="gender-row">
                  {["Male", "Female", "Other"].map((g) => (
                    <button key={g} className={`gender-opt ${p.gender === g ? "active" : ""}`} onClick={() => update(i, "gender", g)}>{g}</button>
                  ))}
                </div>
              </div>
            </div>
            {i === 0 && (
              <>
                <div className="form-group">
                  <label className="form-label">Mobile number</label>
                  <input className="form-input" placeholder="+91 90000 00000" value={p.mobile || ""} onChange={(e) => update(i, "mobile", e.target.value)} />
                </div>
                <div className="form-group">
                  <label className="form-label">Email</label>
                  <input className="form-input" placeholder="you@example.com" value={p.email || ""} onChange={(e) => update(i, "email", e.target.value)} />
                </div>
                <div className="form-group">
                  <label className="form-label">Emergency contact</label>
                  <input className="form-input" placeholder="+91 90000 00001" value={p.emergency || ""} onChange={(e) => update(i, "emergency", e.target.value)} />
                </div>
              </>
            )}
          </div>
        );
      })}
      <div className="form-group" style={{ display: "flex", alignItems: "center", gap: 9 }}>
        <input type="checkbox" id="save-p" style={{ width: 17, height: 17 }} />
        <label htmlFor="save-p" style={{ fontSize: 12.5, color: "var(--charcoal-soft)" }}>Save these passenger details for faster booking next time</label>
      </div>
      <div style={{ height: 90 }} />
      <div className="sticky-bar">
        <button className="btn-primary" disabled={!ready} onClick={() => go("payment")}>Proceed to Pay <ChevronRight size={16} /></button>
      </div>
    </Screen>
  );
}

/* ----------------------------------------------------------------------
   PAYMENT
------------------------------------------------------------------------- */
function PaymentScreen({ selected, go, onPay }) {
  const [method, setMethod] = useState("upi");
  const [coupon, setCoupon] = useState("MMG100");
  const [applied, setApplied] = useState(true);
  const busFare = selected.reduce((s, x) => s + x.price, 0);
  const convenience = 49;
  const discount = applied ? 100 : 0;
  const taxes = Math.round((busFare + convenience - discount) * 0.05);
  const total = busFare + convenience + taxes - discount;

  const methods = [
    { id: "upi", label: "UPI", sub: "Google Pay, PhonePe, Paytm", icon: IndianRupee },
    { id: "card", label: "Credit / Debit Card", sub: "Visa, Mastercard, RuPay", icon: CardIcon },
    { id: "netbanking", label: "Net Banking", sub: "All major banks", icon: Landmark },
    { id: "wallet", label: "Wallets", sub: "Paytm, Amazon Pay", icon: Wallet },
  ];

  return (
    <Screen>
      <TopBar title="Secure checkout" onBack={() => go("passenger")} />
      <div className="section" style={{ paddingBottom: 0 }}>
        <div className="card" style={{ padding: 16 }}>
          <div className="fare-line"><span>Bus fare ({selected.length} seat{selected.length > 1 ? "s" : ""})</span><span>₹{busFare}</span></div>
          <div className="fare-line"><span>Convenience fee</span><span>₹{convenience}</span></div>
          <div className="fare-line"><span>Taxes</span><span>₹{taxes}</span></div>
          {applied && <div className="fare-line"><span>Coupon ({coupon})</span><span className="neg">−₹{discount}</span></div>}
          <div className="fare-line total"><span>Total amount</span><span>₹{total}</span></div>
        </div>
      </div>

      <div className="coupon-row" style={{ marginTop: 16 }}>
        <div style={{ display: "flex", alignItems: "center", gap: 9 }}>
          <Gift size={16} color="var(--marigold)" />
          <span style={{ fontSize: 13, fontWeight: 700 }}>{applied ? `${coupon} applied` : "Have a coupon?"}</span>
        </div>
        <button className="btn-ghost" style={{ color: "var(--marigold)" }} onClick={() => setApplied((a) => !a)}>
          {applied ? "Remove" : "Apply"}
        </button>
      </div>

      <div className="section" style={{ paddingTop: 0 }}>
        <div className="section-title">Choose payment method</div>
        {methods.map((m) => (
          <div key={m.id} className={`pay-opt ${method === m.id ? "active" : ""}`} onClick={() => setMethod(m.id)}>
            <div className="pay-ic"><m.icon size={17} /></div>
            <div style={{ flex: 1 }}>
              <div style={{ fontWeight: 700, fontSize: 13.5 }}>{m.label}</div>
              <div style={{ fontSize: 11.5, color: "var(--charcoal-soft)" }}>{m.sub}</div>
            </div>
            <div className={`radio-dot ${method === m.id ? "on" : ""}`} />
          </div>
        ))}
        <p style={{ fontSize: 11, color: "var(--charcoal-soft)", marginTop: 6 }}>Card details are processed securely and never stored on this device.</p>
      </div>

      <div style={{ height: 90 }} />
      <div className="sticky-bar">
        <button className="btn-primary" onClick={() => onPay(total)}>Pay ₹{total}</button>
      </div>
    </Screen>
  );
}

/* ----------------------------------------------------------------------
   TICKET
------------------------------------------------------------------------- */
function qrPattern(seed) {
  const cells = [];
  let s = seed;
  for (let i = 0; i < 49; i++) {
    s = (s * 9301 + 49297) % 233280;
    cells.push(s / 233280 > 0.5);
  }
  return cells;
}

function TicketScreen({ booking, go }) {
  if (!booking) return null;
  const cells = qrPattern(booking.id.length * 17 + 3);
  return (
    <Screen>
      <TopBar title="Your e-ticket" onBack={() => go("home")} />
      <div className="ticket-wrap">
        <div className="ticket-head">
          <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-start" }}>
            <div>
              <div style={{ fontWeight: 800, fontSize: 16 }}>Mallikarjuna Travels</div>
              <div style={{ fontSize: 11.5, opacity: 0.85 }}>Booking confirmed</div>
            </div>
            <ShieldCheck size={22} />
          </div>
          <div style={{ display: "flex", alignItems: "center", gap: 10, marginTop: 18 }}>
            <div>
              <div style={{ fontSize: 18, fontWeight: 800 }}>{booking.bus.from}</div>
              <div style={{ fontSize: 11, opacity: 0.85 }}>{booking.bus.dep}</div>
            </div>
            <div style={{ flex: 1, borderTop: "2px dotted rgba(255,255,255,0.6)" }} />
            <Bus size={16} />
            <div style={{ flex: 1, borderTop: "2px dotted rgba(255,255,255,0.6)" }} />
            <div style={{ textAlign: "right" }}>
              <div style={{ fontSize: 18, fontWeight: 800 }}>{booking.bus.to}</div>
              <div style={{ fontSize: 11, opacity: 0.85 }}>{booking.bus.arr}</div>
            </div>
          </div>
        </div>

        <div className="ticket-body">
          <div className="tk-grid">
            <div className="tk-item"><div className="lbl">Booking ID</div><div className="val">{booking.id}</div></div>
            <div className="tk-item"><div className="lbl">Passenger</div><div className="val">{booking.passengers[0]?.name || "Guest"}</div></div>
            <div className="tk-item"><div className="lbl">Bus number</div><div className="val">KA-05-{booking.bus.id}</div></div>
            <div className="tk-item"><div className="lbl">Bus type</div><div className="val">{booking.bus.type}</div></div>
            <div className="tk-item"><div className="lbl">Date</div><div className="val">{booking.date}</div></div>
            <div className="tk-item"><div className="lbl">Seat(s)</div><div className="val">{booking.seats.map((s) => s.id).join(", ")}</div></div>
            <div className="tk-item"><div className="lbl">Boarding</div><div className="val">{booking.boarding}</div></div>
            <div className="tk-item"><div className="lbl">Dropping</div><div className="val">{booking.dropping}</div></div>
          </div>

          <div className="ticket-perf">
            <div className="punch" style={{ left: -30 }} />
            <div className="punch" style={{ right: -30 }} />
            <div className="qr-box">
              <svg viewBox="0 0 7 7" width="100%" height="100%">
                {cells.map((on, i) => (
                  <rect key={i} x={i % 7} y={Math.floor(i / 7)} width="1" height="1" fill={on ? "#23262B" : "#fff"} />
                ))}
              </svg>
            </div>
            <p style={{ textAlign: "center", fontSize: 11, color: "var(--charcoal-soft)", marginTop: 10 }}>Show this QR code to the conductor while boarding</p>
          </div>
        </div>

        <div className="ticket-actions">
          <button className="btn-outline" style={{ display: "flex", alignItems: "center", justifyContent: "center", gap: 6 }}><Download size={15} /> Download</button>
          <button className="btn-outline" style={{ display: "flex", alignItems: "center", justifyContent: "center", gap: 6 }}><Share2 size={15} /> Share</button>
          <button className="btn-outline" style={{ display: "flex", alignItems: "center", justifyContent: "center", gap: 6 }}><CalendarPlus size={15} /> Add to Calendar</button>
          <button className="btn-primary" style={{ padding: 12, fontSize: 13 }} onClick={() => go("tracking")}><Navigation size={15} /> Track Bus</button>
        </div>
      </div>
      <div style={{ padding: "18px 20px" }}>
        <button className="btn-ghost" onClick={() => go("home")}>Back to home</button>
      </div>
    </Screen>
  );
}

/* ----------------------------------------------------------------------
   LIVE TRACKING
------------------------------------------------------------------------- */
function TrackingScreen({ go, booking }) {
  const stops = [
    { city: "Bengaluru", status: "done", note: "Departed · 8:00 PM" },
    { city: "Hindupur", status: "done", note: "Passed · 9:40 PM" },
    { city: "Anantapur", status: "current", note: "Current location · 10:55 PM" },
    { city: "Hyderabad", status: "pending", note: "ETA 5:20 AM" },
  ];
  return (
    <Screen>
      <TopBar title="Track your bus" onBack={() => go(booking ? "ticket" : "home")} />
      <div className="map-area">
        <svg width="100%" height="100%" viewBox="0 0 400 220">
          <path d="M20 190 C 100 60, 260 220, 380 40" stroke="#3E9EDB" strokeWidth="3" strokeDasharray="2 10" strokeLinecap="round" fill="none" />
          <circle cx="20" cy="190" r="6" fill="#2E9E67" />
          <circle cx="150" cy="130" r="6" fill="#2E9E67" />
          <circle cx="235" cy="150" r="8" fill="#0B6FB4" stroke="#fff" strokeWidth="3" />
          <circle cx="380" cy="40" r="6" fill="#E4E8EB" stroke="#B7BBC0" strokeWidth="2" />
        </svg>
        <div style={{ position: "absolute", top: 14, left: 14, background: "#fff", borderRadius: 10, padding: "8px 12px", boxShadow: "var(--shadow-card)" }}>
          <div style={{ fontSize: 11, color: "var(--charcoal-soft)", fontWeight: 600 }}>Estimated arrival</div>
          <div style={{ fontWeight: 800, fontSize: 15 }}>5:20 AM · Hyderabad</div>
        </div>
      </div>
      <div className="timeline" style={{ paddingTop: 18 }}>
        {stops.map((s, i) => (
          <div className="tl-item" key={s.city}>
            <div className="tl-marker">
              <div className={`tl-dot ${s.status === "done" ? "done" : s.status === "current" ? "current" : ""}`} />
              {i < stops.length - 1 && <div className={`tl-bar ${s.status === "done" ? "done" : ""}`} />}
            </div>
            <div className="tl-content">
              <div className="tl-city">{s.city}</div>
              <div className="tl-status">{s.note}</div>
            </div>
          </div>
        ))}
      </div>
      <div className="section" style={{ paddingTop: 0 }}>
        <button className="btn-outline"><LifeBuoy size={15} style={{ marginRight: 6 }} /> Contact driver / support</button>
      </div>
    </Screen>
  );
}

/* ----------------------------------------------------------------------
   MY BOOKINGS
------------------------------------------------------------------------- */
function BookingsScreen({ booking, go }) {
  const [tab, setTab] = useState("upcoming");
  const mock = {
    upcoming: booking ? [booking] : [],
    completed: [{ id: "MMG29013", bus: { from: "Bengaluru", to: "Chennai", dep: "10:30 PM", arr: "5:00 AM", type: "AC Seater", id: "MT210" }, date: "02 Sep", seats: [{ id: "L4" }], boarding: "Silk Board" }],
    cancelled: [{ id: "MMG28711", bus: { from: "Bengaluru", to: "Goa", dep: "9:00 PM", arr: "7:00 AM", type: "AC Sleeper", id: "MT330" }, date: "18 Aug", seats: [{ id: "U2" }], boarding: "Hebbal" }],
  };
  const list = mock[tab];
  return (
    <Screen>
      <TopBar title="My Bookings" />
      <div className="bd-tabs">
        {["upcoming", "completed", "cancelled"].map((t) => (
          <button key={t} className={`bd-tab ${tab === t ? "active" : ""}`} onClick={() => setTab(t)}>{t[0].toUpperCase() + t.slice(1)}</button>
        ))}
      </div>
      {list.length === 0 && (
        <div style={{ padding: 40, textAlign: "center", color: "var(--charcoal-soft)" }}>
          <TicketIcon size={30} style={{ marginBottom: 10 }} />
          <p style={{ fontSize: 13.5 }}>No {tab} bookings yet.</p>
        </div>
      )}
      {list.map((b) => (
        <div className="card booking-card" key={b.id}>
          <div className="booking-top">
            <div>
              <div style={{ fontWeight: 700, fontSize: 14.5 }}>{b.bus.from} → {b.bus.to}</div>
              <div style={{ fontSize: 12, color: "var(--charcoal-soft)", marginTop: 3 }}>{b.date} · {b.bus.dep} · Seat {b.seats.map((s) => s.id).join(", ")}</div>
            </div>
            <span className={`status-badge ${tab}`}>{tab}</span>
          </div>
          <div style={{ fontSize: 11.5, color: "var(--charcoal-soft)", marginTop: 10 }}>Booking ID: {b.id} · Boarding: {b.boarding}</div>
          <div className="booking-actions">
            {tab === "upcoming" && <button className="btn-outline" onClick={() => go("tracking")}>Track Bus</button>}
            <button className="btn-outline" onClick={() => tab === "upcoming" && go("ticket")}>View Ticket</button>
            {tab === "upcoming" && <button className="btn-outline" style={{ borderColor: "var(--danger)", color: "var(--danger)" }}>Cancel</button>}
          </div>
        </div>
      ))}
    </Screen>
  );
}

/* ----------------------------------------------------------------------
   PROFILE
------------------------------------------------------------------------- */
function ProfileScreen({ go, enterAdmin }) {
  const items = [
    { icon: UserCircle2, label: "Personal details" },
    { icon: Users, label: "Saved passengers" },
    { icon: TicketIcon, label: "My bookings", onClick: () => go("bookings") },
    { icon: MapPinned, label: "Favourite routes" },
    { icon: Bell, label: "Notifications" },
    { icon: Gift, label: "Coupons & offers" },
    { icon: CardIcon, label: "Payment methods" },
    { icon: LifeBuoy, label: "Help & support" },
    { icon: FileText, label: "Terms & conditions" },
    { icon: ShieldCheck, label: "Privacy policy" },
  ];
  return (
    <Screen>
      <div className="profile-head">
        <div className="avatar">AR</div>
        <div>
          <div style={{ fontWeight: 800, fontSize: 17 }}>Aditi Rao</div>
          <div style={{ fontSize: 12.5, opacity: 0.9 }}>+91 90000 00000</div>
        </div>
      </div>
      {items.map((it) => (
        <div className="menu-item" key={it.label} onClick={it.onClick}>
          <div className="menu-ic"><it.icon size={17} /></div>
          <div style={{ flex: 1, fontWeight: 600, fontSize: 13.5 }}>{it.label}</div>
          <ChevronRight size={16} color="var(--charcoal-soft)" />
        </div>
      ))}
      <div className="menu-item" style={{ color: "var(--danger)" }}>
        <div className="menu-ic" style={{ color: "var(--danger)" }}><LogOut size={17} /></div>
        <div style={{ flex: 1, fontWeight: 600, fontSize: 13.5 }}>Log out</div>
      </div>
      <div style={{ padding: "18px 20px 30px", textAlign: "center" }}>
        <button className="btn-ghost" onClick={enterAdmin}>MMG Partner & Admin Console →</button>
      </div>
    </Screen>
  );
}

/* ----------------------------------------------------------------------
   BOTTOM NAV
------------------------------------------------------------------------- */
function BottomNav({ screen, go }) {
  const items = [
    { key: "home", label: "Home", icon: Home },
    { key: "results", label: "Search", icon: Search },
    { key: "bookings", label: "Bookings", icon: TicketIcon },
    { key: "tracking", label: "Track", icon: Navigation },
    { key: "profile", label: "Profile", icon: UserCircle2 },
  ];
  return (
    <div className="bottom-nav">
      {items.map((it) => (
        <button key={it.key} className={`nav-item ${screen === it.key ? "active" : ""}`} onClick={() => go(it.key)}>
          <it.icon size={19} />
          {it.label}
        </button>
      ))}
    </div>
  );
}

/* ----------------------------------------------------------------------
   ADMIN CONSOLE
------------------------------------------------------------------------- */
const REVENUE_TREND = [
  { d: "Mon", r: 182000 }, { d: "Tue", r: 165000 }, { d: "Wed", r: 210000 },
  { d: "Thu", r: 198000 }, { d: "Fri", r: 265000 }, { d: "Sat", r: 312000 }, { d: "Sun", r: 289000 },
];
const ROUTE_OCC = [
  { route: "BLR–HYD", occ: 92 }, { route: "BLR–CHN", occ: 78 }, { route: "HYD–VJA", occ: 65 },
  { route: "BLR–GOA", occ: 84 }, { route: "BLR–PUN", occ: 57 },
];
const PIE_COLORS = ["#0B6FB4", "#3E9EDB", "#8FCBEF", "#E8A63A"];
const FLEET_MIX = [
  { name: "AC Sleeper", value: 46 }, { name: "AC Semi-Sleeper", value: 26 },
  { name: "AC Seater", value: 18 }, { name: "Non-AC", value: 10 },
];

function AdminOverview() {
  return (
    <>
      <div className="kpi-grid">
        <div className="kpi-card">
          <div className="k-lbl"><TicketIcon size={13} /> Total bookings</div>
          <div className="k-val">4,286</div>
          <div className="k-delta"><TrendingUp size={12} /> 12.4% vs last week</div>
        </div>
        <div className="kpi-card">
          <div className="k-lbl"><IndianRupee size={13} /> Today's revenue</div>
          <div className="k-val">₹3.1L</div>
          <div className="k-delta"><TrendingUp size={12} /> 8.1% vs yesterday</div>
        </div>
        <div className="kpi-card">
          <div className="k-lbl"><BarChart3 size={13} /> Occupancy</div>
          <div className="k-val">81%</div>
          <div className="k-delta"><TrendingUp size={12} /> 3.2 pts</div>
        </div>
        <div className="kpi-card">
          <div className="k-lbl"><Percent size={13} /> Cancellation rate</div>
          <div className="k-val">3.4%</div>
          <div className="k-delta" style={{ color: "var(--danger)" }}>0.6 pts</div>
        </div>
      </div>

      <div className="charts-row">
        <div className="panel">
          <div className="panel-title">Weekly revenue</div>
          <ResponsiveContainer width="100%" height={230}>
            <LineChart data={REVENUE_TREND}>
              <CartesianGrid stroke="#EEF1F3" vertical={false} />
              <XAxis dataKey="d" tick={{ fontSize: 11 }} axisLine={false} tickLine={false} />
              <YAxis tick={{ fontSize: 11 }} axisLine={false} tickLine={false} tickFormatter={(v) => `${v / 1000}k`} />
              <Tooltip formatter={(v) => [`₹${v.toLocaleString()}`, "Revenue"]} />
              <Line type="monotone" dataKey="r" stroke="#0B6FB4" strokeWidth={2.5} dot={{ r: 3 }} />
            </LineChart>
          </ResponsiveContainer>
        </div>
        <div className="panel">
          <div className="panel-title">Fleet mix</div>
          <ResponsiveContainer width="100%" height={230}>
            <PieChart>
              <Pie data={FLEET_MIX} dataKey="value" nameKey="name" innerRadius={50} outerRadius={80} paddingAngle={3}>
                {FLEET_MIX.map((_, i) => <Cell key={i} fill={PIE_COLORS[i % PIE_COLORS.length]} />)}
              </Pie>
              <Tooltip />
            </PieChart>
          </ResponsiveContainer>
        </div>
      </div>

      <div className="panel">
        <div className="panel-title">Occupancy by route</div>
        <ResponsiveContainer width="100%" height={220}>
          <BarChart data={ROUTE_OCC}>
            <CartesianGrid stroke="#EEF1F3" vertical={false} />
            <XAxis dataKey="route" tick={{ fontSize: 11 }} axisLine={false} tickLine={false} />
            <YAxis tick={{ fontSize: 11 }} axisLine={false} tickLine={false} unit="%" />
            <Tooltip />
            <Bar dataKey="occ" fill="#3E9EDB" radius={[6, 6, 0, 0]} />
          </BarChart>
        </ResponsiveContainer>
      </div>
    </>
  );
}

function AdminBuses() {
  return (
    <div className="panel">
      <div className="table-toolbar">
        <div className="panel-title" style={{ marginBottom: 0 }}>Fleet</div>
        <button className="btn-dark"><Plus size={14} /> Add bus</button>
      </div>
      <table className="admin-table">
        <thead><tr><th>Bus No.</th><th>Model</th><th>Type</th><th>Route</th><th>Status</th><th></th></tr></thead>
        <tbody>
          {BUSES.map((b) => (
            <tr key={b.id}>
              <td>KA-05-{b.id}</td>
              <td>{b.model}</td>
              <td>{b.type}</td>
              <td>{b.from} → {b.to}</td>
              <td><span className="pill-tag" style={{ background: "var(--success-soft)", color: "var(--success)" }}>Active</span></td>
              <td style={{ display: "flex", gap: 8 }}><Pencil size={14} color="var(--charcoal-soft)" /><Trash2 size={14} color="var(--danger)" /></td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

function AdminRoutes() {
  return (
    <div className="panel">
      <div className="table-toolbar">
        <div className="panel-title" style={{ marginBottom: 0 }}>Routes & schedules</div>
        <button className="btn-dark"><Plus size={14} /> Add route</button>
      </div>
      <table className="admin-table">
        <thead><tr><th>Route</th><th>Departures / day</th><th>Base fare</th><th>Boarding pts</th><th>Dropping pts</th></tr></thead>
        <tbody>
          {POPULAR_ROUTES.map((r) => (
            <tr key={r.from + r.to}>
              <td>{r.from} → {r.to}</td>
              <td>6</td>
              <td>₹{r.fare}</td>
              <td>{BOARDING_POINTS.length}</td>
              <td>{DROPPING_POINTS.length}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

function AdminBookings() {
  const rows = [
    { id: "MMG31042", route: "BLR–HYD", pax: "Aditi Rao", seats: "L5,L6", amount: 3398, status: "Confirmed" },
    { id: "MMG31038", route: "BLR–CHN", pax: "Ramesh K.", seats: "U3", amount: 899, status: "Confirmed" },
    { id: "MMG31029", route: "HYD–VJA", pax: "Farhan A.", seats: "L2", amount: 799, status: "Cancelled" },
  ];
  return (
    <div className="panel">
      <div className="panel-title">Recent bookings</div>
      <table className="admin-table">
        <thead><tr><th>Booking ID</th><th>Route</th><th>Passenger</th><th>Seats</th><th>Amount</th><th>Status</th></tr></thead>
        <tbody>
          {rows.map((r) => (
            <tr key={r.id}>
              <td>{r.id}</td><td>{r.route}</td><td>{r.pax}</td><td>{r.seats}</td><td>₹{r.amount}</td>
              <td><span className="pill-tag" style={{ background: r.status === "Confirmed" ? "var(--success-soft)" : "var(--danger-soft)", color: r.status === "Confirmed" ? "var(--success)" : "var(--danger)" }}>{r.status}</span></td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

function AdminOffers() {
  return (
    <div className="panel">
      <div className="table-toolbar">
        <div className="panel-title" style={{ marginBottom: 0 }}>Offers & coupons</div>
        <button className="btn-dark"><Plus size={14} /> New offer</button>
      </div>
      <table className="admin-table">
        <thead><tr><th>Code</th><th>Description</th><th>Used</th><th>Valid till</th><th></th></tr></thead>
        <tbody>
          {OFFERS.map((o) => (
            <tr key={o.code}>
              <td>{o.code}</td><td>{o.title} — {o.sub}</td><td>1,204</td><td>30 Sep 2026</td>
              <td style={{ display: "flex", gap: 8 }}><Pencil size={14} color="var(--charcoal-soft)" /><Trash2 size={14} color="var(--danger)" /></td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

function AdminConsole({ exitAdmin }) {
  const [tab, setTab] = useState("overview");
  const nav = [
    { key: "overview", label: "Overview", icon: BarChart3 },
    { key: "buses", label: "Buses", icon: Bus },
    { key: "routes", label: "Routes", icon: MapPinned },
    { key: "bookings", label: "Bookings", icon: TicketIcon },
    { key: "offers", label: "Offers", icon: Gift },
  ];
  return (
    <div className="admin-wrap">
      <div className="admin-shell">
        <div className="admin-side">
          <div className="brand-row"><Logo size={36} /><div><div className="brand-name" style={{ color: "#fff", fontSize: 14.5 }}>MMG Console</div><div className="brand-sub" style={{ color: "#8B96A2" }}>Mallikarjuna Travels</div></div></div>
          {nav.map((n) => (
            <button key={n.key} className={`admin-nav-item ${tab === n.key ? "active" : ""}`} onClick={() => setTab(n.key)}>
              <n.icon size={16} /> {n.label}
            </button>
          ))}
          <div style={{ marginTop: 20, borderTop: "1px solid #22303C", paddingTop: 14 }}>
            <button className="admin-nav-item" onClick={exitAdmin}><ChevronLeft size={16} /> Back to app</button>
          </div>
        </div>
        <div className="admin-main">
          <div className="admin-topline">
            <h2 style={{ fontSize: 20 }}>{nav.find((n) => n.key === tab)?.label}</h2>
            <button className="icon-btn" onClick={exitAdmin} style={{ display: "none" }} />
          </div>
          {tab === "overview" && <AdminOverview />}
          {tab === "buses" && <AdminBuses />}
          {tab === "routes" && <AdminRoutes />}
          {tab === "bookings" && <AdminBookings />}
          {tab === "offers" && <AdminOffers />}
        </div>
      </div>
    </div>
  );
}

/* ----------------------------------------------------------------------
   ROOT APP
------------------------------------------------------------------------- */
export default function App() {
  const [mode, setMode] = useState("customer");
  const [history, setHistory] = useState(["home"]);
  const screen = history[history.length - 1];

  const [form, setForm] = useState({ from: "Bengaluru", to: "Hyderabad", date: "20 Sep", dateChip: null });
  const [selectedBus, setSelectedBus] = useState(BUSES[0]);
  const [seats, setSeats] = useState(genSeats());
  const [selectedSeats, setSelectedSeats] = useState([]);
  const [boarding, setBoarding] = useState("Electronic City");
  const [dropping, setDropping] = useState("Miyapur");
  const [passengers, setPassengers] = useState([]);
  const [booking, setBooking] = useState(null);

  const go = (s) => setHistory((h) => [...h, s]);
  const goBack = (s) => setHistory((h) => (h.length > 1 ? h.slice(0, -1) : h));

  // simpler direct-go helper for bottom nav / cross links (resets stack branch)
  const navTo = (s) => setHistory((h) => [...h, s]);

  const swap = () => setForm((f) => ({ ...f, from: f.to, to: f.from }));

  const toggleSeat = (seat) => {
    setSelectedSeats((sel) => sel.some((s) => s.id === seat.id)
      ? sel.filter((s) => s.id !== seat.id)
      : [...sel, seat]);
  };

  const handlePay = (total) => {
    const newBooking = {
      id: "MMG" + Math.floor(30000 + Math.random() * 9000),
      bus: selectedBus,
      seats: selectedSeats,
      boarding, dropping,
      passengers,
      date: form.date,
      total,
    };
    setBooking(newBooking);
    go("ticket");
  };

  if (mode === "admin") {
    return (
      <div className="mmg-root" style={{ display: "block", padding: 0 }}>
        <GlobalStyle />
        <AdminConsole exitAdmin={() => setMode("customer")} />
      </div>
    );
  }

  const showBottomNav = ["home", "results", "bookings", "tracking", "profile"].includes(screen);

  return (
    <div className="mmg-root">
      <GlobalStyle />
      <div className="mmg-phone">
        {screen === "home" && <HomeScreen form={form} setForm={setForm} go={navTo} swap={swap} />}
        {screen === "results" && <ResultsScreen form={form} go={navTo} selectBus={setSelectedBus} />}
        {screen === "busDetails" && <BusDetailsScreen bus={selectedBus} go={navTo} />}
        {screen === "seats" && <SeatScreen seats={seats} selected={selectedSeats} toggleSeat={toggleSeat} go={navTo} />}
        {screen === "boarding" && <BoardingScreen boarding={boarding} setBoarding={setBoarding} dropping={dropping} setDropping={setDropping} go={navTo} />}
        {screen === "passenger" && <PassengerScreen selected={selectedSeats} passengers={passengers} setPassengers={setPassengers} go={navTo} />}
        {screen === "payment" && <PaymentScreen selected={selectedSeats} go={navTo} onPay={handlePay} />}
        {screen === "ticket" && <TicketScreen booking={booking} go={navTo} />}
        {screen === "tracking" && <TrackingScreen go={navTo} booking={booking} />}
        {screen === "bookings" && <BookingsScreen booking={booking} go={navTo} />}
        {screen === "profile" && <ProfileScreen go={navTo} enterAdmin={() => setMode("admin")} />}

        {showBottomNav && <BottomNav screen={screen} go={(s) => setHistory([s])} />}
      </div>
    </div>
  );
}
