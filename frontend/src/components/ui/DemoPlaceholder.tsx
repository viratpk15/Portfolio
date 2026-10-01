"use client";

import React, { useState } from "react";
import Image from "next/image";
import { motion } from "framer-motion";

export interface DemoPlaceholderProps {
  variant?: string;
  projectId?: string;
  imageSrc?: string;
  title?: string;
  visual?: string;
  demoImage?: string;
}

/* ─────────────────────────────────────────────────────────────────────────────
   01 · Lisa AI — Layered Architecture Diagram
   User → Interface → Orchestrator → Agents (pulsing) → Tools/RAG/Memory → LLM → Response
   ───────────────────────────────────────────────────────────────────────────── */
export function LisaVisual() {
  return (
    <svg
      width="100%"
      height="100%"
      viewBox="0 0 800 500"
      preserveAspectRatio="xMidYMid meet"
      className="w-full h-full select-none"
    >
      <defs>
        <linearGradient id="lisa-line-grad" x1="0%" y1="0%" x2="100%" y2="0%">
          <stop offset="0%" stopColor="var(--accent-primary)" stopOpacity="0.2" />
          <stop offset="50%" stopColor="var(--accent-primary)" stopOpacity="0.8" />
          <stop offset="100%" stopColor="var(--accent-bright)" stopOpacity="0.2" />
        </linearGradient>
        <pattern id="lisa-grid" width="40" height="40" patternUnits="userSpaceOnUse">
          <path d="M 40 0 L 0 0 0 40" fill="none" stroke="var(--border-hairline)" strokeWidth="0.5" strokeOpacity="0.4" />
        </pattern>
      </defs>

      <rect width="100%" height="100%" fill="url(#lisa-grid)" />

      {/* Connection Backbone Line */}
      <motion.path
        d="M 120 250 L 220 250 L 320 250 L 440 250 L 560 250 L 680 250"
        fill="none"
        stroke="url(#lisa-line-grad)"
        strokeWidth="2"
        strokeDasharray="6 6"
        animate={{ strokeDashoffset: [0, -48] }}
        transition={{ duration: 3, repeat: Infinity, ease: "linear" }}
      />

      {/* Layer 1: User Client */}
      <g transform="translate(60, 215)">
        <rect width="100" height="70" rx="14" fill="var(--bg-elevated)" stroke="var(--border-hairline)" strokeWidth="1.5" />
        <circle cx="50" cy="30" r="12" fill="var(--accent-primary)" fillOpacity="0.15" stroke="var(--accent-primary)" strokeWidth="1" />
        <path d="M 44 38 C 44 33, 56 33, 56 38" fill="none" stroke="var(--accent-primary)" strokeWidth="1.5" />
        <circle cx="50" cy="27" r="4" fill="var(--accent-primary)" />
        <text x="50" y="60" textAnchor="middle" fill="var(--text-secondary)" fontFamily="var(--font-mono)" fontSize="10" letterSpacing="0.15em">USER / CLI</text>
      </g>

      {/* Layer 2: Gateway Interface */}
      <g transform="translate(180, 215)">
        <rect width="110" height="70" rx="14" fill="var(--bg-elevated)" stroke="var(--accent-primary)" strokeWidth="1.5" strokeOpacity="0.6" />
        <text x="55" y="32" textAnchor="middle" fill="var(--accent-primary)" fontFamily="var(--font-mono)" fontSize="10" fontWeight="600" letterSpacing="0.15em">INTERFACE</text>
        <text x="55" y="52" textAnchor="middle" fill="var(--text-muted)" fontFamily="var(--font-mono)" fontSize="9">FastAPI · REST</text>
      </g>

      {/* Layer 3: Orchestrator */}
      <g transform="translate(310, 205)">
        <rect width="120" height="90" rx="16" fill="var(--bg-elevated)" stroke="var(--accent-primary)" strokeWidth="1.5" />
        <rect x="8" y="8" width="104" height="74" rx="10" fill="var(--accent-primary)" fillOpacity="0.05" />
        <text x="60" y="36" textAnchor="middle" fill="var(--text-primary)" fontFamily="var(--font-display)" fontSize="15">LangGraph</text>
        <text x="60" y="54" textAnchor="middle" fill="var(--accent-primary)" fontFamily="var(--font-mono)" fontSize="9" letterSpacing="0.12em">ORCHESTRATOR</text>
        <text x="60" y="70" textAnchor="middle" fill="var(--text-muted)" fontFamily="var(--font-mono)" fontSize="8">State Machine</text>
      </g>

      {/* Layer 4: Specialized Agents (PULSING) */}
      <g transform="translate(450, 185)">
        {/* Pulse aura */}
        <motion.rect
          x="-6"
          y="-6"
          width="132"
          height="142"
          rx="22"
          fill="none"
          stroke="var(--accent-primary)"
          strokeWidth="1.5"
          animate={{ opacity: [0.2, 0.8, 0.2], scale: [0.98, 1.02, 0.98] }}
          transition={{ duration: 2.2, repeat: Infinity, ease: "easeInOut" }}
        />
        <rect width="120" height="130" rx="18" fill="var(--bg-elevated)" stroke="var(--accent-primary)" strokeWidth="2" />
        <rect x="8" y="8" width="104" height="114" rx="12" fill="var(--accent-primary)" fillOpacity="0.1" />
        <text x="60" y="30" textAnchor="middle" fill="var(--accent-primary)" fontFamily="var(--font-mono)" fontSize="11" fontWeight="700" letterSpacing="0.18em">AGENTS</text>
        <g transform="translate(14, 42)">
          <rect width="92" height="20" rx="6" fill="var(--bg-base)" stroke="var(--border-hairline)" />
          <text x="46" y="14" textAnchor="middle" fill="var(--text-primary)" fontFamily="var(--font-mono)" fontSize="8">Planner · AST</text>
        </g>
        <g transform="translate(14, 68)">
          <rect width="92" height="20" rx="6" fill="var(--bg-base)" stroke="var(--border-hairline)" />
          <text x="46" y="14" textAnchor="middle" fill="var(--text-primary)" fontFamily="var(--font-mono)" fontSize="8">RAG Researcher</text>
        </g>
        <g transform="translate(14, 94)">
          <rect width="92" height="20" rx="6" fill="var(--bg-base)" stroke="var(--border-hairline)" />
          <text x="46" y="14" textAnchor="middle" fill="var(--text-primary)" fontFamily="var(--font-mono)" fontSize="8">MCP Executor</text>
        </g>
      </g>

      {/* Layer 5: Tools & RAG Memory */}
      <g transform="translate(590, 215)">
        <rect width="120" height="70" rx="14" fill="var(--bg-elevated)" stroke="var(--accent-secondary)" strokeWidth="1.5" />
        <text x="60" y="32" textAnchor="middle" fill="var(--accent-secondary)" fontFamily="var(--font-mono)" fontSize="9" fontWeight="600" letterSpacing="0.15em">RAG / MEMORY</text>
        <text x="60" y="50" textAnchor="middle" fill="var(--text-secondary)" fontFamily="var(--font-mono)" fontSize="8">ChromaDB · MCP</text>
      </g>

      {/* Top Banner Telemetry */}
      <g transform="translate(60, 60)">
        <rect width="680" height="34" rx="8" fill="var(--bg-elevated)" stroke="var(--border-hairline)" />
        <circle cx="20" cy="17" r="4" fill="var(--accent-primary)">
          <animate attributeName="opacity" values="0.4;1;0.4" dur="1.5s" repeatCount="indefinite" />
        </circle>
        <text x="36" y="21" fill="var(--text-secondary)" fontFamily="var(--font-mono)" fontSize="9" letterSpacing="0.15em">
          LISA AIOS // DISTRIBUTED AGENTIC RUNTIME · LATENCY: 24ms · DUAL ROUTE: OLLAMA + GROQ
        </text>
      </g>
    </svg>
  );
}

