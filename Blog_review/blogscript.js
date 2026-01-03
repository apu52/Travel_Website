/* Full-featured attractive blog front-end (no external libs) */
const NEW_POST_BTN = document.getElementById('newPostBtn');
const EDITOR = document.getElementById('editor');
const DROP_AREA = document.getElementById('dropArea');
const FILE_INPUT = document.getElementById('fileInput');
const ATTACH_FILE = document.getElementById('attachFile');
const PUBLISH_BTN = document.getElementById('publishBtn');
const CANCEL_BTN = document.getElementById('cancelBtn');
const TITLE = document.getElementById('title');
const CONTENT = document.getElementById('content');
const PREVIEW = document.getElementById('previewThumb');
const FEED = document.getElementById('feed');
const TEMPLATE = document.getElementById('cardTemplate');
const EXPORT_BTN = document.getElementById('exportBtn');
const IMPORT_BTN = document.getElementById('importBtn');
const IMPORT_FILE = document.getElementById('importFile');
const SEARCH = document.getElementById('search');
const FILTER_CATEGORY = document.getElementById('filterCategory');
const FILTER_TAG = document.getElementById('filterTag');
const CLEAR_FILTERS = document.getElementById('clearFilters');
const ADD_TAG_BTN = document.getElementById('addTagBtn');
const TAG_INPUT = document.getElementById('tagInput');
const CATEGORY_SELECT = document.getElementById('categorySelect');
const FORMAT_BUTTONS = document.querySelectorAll('.fmt');

let posts = JSON.parse(localStorage.getItem('awesome_blog_posts') || '[]');
let editingIndex = -1;
let stagedFile = null;
let stagedTags = [];

