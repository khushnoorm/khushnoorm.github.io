const CONTENT=[
 {title:'संख्या पद्धति',type:'अध्याय',meta:'कक्षा 9 • गणित',url:'class-9-math-chapter-1-notes.html',keys:'number system वास्तविक परिमेय irrational'},
 {title:'बहुपद',type:'अध्याय',meta:'कक्षा 9 • गणित',url:'class-9-math-chapter-1-notes.html#related',keys:'polynomial algebra बीजगणित'},
 {title:'गति और बल',type:'नोट्स',meta:'कक्षा 9 • विज्ञान',url:'search.html?q=बल',keys:'force motion speed physics गति बल'},
 {title:'प्रकाश — परावर्तन',type:'अध्याय',meta:'कक्षा 10 • विज्ञान',url:'search.html?q=प्रकाश',keys:'light reflection science'},
 {title:'प्रतिशत कैलकुलेटर',type:'टूल',meta:'गणित लैब',url:'math-lab.html#calculator',keys:'percentage calculator प्रतिशत'},
 {title:'संख्या पद्धति क्विज़',type:'टेस्ट',meta:'10/20/50 प्रश्न • समयबद्ध',url:'test.html',keys:'mcq mock number system test timed online'},
 {title:'50 प्रश्न अभ्यास — संख्या पद्धति',type:'अभ्यास',meta:'कक्षा 9 • गणित • Easy/Moderate/Hard',url:'class-9-math-chapter-1-questions.html',keys:'50 questions practice number system hard moderate easy solutions'},
 {title:'BPSC सामान्य अध्ययन',type:'परीक्षा',meta:'प्रतियोगी परीक्षा',url:'search.html?q=BPSC',keys:'bihar competitive general studies'},
 {title:'SSC गणित अभ्यास',type:'टेस्ट',meta:'प्रतियोगी परीक्षा',url:'test.html',keys:'ssc quantitative aptitude'}
];
const $=(s,p=document)=>p.querySelector(s), $$=(s,p=document)=>[...p.querySelectorAll(s)];
function setTheme(theme){document.documentElement.dataset.theme=theme;localStorage.setItem('theme',theme);const b=$('#themeBtn');if(b)b.textContent=theme==='dark'?'☀️':'🌙'}
setTheme(localStorage.getItem('theme')|| (matchMedia('(prefers-color-scheme:dark)').matches?'dark':'light'));
function toggleTheme(){setTheme(document.documentElement.dataset.theme==='dark'?'light':'dark')}
function toggleMenu(){const n=$('#mobileNav');n.classList.toggle('open');$('#menuBtn').setAttribute('aria-expanded',n.classList.contains('open'))}
function toggleLang(){const english=document.documentElement.lang==='en';document.documentElement.lang=english?'hi':'en';$('#langBtn').textContent=english?'EN':'हि';toast(english?'हिंदी इंटरफ़ेस चुना गया':'English interface selected')}
function toast(msg){$('.toast')?.remove();const t=document.createElement('div');t.className='toast';t.setAttribute('role','status');t.textContent=msg;document.body.append(t);setTimeout(()=>t.remove(),2400)}
function searchSuggest(input,box){const q=input.value.trim().toLowerCase();if(!q){box.innerHTML='';return}const hits=CONTENT.filter(x=>(x.title+x.meta+x.keys).toLowerCase().includes(q)).slice(0,5);box.innerHTML=hits.length?hits.map(x=>`<a href="${x.url}"><b>${x.title}</b><br><small>${x.type} • ${x.meta}</small></a>`).join(''):`<a href="search.html?q=${encodeURIComponent(q)}">“${q}” के लिए सभी परिणाम देखें →</a>`}
function initSearch(){ $$('.global-search').forEach(input=>{const box=input.parentElement.querySelector('.search-suggestions');input.addEventListener('input',()=>searchSuggest(input,box));input.addEventListener('keydown',e=>{if(e.key==='Enter') location.href=`search.html?q=${encodeURIComponent(input.value)}`})}) }
function toggleFaq(btn){btn.parentElement.classList.toggle('open');btn.setAttribute('aria-expanded',btn.parentElement.classList.contains('open'))}
function toggleBookmark(){const key='bookmarked-number-system',value=localStorage.getItem(key)!=='1';localStorage.setItem(key,value?'1':'0');$('#bookmarkBtn').textContent=value?'★ बुकमार्क किया':'☆ बुकमार्क';toast(value?'बुकमार्क में जोड़ा गया':'बुकमार्क हटाया गया')}
function completeLesson(){localStorage.setItem('lesson-number-system','complete');$('#completeBtn').textContent='✓ पूरा किया';$('#completeBtn').classList.add('btn-ghost');toast('बहुत बढ़िया! आपकी प्रगति सहेजी गई।')}
function hydrateProgress(){if($('#completeBtn')&&localStorage.getItem('lesson-number-system')==='complete')$('#completeBtn').textContent='✓ पूरा किया';if($('#bookmarkBtn')&&localStorage.getItem('bookmarked-number-system')==='1')$('#bookmarkBtn').textContent='★ बुकमार्क किया'}
document.addEventListener('DOMContentLoaded',()=>{initSearch();hydrateProgress();$$('.year').forEach(x=>x.textContent=new Date().getFullYear())});