/* ─────────────────────────────────────────────────────────────────────────────
   02 · NeuroNet AI — Interactive Knowledge Graph
   ~20 circular nodes labeled (Person, Project, Task, Conversation), curved Bézier edges, pulsing nodes
   ───────────────────────────────────────────────────────────────────────────── */
export function NeuroNetVisual() {
  const nodes = [
    { x: 140, y: 150, r: 22, label: "PR #142", type: "pr", pulse: true },
    { x: 260, y: 110, r: 26, label: "Alex V.", type: "person" },
    { x: 380, y: 170, r: 30, label: "Core API", type: "project", pulse: true },
    { x: 500, y: 120, r: 24, label: "Sarah T.", type: "person" },
    { x: 640, y: 160, r: 22, label: "Issue #89", type: "task" },
    { x: 200, y: 260, r: 28, label: "Slack Sync", type: "conversation" },
    { x: 320, y: 310, r: 24, label: "Auth Token", type: "task" },
    { x: 440, y: 280, r: 32, label: "Knowledge", type: "project" },
    { x: 570, y: 250, r: 24, label: "Dev Block", type: "task", pulse: true },
    { x: 670, y: 310, r: 26, label: "Ingest Run", type: "conversation" },
    { x: 120, y: 380, r: 20, label: "Jira #412", type: "task" },
    { x: 240, y: 400, r: 24, label: "Telemetry", type: "project" },
    { x: 380, y: 410, r: 22, label: "Vikram R.", type: "person" },
    { x: 510, y: 390, r: 28, label: "Entity DB", type: "project" },
    { x: 630, y: 420, r: 20, label: "Sprint 14", type: "conversation" },
    { x: 720, y: 210, r: 18, label: "API Gate", type: "task" },
    { x: 80, y: 230, r: 18, label: "PR #138", type: "pr" },
    { x: 440, y: 70, r: 20, label: "Postgres", type: "project" },
  ];

  const edges = [
    [0, 1], [1, 2], [2, 3], [3, 4], [0, 5], [1, 5], [2, 7], [3, 7],
    [4, 8], [5, 6], [6, 7], [7, 8], [8, 9], [5, 10], [6, 11], [7, 12],
    [7, 13], [8, 14], [4, 15], [0, 16], [2, 17], [3, 17],
  ];

  return (
    <svg
      width="100%"
      height="100%"
      viewBox="0 0 800 500"
      preserveAspectRatio="xMidYMid meet"
      className="w-full h-full select-none"
    >
      <defs>
        <radialGradient id="neuro-glow" cx="50%" cy="50%" r="50%">
          <stop offset="0%" stopColor="var(--accent-primary)" stopOpacity="0.25" />
          <stop offset="100%" stopColor="transparent" />
        </radialGradient>
      </defs>

      <rect width="100%" height="100%" fill="none" />

      {/* Curved Bézier Edges */}
      {edges.map(([fromIdx, toIdx], i) => {
        const from = nodes[fromIdx];
        const to = nodes[toIdx];
        const cx = (from.x + to.x) / 2;
        const cy = (from.y + to.y) / 2 - 15;
        return (
          <path
            key={i}
            d={`M ${from.x} ${from.y} Q ${cx} ${cy} ${to.x} ${to.y}`}
            fill="none"
            stroke="var(--border-hairline)"
            strokeWidth="1.2"
            strokeOpacity="0.7"
          />
        );
      })}

      {/* Nodes */}
      {nodes.map((node, i) => (
        <g key={i}>
          {node.pulse && (
            <motion.circle
              cx={node.x}
              cy={node.y}
              r={node.r + 8}
              fill="none"
              stroke="var(--accent-primary)"
              strokeWidth="1.5"
              animate={{ r: [node.r + 4, node.r + 14, node.r + 4], opacity: [0.8, 0, 0.8] }}
              transition={{ duration: 2.4, repeat: Infinity, delay: i * 0.3 }}
            />
          )}
          <circle
            cx={node.x}
            cy={node.y}
            r={node.r}
            fill="var(--bg-elevated)"
            stroke={node.pulse ? "var(--accent-primary)" : "var(--border-strong)"}
            strokeWidth={node.pulse ? 2 : 1}
          />
          <text
            x={node.x}
            y={node.y + 3}
            textAnchor="middle"
            fill={node.pulse ? "var(--accent-primary)" : "var(--text-primary)"}
            fontFamily="var(--font-mono)"
            fontSize="8"
            fontWeight="500"
          >
            {node.label}
          </text>
        </g>
      ))}

      {/* Top Floating Badge */}
      <g transform="translate(60, 30)">
        <rect width="260" height="26" rx="13" fill="var(--bg-elevated)" stroke="var(--accent-primary)" strokeOpacity="0.4" />
        <circle cx="16" cy="13" r="3.5" fill="var(--accent-primary)" />
        <text x="32" y="17" fill="var(--text-primary)" fontFamily="var(--font-mono)" fontSize="9" letterSpacing="0.14em">
          SEMANTIC GRAPH · 18 NODES ACTIVE
        </text>
      </g>
    </svg>
  );
}

/* ─────────────────────────────────────────────────────────────────────────────
   03 · NeuralWorkspace.ai — Workspace Dashboard Mock
   Left panel: chat bubbles. Center: architecture canvas. Right: Kanban board. Top: tabs.
   ───────────────────────────────────────────────────────────────────────────── */
