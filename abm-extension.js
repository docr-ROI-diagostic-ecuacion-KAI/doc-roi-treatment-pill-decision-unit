(function(){
  const MAP_KEY = "docroi-decision-unit-lab-v1";
  const META_KEY = "docroi-decision-unit-abm-meta-v1";
  const ABM_FIELDS = ["programName","orgModel","abmModel","currentWave","programProduct","sector","geographicMarket","targetAccounts","strategicObjective","opportunityDescription","accountHook","accountName","parentAccount","expectedValue","abmBudget","whyPursue","mainRisk","nextResearchAction","opportunityIndex","consecutionIndex","cooperationIndex","otherFactors"];
  const JOURNEY_STAGES = ["Research","Opening","Hook","Engagement","Validation","Business case","Consensus","Proposal","Approval","Onboarding","Relationship"];
  const $ = id => document.getElementById(id);
  const esc = value => String(value == null ? "" : value).replace(/[&<>"']/g, s => ({"&":"&amp;","<":"&lt;",">":"&gt;","\"":"&quot;","'":"&#039;"}[s]));
  const v = (value, fallback="TO RESEARCH") => {
    const s = String(value == null ? "" : value).trim();
    return s || fallback;
  };
  function readMap(){ try{return JSON.parse(localStorage.getItem(MAP_KEY)||"{}");}catch(e){return {};} }
  function readMeta(){ try{return JSON.parse(localStorage.getItem(META_KEY)||"{}");}catch(e){return {};} }
  function writeMeta(){
    const meta = {};
    ABM_FIELDS.forEach(id => { if($(id)) meta[id] = $(id).value; });
    localStorage.setItem(META_KEY, JSON.stringify(meta));
    renderOutputs();
  }
  function hydrateMeta(){
    const meta = readMeta();
    ABM_FIELDS.forEach(id => { if($(id)) $(id).value = meta[id] || ""; });
  }
  function uid(prefix){ return prefix + "_" + Math.random().toString(36).slice(2,8) + Date.now().toString(36).slice(-4); }
  function node(title, acronym, x, y, data){
    return Object.assign({
      id:uid("node"), name:acronym || title, title, department:"", company:"",
      role:"Unassigned", x, y, pains:"", gains:"", criteria:"", valueAngle:"",
      message:"", content:"", communication:"", channels:"", action:"",
      evidence:"", objections:"", influence:3, journey:"Research", notes:"", tags:"",
      hookConcept:"", hookFit:"", evidenceStatus:"TO VALIDATE", processKPI:"", resultKPI:"", researchGaps:""
    }, data || {});
  }
  function donEspadinExample(){
    const product = {
      productName:"Don Espadin · Mezcal Espadin · Foundational Edition",
      valueProp:"Premium Mexican mezcal positioned for hospitality venues that need a distinctive, credible and explainable category story.",
      customerProblem:"Premium hotels may want differentiated beverage experiences, but the real buying situation, category readiness, distribution conditions and internal decision process remain to be researched.",
      commercial:"Commercial terms, wholesale pricing, distributor conditions and margins are unknown. These values must remain to research.",
      attributes:"Oaxaca origin, mezcal espadin category, foundational product story, premium hospitality fit, cultural and sensory narrative.",
      benefits:"Potential differentiation in cocktail menus, premium guest experience, storytelling value for F&B teams and Mexican category credibility.",
      evidence:"Known product origin and category hypothesis. Hotel demand, purchasing criteria, legal requirements and distributor economics still require market and customer evidence.",
      useCases:"Premium bar listing, signature cocktail development, tasting experience, events and banqueting, Mexican gastronomy activation."
    };
    const meta = {
      programName:"Don Espadin · Madrid Premium Hotels", orgModel:"Commercial Account", abmModel:"Many", currentWave:"Wave 01 · 10 account slots",
      programProduct:"Don Espadin · Mezcal Espadin · Foundational Edition", sector:"Premium hospitality / HORECA", geographicMarket:"Madrid, Spain", targetAccounts:"10",
      strategicObjective:"Assess whether Don Espadin should approach a first wave of premium hotels in Madrid through an ABM programme that researches account fit, buying centres and personalised value arguments before any commercial proposal is made.",
      opportunityDescription:"The opportunity is intentionally defined as TO RESEARCH. The programme explores whether selected premium hotels could list, test or activate Don Espadin through F&B, bar, events or gastronomy contexts. The account decision cannot be inferred from the hotel category alone.",
      accountHook:"A premium mezcal discovery angle: help the hotel evaluate whether an authentic Oaxaca-origin mezcal can enrich its beverage experience, cocktail storytelling and guest differentiation without forcing a premature purchasing decision.",
      accountName:"Account slot 01 · Premium hotel in Madrid · To research", parentAccount:"Parent group / business unit / location · To research",
      expectedValue:"Unknown until account, purchasing model and listing economics are validated.", abmBudget:"To define by account value, research need and activation format.",
      whyPursue:"Premium hotels may value differentiated beverage experiences, guest storytelling and curated bar programmes. The account is worth researching if F&B, beverage, events and purchasing roles can be identified and if there is evidence of category openness.",
      mainRisk:"Decision roles, legal requirements, distributor terms, purchasing process, price corridor, menu economics and category demand are still unknown.",
      nextResearchAction:"Research the target account structure, identify F&B and purchasing contacts, verify whether mezcal is already present in the beverage offer and validate who owns listing or activation decisions.",
      opportunityIndex:"TO VALIDATE · category fit and guest experience potential.", consecutionIndex:"TO VALIDATE · access path, relationship and purchasing process unknown.",
      cooperationIndex:"TO VALIDATE · internal willingness to test or co-create an activation unknown.", otherFactors:"LEGAL / OPERATIONAL PENDING · alcohol distribution, compliance and logistics require validation."
    };
    const nodes = [
      node("General Manager","GM",420,70,{name:"General Manager",role:"Decision Maker",department:"Hotel Management",company:"Premium hotel account slot",pains:"Protects brand standards, guest experience and commercial coherence. May resist if the initiative feels tactical or unsupported by evidence.",gains:"A differentiated premium experience aligned with hotel positioning.",criteria:"Brand fit, guest relevance, operational feasibility, risk control and credible business case.",valueAngle:"Frame Don Espadin as a controlled premium experience opportunity rather than only a bottle listing.",message:"This can be evaluated as a guest-experience asset with clear operational boundaries.",content:"Executive one-page opportunity brief",communication:"Executive / concise",channels:"Warm introduction, meeting",journey:"Validation",action:"Validate whether mezcal fits the hotel positioning and who owns the decision.",evidence:"Brand fit examples and comparable premium beverage activations required.",objections:"May see it as too niche, operationally complex or commercially unproven.",influence:5,tags:"authority, decision context",hookConcept:"Executive premium hospitality briefing",hookFit:"The GM needs a strategic reason to allow internal exploration before operational teams invest time.",processKPI:"Decision authority identified",resultKPI:"Permission to research F&B and purchasing roles"}),
      node("F&B Director","F&B",130,255,{name:"F&B Director",role:"Push Maker",department:"Food & Beverage",company:"Premium hotel account slot",pains:"Needs menu relevance, supplier reliability and a clear reason to prioritise a new category.",gains:"A distinctive beverage story that can support bar, restaurant and events experiences.",criteria:"Taste profile, menu fit, staff explanation, supply consistency and commercial conditions.",valueAngle:"Translate Don Espadin into a beverage experience the F&B team can test, explain and operationalise.",message:"A curated mezcal pilot can create differentiation while keeping the first commitment limited.",content:"Pilot concept + tasting agenda",communication:"Consultative / operational",channels:"Email, tasting, F&B workshop",journey:"Hook",action:"Invite the F&B Director to a structured tasting and menu-fit discussion.",evidence:"Category benchmarks, tasting notes and operating requirements needed.",objections:"Risk of slow rotation, training burden or weak guest demand.",influence:5,tags:"champion, operational owner",hookConcept:"Structured mezcal tasting and menu-fit workshop",hookFit:"This contact needs sensory proof, category logic and operational confidence.",processKPI:"Tasting accepted",resultKPI:"Pilot concept requested"}),
      node("Purchasing / Procurement","PROC",650,260,{name:"Purchasing Manager",role:"Influencer",department:"Procurement",company:"Premium hotel account slot",pains:"Needs supplier clarity, contract conditions, compliance, price discipline and low operational risk.",gains:"Reliable sourcing, transparent conditions and fewer supplier issues.",criteria:"Distributor, legal compliance, pricing, payment terms, delivery reliability and documentation.",valueAngle:"Reduce purchasing uncertainty before asking for any buying commitment.",message:"Commercial and operational evidence can be prepared before procurement evaluation.",content:"Procurement evidence checklist",communication:"Structured / factual",channels:"Email, procurement pack",journey:"Research",action:"Identify required procurement documentation and distributor conditions.",evidence:"Legal, logistics, distributor and pricing evidence required.",objections:"Unknown distributor model, compliance or delivery conditions.",influence:4,tags:"risk gate, commercial conditions",hookConcept:"Procurement readiness checklist",hookFit:"Procurement needs risk reduction before supporting any product test.",processKPI:"Procurement requirements captured",resultKPI:"Supplier pathway clarified"}),
      node("Bar Manager","BAR",420,420,{name:"Bar Manager",role:"Prescriber",department:"Bar / Beverage",company:"Premium hotel account slot",pains:"Needs a product that staff can explain, guests can understand and bartenders can use consistently.",gains:"Signature cocktail potential, story-rich recommendation and category credibility.",criteria:"Taste, mixability, staff training, guest acceptance and service speed.",valueAngle:"Make Don Espadin useful for the bar team through recipes, service narrative and training.",message:"The product story can become a practical bar asset, not only a premium claim.",content:"Cocktail use cases + service script",communication:"Practical / sensory",channels:"Tasting, demo, recipe sheet",journey:"Engagement",action:"Co-design two signature cocktail or tasting-service hypotheses.",evidence:"Recipe tests, staff feedback and guest response required.",objections:"May worry about complexity, unfamiliarity or slow guest adoption.",influence:4,tags:"technical prescriber, user evidence",hookConcept:"Signature cocktail micro-lab",hookFit:"The Bar Manager can validate usability and generate credible internal recommendation.",processKPI:"Recipe hypothesis created",resultKPI:"Internal recommendation evidence"}),
      node("Events / Banqueting","EVT",730,95,{name:"Events / Banqueting Lead",role:"Influencer",department:"Events",company:"Premium hotel account slot",pains:"Needs experiences that are easy to package, sell and deliver reliably.",gains:"Premium event differentiation and memorable guest moments.",criteria:"Event fit, service format, margin logic, staffing and repeatability.",valueAngle:"Explore Don Espadin as a premium event activation rather than a general listing only.",message:"A mezcal experience can be tested through controlled event contexts.",content:"Event activation concept",communication:"Commercial / experiential",channels:"Meeting, activation sample",journey:"Opening",action:"Validate whether event moments are a viable first use case.",evidence:"Event demand, package economics and delivery process to validate.",objections:"May see it as niche or difficult to repeat.",influence:3,tags:"activation route",hookConcept:"Premium event experience concept",hookFit:"Events may offer a controlled first route with clearer experience design.",processKPI:"Use case validated",resultKPI:"Event pilot considered"})
    ];
    const edges = [
      {id:uid("edge"),source:nodes[1].id,target:nodes[0].id,type:"auto",note:"Pushes F&B opportunity"},
      {id:uid("edge"),source:nodes[3].id,target:nodes[1].id,type:"auto",note:"Prescribes bar fit"},
      {id:uid("edge"),source:nodes[2].id,target:nodes[0].id,type:"auto",note:"Risk / purchasing influence"},
      {id:uid("edge"),source:nodes[4].id,target:nodes[1].id,type:"auto",note:"Alternative activation path"}
    ];
    localStorage.setItem(META_KEY, JSON.stringify(meta));
    localStorage.setItem(MAP_KEY, JSON.stringify({product,nodes,edges}));
    location.reload();
  }
  function planBox(title, body){ return `<div class="plan-box"><h4>${esc(title)}</h4><p>${esc(body)}</p></div>`; }
  function renderOrchestration(map){
    const body = $("orchestrationBody");
    if(!body) return;
    const nodes = map.nodes || [];
    if(!nodes.length){ body.innerHTML = `<div class="inspector-empty">Create or load contacts to see who receives what, when, through which channel and why.</div>`; return; }
    body.innerHTML = `<div class="final-hero"><h2>ABM Orchestration</h2><p>Same product, different pain, gain, value angle, message, hook and journey for each Decision Unit participant.</p></div><div class="stage-matrix"><table><thead><tr><th>Contact</th>${JOURNEY_STAGES.map(s=>`<th>${esc(s)}</th>`).join("")}</tr></thead><tbody>${nodes.map(n=>`<tr><td><strong>${esc(n.name||n.title)}</strong><br><span class="subtle">${esc(n.role)} · ${esc(n.department||"")}</span></td>${JOURNEY_STAGES.map(stage=>`<td>${(n.journey===stage || (!JOURNEY_STAGES.includes(n.journey||"") && stage==="Research")) ? `<strong>${esc(v(n.action,"Action to define"))}</strong><br>${esc(v(n.content,"Content to define"))}<br><span class="subtle">${esc(v(n.channels,"Channel to define"))}</span>` : ""}</td>`).join("")}</tr>`).join("")}</tbody></table></div>`;
  }
  function renderPlan(map, meta){
    const body = document.getElementById("finalPlanBody");
    if(!body) return;
    const product = map.product || {};
    const nodes = map.nodes || [];
    const printProject = document.getElementById("printProjectName");
    if(printProject) printProject.textContent = v(meta.programName,"ABM Plan");
    const contactPlans = nodes.map(n => {
      const items = [
        ["Pain",n.pains],["Gain",n.gains],["Decision criteria",n.criteria],["Objections",n.objections],["Evidence required",n.evidence],
        ["Personalised value",n.valueAngle],["Hook",n.hookConcept],["Key message",n.message],["Content",n.content],["Communication",n.communication],
        ["Channels",n.channels],["Journey",n.journey],["Next action",n.action],["Influence",v(n.influence,"TO VALIDATE") + "/5"],
        ["Evidence status",n.evidenceStatus || n.confidence],["Research gaps",n.researchGaps || n.notes]
      ].map(pair => `<div><b>${esc(pair[0])}</b>${esc(v(pair[1],"TO VALIDATE"))}</div>`).join("");
      return `<div class="contact-plan"><h4>${esc(v(n.name||n.title))} · ${esc(v(n.role,"Unassigned / research gap"))}</h4><div class="contact-plan-grid">${items}</div></div>`;
    }).join("");
    body.innerHTML = `<div class="final-hero"><h2>${esc(v(meta.programName,"Final ABM Plan"))}</h2><p>${esc(v(meta.strategicObjective,"Generate an Account-Based Marketing plan from product evidence, account research, opportunity definition and Decision Unit intelligence."))}</p></div>
      <div class="plan-grid">
        ${planBox("Programme Summary",`ABM model: ${v(meta.abmModel)}
Product: ${v(meta.programProduct || product.productName)}
Market: ${v(meta.geographicMarket)}
Wave: ${v(meta.currentWave)}
Target accounts: ${v(meta.targetAccounts)}
Budget: ${v(meta.abmBudget,"TO DEFINE")}`)}
        ${planBox("Account Summary",`Organisation: ${v(meta.accountName)}
Hierarchy: ${v(meta.parentAccount)}
Sector: ${v(meta.sector)}
Why pursue: ${v(meta.whyPursue)}
Unknowns: ${v(meta.mainRisk)}`)}
        ${planBox("Account Qualification",`Opportunity Index: ${v(meta.opportunityIndex,"TO VALIDATE")}
Consecution Index: ${v(meta.consecutionIndex,"TO VALIDATE")}
Cooperation Index: ${v(meta.cooperationIndex,"TO VALIDATE")}
Other Factors: ${v(meta.otherFactors,"TO VALIDATE")}`)}
        ${planBox("Opportunity",`Buying situation: ${v(meta.opportunityDescription)}
Expected value: ${v(meta.expectedValue,"TO VALIDATE")}
Evidence: ${v(product.evidence,"TO VALIDATE")}
Hypothesis status: TO VALIDATE`)}
        ${planBox("Account Hook",v(meta.accountHook,"TO DEFINE"))}
        ${planBox("Next Decision",`What do we know? ${nodes.length} contact hypothesis record(s).
What remains unknown? ${v(meta.mainRisk,"Account and contact evidence still to validate.")}
Who must we research next? ${v(meta.nextResearchAction,"TO DEFINE")}
What should happen next? ${nodes.some(n=>n.role==="Decision Maker") ? "Advance with personalised evidence." : "Identify or validate the Decision Maker."}`)}
      </div>
      <div class="final-hero"><h2>Individual ABM Plan</h2><p>One personalised micro-plan per Decision Unit member. Missing research remains labelled as TO RESEARCH or TO VALIDATE.</p></div>
      ${contactPlans || `<div class="inspector-empty">Build the Decision Unit map to generate personalised ABM sections.</div>`}`;
  }
  function renderWarnings(map){
    const warning = document.getElementById("missingDecisionMaker");
    if(warning) warning.classList.toggle("show", (map.nodes||[]).length>0 && !(map.nodes||[]).some(n=>n.role==="Decision Maker"));
  }
  function renderOutputs(){
    const map = readMap();
    const meta = readMeta();
    renderOrchestration(map, meta);
    renderPlan(map, meta);
    renderWarnings(map);
  }
  function activateTab(id){
    document.querySelectorAll(".tab-btn").forEach(b=>b.classList.toggle("active", b.dataset.tab===id));
    document.querySelectorAll(".tab-panel").forEach(p=>p.classList.toggle("active", p.id===id));
  }
  function downloadBlob(content,name,type){
    const blob = new Blob([content], {type});
    const a = document.createElement("a");
    a.href = URL.createObjectURL(blob);
    a.download = name;
    document.body.appendChild(a);
    a.click();
    setTimeout(()=>{URL.revokeObjectURL(a.href);a.remove();},500);
  }
  function csvEscape(value){
    const s = String(value == null ? "" : value);
    return new RegExp('[",\\n]').test(s) ? `"${s.replace(/"/g,'""')}"` : s;
  }
  function crmHandover(map, meta){
    return {
      sector:meta.sector,
      parentAccount:meta.parentAccount,
      account:{name:meta.accountName, model:meta.orgModel},
      opportunity:{description:meta.opportunityDescription, accountHook:meta.accountHook},
      product:map.product || {},
      contacts:(map.nodes||[]).map(n=>({
        contactId:n.id, name:n.name, title:n.title, department:n.department, account:n.company,
        decisionUnitMembership:{opportunityId:"current",decisionRole:n.role,pains:n.pains,gains:n.gains,criteria:n.criteria,objections:n.objections,evidence:n.evidence,influence:n.influence,valueAngle:n.valueAngle,hook:n.hookConcept,message:n.message,content:n.content,communication:n.communication,channels:n.channels,journeyStage:n.journey,nextAction:n.action,evidenceStatus:n.evidenceStatus || "TO VALIDATE",notes:n.notes}
      })),
      relations:map.edges || []
    };
  }
  function exportJourneyCSV(e){
    e.preventDefault(); e.stopImmediatePropagation();
    const map = readMap(); const meta = readMeta();
    const rows = (map.nodes||[]).map(n => [n.name||n.title,n.role,n.journey,meta.opportunityDescription,n.action,n.content,n.channels,n.hookConcept,n.evidence,n.influence]);
    const csv = [["Contact","Role","Stage","Opportunity","Action","Content","Channel","Hook","Evidence","Influence"],...rows].map(r=>r.map(csvEscape).join(",")).join("\\n");
    downloadBlob("\ufeff"+csv,"ABM_Journey.csv","text/csv;charset=utf-8");
  }
  function exportABMJSON(e){
    e.preventDefault(); e.stopImmediatePropagation();
    const map = readMap(); const meta = readMeta();
    downloadBlob(JSON.stringify({program:meta,product:map.product||{},contacts:map.nodes||[],relations:map.edges||[],crmHandover:crmHandover(map,meta)},null,2),"ABM_Plan_Engine.json","application/json");
  }
  function exportCRM(e){
    e.preventDefault(); e.stopImmediatePropagation();
    downloadBlob(JSON.stringify(crmHandover(readMap(), readMeta()),null,2),"ABM_CRM_Handover.json","application/json");
  }
  function enhanceInspector(){
    const api = window.docroiDecisionUnitApi;
    const body = document.getElementById("inspectorBody");
    if(!api || !body || !api.state || !api.state.selectedNodeId) return;
    const node = (api.state.nodes || []).find(item => item.id === api.state.selectedNodeId);
    if(!node || document.getElementById("abmExtraInspector")) return;
    const panel = document.createElement("div");
    panel.className = "inspector-section";
    panel.id = "abmExtraInspector";
    panel.innerHTML = `<h4>ABM plan extension</h4>
      <div class="field" style="margin-bottom:8px"><label>Hook concept</label><textarea data-abm-node="hookConcept" placeholder="Reason or mechanism to open or advance this relationship.">${esc(node.hookConcept||"")}</textarea></div>
      <div class="field" style="margin-bottom:8px"><label>Hook fit</label><textarea data-abm-node="hookFit" placeholder="Why this hook fits this contact.">${esc(node.hookFit||"")}</textarea></div>
      <div class="two-col"><div class="field"><label>Evidence status</label><select data-abm-node="evidenceStatus"><option>TO VALIDATE</option><option>CONFIRMED</option><option>MARKET EVIDENCE</option><option>CUSTOMER EVIDENCE</option><option>WORKING HYPOTHESIS</option><option>LEGAL / OPERATIONAL PENDING</option></select></div><div class="field"><label>Process KPI</label><input data-abm-node="processKPI" value="${esc(node.processKPI||"")}" placeholder="meeting achieved, role validated..."></div></div>
      <div class="two-col" style="margin-top:8px"><div class="field"><label>Result KPI</label><input data-abm-node="resultKPI" value="${esc(node.resultKPI||"")}" placeholder="proposal requested, approval..."></div><div class="field"><label>Research gaps</label><input data-abm-node="researchGaps" value="${esc(node.researchGaps||"")}" placeholder="What remains unknown?"></div></div>`;
    const select = panel.querySelector('[data-abm-node="evidenceStatus"]');
    if(select) select.value = node.evidenceStatus || "TO VALIDATE";
    const button = document.getElementById("startConnectionFromInspector");
    if(button && button.parentNode) button.parentNode.insertBefore(panel, button); else body.appendChild(panel);
    panel.querySelectorAll("[data-abm-node]").forEach(input => input.addEventListener("input",()=>{
      node[input.dataset.abmNode] = input.value;
      api.save();
      renderOutputs();
    }));
  }
  hydrateMeta();
  ABM_FIELDS.forEach(id => { if(document.getElementById(id)) document.getElementById(id).addEventListener("input", writeMeta); });
  document.querySelectorAll(".tab-btn").forEach(btn => btn.addEventListener("click",()=>activateTab(btn.dataset.tab)));
  // The main application owns the Don Espadin loader so the hero and toolbar buttons stay consistent.
  if(document.getElementById("generatePlanBtn")) document.getElementById("generatePlanBtn").addEventListener("click",()=>{renderOutputs();activateTab("finalPanel");});
  if(document.getElementById("journeyCsvBtn")) document.getElementById("journeyCsvBtn").addEventListener("click", exportJourneyCSV, true);
  if(document.getElementById("crmBtn")) document.getElementById("crmBtn").addEventListener("click", exportCRM, true);
  if(document.getElementById("jsonBtn")) document.getElementById("jsonBtn").addEventListener("click", exportABMJSON, true);
  if(document.getElementById("downloadBtn")) document.getElementById("downloadBtn").addEventListener("click", exportABMJSON, true);
  if(document.getElementById("printBtn")) document.getElementById("printBtn").addEventListener("click",()=>{renderOutputs();activateTab("finalPanel");}, true);
  if(document.getElementById("resetBtn")) document.getElementById("resetBtn").addEventListener("click",()=>{
    setTimeout(()=>{ const map = readMap(); if(!(map.nodes||[]).length && !(map.product&&map.product.productName)){ localStorage.removeItem(META_KEY); hydrateMeta(); renderOutputs(); } }, 250);
  });
  if(document.getElementById("toggleAbmBtn")) document.getElementById("toggleAbmBtn").addEventListener("click",()=>{
    const content = document.getElementById("abmContent");
    const hidden = content.style.display === "none";
    content.style.display = hidden ? "" : "none";
    document.getElementById("toggleAbmBtn").textContent = hidden ? "Hide setup" : "Show setup";
  });
  renderOutputs();
  setInterval(()=>{renderOutputs(); enhanceInspector();}, 1800);
  setInterval(enhanceInspector, 400);
})();