/* ---------- Centered modal/notification system with overlay, blur, icons, animations ---------- */
(function initNotificationSystem(){
  // inject minimal keyframes + utility styles
  const style = document.createElement('style');
  style.textContent = `
  @keyframes nn-fadeInScale { from { opacity: 0; transform: translateY(-6px) scale(.98); } to { opacity: 1; transform: translateY(0) scale(1); } }
  @keyframes nn-fadeOut { from { opacity: 1; } to { opacity: 0; } }
  .nn-overlay {
    position: fixed;
    inset: 0;
    background: rgba(0,0,0,0.48);
    backdrop-filter: blur(4px);
    z-index: 999998;
    display: flex;
    align-items: center;
    justify-content: center;
    pointer-events: auto;
  }
  .nn-popup {
    min-width: 300px;
    max-width: 92%;
    background: linear-gradient(160deg,#ffffff,#fbfdff);
    color: #06122b;
    border-radius: 12px;
    padding: 18px 18px;
    box-shadow: 0 18px 48px rgba(2,6,23,0.45);
    display: flex;
    gap: 12px;
    align-items: center;
    animation: nn-fadeInScale .22s ease;
    font-family: system-ui, -apple-system, "Segoe UI", Roboto, "Helvetica Neue", Arial;
  }
  .nn-popup.nn-success { background: linear-gradient(160deg,#f0fff4,#f7fffb); color: #0a4a2d; }
  .nn-popup.nn-error { background: linear-gradient(160deg,#fff5f5,#fffaf9); color: #6b0713; }
  .nn-icon {
    width: 36px;
    height: 36px;
    flex: 0 0 36px;
    display: inline-flex;
    align-items: center;
    justify-content: center;
    border-radius: 8px;
    background: rgba(255,255,255,0.6);
    box-shadow: 0 2px 6px rgba(0,0,0,0.06) inset;
  }
  .nn-text {
    flex: 1;
    font-size: 15px;
    font-weight: 600;
    line-height: 1.2;
  }
  .nn-controls { display: flex; gap: 10px; align-items: center; }
  .nn-btn {
    padding: 8px 12px;
    border-radius: 8px;
    border: none;
    cursor: pointer;
    font-weight: 700;
    font-size: 13px;
  }
  .nn-btn.ghost { background: transparent; border: 1px solid rgba(0,0,0,0.06); color: inherit; }
  .nn-btn.destructive { background: linear-gradient(90deg,#ffdfe0,#fff4f4); color: #8b0000; }
  .nn-btn.primary { background: linear-gradient(90deg,#e8f0ff,#f6fbff); color: #042a5f; }
  .nn-small { font-size: 13px; font-weight: 600; }
  `;
  document.head.appendChild(style);

  // overlay container reused for confirm modals; toasts will create ephemeral overlays without blocking
  function makeIcon(type){
    if(type === 'success'){
      return `<svg width="20" height="20" viewBox="0 0 24 24" fill="none" aria-hidden><path d="M20 6L9 17l-5-5" stroke="#0a4a2d" stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round"/></svg>`;
    } else if(type === 'error'){
      return `<svg width="18" height="18" viewBox="0 0 24 24" fill="none" aria-hidden><path d="M12 9v4M12 17h.01" stroke="#8b0000" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/><path d="M10.29 3.86L1.82 18a2 2 0 001.71 3h16.94a2 2 0 001.71-3L13.71 3.86a2 2 0 00-3.42 0z" stroke="#8b0000" stroke-width="1.2" stroke-linecap="round" stroke-linejoin="round" fill="rgba(255,240,240,0.9)"/></svg>`;
    } else {
      return `<svg width="18" height="18" viewBox="0 0 24 24" fill="none" aria-hidden><circle cx="12" cy="12" r="10" stroke="#094" stroke-width="1.2" fill="rgba(240,250,255,0.95)"/><path d="M12 8v5" stroke="#033" stroke-width="1.6" stroke-linecap="round"/><path d="M12 16h.01" stroke="#033" stroke-width="1.6" stroke-linecap="round"/></svg>`;
    }
  }

  // showToast: centered popup, non-blocking overlay (light), auto-dismiss
  window.showToast = function(message, type = 'info', timeout = 2200){
    // create a lightweight overlay wrapper so popup appears above content but also dims slightly
    const overlay = document.createElement('div');
    overlay.className = 'nn-overlay';
    overlay.style.background = 'transparent'; // keep overlay minimal for toasts
    overlay.style.pointerEvents = 'none'; // allow clicks through (except popup itself)
    overlay.style.zIndex = 999995;

    const popup = document.createElement('div');
    popup.className = 'nn-popup ' + (type === 'success' ? 'nn-success' : (type === 'error' ? 'nn-error' : ''));
    popup.style.pointerEvents = 'auto';

    const iconWrap = document.createElement('div');
    iconWrap.className = 'nn-icon';
    iconWrap.innerHTML = makeIcon(type);
    popup.appendChild(iconWrap);

    const text = document.createElement('div');
    text.className = 'nn-text';
    text.textContent = message;
    popup.appendChild(text);

    overlay.appendChild(popup);
    document.body.appendChild(overlay);

    // center specifics already handled by CSS flexbox on overlay
    // auto dismiss with fade-out
    const outDelay = Math.max(500, timeout - 200);
    setTimeout(() => {
      popup.style.transition = 'opacity .18s ease, transform .18s ease';
      popup.style.opacity = '0';
      popup.style.transform = 'scale(.98) translateY(-6px)';
    }, outDelay);
    setTimeout(() => { try { document.body.removeChild(overlay); } catch(e){} }, timeout);
  };

  /**
   * showConfirmToast:
   * - message: string
   * - onConfirm: function
   * - onCancel: function (optional)
   * - options: { confirmLabel, cancelLabel, destructive, dismissOnEsc }
   *
   * This displays a centered modal with dim overlay, blur, click outside to cancel, ESC to cancel.
   */
  window.showConfirmToast = function(message, onConfirm, onCancel, options = {}){
    const { confirmLabel = 'Delete', cancelLabel = 'Cancel', destructive = true, dismissOnEsc = true } = options;

    // big overlay to dim and blur background
    const overlay = document.createElement('div');
    overlay.className = 'nn-overlay';
    overlay.style.background = 'rgba(3,8,18,0.55)';
    overlay.style.zIndex = 999999;

    // popup content
    const popup = document.createElement('div');
    popup.className = 'nn-popup ' + (destructive ? 'nn-error' : '');
    popup.setAttribute('role', 'dialog');
    popup.setAttribute('aria-modal', 'true');

    const iconWrap = document.createElement('div');
    iconWrap.className = 'nn-icon';
    iconWrap.innerHTML = makeIcon(destructive ? 'error' : 'info');
    popup.appendChild(iconWrap);

    const text = document.createElement('div');
    text.className = 'nn-text';
    text.textContent = message;
    popup.appendChild(text);

    const controls = document.createElement('div');
    controls.className = 'nn-controls';

    const cancelBtn = document.createElement('button');
    cancelBtn.className = 'nn-btn ghost';
    cancelBtn.textContent = cancelLabel;
    cancelBtn.addEventListener('click', () => {
      cleanup();
      if(typeof onCancel === 'function') onCancel();
      // small feedback
      showToast('Cancelled', 'info', 1200);
    });

    const confirmBtn = document.createElement('button');
    confirmBtn.className = 'nn-btn ' + (destructive ? 'destructive' : 'primary');
    confirmBtn.textContent = confirmLabel;
    confirmBtn.addEventListener('click', () => {
      cleanup();
      if(typeof onConfirm === 'function') onConfirm();
    });

    controls.appendChild(cancelBtn);
    controls.appendChild(confirmBtn);

    // For vertical layout put controls below text
    const column = document.createElement('div');
    column.style.display = 'flex';
    column.style.flexDirection = 'column';
    column.style.width = '100%';
    column.style.alignItems = 'center';
    column.style.gap = '12px';
    column.appendChild(controls);

    // assemble
    const wrapper = document.createElement('div');
    wrapper.style.display = 'flex';
    wrapper.style.flexDirection = 'column';
    wrapper.style.alignItems = 'center';
    wrapper.style.gap = '12px';
    wrapper.style.width = '100%';
    wrapper.appendChild(popup);
    wrapper.appendChild(column);

    // replace overlay children with a centered container
    overlay.appendChild(wrapper);
    document.body.appendChild(overlay);

    // focus management
    confirmBtn.focus();

    // click outside to cancel
    function onOverlayClick(e){
      if(!wrapper.contains(e.target)){
        cleanup();
        if(typeof onCancel === 'function') onCancel();
        showToast('Cancelled', 'info', 1200);
      }
    }
    // but pointerEvents on overlay are active; use overlay listener
    overlay.addEventListener('pointerdown', function handlePointer(e){
      // if click target is overlay itself (outside wrapper), cancel
      if(e.target === overlay) {
        cleanup();
        if(typeof onCancel === 'function') onCancel();
        showToast('Cancelled', 'info', 1200);
      }
    });

    // ESC to cancel
    function onKey(e){
      if(e.key === 'Escape' && dismissOnEsc){
        cleanup();
        if(typeof onCancel === 'function') onCancel();
        showToast('Cancelled', 'info', 1200);
      }
    }
    document.addEventListener('keydown', onKey);

    // cleanup function
    function cleanup(){
      try { document.removeEventListener('keydown', onKey); } catch(e){}
      try { document.body.removeChild(overlay); } catch(e){}
    }

    // return object in case caller wants to programmatically remove
    return { remove: cleanup, confirmBtn, cancelBtn };
  };

})(); 
/* ---------- end notification system ---------- */