export function NeuralWorkspaceVisual() {
  return (
    <svg
      width="100%"
      height="100%"
      viewBox="0 0 800 500"
      preserveAspectRatio="xMidYMid meet"
      className="w-full h-full select-none"
    >
      {/* Top Application Bar */}
      <g transform="translate(20, 20)">
        <rect width="760" height="42" rx="12" fill="var(--bg-elevated)" stroke="var(--border-hairline)" />
        {/* Window controls */}
        <circle cx="20" cy="21" r="5" fill="#EF4444" opacity="0.8" />
        <circle cx="36" cy="21" r="5" fill="#F59E0B" opacity="0.8" />
        <circle cx="52" cy="21" r="5" fill="#10B981" opacity="0.8" />
        {/* Title */}
        <text x="80" y="25" fill="var(--text-primary)" fontFamily="var(--font-mono)" fontSize="10" fontWeight="600" letterSpacing="0.1em">
          NEURALWORKSPACE.AI
        </text>
        {/* Tab pills */}
        <g transform="translate(320, 9)">
          <rect width="80" height="24" rx="12" fill="var(--accent-primary)" fillOpacity="0.15" stroke="var(--accent-primary)" strokeWidth="1" />
          <text x="40" y="16" textAnchor="middle" fill="var(--accent-primary)" fontFamily="var(--font-mono)" fontSize="9" fontWeight="600">CHAT</text>
        </g>
        <g transform="translate(410, 9)">
          <rect width="110" height="24" rx="12" fill="var(--bg-base)" stroke="var(--border-hairline)" />
          <text x="55" y="16" textAnchor="middle" fill="var(--text-secondary)" fontFamily="var(--font-mono)" fontSize="9">ARCHITECTURE</text>
        </g>
        <g transform="translate(530, 9)">
          <rect width="80" height="24" rx="12" fill="var(--bg-base)" stroke="var(--border-hairline)" />
          <text x="40" y="16" textAnchor="middle" fill="var(--text-secondary)" fontFamily="var(--font-mono)" fontSize="9">TASKS</text>
        </g>
      </g>

      {/* Left Panel: Chat Bubbles (width: 230) */}
      <g transform="translate(20, 74)">
        <rect width="230" height="406" rx="16" fill="var(--bg-elevated)" stroke="var(--border-hairline)" />
        <text x="18" y="28" fill="var(--text-secondary)" fontFamily="var(--font-mono)" fontSize="9" letterSpacing="0.14em">SESSION // LLM CHAT</text>

        {/* Message 1 (User) */}
        <g transform="translate(18, 48)">
          <rect width="194" height="48" rx="10" fill="var(--bg-base)" stroke="var(--border-hairline)" />
          <text x="12" y="20" fill="var(--text-secondary)" fontFamily="var(--font-mono)" fontSize="8">Design schema for pipeline:</text>
          <text x="12" y="34" fill="var(--accent-primary)" fontFamily="var(--font-mono)" fontSize="8">POSTGRES + DRIZZLE ORM</text>
        </g>

        {/* Message 2 (Assistant) */}
        <g transform="translate(18, 108)">
          <rect width="194" height="68" rx="10" fill="var(--accent-primary)" fillOpacity="0.08" stroke="var(--accent-primary)" strokeOpacity="0.4" />
          <text x="12" y="20" fill="var(--accent-primary)" fontFamily="var(--font-mono)" fontSize="8" fontWeight="600">Generated 3 Tables:</text>
          <text x="12" y="36" fill="var(--text-primary)" fontFamily="var(--font-mono)" fontSize="8">• users (UUID pk, auth)</text>
          <text x="12" y="48" fill="var(--text-primary)" fontFamily="var(--font-mono)" fontSize="8">• agent_jobs (state enum)</text>
          <text x="12" y="60" fill="var(--text-secondary)" fontFamily="var(--font-mono)" fontSize="8">• telemetry_logs (jsonb)</text>
        </g>

        {/* Message 3 (User) */}
        <g transform="translate(18, 188)">
          <rect width="194" height="42" rx="10" fill="var(--bg-base)" stroke="var(--border-hairline)" />
          <text x="12" y="18" fill="var(--text-secondary)" fontFamily="var(--font-mono)" fontSize="8">Now link to React Flow canvas</text>
          <text x="12" y="30" fill="var(--text-muted)" fontFamily="var(--font-mono)" fontSize="8">with WebSocket sync</text>
        </g>

        {/* Message 4 (Assistant) */}
        <g transform="translate(18, 242)">
          <rect width="194" height="60" rx="10" fill="var(--accent-primary)" fillOpacity="0.08" stroke="var(--accent-primary)" strokeOpacity="0.4" />
          <text x="12" y="20" fill="var(--accent-primary)" fontFamily="var(--font-mono)" fontSize="8" fontWeight="600">Canvas Node Synchronized:</text>
          <text x="12" y="36" fill="var(--text-primary)" fontFamily="var(--font-mono)" fontSize="8">Broadcasting event state...</text>
          <circle cx="178" cy="46" r="4" fill="var(--accent-primary)">
            <animate attributeName="opacity" values="0.2;1;0.2" dur="1.2s" repeatCount="indefinite" />
          </circle>
        </g>
      </g>

      {/* Center Panel: Architecture Canvas (width: 290) */}
      <g transform="translate(260, 74)">
        <rect width="290" height="406" rx="16" fill="var(--bg-elevated)" stroke="var(--border-hairline)" />
        <text x="20" y="28" fill="var(--text-secondary)" fontFamily="var(--font-mono)" fontSize="9" letterSpacing="0.14em">ARCHITECTURE CANVAS</text>

        {/* Node 1 */}
        <g transform="translate(30, 60)">
          <rect width="105" height="52" rx="10" fill="var(--bg-base)" stroke="var(--border-strong)" />
          <text x="52" y="24" textAnchor="middle" fill="var(--text-primary)" fontFamily="var(--font-mono)" fontSize="9">Client UI</text>
          <text x="52" y="38" textAnchor="middle" fill="var(--accent-primary)" fontFamily="var(--font-mono)" fontSize="8">Next.js 15</text>
        </g>

        {/* Node 2 */}
        <g transform="translate(160, 60)">
          <rect width="105" height="52" rx="10" fill="var(--bg-base)" stroke="var(--accent-primary)" />
          <text x="52" y="24" textAnchor="middle" fill="var(--text-primary)" fontFamily="var(--font-mono)" fontSize="9">API Gateway</text>
          <text x="52" y="38" textAnchor="middle" fill="var(--accent-primary)" fontFamily="var(--font-mono)" fontSize="8">Express 5</text>
        </g>

        {/* Node 3 */}
        <g transform="translate(30, 180)">
          <rect width="105" height="52" rx="10" fill="var(--bg-base)" stroke="var(--border-strong)" />
          <text x="52" y="24" textAnchor="middle" fill="var(--text-primary)" fontFamily="var(--font-mono)" fontSize="9">Drizzle ORM</text>
          <text x="52" y="38" textAnchor="middle" fill="var(--accent-secondary)" fontFamily="var(--font-mono)" fontSize="8">PostgreSQL</text>
        </g>

        {/* Node 4 */}
        <g transform="translate(160, 180)">
          <rect width="105" height="52" rx="10" fill="var(--bg-base)" stroke="var(--accent-bright)" />
          <text x="52" y="24" textAnchor="middle" fill="var(--text-primary)" fontFamily="var(--font-mono)" fontSize="9">Gemini LLM</text>
          <text x="52" y="38" textAnchor="middle" fill="var(--accent-bright)" fontFamily="var(--font-mono)" fontSize="8">Streaming</text>
        </g>

        {/* Canvas Connections */}
        <path d="M 135 86 L 160 86" stroke="var(--accent-primary)" strokeWidth="1.5" />
        <path d="M 82 112 L 82 180" stroke="var(--border-hairline)" strokeWidth="1.5" strokeDasharray="4 4" />
        <path d="M 212 112 L 212 180" stroke="var(--accent-primary)" strokeWidth="1.5" />
        <path d="M 135 206 L 160 206" stroke="var(--border-hairline)" strokeWidth="1.5" />

        {/* Live sync graph chip */}
        <g transform="translate(30, 280)">
          <rect width="235" height="96" rx="12" fill="var(--bg-base)" stroke="var(--border-hairline)" />
          <text x="16" y="24" fill="var(--text-muted)" fontFamily="var(--font-mono)" fontSize="8" letterSpacing="0.14em">LIVE SCHEMA GENERATOR</text>
          <text x="16" y="44" fill="var(--accent-primary)" fontFamily="var(--font-mono)" fontSize="9">export const tasks = pgTable(</text>
          <text x="16" y="58" fill="var(--text-secondary)" fontFamily="var(--font-mono)" fontSize="8">  id: serial(&apos;id&apos;).primaryKey(),</text>
          <text x="16" y="72" fill="var(--text-secondary)" fontFamily="var(--font-mono)" fontSize="8">  status: varchar(50)</text>
          <text x="16" y="86" fill="var(--accent-primary)" fontFamily="var(--font-mono)" fontSize="9">);</text>
        </g>
      </g>

      {/* Right Panel: Kanban Task Board (width: 210) */}
      <g transform="translate(560, 74)">
        <rect width="220" height="406" rx="16" fill="var(--bg-elevated)" stroke="var(--border-hairline)" />
        <text x="18" y="28" fill="var(--text-secondary)" fontFamily="var(--font-mono)" fontSize="9" letterSpacing="0.14em">SPRINT // 3 COLS</text>

        {/* Col 1: Backlog */}
        <g transform="translate(14, 46)">
          <rect width="60" height="18" rx="6" fill="var(--bg-base)" stroke="var(--border-hairline)" />
          <text x="30" y="12" textAnchor="middle" fill="var(--text-muted)" fontFamily="var(--font-mono)" fontSize="7">BACKLOG</text>
          <g transform="translate(0, 24)">
            <rect width="60" height="44" rx="8" fill="var(--bg-base)" stroke="var(--border-hairline)" />
            <text x="6" y="16" fill="var(--text-secondary)" fontFamily="var(--font-mono)" fontSize="7">Auth OAuth</text>
            <rect x="6" y="24" width="30" height="10" rx="3" fill="var(--accent-primary)" fillOpacity="0.2" />
          </g>
        </g>

        {/* Col 2: In Progress */}
        <g transform="translate(80, 46)">
          <rect width="60" height="18" rx="6" fill="var(--accent-primary)" fillOpacity="0.15" stroke="var(--accent-primary)" />
          <text x="30" y="12" textAnchor="middle" fill="var(--accent-primary)" fontFamily="var(--font-mono)" fontSize="7" fontWeight="600">IN PROG</text>
          <g transform="translate(0, 24)">
            <rect width="60" height="44" rx="8" fill="var(--bg-base)" stroke="var(--accent-primary)" />
            <text x="6" y="16" fill="var(--text-primary)" fontFamily="var(--font-mono)" fontSize="7">SSE Stream</text>
            <rect x="6" y="24" width="36" height="10" rx="3" fill="var(--accent-primary)" fillOpacity="0.3" />
          </g>
        </g>

        {/* Col 3: Done */}
        <g transform="translate(146, 46)">
          <rect width="60" height="18" rx="6" fill="var(--bg-base)" stroke="var(--border-hairline)" />
          <text x="30" y="12" textAnchor="middle" fill="#10B981" fontFamily="var(--font-mono)" fontSize="7">DONE</text>
          <g transform="translate(0, 24)">
            <rect width="60" height="44" rx="8" fill="var(--bg-base)" stroke="var(--border-hairline)" />
            <text x="6" y="16" fill="var(--text-muted)" fontFamily="var(--font-mono)" fontSize="7">Drizzle ORM</text>
            <rect x="6" y="24" width="28" height="10" rx="3" fill="#10B981" fillOpacity="0.2" />
          </g>
        </g>
      </g>
    </svg>
  );
}

