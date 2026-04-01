import React from "react";

export const BootstrapCSS = () => (
  <>
    <link
      rel="stylesheet"
      href="https://cdnjs.cloudflare.com/ajax/libs/bootstrap/5.3.2/css/bootstrap.min.css"
    />
    <link
      rel="stylesheet"
      href="https://fonts.googleapis.com/css2?family=Google+Sans:wght@400;500;600;700&family=Roboto:wght@300;400;500&display=swap"
    />
  </>
);

export const AppStyles = () => (
  <style>{`
    :root {
      --g-blue:#1a73e8;--g-blue-h:#1557b0;--g-blue-l:#e8f0fe;--g-blue-m:#d2e3fc;
      --g-red:#d93025;--g-green:#1e8e3e;--g-yellow:#f9ab00;
      --g-surface:#fff;--g-bg:#f1f3f4;--g-border:#e0e0e0;
      --g-text:#202124;--g-muted:#5f6368;--g-light:#80868b;
      --sidebar-w:268px;--sidebar-col:72px;--header-h:64px;
    }
    *{box-sizing:border-box}
    body{font-family:'Roboto',sans-serif;background:var(--g-bg);color:var(--g-text);overflow-x:hidden}
    .app-root{display:flex;min-height:100vh}
    .main-content{flex:1;transition:margin-left .25s;min-height:100vh;background:var(--g-bg)}
    .main-content.s-open{margin-left:var(--sidebar-w)}
    .main-content.s-closed{margin-left:var(--sidebar-col)}

    /* Sidebar */
    .g-sidebar{width:var(--sidebar-w);background:var(--g-surface);position:fixed;left:0;top:0;bottom:0;z-index:200;
      transition:width .25s;overflow:hidden;display:flex;flex-direction:column;border-right:1px solid var(--g-border)}
    .g-sidebar.collapsed{width:var(--sidebar-col)}
    .sb-header{height:var(--header-h);display:flex;align-items:center;padding:0 16px;gap:12px;flex-shrink:0}
    .hmbg{width:40px;height:40px;border-radius:50%;border:none;background:transparent;display:flex;align-items:center;
      justify-content:center;cursor:pointer;color:var(--g-muted);transition:background .15s;flex-shrink:0}
    .hmbg:hover{background:var(--g-bg)}
    .sb-logo{display:flex;align-items:center;gap:8px;text-decoration:none;white-space:nowrap}
    .sb-logo-text{font-family:'Google Sans',sans-serif;font-size:18px;font-weight:400;color:var(--g-text)}
    .sb-logo-text span{color:var(--g-muted);font-weight:300}
    .sb-nav{flex:1;overflow-y:auto;padding:8px 0}
    .sb-nav::-webkit-scrollbar{width:4px}
    .sb-nav::-webkit-scrollbar-thumb{background:#ccc;border-radius:4px}
    .sb-sec{font-size:11px;font-weight:600;color:var(--g-muted);text-transform:uppercase;
      letter-spacing:.8px;padding:12px 20px 4px;white-space:nowrap}
    .g-sidebar.collapsed .sb-sec{opacity:0;pointer-events:none}
    .nav-i{display:flex;align-items:center;gap:14px;padding:0 14px;height:48px;border-radius:24px;
      margin:2px 8px;cursor:pointer;color:var(--g-text);text-decoration:none;
      transition:background .15s;white-space:nowrap;overflow:hidden}
    .nav-i:hover{background:var(--g-bg);color:var(--g-text);text-decoration:none}
    .nav-i.active{background:var(--g-blue-l);color:var(--g-blue);font-weight:500}
    .nav-ico{width:22px;height:22px;display:flex;align-items:center;justify-content:center;
      flex-shrink:0;color:var(--g-muted)}
    .nav-i.active .nav-ico{color:var(--g-blue)}
    .nav-lbl{font-size:14px;font-family:'Google Sans',sans-serif}
    .nav-badge{margin-left:auto;border-radius:12px;padding:1px 8px;font-size:11px;font-weight:700;flex-shrink:0}
    .sb-div{height:1px;background:var(--g-border);margin:8px 16px}

    /* TopBar */
    .g-topbar{height:var(--header-h);display:flex;align-items:center;padding:0 16px;gap:12px;
      background:var(--g-surface);border-bottom:1px solid var(--g-border);
      position:sticky;top:0;z-index:100}
    .g-search{flex:1;max-width:720px;height:46px;background:var(--g-bg);border-radius:23px;
      display:flex;align-items:center;padding:0 20px;gap:12px;
      transition:box-shadow .2s,background .2s;border:1px solid transparent}
    .g-search:focus-within{background:#fff;box-shadow:0 1px 3px rgba(60,64,67,.3),0 4px 8px 3px rgba(60,64,67,.15)}
    .g-search input{flex:1;border:none;background:transparent;font-size:16px;
      font-family:'Roboto',sans-serif;color:var(--g-text);outline:none}
    .g-search input::placeholder{color:var(--g-muted)}
    .ico-btn{width:40px;height:40px;border-radius:50%;border:none;background:transparent;
      display:flex;align-items:center;justify-content:center;cursor:pointer;
      color:var(--g-muted);transition:background .15s;text-decoration:none}
    .ico-btn:hover{background:var(--g-bg);color:var(--g-text)}
    .g-avatar{width:36px;height:36px;border-radius:50%;background:linear-gradient(135deg,#4285F4,#34A853);
      display:flex;align-items:center;justify-content:center;color:#fff;
      font-weight:700;font-size:14px;cursor:pointer;border:none;font-family:'Google Sans',sans-serif}

    /* Page */
    .page-wrap{padding:16px 24px}
    .page-ttl{font-family:'Google Sans',sans-serif;font-size:22px;font-weight:400}

    /* FAB */
    .g-fab{position:fixed;bottom:32px;right:32px;width:56px;height:56px;border-radius:16px;
      background:var(--g-blue-l);color:var(--g-blue);border:none;display:flex;align-items:center;
      justify-content:center;cursor:pointer;z-index:50;text-decoration:none;
      box-shadow:0 1px 3px rgba(60,64,67,.3),0 4px 8px 3px rgba(60,64,67,.15);
      transition:all .2s}
    .g-fab:hover{background:var(--g-blue-m);color:var(--g-blue);transform:scale(1.05)}

    /* Contact row */
    .c-row{display:flex;align-items:center;padding:4px 12px;border-radius:8px;
      cursor:pointer;transition:background .15s;text-decoration:none;color:inherit}
    .c-row:hover{background:var(--g-bg);text-decoration:none;color:inherit}
    .c-row:hover .c-acts{opacity:1}
    .c-row.sel{background:var(--g-blue-l)}
    .c-chk{width:44px;flex-shrink:0;display:flex;align-items:center;justify-content:center}
    .c-av{width:40px;height:40px;border-radius:50%;display:flex;align-items:center;
      justify-content:center;font-size:15px;font-weight:600;color:#fff;flex-shrink:0;
      font-family:'Google Sans',sans-serif}
    .c-info{flex:1;padding:0 14px;min-width:0}
    .c-name{font-size:14px;font-weight:500;font-family:'Google Sans',sans-serif;
      white-space:nowrap;overflow:hidden;text-overflow:ellipsis}
    .c-sub{font-size:13px;color:var(--g-muted);white-space:nowrap;overflow:hidden;text-overflow:ellipsis}
    .c-email{width:220px;font-size:13px;color:var(--g-muted);flex-shrink:0;
      white-space:nowrap;overflow:hidden;text-overflow:ellipsis}
    .c-phone{width:160px;font-size:13px;color:var(--g-muted);flex-shrink:0}
    .c-acts{display:flex;gap:4px;opacity:0;transition:opacity .15s;flex-shrink:0}
    .grp-lbl{font-family:'Google Sans',sans-serif;font-size:13px;font-weight:500;
      color:var(--g-blue);padding:12px 16px 4px;display:flex;align-items:center;gap:12px}
    .grp-lbl::after{content:'';flex:1;height:1px;background:var(--g-border)}

    /* Detail */
    .detail-wrap{max-width:800px;padding:24px}
    .d-hero{background:var(--g-surface);border-radius:24px;padding:40px 32px;
      display:flex;align-items:center;gap:32px;margin-bottom:16px;
      box-shadow:0 1px 2px rgba(60,64,67,.3),0 1px 3px rgba(60,64,67,.15)}
    .d-av{width:96px;height:96px;border-radius:50%;display:flex;align-items:center;
      justify-content:center;font-size:40px;font-weight:600;color:#fff;flex-shrink:0;
      font-family:'Google Sans',sans-serif}
    .d-section{background:var(--g-surface);border-radius:24px;padding:24px 32px;
      margin-bottom:12px;box-shadow:0 1px 2px rgba(60,64,67,.3),0 1px 3px rgba(60,64,67,.15)}
    .d-section h6{font-family:'Google Sans',sans-serif;font-size:12px;font-weight:600;
      color:var(--g-blue);text-transform:uppercase;letter-spacing:.8px;margin-bottom:16px}
    .d-field{display:flex;align-items:flex-start;gap:20px;padding:10px 0;
      border-bottom:1px solid #f5f5f5}
    .d-field:last-child{border-bottom:none}
    .d-fv{font-size:15px;color:var(--g-text)}
    .d-fl{font-size:12px;color:var(--g-muted);margin-top:2px}

    /* Buttons */
    .btn-act{display:flex;align-items:center;gap:8px;padding:8px 20px;border-radius:20px;
      font-size:14px;font-weight:500;font-family:'Google Sans',sans-serif;cursor:pointer;
      border:1px solid var(--g-border);background:var(--g-surface);color:var(--g-muted);
      transition:all .15s;text-decoration:none}
    .btn-act:hover{background:var(--g-bg);border-color:#ccc;color:var(--g-text);text-decoration:none}
    .btn-act.primary{background:var(--g-blue);color:#fff;border-color:var(--g-blue)}
    .btn-act.primary:hover{background:var(--g-blue-h)}
    .btn-act.danger{color:var(--g-red);border-color:#fcc}
    .btn-act.danger:hover{background:#fef0f0}

    /* Form */
    .form-wrap{max-width:680px;padding:24px}
    .form-card{background:var(--g-surface);border-radius:24px;overflow:hidden;
      box-shadow:0 1px 2px rgba(60,64,67,.3),0 1px 3px rgba(60,64,67,.15)}
    .form-head{padding:28px 32px 20px;border-bottom:3px solid var(--g-blue);
      background:linear-gradient(135deg,#fff 60%,#f0f4ff)}
    .form-sec-lbl{font-family:'Google Sans',sans-serif;font-size:12px;font-weight:600;
      color:var(--g-blue);text-transform:uppercase;letter-spacing:.8px;
      padding-bottom:8px;border-bottom:1px solid #e8eaed}
    .form-body{padding:28px 32px;display:flex;flex-direction:column;gap:20px}
    .form-footer{padding:16px 32px;border-top:1px solid var(--g-border);
      background:#f8f9fa;display:flex;justify-content:flex-end;gap:10px}
    .mat-f{position:relative}
    .mat-f label{position:absolute;top:50%;left:13px;transform:translateY(-50%);
      font-size:16px;color:var(--g-muted);pointer-events:none;
      transition:all .2s cubic-bezier(.4,0,.2,1);background:#fff;padding:0 4px}
    .mat-f.up label,.mat-f.foc label{top:0;font-size:12px;color:var(--g-blue)}
    .mat-f.err label{color:var(--g-red)}
    .mat-f input,.mat-f select,.mat-f textarea{width:100%;border:1px solid #dadce0;
      border-radius:8px;padding:15px 13px;font-size:16px;font-family:'Roboto',sans-serif;
      color:var(--g-text);background:transparent;outline:none;appearance:none;transition:border .2s}
    .mat-f input:focus,.mat-f select:focus,.mat-f textarea:focus{border:2px solid var(--g-blue);padding:14px 12px}
    .mat-f.err input,.mat-f.err select{border-color:var(--g-red)}
    .mat-f textarea{resize:vertical;min-height:90px}
    .mat-err{font-size:12px;color:var(--g-red);margin-top:3px;padding-left:13px}

    /* Bulk bar */
    .bulk-bar{display:flex;align-items:center;gap:12px;padding:8px 16px;
      background:var(--g-blue-l);border-radius:8px;margin-bottom:8px;
      font-size:14px;color:var(--g-blue);font-family:'Google Sans',sans-serif}

    /* Chip */
    .g-chip{display:inline-flex;align-items:center;gap:4px;padding:4px 12px;
      border-radius:16px;font-size:12px;font-weight:500;font-family:'Google Sans',sans-serif}

    /* Toast */
    .g-toast-wrap{position:fixed;bottom:24px;left:50%;transform:translateX(-50%);z-index:9999}
    .g-toast{background:#323232;color:#fff;padding:12px 24px;border-radius:8px;
      font-size:14px;font-family:'Google Sans',sans-serif;display:flex;align-items:center;gap:16px;
      box-shadow:0 1px 3px rgba(60,64,67,.3),0 4px 8px 3px rgba(60,64,67,.15);
      animation:gSlide .3s ease}
    @keyframes gSlide{from{transform:translateY(20px);opacity:0}to{transform:translateY(0);opacity:1}}
    .g-toast-act{color:#8ab4f8;cursor:pointer;font-weight:500}

    /* Back btn */
    .back-btn{display:flex;align-items:center;gap:6px;color:var(--g-muted);font-size:14px;
      cursor:pointer;background:none;border:none;padding:8px 0;transition:color .15s;
      font-family:'Google Sans',sans-serif;text-decoration:none}
    .back-btn:hover{color:var(--g-text);text-decoration:none}

    /* Empty */
    .empty-st{display:flex;flex-direction:column;align-items:center;
      justify-content:center;padding:80px 40px;text-align:center;gap:16px}

    /* Responsive */
    @media(max-width:768px){
      .g-sidebar{width:var(--sidebar-col)!important}
      .main-content{margin-left:var(--sidebar-col)!important}
      .c-email,.c-phone{display:none}
      .d-hero{flex-direction:column;text-align:center}
    }
    input[type="checkbox"]{accent-color:var(--g-blue)}
    a{text-decoration:none}
  `}</style>
);