/* helpers */
const uid = () => Date.now().toString(36) + Math.random().toString(36).slice(2,7);
const save = () => localStorage.setItem('awesome_blog_posts', JSON.stringify(posts));
const fmt = ts => new Date(ts).toLocaleString();
const escapeHtml = s => (s||'').replace(/[&<>"']/g, m=>({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#039;'}[m]));
const truncate = (s,n=180) => (s||'').length>n ? s.slice(0,n)+'...' : (s||'');

/* Initialize with a welcome post if empty */
if(posts.length === 0){
  posts.push({
    id: uid(),
    title: "Welcome — try creating a post",
    content: "This sample blog supports image and video upload, tags, categories, search, import/export and editing. Click + New Post to try.",
    media: null,
    tags: ["welcome"],
    category: "Personal",
    createdAt: Date.now()
  });
  save();
}

/* UI wiring */
NEW_POST_BTN.addEventListener('click', ()=> openEditorForNew());
CANCEL_BTN.addEventListener('click', ()=> closeEditor());
DROP_AREA.addEventListener('click', ()=> FILE_INPUT.click());
DROP_AREA.addEventListener('keydown', e=> { if(e.key === 'Enter' || e.key === ' ') FILE_INPUT.click(); });

;['dragenter','dragover'].forEach(ev => {
  DROP_AREA.addEventListener(ev, e => { e.preventDefault(); DROP_AREA.classList.add('drag'); });
});
;['dragleave','drop'].forEach(ev => {
  DROP_AREA.addEventListener(ev, e => { e.preventDefault(); DROP_AREA.classList.remove('drag'); });
});
DROP_AREA.addEventListener('drop', e => {
  const f = e.dataTransfer.files && e.dataTransfer.files[0]; if(f) handleFile(f);
});
FILE_INPUT.addEventListener('change', ()=> { const f = FILE_INPUT.files[0]; if(f) handleFile(f); });
ATTACH_FILE && ATTACH_FILE.addEventListener('change', ()=> { const f = ATTACH_FILE.files[0]; if(f) handleFile(f); });

PUBLISH_BTN.addEventListener('click', publishPost);
EXPORT_BTN.addEventListener('click', exportPosts);
IMPORT_BTN.addEventListener('click', ()=> IMPORT_FILE.click());
IMPORT_FILE.addEventListener('change', importPosts);
SEARCH.addEventListener('input', render);
FILTER_CATEGORY.addEventListener('change', render);
FILTER_TAG.addEventListener('input', render);
CLEAR_FILTERS.addEventListener('click', ()=> { SEARCH.value=''; FILTER_CATEGORY.value=''; FILTER_TAG.value=''; render(); });

ADD_TAG_BTN && ADD_TAG_BTN.addEventListener('click', ()=> { TAG_INPUT.focus(); });
TAG_INPUT.addEventListener('keydown', e=> {
  if(e.key === 'Enter'){ e.preventDefault(); const v = TAG_INPUT.value.trim(); if(v){ stagedTags.push(v); updateTagInput(); TAG_INPUT.value=''; } }
});

FORMAT_BUTTONS.forEach(b => b.addEventListener('click', ()=> {
  const ins = b.dataset.ins || '';
  const el = CONTENT;
  const start = el.selectionStart, end = el.selectionEnd;
  const before = el.value.slice(0,start), after = el.value.slice(end);
  el.value = before + ins + el.value.slice(start,end) + (ins.includes(' ') ? '' : ins) + after;
  el.focus(); // no render necessary here for editor changes
}));

/* file handling */
function handleFile(file){
  const reader = new FileReader();
  reader.onload = e => {
    stagedFile = { name: file.name, type: file.type, data: e.target.result };
    showPreview(stagedFile);
  };
  reader.readAsDataURL(file);
}
function showPreview(f){
  PREVIEW.classList.remove('hidden');
  PREVIEW.innerHTML = '';
  if(!f) return;
  if((f.type || '').startsWith('image/')){
    const img = document.createElement('img'); img.src = f.data; PREVIEW.appendChild(img);
  } else if((f.type || '').startsWith('video/')){
    const vid = document.createElement('video'); vid.src = f.data; vid.controls = true; PREVIEW.appendChild(vid);
  } else {
    PREVIEW.textContent = f.name;
  }
}

/* editor open/close */
function openEditorForNew(){
  editingIndex = -1; stagedFile = null; stagedTags = [];
  TITLE.value=''; CONTENT.value=''; PREVIEW.classList.add('hidden'); PREVIEW.innerHTML='';
  CATEGORY_SELECT.value = ''; TAG_INPUT.value='';
  document.getElementById('editorTitle').textContent = 'Create New Post';
  EDITOR.classList.remove('hidden'); EDITOR.setAttribute('aria-hidden','false'); window.scrollTo({top:0,behavior:'smooth'});
}
function openEditorForEdit(index){
  editingIndex = index;
  const p = posts[index];
  TITLE.value = p.title; CONTENT.value = p.content; stagedFile = p.media || null; stagedTags = p.tags ? [...p.tags] : [];
  CATEGORY_SELECT.value = p.category || '';
  if(stagedFile) showPreview(stagedFile); else { PREVIEW.classList.add('hidden'); PREVIEW.innerHTML=''; }
  document.getElementById('editorTitle').textContent = 'Edit Post';
  EDITOR.classList.remove('hidden'); EDITOR.setAttribute('aria-hidden','false'); window.scrollTo({top:0,behavior:'smooth'});
}
function closeEditor(){
  EDITOR.classList.add('hidden'); EDITOR.setAttribute('aria-hidden','true');
  TITLE.value=''; CONTENT.value=''; stagedFile=null; PREVIEW.classList.add('hidden'); PREVIEW.innerHTML=''; stagedTags=[];
}

/* tags UI */
function updateTagInput(){
  // small visual of tags under the tag input
  const show = document.querySelector('.tag-preview');
  if(show) show.remove();
  const div = document.createElement('div'); div.className='tag-preview';
  stagedTags.forEach(t=>{
    const span = document.createElement('span'); span.className='tag'; span.textContent = t;
    span.addEventListener('click', ()=> { stagedTags = stagedTags.filter(x=>x!==t); updateTagInput(); });
    div.appendChild(span);
  });
  const editorFields = document.querySelector('.editor-fields');
  const controls = document.querySelector('.editor-controls');
  if(editorFields && controls) editorFields.insertBefore(div, controls);
}

/* publish */
function publishPost(){
  const title = TITLE.value.trim(); const content = CONTENT.value.trim();
  const category = CATEGORY_SELECT.value || '';
  if(!title || !content){ showToast('Please add title and content.', 'error'); return; }
  const post = {
    id: editingIndex>=0 ? posts[editingIndex].id : uid(),
    title, content, media: stagedFile || null, tags: stagedTags.slice(), category, createdAt: Date.now()
  };
  if(editingIndex>=0) posts[editingIndex] = post; else posts.unshift(post);
  save(); render(); closeEditor();
  showToast(editingIndex>=0 ? 'Post updated.' : 'Post published.', 'success');
}

/* render feed with filters search */
function render(){
  FEED.innerHTML = '';
  const q = (SEARCH.value || '').toLowerCase();
  const cat = FILTER_CATEGORY.value || '';
  const tag = (FILTER_TAG.value || '').toLowerCase();

  const filtered = posts.filter(p=>{
    if(cat && p.category !== cat) return false;
    if(tag && !(p.tags || []).some(t => t.toLowerCase().includes(tag))) return false;
    if(q){
      return (p.title && p.title.toLowerCase().includes(q)) || (p.content && p.content.toLowerCase().includes(q));
    }
    return true;
  });

  if(filtered.length === 0){
    FEED.innerHTML = '<div class="card muted">No posts match your filters — try creating a new post.</div>';
    return;
  }

  filtered.forEach((p, idx)=>{
    const t = TEMPLATE.content.cloneNode(true);
    const article = t.querySelector('.post-card');
    const mediaWrap = t.querySelector('.media-wrap');
    const title = t.querySelector('.post-title');
    const meta = t.querySelector('.post-meta');
    const excerpt = t.querySelector('.post-excerpt');
    const fullContent = t.querySelector('.full-content');
    const tagRow = t.querySelector('.tag-row');

    title.textContent = p.title;
    meta.textContent = `${p.category ? p.category + ' • ' : ''}${fmt(p.createdAt)}`;
    excerpt.textContent = truncate(p.content, 140);
    fullContent.textContent = p.content;
    fullContent.classList.add('hidden');

    // tags
    (p.tags || []).forEach(tag => {
      const s = document.createElement('span'); s.className='tag'; s.textContent = tag;
      s.addEventListener('click', ()=> { FILTER_TAG.value = tag; render(); });
      tagRow.appendChild(s);
    });

    // media
    if(p.media){
      if((p.media.type || '').startsWith('image/')){
        const img = document.createElement('img'); img.src = p.media.data; mediaWrap.appendChild(img);
      } else if((p.media.type || '').startsWith('video/')){
        const vid = document.createElement('video'); vid.src = p.media.data; vid.controls = true; mediaWrap.appendChild(vid);
      } else {
        mediaWrap.textContent = p.media.name;
      }
    } else {
      mediaWrap.style.background = `linear-gradient(135deg, rgba(255,255,255,0.02), rgba(0,0,0,0.03))`;
      mediaWrap.innerHTML = `<div style="padding:18px;color:var(--muted)">${escapeHtml(p.title)}</div>`;
    }

    const readBtn = t.querySelector('.read-btn');
    const editBtn = t.querySelector('.edit-btn');
    const delBtn = t.querySelector('.del-btn');

    // Read toggles inline expansion (no modal)
    readBtn.addEventListener('click', ()=> {
      const isHidden = fullContent.classList.contains('hidden');
      if(isHidden){
        // show full content and change button label
        fullContent.classList.remove('hidden');
        excerpt.classList.add('hidden');
        readBtn.textContent = 'Collapse';
      } else {
        // hide full content and show excerpt
        fullContent.classList.add('hidden');
        excerpt.classList.remove('hidden');
        readBtn.textContent = 'Read';
      }
    });

    editBtn.addEventListener('click', ()=> {
      const index = posts.findIndex(x => x.id === p.id);
      if(index >= 0) openEditorForEdit(index);
    });

    // NEW: custom confirm modal (centered overlay with blur/dim and icons)
    delBtn.addEventListener('click', ()=> {
      showConfirmToast(
        'Delete this post? This action cannot be undone.',
        () => { // onConfirm
          posts = posts.filter(x=>x.id !== p.id);
          save();
          render();
          showToast('Post deleted.', 'success');
        },
        () => { // onCancel
          // onCancel handled by showConfirmToast (small toast shown there), no extra action needed
        },
        { confirmLabel: 'Delete', cancelLabel: 'Cancel', destructive: true, dismissOnEsc: true }
      );
    });

    FEED.appendChild(t);
  });
}

/* export/import */
function exportPosts(){
  const a = document.createElement('a'); a.href = 'data:application/json;charset=utf-8,'+encodeURIComponent(JSON.stringify(posts, null, 2));
  a.download = 'blog_posts_export.json'; document.body.appendChild(a); a.click(); a.remove();
  showToast('Export started — check your downloads.', 'info');
}
function importPosts(){
  const f = IMPORT_FILE.files[0]; if(!f) return;
  const r = new FileReader();
  r.onload = e => {
    try {
      const imported = JSON.parse(e.target.result);
      if(Array.isArray(imported)){
        posts = imported.concat(posts); save(); render(); showToast('Imported '+imported.length+' posts.', 'success');
      } else showToast('Invalid file format.', 'error');
    } catch(err){ showToast('Failed to import: ' + err.message, 'error'); }
  };
  r.readAsText(f);
}

/* initial render */
render();