/* ─────────────────────────────────────────────────────────────────────────────
   04 · AML Agentic Investigator — Financial Crime Detection
   Top: Anomaly score gauge (semi-circle arc) at 72%.
   Left: Transaction table with 5 rows (2 flagged in warm red).
   Right: 6-node network graph (1 flagged).
   Bottom: Mini dossier panel titled "FINDINGS — 14 SECTIONS".
   ───────────────────────────────────────────────────────────────────────────── */
export function AmlVisual() {
  return (
    <svg
      width="100%"
      height="100%"
      viewBox="0 0 800 500"
      preserveAspectRatio="xMidYMid meet"
      className="w-full h-full select-none"
    >
      <defs>
        <linearGradient id="gauge-grad" x1="0%" y1="0%" x2="100%" y2="0%">
          <stop offset="0%" stopColor="#10B981" />
          <stop offset="50%" stopColor="#F59E0B" />
          <stop offset="100%" stopColor="#EF4444" />
        </linearGradient>
      </defs>

      {/* Top Banner & Semi-Circle Gauge (Height: 140) */}
      <g transform="translate(20, 20)">
        <rect width="760" height="130" rx="16" fill="var(--bg-elevated)" stroke="var(--border-hairline)" />
        
        {/* Left Side of Banner: Title & Case # */}
        <text x="24" y="32" fill="var(--text-secondary)" fontFamily="var(--font-mono)" fontSize="10" letterSpacing="0.2em">
          ANTI-MONEY LAUNDERING // CANONICAL EVIDENCE ENGINE
        </text>
        <text x="24" y="56" fill="var(--text-primary)" fontFamily="var(--font-display)" fontSize="18">
          CASE #AML-2026-9418 · AUDIT DOSSIER
        </text>
        <text x="24" y="78" fill="var(--text-muted)" fontFamily="var(--font-mono)" fontSize="9">
          Adversarial LangGraph Critic · Isolation Forest · Graph Centrality
        </text>

        {/* Center: Gauge Semi-Circle Arc at 72% */}
        <g transform="translate(560, 20)">
          {/* Gauge Background Arc */}
          <path
            d="M 20 80 A 60 60 0 0 1 140 80"
            fill="none"
            stroke="var(--border-hairline)"
            strokeWidth="12"
            strokeLinecap="round"
          />
          {/* Gauge Progress Arc ~72% */}
          <path
            d="M 20 80 A 60 60 0 0 1 125 40"
            fill="none"
            stroke="url(#gauge-grad)"
            strokeWidth="12"
            strokeLinecap="round"
          />
          <text x="80" y="74" textAnchor="middle" fill="#EF4444" fontFamily="var(--font-display)" fontSize="26" fontWeight="600">
            72%
          </text>
          <text x="80" y="98" textAnchor="middle" fill="#EF4444" fontFamily="var(--font-mono)" fontSize="9" letterSpacing="0.14em">
            RISK: ELEVATED
          </text>
        </g>
      </g>

      {/* Left: Transaction Ledger Table (Width: 440) */}
      <g transform="translate(20, 165)">
        <rect width="440" height="205" rx="16" fill="var(--bg-elevated)" stroke="var(--border-hairline)" />
        <text x="20" y="24" fill="var(--text-secondary)" fontFamily="var(--font-mono)" fontSize="9" letterSpacing="0.15em">
          TRANSACTION STREAM // ISOLATION FOREST FLAGS
        </text>

        {/* Table Rows */}
        {[
          { id: "TX-4091", acc: "0x89A...41", amt: "₹1,25,000", flag: false, score: "0.18" },
          { id: "TX-4092", acc: "0x4F2...19", amt: "₹9,80,000", flag: true, score: "0.89", reason: "Structuring" },
          { id: "TX-4093", acc: "0x77B...22", amt: "₹45,200", flag: false, score: "0.12" },
          { id: "TX-4094", acc: "0x12C...98", amt: "₹8,40,000", flag: true, score: "0.94", reason: "Velocity Spike" },
          { id: "TX-4095", acc: "0x63E...01", amt: "₹18,500", flag: false, score: "0.08" },
        ].map((row, idx) => (
          <g key={row.id} transform={`translate(16, ${40 + idx * 32})`}>
            <rect
              width="408"
              height="26"
              rx="6"
              fill={row.flag ? "#EF4444" : "var(--bg-base)"}
              fillOpacity={row.flag ? 0.12 : 1}
              stroke={row.flag ? "#EF4444" : "var(--border-hairline)"}
              strokeOpacity={row.flag ? 0.5 : 0.6}
            />
            <text x="12" y="17" fill="var(--text-primary)" fontFamily="var(--font-mono)" fontSize="8">{row.id}</text>
            <text x="90" y="17" fill="var(--text-muted)" fontFamily="var(--font-mono)" fontSize="8">{row.acc}</text>
            <text x="200" y="17" fill="var(--text-primary)" fontFamily="var(--font-mono)" fontSize="9" fontWeight="600">{row.amt}</text>
            <text x="290" y="17" fill={row.flag ? "#EF4444" : "var(--text-muted)"} fontFamily="var(--font-mono)" fontSize="8">
              {row.flag ? `ANOMALY (${row.score})` : `NORMAL (${row.score})`}
            </text>
          </g>
        ))}
      </g>

      {/* Right: Counterparty Network Graph (Width: 300) */}
      <g transform="translate(480, 165)">
        <rect width="300" height="205" rx="16" fill="var(--bg-elevated)" stroke="var(--border-hairline)" />
        <text x="18" y="24" fill="var(--text-secondary)" fontFamily="var(--font-mono)" fontSize="9" letterSpacing="0.15em">
          COUNTERPARTY CLUSTER
        </text>

        {/* Graph Edges */}
        <line x1="80" y1="80" x2="160" y2="120" stroke="#EF4444" strokeWidth="2" strokeDasharray="3 3" />
        <line x1="160" y1="120" x2="240" y2="80" stroke="#EF4444" strokeWidth="2" />
        <line x1="80" y1="150" x2="160" y2="120" stroke="var(--border-hairline)" strokeWidth="1" />
        <line x1="160" y1="120" x2="220" y2="160" stroke="#EF4444" strokeWidth="1.5" />
        <line x1="240" y1="80" x2="220" y2="160" stroke="var(--border-hairline)" strokeWidth="1" />

        {/* 6 Nodes (Center node 160, 120 is flagged) */}
        <circle cx="80" cy="80" r="16" fill="var(--bg-base)" stroke="var(--border-strong)" />
        <text x="80" y="83" textAnchor="middle" fill="var(--text-secondary)" fontFamily="var(--font-mono)" fontSize="7">CP-A</text>

        <circle cx="80" cy="150" r="14" fill="var(--bg-base)" stroke="var(--border-hairline)" />
        <text x="80" y="153" textAnchor="middle" fill="var(--text-muted)" fontFamily="var(--font-mono)" fontSize="7">CP-B</text>

        {/* Flagged Node (Pulsing Red) */}
        <motion.circle
          cx="160"
          cy="120"
          r="24"
          fill="none"
          stroke="#EF4444"
          strokeWidth="1.5"
          animate={{ scale: [0.95, 1.15, 0.95], opacity: [0.8, 0.2, 0.8] }}
          transition={{ duration: 1.8, repeat: Infinity }}
        />
        <circle cx="160" cy="120" r="18" fill="#EF4444" fillOpacity="0.2" stroke="#EF4444" strokeWidth="2" />
        <text x="160" y="123" textAnchor="middle" fill="#EF4444" fontFamily="var(--font-mono)" fontSize="8" fontWeight="700">SUSP-01</text>

        <circle cx="240" cy="80" r="16" fill="var(--bg-base)" stroke="var(--border-strong)" />
        <text x="240" y="83" textAnchor="middle" fill="var(--text-secondary)" fontFamily="var(--font-mono)" fontSize="7">CP-C</text>

        <circle cx="220" cy="160" r="14" fill="var(--bg-base)" stroke="var(--border-strong)" />
        <text x="220" y="163" textAnchor="middle" fill="var(--text-secondary)" fontFamily="var(--font-mono)" fontSize="7">CP-D</text>

        <circle cx="270" cy="130" r="12" fill="var(--bg-base)" stroke="var(--border-hairline)" />
        <text x="270" y="133" textAnchor="middle" fill="var(--text-muted)" fontFamily="var(--font-mono)" fontSize="6">CP-E</text>
      </g>

      {/* Bottom: Mini Dossier Findings Panel */}
      <g transform="translate(20, 385)">
        <rect width="760" height="95" rx="14" fill="var(--bg-elevated)" stroke="var(--border-hairline)" />
        <text x="24" y="26" fill="var(--accent-primary)" fontFamily="var(--font-mono)" fontSize="9" fontWeight="600" letterSpacing="0.2em">
          FINDINGS — 14 SECTIONS GENERATED &amp; VERIFIED
        </text>
        <g transform="translate(24, 38)">
          <rect width="160" height="26" rx="6" fill="var(--bg-base)" stroke="var(--border-hairline)" />
          <text x="12" y="17" fill="var(--text-primary)" fontFamily="var(--font-mono)" fontSize="8">✓ 01. Legal Provenance</text>
        </g>
        <g transform="translate(196, 38)">
          <rect width="170" height="26" rx="6" fill="var(--bg-base)" stroke="var(--border-hairline)" />
          <text x="12" y="17" fill="var(--text-primary)" fontFamily="var(--font-mono)" fontSize="8">✓ 04. Structuring Patterns</text>
        </g>
        <g transform="translate(378, 38)">
          <rect width="180" height="26" rx="6" fill="var(--bg-base)" stroke="var(--border-hairline)" />
          <text x="12" y="17" fill="var(--text-primary)" fontFamily="var(--font-mono)" fontSize="8">✓ 09. Graph Cluster Centrality</text>
        </g>
        <g transform="translate(570, 38)">
          <rect width="166" height="26" rx="6" fill="var(--accent-primary)" fillOpacity="0.1" stroke="var(--accent-primary)" />
          <text x="12" y="17" fill="var(--accent-primary)" fontFamily="var(--font-mono)" fontSize="8" fontWeight="600">✓ 14. Immutable Hash</text>
        </g>
      </g>
    </svg>
  );
}

/* ─────────────────────────────────────────────────────────────────────────────
   05 · NeuroSim Lab — Neural Network Training View
   3-layer network (4-3-2), animating forward pass, loss curve polyline, KaTeX-style math panel.
   ───────────────────────────────────────────────────────────────────────────── */
export function NeuroSimVisual() {
  const layer1 = [120, 190, 260, 330]; // 4 input nodes
  const layer2 = [155, 225, 295];      // 3 hidden nodes
  const layer3 = [190, 260];           // 2 output nodes

  return (
    <svg
      width="100%"
      height="100%"
      viewBox="0 0 800 500"
      preserveAspectRatio="xMidYMid meet"
      className="w-full h-full select-none"
    >
      {/* Background grid */}
      <g stroke="var(--border-hairline)" strokeWidth="0.5" strokeOpacity="0.3">
        <line x1="20" y1="100" x2="780" y2="100" />
        <line x1="20" y1="200" x2="780" y2="200" />
        <line x1="20" y1="300" x2="780" y2="300" />
        <line x1="20" y1="400" x2="780" y2="400" />
      </g>

      {/* Network Connections Layer 1 -> Layer 2 */}
      {layer1.map((y1, i) =>
        layer2.map((y2, j) => (
          <line
            key={`l1-l2-${i}-${j}`}
            x1="120"
            y1={y1}
            x2="240"
            y2={y2}
            stroke="var(--accent-primary)"
            strokeWidth="1"
            strokeOpacity="0.4"
          />
        ))
      )}

      {/* Network Connections Layer 2 -> Layer 3 */}
      {layer2.map((y2, i) =>
        layer3.map((y3, j) => (
          <line
            key={`l2-l3-${i}-${j}`}
            x1="240"
            y1={y2}
            x2="360"
            y2={y3}
            stroke="var(--accent-bright)"
            strokeWidth="1.2"
            strokeOpacity="0.5"
          />
        ))
      )}

      {/* Layer 1 Nodes (4) */}
      {layer1.map((y, i) => (
        <g key={`l1-${i}`}>
          <circle cx="120" cy={y} r="18" fill="var(--bg-elevated)" stroke="var(--accent-primary)" strokeWidth="1.5" />
          <text x="120" y={y + 4} textAnchor="middle" fill="var(--text-secondary)" fontFamily="var(--font-mono)" fontSize="9">x{i + 1}</text>
        </g>
      ))}

      {/* Layer 2 Nodes (3) with animated forward pass fills */}
      {layer2.map((y, i) => (
        <g key={`l2-${i}`}>
          <motion.circle
            cx="240"
            cy={y}
            r="20"
            fill="var(--accent-primary)"
            animate={{ fillOpacity: [0.1, 0.45, 0.1] }}
            transition={{ duration: 1.8, repeat: Infinity, delay: i * 0.4 }}
            stroke="var(--accent-primary)"
            strokeWidth="2"
          />
          <text x="240" y={y + 4} textAnchor="middle" fill="var(--text-primary)" fontFamily="var(--font-mono)" fontSize="9" fontWeight="600">h{i + 1}</text>
        </g>
      ))}

      {/* Layer 3 Output Nodes (2) */}
      {layer3.map((y, i) => (
        <g key={`l3-${i}`}>
          <motion.circle
            cx="360"
            cy={y}
            r="18"
            fill="var(--accent-bright)"
            animate={{ fillOpacity: [0.2, 0.6, 0.2] }}
            transition={{ duration: 1.8, repeat: Infinity, delay: 0.8 + i * 0.4 }}
            stroke="var(--accent-bright)"
            strokeWidth="2"
          />
          <text x="360" y={y + 4} textAnchor="middle" fill="var(--text-primary)" fontFamily="var(--font-mono)" fontSize="9" fontWeight="600">y{i + 1}</text>
        </g>
      ))}

      {/* Right Side: Training Loss Curve */}
      <g transform="translate(440, 60)">
        <rect width="320" height="230" rx="16" fill="var(--bg-elevated)" stroke="var(--border-hairline)" />
        <text x="20" y="28" fill="var(--text-secondary)" fontFamily="var(--font-mono)" fontSize="9" letterSpacing="0.14em">
          CROSS-ENTROPY LOSS // EPOCH 420
        </text>

        {/* Graph Axes */}
        <line x1="30" y1="45" x2="30" y2="190" stroke="var(--border-hairline)" strokeWidth="1" />
        <line x1="30" y1="190" x2="295" y2="190" stroke="var(--border-hairline)" strokeWidth="1" />
        <text x="35" y="55" fill="var(--text-muted)" fontFamily="var(--font-mono)" fontSize="7">Loss: 0.042</text>
        <text x="250" y="185" fill="var(--text-muted)" fontFamily="var(--font-mono)" fontSize="7">Step 1000</text>

        {/* Downward Loss Polyline Curve */}
        <path
          d="M 30 65 Q 60 160 100 170 T 160 176 T 220 180 T 295 183"
          fill="none"
          stroke="var(--accent-primary)"
          strokeWidth="2.5"
        />

        {/* Target validation line */}
        <path
          d="M 30 80 Q 70 170 120 174 T 180 178 T 295 184"
          fill="none"
          stroke="var(--accent-secondary)"
          strokeWidth="1.5"
          strokeDasharray="4 4"
        />

        {/* Badge */}
        <g transform="translate(180, 50)">
          <rect width="100" height="24" rx="6" fill="var(--bg-base)" stroke="var(--border-hairline)" />
          <text x="50" y="16" textAnchor="middle" fill="#10B981" fontFamily="var(--font-mono)" fontSize="8">CONVERGED</text>
        </g>
      </g>

      {/* Bottom Math Panel: KaTeX Mathematical Inspect Box */}
      <g transform="translate(440, 310)">
        <rect width="320" height="150" rx="16" fill="var(--bg-elevated)" stroke="var(--accent-primary)" strokeOpacity="0.4" />
        <text x="20" y="28" fill="var(--accent-primary)" fontFamily="var(--font-mono)" fontSize="9" fontWeight="600" letterSpacing="0.16em">
          LIVE GRADIENT INSPECTOR (KaTeX)
        </text>

        <g transform="translate(20, 44)">
          <rect width="280" height="40" rx="8" fill="var(--bg-base)" stroke="var(--border-hairline)" />
          <text x="14" y="25" fill="var(--text-primary)" fontFamily="var(--font-mono)" fontSize="12" fontWeight="500">
            z = Σ(wᵢ · xᵢ) + b  →  a = σ(z)
          </text>
        </g>

        <g transform="translate(20, 94)">
          <rect width="280" height="40" rx="8" fill="var(--bg-base)" stroke="var(--border-hairline)" />
          <text x="14" y="25" fill="var(--accent-secondary)" fontFamily="var(--font-mono)" fontSize="11" fontWeight="500">
            ∂L/∂w = (a - y) · xᵀ  ·  η = 0.001
          </text>
        </g>
      </g>

      {/* Bottom-left label */}
      <g transform="translate(100, 420)">
        <text x="0" y="0" fill="var(--text-secondary)" fontFamily="var(--font-mono)" fontSize="9" letterSpacing="0.14em">
          LAYER 1: INPUT [4]  ·  LAYER 2: DENSE [3]  ·  OUTPUT: SOFTMAX [2]
        </text>
      </g>
    </svg>
  );
}

/* ─────────────────────────────────────────────────────────────────────────────
   06 · ReachInbox Email Scheduler — Email Automation Dashboard
   Left: Email list (4 rows). Center: Timeline bar with 3 scheduled markers.
   Right: Worker status panel (Queued, Processing, Delivered).
   Bottom: AI draft reply card with badge.
   ───────────────────────────────────────────────────────────────────────────── */
export function ReachInboxVisual() {
  return (
    <svg
      width="100%"
      height="100%"
      viewBox="0 0 800 500"
      preserveAspectRatio="xMidYMid meet"
      className="w-full h-full select-none"
    >
      {/* Top Application Bar */}
      <g transform="translate(20, 20)">
        <rect width="760" height="36" rx="10" fill="var(--bg-elevated)" stroke="var(--border-hairline)" />
        <circle cx="20" cy="18" r="4" fill="var(--accent-primary)" />
        <text x="36" y="22" fill="var(--text-primary)" fontFamily="var(--font-mono)" fontSize="9" fontWeight="600" letterSpacing="0.15em">
          REACHINBOX // DISTRIBUTED QUEUE &amp; RATE-LIMIT PIPELINE · BULLMQ + REDIS
        </text>
      </g>

      {/* Left: Email Stream List (Width: 260) */}
      <g transform="translate(20, 68)">
        <rect width="260" height="240" rx="16" fill="var(--bg-elevated)" stroke="var(--border-hairline)" />
        <text x="18" y="24" fill="var(--text-secondary)" fontFamily="var(--font-mono)" fontSize="9" letterSpacing="0.15em">
          OUTBOUND QUEUE (4)
        </text>

        {[
          { to: "alex@sequoia.com", time: "10:00:00 AM", sent: true },
          { to: "sarah@a16z.com", time: "10:02:30 AM", sent: true },
          { to: "elena@index.co", time: "10:05:00 AM", pending: true },
          { to: "david@benchmark.com", time: "10:07:30 AM", queued: true },
        ].map((mail, idx) => (
          <g key={mail.to} transform={`translate(14, ${38 + idx * 48})`}>
            <rect
              width="232"
              height="40"
              rx="8"
              fill="var(--bg-base)"
              stroke={mail.pending ? "var(--accent-primary)" : "var(--border-hairline)"}
              strokeWidth={mail.pending ? 1.5 : 1}
            />
            <circle
              cx="14"
              cy="20"
              r="4"
              fill={mail.sent ? "#10B981" : mail.pending ? "var(--accent-primary)" : "var(--text-muted)"}
            />
            <text x="26" y="18" fill="var(--text-primary)" fontFamily="var(--font-mono)" fontSize="8" fontWeight="500">
              {mail.to}
            </text>
            <text x="26" y="30" fill="var(--text-muted)" fontFamily="var(--font-mono)" fontSize="7">
              {mail.time} · {mail.sent ? "DELIVERED" : mail.pending ? "SENDING NOW" : "SCHEDULED"}
            </text>
          </g>
        ))}
      </g>

      {/* Center: Timeline Bar with 3 Scheduled Markers (Width: 270) */}
      <g transform="translate(294, 68)">
        <rect width="270" height="240" rx="16" fill="var(--bg-elevated)" stroke="var(--border-hairline)" />
        <text x="18" y="24" fill="var(--text-secondary)" fontFamily="var(--font-mono)" fontSize="9" letterSpacing="0.15em">
          RATE-PACED TIMELINE
        </text>

        {/* Timeline Horizontal Axis */}
        <line x1="25" y1="120" x2="245" y2="120" stroke="var(--border-strong)" strokeWidth="2" />

        {/* Marker 1: 10:00 AM */}
        <g transform="translate(50, 80)">
          <circle cx="0" cy="40" r="7" fill="#10B981" />
          <line x1="0" y1="15" x2="0" y2="33" stroke="#10B981" strokeWidth="1.5" />
          <rect x="-35" y="-6" width="70" height="20" rx="6" fill="var(--bg-base)" stroke="#10B981" />
          <text x="0" y="7" textAnchor="middle" fill="#10B981" fontFamily="var(--font-mono)" fontSize="7">10:00 AM</text>
        </g>

        {/* Marker 2: 10:02:30 AM (ACTIVE) */}
        <g transform="translate(135, 70)">
          <motion.circle
            cx="0"
            cy="50"
            r="12"
            fill="none"
            stroke="var(--accent-primary)"
            strokeWidth="1.5"
            animate={{ scale: [1, 1.4, 1], opacity: [0.8, 0.2, 0.8] }}
            transition={{ duration: 1.6, repeat: Infinity }}
          />
          <circle cx="0" cy="50" r="7" fill="var(--accent-primary)" />
          <line x1="0" y1="10" x2="0" y2="43" stroke="var(--accent-primary)" strokeWidth="1.5" />
          <rect x="-38" y="-12" width="76" height="22" rx="6" fill="var(--accent-primary)" fillOpacity="0.2" stroke="var(--accent-primary)" />
          <text x="0" y="2" textAnchor="middle" fill="var(--accent-primary)" fontFamily="var(--font-mono)" fontSize="8" fontWeight="600">DISPATCH</text>
        </g>

        {/* Marker 3: 10:05 AM */}
        <g transform="translate(215, 80)">
          <circle cx="0" cy="40" r="6" fill="var(--border-strong)" />
          <line x1="0" y1="15" x2="0" y2="34" stroke="var(--border-hairline)" strokeWidth="1.5" />
          <rect x="-35" y="-6" width="70" height="20" rx="6" fill="var(--bg-base)" stroke="var(--border-hairline)" />
          <text x="0" y="7" textAnchor="middle" fill="var(--text-muted)" fontFamily="var(--font-mono)" fontSize="7">10:05 AM</text>
        </g>

        <text x="135" y="190" textAnchor="middle" fill="var(--text-secondary)" fontFamily="var(--font-mono)" fontSize="8" letterSpacing="0.1em">
          SLIDING WINDOW: 2.5m INTERVAL (NO SPAM BURST)
        </text>
      </g>

      {/* Right: Worker Status Panel (Width: 200) */}
      <g transform="translate(578, 68)">
        <rect width="202" height="240" rx="16" fill="var(--bg-elevated)" stroke="var(--border-hairline)" />
        <text x="18" y="24" fill="var(--text-secondary)" fontFamily="var(--font-mono)" fontSize="9" letterSpacing="0.15em">
          WORKER CLUSTER
        </text>

        {/* 3 Status Pill Indicators */}
        <g transform="translate(18, 45)">
          <rect width="166" height="46" rx="10" fill="var(--bg-base)" stroke="var(--border-hairline)" />
          <circle cx="20" cy="23" r="5" fill="#F59E0B" />
          <text x="36" y="20" fill="var(--text-primary)" fontFamily="var(--font-mono)" fontSize="9" fontWeight="600">QUEUED: 12</text>
          <text x="36" y="32" fill="var(--text-muted)" fontFamily="var(--font-mono)" fontSize="7">Redis Memory Safe</text>
        </g>

        <g transform="translate(18, 105)">
          <rect width="166" height="46" rx="10" fill="var(--accent-primary)" fillOpacity="0.1" stroke="var(--accent-primary)" />
          <circle cx="20" cy="23" r="5" fill="var(--accent-primary)">
            <animate attributeName="opacity" values="0.4;1;0.4" dur="1s" repeatCount="indefinite" />
          </circle>
          <text x="36" y="20" fill="var(--accent-primary)" fontFamily="var(--font-mono)" fontSize="9" fontWeight="700">PROCESSING: 1</text>
          <text x="36" y="32" fill="var(--text-secondary)" fontFamily="var(--font-mono)" fontSize="7">BullMQ Worker 03</text>
        </g>

        <g transform="translate(18, 165)">
          <rect width="166" height="46" rx="10" fill="var(--bg-base)" stroke="var(--border-hairline)" />
          <circle cx="20" cy="23" r="5" fill="#10B981" />
          <text x="36" y="20" fill="#10B981" fontFamily="var(--font-mono)" fontSize="9" fontWeight="600">DELIVERED: 418</text>
          <text x="36" y="32" fill="var(--text-muted)" fontFamily="var(--font-mono)" fontSize="7">100% SLA Guarantee</text>
        </g>
      </g>

      {/* Bottom: AI-Generated Reply Preview Card with "AI" Badge */}
      <g transform="translate(20, 320)">
        <rect width="760" height="155" rx="16" fill="var(--bg-elevated)" stroke="var(--accent-primary)" strokeOpacity="0.5" />
        {/* Header */}
        <text x="24" y="28" fill="var(--accent-primary)" fontFamily="var(--font-mono)" fontSize="9" fontWeight="700" letterSpacing="0.18em">
          AI DRAFT SYNTHESIS // CONTEXT-AWARE RESPONSE
        </text>
        {/* AI Badge */}
        <g transform="translate(680, 14)">
          <rect width="48" height="20" rx="10" fill="var(--accent-primary)" fillOpacity="0.2" stroke="var(--accent-primary)" />
          <text x="24" y="14" textAnchor="middle" fill="var(--accent-primary)" fontFamily="var(--font-mono)" fontSize="9" fontWeight="700">AI</text>
        </g>

        <g transform="translate(24, 46)">
          <rect width="712" height="90" rx="10" fill="var(--bg-base)" stroke="var(--border-hairline)" />
          <text x="18" y="24" fill="var(--text-secondary)" fontFamily="var(--font-mono)" fontSize="9">
            Re: Technical Architecture Inquiry &amp; Pipeline Demo
          </text>
          <text x="18" y="44" fill="var(--text-primary)" fontFamily="var(--font-display)" fontSize="13">
            &ldquo;Hi Alex, I reviewed the distributed queue design. By pairing BullMQ with Redis sliding-window locks, we prevent any outbound quota throttles while delivering 99.98% delivery reliability...&rdquo;
          </text>
          <text x="18" y="70" fill="var(--accent-primary)" fontFamily="var(--font-mono)" fontSize="8" letterSpacing="0.1em">
            GENERATED WITH GPT-4o-MINI CONTEXT EVALUATOR · SENTIMENT: HIGH INTEREST (0.91)
          </text>
        </g>
      </g>
    </svg>
  );
}

/* ─────────────────────────────────────────────────────────────────────────────
   Main DemoPlaceholder component:
   - Accepts variant, projectId, imageSrc, title.
   - If imageSrc is passed and hasn't failed, renders next/image.
   - On error or if missing, renders the bespoke project SVG visual.
   ───────────────────────────────────────────────────────────────────────────── */
export function DemoPlaceholder({
  variant,
  projectId,
  imageSrc,
  title,
  visual,
  demoImage,
}: DemoPlaceholderProps) {
  const [imageError, setImageError] = useState(false);
  const effectiveVariant = (variant || projectId || visual || "").toLowerCase();
  const effectiveImage = imageSrc || demoImage;

  // Render the unique SVG matching the project
  const renderVisual = () => {
    switch (effectiveVariant) {
      case "lisa-ai":
      case "lisa-aios":
        return <LisaVisual />;
      case "neuronet-ai":
      case "neuronet":
        return <NeuroNetVisual />;
      case "neuralworkspace":
      case "neuralworkspace.ai":
        return <NeuralWorkspaceVisual />;
      case "aml-investigator":
      case "aml-agentic-investigator":
        return <AmlVisual />;
      case "neurosim-lab":
      case "neurosim":
        return <NeuroSimVisual />;
      case "reachinbox":
      case "reachinbox-scheduler":
        return <ReachInboxVisual />;
      default:
        return <LisaVisual />;
    }
  };

  const projectName = title || (
    effectiveVariant === "lisa-ai" ? "Lisa AIOS" :
    effectiveVariant === "neuronet-ai" ? "NeuroNet AI" :
    effectiveVariant === "neuralworkspace" ? "NeuralWorkspace.ai" :
    effectiveVariant === "aml-investigator" ? "AML Agentic Investigator" :
    effectiveVariant === "neurosim-lab" ? "NeuroSim Lab" :
    effectiveVariant === "reachinbox" ? "ReachInbox Scheduler" : "System"
  );

  return (
    <div
      className="relative w-full h-full min-h-65 md:min-h-120 rounded-3xl overflow-hidden border border-(--accent-primary)/30 flex items-center justify-center shadow-2xl"
      style={{
        backgroundColor: "var(--bg-glass)",
        background:
          "radial-gradient(ellipse at 50% 45%, color-mix(in srgb, var(--accent-primary) 12%, transparent), transparent 75%), var(--bg-glass)",
      }}
    >
      {/* If real image exists and has not failed, show Next.js Image with fallback */}
      {effectiveImage && !imageError ? (
        <Image
          src={effectiveImage}
          alt={`${projectName} interface`}
          fill
          sizes="(max-width: 1024px) 95vw, 650px"
          className="object-cover object-top transition-transform duration-700 hover:scale-[1.02]"
          onError={() => setImageError(true)}
          priority
        />
      ) : (
        renderVisual()
      )}

      {/* Required caption at bottom-left: "<PROJECT NAME> — LIVE PREVIEW" in --text-metadata */}
      <div className="pointer-events-none absolute bottom-4 left-6 z-10 flex items-center gap-2 rounded-full border border-line bg-elevated/85 px-3.5 py-1.5 backdrop-blur-md">
        <span className="h-1.5 w-1.5 rounded-full bg-(--accent-primary) animate-pulse" />
        <span
          className="font-mono text-xs uppercase tracking-[0.22em]"
          style={{ color: "var(--text-metadata, var(--text-muted))" }}
        >
          {projectName} — LIVE PREVIEW
        </span>
      </div>
    </div>
  );
}

export const ProjectDemo = DemoPlaceholder;
