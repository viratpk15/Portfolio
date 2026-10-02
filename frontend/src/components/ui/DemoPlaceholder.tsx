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
  onExpandImage?: (data: { src: string; title: string }) => void;
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
   07 · F1 Live Predictor 2026 — Telemetry Dashboard & Active Aero Engine
   Top: Active Aero Indicator (X-Mode / Z-Mode) & 350kW MGU-K Hybrid Energy.
   Left: Telemetry speed curve, live gear/RPM, and animated scan cursor.
   Right: XGBoost ML Predicted finishing order & probabilities.
   Bottom: Sector times, circuit minimap lap trace, and Groq AI commentary.
   ───────────────────────────────────────────────────────────────────────────── */
export function F1PredictorVisual() {
  return (
    <svg
      width="100%"
      height="100%"
      viewBox="0 0 800 500"
      preserveAspectRatio="xMidYMid meet"
      className="w-full h-full select-none"
    >
      <defs>
        <linearGradient id="f1-speed-grad" x1="0%" y1="0%" x2="0%" y2="100%">
          <stop offset="0%" stopColor="#00F5D4" stopOpacity="0.4" />
          <stop offset="100%" stopColor="#00F5D4" stopOpacity="0.0" />
        </linearGradient>
        <pattern id="f1-carbon-grid" width="20" height="20" patternUnits="userSpaceOnUse">
          <path d="M 20 0 L 0 0 0 20" fill="none" stroke="var(--border-hairline)" strokeWidth="0.5" strokeOpacity="0.25" />
        </pattern>
      </defs>

      <rect width="100%" height="100%" fill="url(#f1-carbon-grid)" />

      {/* Top Telemetry HUD Header */}
      <g transform="translate(30, 24)">
        <rect width="740" height="42" rx="10" fill="var(--bg-elevated)" stroke="var(--border-hairline)" />
        <circle cx="20" cy="21" r="5" fill="#FF1801" />
        <text x="34" y="25" fill="var(--text-primary)" fontFamily="var(--font-mono)" fontSize="11" fontWeight="700" letterSpacing="0.1em">
          F1 LIVE PREDICTOR 2026 // ACTIVE TELEMETRY
        </text>
        <text x="360" y="25" fill="var(--text-muted)" fontFamily="var(--font-mono)" fontSize="10">
          ROUND 20: MEXICO GP · FASTF1 STREAM
        </text>

        {/* Dynamic Aero Mode Indicator */}
        <g transform="translate(565, 8)">
          <motion.rect
            width="155"
            height="26"
            rx="6"
            fill="var(--bg-base)"
            stroke="#00F5D4"
            strokeWidth="1.5"
            animate={{ strokeOpacity: [0.6, 1, 0.6] }}
            transition={{ duration: 1.5, repeat: Infinity }}
          />
          <circle cx="16" cy="13" r="4" fill="#00F5D4" />
          <text x="28" y="17" fill="#00F5D4" fontFamily="var(--font-mono)" fontSize="9" fontWeight="700">
            AERO: X-MODE (LOW DRAG)
          </text>
        </g>
      </g>

      {/* Left Column: Telemetry Speed Trace & Engine Dynamics (x: 30, y: 80, w: 460, h: 250) */}
      <g transform="translate(30, 80)">
        <rect width="460" height="250" rx="12" fill="var(--bg-elevated)" stroke="var(--border-hairline)" />

        <text x="20" y="24" fill="var(--text-secondary)" fontFamily="var(--font-mono)" fontSize="10" letterSpacing="0.12em">
          TELEMETRY SPEED TRACE &amp; 350kW MGU-K BOOST (XGBoost Regressor)
        </text>

        {/* Speed axes */}
        <line x1="45" y1="45" x2="45" y2="200" stroke="var(--border-hairline)" strokeWidth="1" />
        <line x1="45" y1="200" x2="435" y2="200" stroke="var(--border-hairline)" strokeWidth="1" />
        
        {/* Speed grid horizontal lines */}
        <line x1="45" y1="75" x2="435" y2="75" stroke="var(--border-hairline)" strokeDasharray="3 3" strokeOpacity="0.5" />
        <line x1="45" y1="120" x2="435" y2="120" stroke="var(--border-hairline)" strokeDasharray="3 3" strokeOpacity="0.5" />
        <line x1="45" y1="160" x2="435" y2="160" stroke="var(--border-hairline)" strokeDasharray="3 3" strokeOpacity="0.5" />

        <text x="12" y="79" fill="var(--text-muted)" fontFamily="var(--font-mono)" fontSize="8">350k</text>
        <text x="12" y="124" fill="var(--text-muted)" fontFamily="var(--font-mono)" fontSize="8">240k</text>
        <text x="12" y="164" fill="var(--text-muted)" fontFamily="var(--font-mono)" fontSize="8">120k</text>
        <text x="12" y="204" fill="var(--text-muted)" fontFamily="var(--font-mono)" fontSize="8">0</text>

        {/* Speed Telemetry Curve (Smooth path with area fill) */}
        <path
          d="M 45 180 Q 75 170 100 80 T 160 70 L 190 72 Q 210 75 225 185 T 260 170 T 310 90 T 370 75 T 435 68 L 435 200 L 45 200 Z"
          fill="url(#f1-speed-grad)"
        />
        <path
          d="M 45 180 Q 75 170 100 80 T 160 70 L 190 72 Q 210 75 225 185 T 260 170 T 310 90 T 370 75 T 435 68"
          fill="none"
          stroke="#00F5D4"
          strokeWidth="2.5"
        />

        {/* Animated Telemetry Scan Cursor */}
        <motion.line
          x1="45"
          y1="45"
          x2="45"
          y2="200"
          stroke="#FF1801"
          strokeWidth="2"
          strokeDasharray="4 2"
          animate={{ x1: [45, 435, 45], x2: [45, 435, 45] }}
          transition={{ duration: 4.5, repeat: Infinity, ease: "linear" }}
        />

        {/* Telemetry live readouts */}
        <g transform="translate(45, 214)">
          <rect width="80" height="22" rx="4" fill="var(--bg-base)" stroke="var(--border-hairline)" />
          <text x="40" y="15" textAnchor="middle" fill="#00F5D4" fontFamily="var(--font-mono)" fontSize="9" fontWeight="700">
            342 KM/H
          </text>
        </g>
        <g transform="translate(135, 214)">
          <rect width="80" height="22" rx="4" fill="var(--bg-base)" stroke="var(--border-hairline)" />
          <text x="40" y="15" textAnchor="middle" fill="var(--text-primary)" fontFamily="var(--font-mono)" fontSize="9">
            GEAR 8 · 11.8k
          </text>
        </g>
        <g transform="translate(225, 214)">
          <rect width="95" height="22" rx="4" fill="var(--bg-base)" stroke="var(--border-hairline)" />
          <text x="47" y="15" textAnchor="middle" fill="#10B981" fontFamily="var(--font-mono)" fontSize="9">
            350kW MGU-K ON
          </text>
        </g>
        <g transform="translate(330, 214)">
          <rect width="95" height="22" rx="4" fill="var(--bg-base)" stroke="var(--border-hairline)" />
          <text x="47" y="15" textAnchor="middle" fill="#A855F7" fontFamily="var(--font-mono)" fontSize="9">
            DRS OVERRIDE
          </text>
        </g>
      </g>

      {/* Right Column: Live Forecast Paddock & ML Leaderboard (x: 505, y: 80, w: 265, h: 250) */}
      <g transform="translate(505, 80)">
        <rect width="265" height="250" rx="12" fill="var(--bg-elevated)" stroke="var(--border-hairline)" />

        <text x="16" y="24" fill="var(--text-secondary)" fontFamily="var(--font-mono)" fontSize="10" letterSpacing="0.12em">
          PREDICTED FINISH (XGBOOST)
        </text>

        {/* P1 Driver Row */}
        <g transform="translate(16, 40)">
          <rect width="233" height="48" rx="8" fill="var(--bg-base)" stroke="#00F5D4" strokeWidth="1" />
          <text x="12" y="20" fill="#00F5D4" fontFamily="var(--font-mono)" fontSize="12" fontWeight="700">01</text>
          <text x="36" y="20" fill="var(--text-primary)" fontFamily="var(--font-mono)" fontSize="11" fontWeight="600">K. ANTONELLI</text>
          <text x="36" y="36" fill="var(--text-muted)" fontFamily="var(--font-mono)" fontSize="8">MERCEDES F1 2026</text>
          
          <rect x="150" y="12" width="72" height="24" rx="4" fill="#00F5D4" fillOpacity="0.12" />
          <text x="186" y="27" textAnchor="middle" fill="#00F5D4" fontFamily="var(--font-mono)" fontSize="10" fontWeight="700">
            86.4% WIN
          </text>
        </g>

        {/* P2 Driver Row */}
        <g transform="translate(16, 96)">
          <rect width="233" height="44" rx="8" fill="var(--bg-base)" stroke="var(--border-hairline)" />
          <text x="12" y="19" fill="var(--text-muted)" fontFamily="var(--font-mono)" fontSize="11" fontWeight="700">02</text>
          <text x="36" y="19" fill="var(--text-primary)" fontFamily="var(--font-mono)" fontSize="10" fontWeight="500">M. VERSTAPPEN</text>
          <text x="36" y="33" fill="var(--text-muted)" fontFamily="var(--font-mono)" fontSize="8">RED BULL RACING</text>
          
          <rect x="150" y="10" width="72" height="22" rx="4" fill="var(--bg-elevated)" />
          <text x="186" y="24" textAnchor="middle" fill="var(--text-secondary)" fontFamily="var(--font-mono)" fontSize="9">
            71.2% POD
          </text>
        </g>

        {/* P3 Driver Row */}
        <g transform="translate(16, 148)">
          <rect width="233" height="44" rx="8" fill="var(--bg-base)" stroke="var(--border-hairline)" />
          <text x="12" y="19" fill="var(--text-muted)" fontFamily="var(--font-mono)" fontSize="11" fontWeight="700">03</text>
          <text x="36" y="19" fill="var(--text-primary)" fontFamily="var(--font-mono)" fontSize="10" fontWeight="500">G. RUSSELL</text>
          <text x="36" y="33" fill="var(--text-muted)" fontFamily="var(--font-mono)" fontSize="8">MERCEDES F1 2026</text>
          
          <rect x="150" y="10" width="72" height="22" rx="4" fill="var(--bg-elevated)" />
          <text x="186" y="24" textAnchor="middle" fill="var(--text-secondary)" fontFamily="var(--font-mono)" fontSize="9">
            64.8% POD
          </text>
        </g>

        {/* FastF1 model badge */}
        <g transform="translate(16, 202)">
          <rect width="233" height="34" rx="6" fill="var(--bg-base)" stroke="var(--border-hairline)" />
          <text x="12" y="21" fill="var(--text-muted)" fontFamily="var(--font-mono)" fontSize="8" letterSpacing="0.08em">
            MODEL: XGBOOST REGRESSOR (CALIBRATED)
          </text>
          <circle cx="215" cy="17" r="4" fill="#10B981" />
        </g>
      </g>

      {/* Bottom Sector Split Bar (x: 30, y: 345, w: 460, h: 58) */}
      <g transform="translate(30, 345)">
        <rect width="460" height="58" rx="10" fill="var(--bg-elevated)" stroke="var(--border-hairline)" />
        <g transform="translate(20, 14)">
          <rect width="125" height="30" rx="6" fill="#A855F7" fillOpacity="0.15" stroke="#A855F7" strokeWidth="1" />
          <text x="10" y="20" fill="#A855F7" fontFamily="var(--font-mono)" fontSize="9" fontWeight="700">SECTOR 1: 27.421s</text>
        </g>
        <g transform="translate(165, 14)">
          <rect width="125" height="30" rx="6" fill="#10B981" fillOpacity="0.15" stroke="#10B981" strokeWidth="1" />
          <text x="10" y="20" fill="#10B981" fontFamily="var(--font-mono)" fontSize="9" fontWeight="700">SECTOR 2: 38.109s</text>
        </g>
        <g transform="translate(310, 14)">
          <rect width="125" height="30" rx="6" fill="#F59E0B" fillOpacity="0.15" stroke="#F59E0B" strokeWidth="1" />
          <text x="10" y="20" fill="#F59E0B" fontFamily="var(--font-mono)" fontSize="9" fontWeight="700">SECTOR 3: 24.312s</text>
        </g>
      </g>

      {/* Bottom Right: Live Circuit Minimap & Lap Tracker (x: 505, y: 345, w: 265, h: 58) */}
      <g transform="translate(505, 345)">
        <rect width="265" height="58" rx="10" fill="var(--bg-elevated)" stroke="var(--border-hairline)" />
        <path
          d="M 30 35 L 75 18 L 130 18 L 170 32 L 200 20 L 235 32 L 210 46 L 90 46 Z"
          fill="none"
          stroke="var(--border-hairline)"
          strokeWidth="3"
        />
        <motion.circle
          r="4"
          fill="#FF1801"
          animate={{
            cx: [30, 75, 130, 170, 200, 235, 210, 90, 30],
            cy: [35, 18, 18, 32, 20, 32, 46, 46, 35],
          }}
          transition={{ duration: 6, repeat: Infinity, ease: "linear" }}
        />
        <text x="12" y="14" fill="var(--text-muted)" fontFamily="var(--font-mono)" fontSize="8">
          AUTÓDROMO HNOS RODRÍGUEZ
        </text>
      </g>

      {/* Live AI Commentary Ticker at bottom (x: 30, y: 418, w: 740, h: 58) */}
      <g transform="translate(30, 418)">
        <rect width="740" height="58" rx="10" fill="var(--bg-elevated)" stroke="#00F5D4" strokeOpacity="0.3" />
        <g transform="translate(18, 15)">
          <circle cx="6" cy="12" r="4" fill="#00F5D4" />
          <text x="18" y="16" fill="#00F5D4" fontFamily="var(--font-mono)" fontSize="10" fontWeight="700">
            GROQ AI RACE ENGINEER (LLAMA 3 INFERENCE · 185ms):
          </text>
        </g>
        <text x="36" y="44" fill="var(--text-primary)" fontFamily="var(--font-mono)" fontSize="10">
          &ldquo;Lap 48/57: Telemetry delta shrinking by 0.18s/lap. X-Mode low drag deployed on main straight. Switch to Strat-2.&rdquo;
        </text>
      </g>
    </svg>
  );
}

/* ─────────────────────────────────────────────────────────────────────────────
   08 · Ancient Script Analyser — Computational Epigraphy AI
   Top: Epistemic Evidence Framework Pipeline (Levels 1-4).
   Left: 8-Stage Research Pipeline & Photometric Sharpness Metrics.
   Center: Stylized Proto-Elamite clay tablet with laser scanner & glyph bounding boxes.
   Right: Decoded artifact dossier, Proto-Elamite confidence ring, and reconstructed reading.
   Bottom: Academic peer-review report ticker with MDP corpus citations.
   ───────────────────────────────────────────────────────────────────────────── */
export function AncientScriptsVisual() {
  return (
    <svg
      width="100%"
      height="100%"
      viewBox="0 0 800 500"
      preserveAspectRatio="xMidYMid meet"
      className="w-full h-full select-none"
    >
      <defs>
        <linearGradient id="ancient-scan-grad" x1="0%" y1="0%" x2="0%" y2="100%">
          <stop offset="0%" stopColor="#38BDF8" stopOpacity="0.0" />
          <stop offset="50%" stopColor="#38BDF8" stopOpacity="0.45" />
          <stop offset="100%" stopColor="#38BDF8" stopOpacity="0.0" />
        </linearGradient>
        <linearGradient id="clay-texture" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#1E1A16" />
          <stop offset="50%" stopColor="#25201A" />
          <stop offset="100%" stopColor="#191512" />
        </linearGradient>
        <pattern id="ancient-grid" width="24" height="24" patternUnits="userSpaceOnUse">
          <path d="M 24 0 L 0 0 0 24" fill="none" stroke="var(--border-hairline)" strokeWidth="0.5" strokeOpacity="0.2" />
        </pattern>
      </defs>

      <rect width="100%" height="100%" fill="url(#ancient-grid)" />

      {/* Top Header: Epistemic Pipeline */}
      <g transform="translate(30, 24)">
        <rect width="740" height="42" rx="10" fill="var(--bg-elevated)" stroke="var(--border-hairline)" />
        <circle cx="20" cy="21" r="5" fill="#E0A838" />
        <text x="34" y="25" fill="var(--text-primary)" fontFamily="var(--font-mono)" fontSize="11" fontWeight="700" letterSpacing="0.1em">
          ANCIENT SCRIPTS AI // COMPUTATIONAL EPIGRAPHY
        </text>
        <text x="375" y="25" fill="var(--text-muted)" fontFamily="var(--font-mono)" fontSize="10">
          PROTO-ELAMITE (c. 3100–2900 BCE) · MDP CORPUS
        </text>

        {/* Evidence Framework Badge */}
        <g transform="translate(585, 8)">
          <rect width="135" height="26" rx="6" fill="var(--bg-base)" stroke="#38BDF8" strokeWidth="1.2" />
          <circle cx="14" cy="13" r="4" fill="#38BDF8" />
          <text x="24" y="17" fill="#38BDF8" fontFamily="var(--font-mono)" fontSize="9" fontWeight="700">
            LEVEL 1-4 VERIFIED
          </text>
        </g>
      </g>

      {/* Left Column: 8-Stage Research Pipeline (x: 30, y: 80, w: 200, h: 320) */}
      <g transform="translate(30, 80)">
        <rect width="200" height="320" rx="12" fill="var(--bg-elevated)" stroke="var(--border-hairline)" />

        <text x="16" y="24" fill="var(--text-secondary)" fontFamily="var(--font-mono)" fontSize="9" letterSpacing="0.14em">
          EPIGRAPHIC PIPELINE
        </text>

        {[
          { name: "1. CLAHE Normalization", status: "✓ Complete", color: "#10B981" },
          { name: "2. Laplacian Variance", status: "✓ 94.2% Sharp", color: "#10B981" },
          { name: "3. Contour Segment.", status: "✓ 9 Bounding", color: "#38BDF8" },
          { name: "4. 8-Param Topology", status: "✓ Active Match", color: "#38BDF8" },
          { name: "5. MDP Corpus Search", status: "✓ Attested", color: "#E0A838" },
          { name: "6. Metrology Syntax", status: "✓ Deciphered", color: "#E0A838" },
          { name: "7. Peer Dossier Gen.", status: "✓ Ready (MD)", color: "#A855F7" },
        ].map((step, idx) => (
          <g key={step.name} transform={`translate(16, ${38 + idx * 39})`}>
            <rect width="168" height="32" rx="6" fill="var(--bg-base)" stroke="var(--border-hairline)" />
            <circle cx="12" cy="16" r="3.5" fill={step.color} />
            <text x="22" y="15" fill="var(--text-primary)" fontFamily="var(--font-mono)" fontSize="8" fontWeight="600">
              {step.name}
            </text>
            <text x="22" y="25" fill={step.color} fontFamily="var(--font-mono)" fontSize="7">
              {step.status}
            </text>
          </g>
        ))}
      </g>

      {/* Center Column: Clay Tablet Scan & Morphological Bounding Boxes (x: 245, y: 80, w: 280, h: 320) */}
      <g transform="translate(245, 80)">
        <rect width="280" height="320" rx="12" fill="var(--bg-elevated)" stroke="var(--border-hairline)" />

        <text x="16" y="24" fill="var(--text-secondary)" fontFamily="var(--font-mono)" fontSize="9" letterSpacing="0.14em">
          SOURCE ARTIFACT SCAN (1360 × 1980 PX)
        </text>

        {/* Stylized Clay Tablet */}
        <g transform="translate(20, 36)">
          <rect width="240" height="260" rx="14" fill="url(#clay-texture)" stroke="#E0A838" strokeOpacity="0.4" strokeWidth="1.5" />

          {/* Inscribed strokes */}
          <path d="M 40 40 L 60 70 M 60 40 L 40 70 M 80 45 L 110 45 L 95 70 Z" stroke="#C49B55" strokeWidth="2" strokeOpacity="0.7" fill="none" />
          <path d="M 140 40 L 175 40 M 155 40 L 155 80 M 195 50 L 215 50 L 205 75 Z" stroke="#C49B55" strokeWidth="2" strokeOpacity="0.7" fill="none" />
          <path d="M 40 120 L 70 120 L 55 150 Z M 95 125 L 125 125 M 110 115 L 110 155" stroke="#C49B55" strokeWidth="2" strokeOpacity="0.7" fill="none" />
          <path d="M 150 125 L 180 145 L 150 165 Z M 195 120 L 215 155 L 195 155" stroke="#C49B55" strokeWidth="2" strokeOpacity="0.7" fill="none" />
          <path d="M 45 200 L 75 200 L 75 235 M 100 205 L 130 205 L 115 235" stroke="#C49B55" strokeWidth="2" strokeOpacity="0.7" fill="none" />
          <path d="M 160 200 L 190 230 M 190 200 L 160 230" stroke="#C49B55" strokeWidth="2" strokeOpacity="0.7" fill="none" />

          {/* Bounding Box 1: S1 HORNED_R */}
          <g transform="translate(32, 32)">
            <motion.rect
              width="45"
              height="48"
              rx="4"
              fill="#38BDF8"
              fillOpacity="0.12"
              stroke="#38BDF8"
              strokeWidth="1.2"
              animate={{ strokeOpacity: [0.5, 1, 0.5] }}
              transition={{ duration: 2, repeat: Infinity }}
            />
            <rect x="0" y="0" width="38" height="12" fill="#38BDF8" rx="2" />
            <text x="3" y="9" fill="#000" fontFamily="var(--font-mono)" fontSize="6" fontWeight="700">S1: HORNED_R</text>
          </g>

          {/* Bounding Box 2: S2 KILLED_COMPLEX */}
          <g transform="translate(132, 32)">
            <motion.rect
              width="50"
              height="55"
              rx="4"
              fill="#34D399"
              fillOpacity="0.12"
              stroke="#34D399"
              strokeWidth="1.2"
              animate={{ strokeOpacity: [0.5, 1, 0.5] }}
              transition={{ duration: 2, repeat: Infinity, delay: 0.5 }}
            />
            <rect x="0" y="0" width="48" height="12" fill="#34D399" rx="2" />
            <text x="3" y="9" fill="#000" fontFamily="var(--font-mono)" fontSize="6" fontWeight="700">S2: KILLED_CMPX</text>
          </g>

          {/* Bounding Box 3: S3 A2_TALL_MAN */}
          <g transform="translate(35, 112)">
            <motion.rect
              width="45"
              height="48"
              rx="4"
              fill="#E0A838"
              fillOpacity="0.15"
              stroke="#E0A838"
              strokeWidth="1.2"
              animate={{ strokeOpacity: [0.5, 1, 0.5] }}
              transition={{ duration: 2, repeat: Infinity, delay: 1 }}
            />
            <rect x="0" y="0" width="46" height="12" fill="#E0A838" rx="2" />
            <text x="3" y="9" fill="#000" fontFamily="var(--font-mono)" fontSize="6" fontWeight="700">S3: A2_TALL_MAN</text>
          </g>

          {/* Bounding Box 4: S4 CUP_TR4_506 */}
          <g transform="translate(142, 115)">
            <motion.rect
              width="48"
              height="48"
              rx="4"
              fill="#A855F7"
              fillOpacity="0.15"
              stroke="#A855F7"
              strokeWidth="1.2"
              animate={{ strokeOpacity: [0.5, 1, 0.5] }}
              transition={{ duration: 2, repeat: Infinity, delay: 1.5 }}
            />
            <rect x="0" y="0" width="46" height="12" fill="#A855F7" rx="2" />
            <text x="3" y="9" fill="#fff" fontFamily="var(--font-mono)" fontSize="6" fontWeight="700">S4: CUP_TR4_506</text>
          </g>

          {/* Photometric Laser Scan Beam */}
          <motion.rect
            x="0"
            width="240"
            height="18"
            fill="url(#ancient-scan-grad)"
            animate={{ y: [0, 242, 0] }}
            transition={{ duration: 3.5, repeat: Infinity, ease: "easeInOut" }}
          />
        </g>
      </g>

      {/* Right Column: Decoded Dossier & Epigraphic Interpretation (x: 540, y: 80, w: 230, h: 320) */}
      <g transform="translate(540, 80)">
        <rect width="230" height="320" rx="12" fill="var(--bg-elevated)" stroke="var(--border-hairline)" />

        <text x="16" y="24" fill="var(--text-secondary)" fontFamily="var(--font-mono)" fontSize="9" letterSpacing="0.14em">
          DECODED ARTIFACT DOSSIER
        </text>

        {/* Script Classification Card */}
        <g transform="translate(16, 38)">
          <rect width="198" height="66" rx="8" fill="var(--bg-base)" stroke="#38BDF8" strokeWidth="1" />
          <text x="12" y="20" fill="#38BDF8" fontFamily="var(--font-mono)" fontSize="8">SCRIPT CLASSIFICATION</text>
          <text x="12" y="38" fill="var(--text-primary)" fontFamily="var(--font-mono)" fontSize="13" fontWeight="700">
            Proto-Elamite
          </text>
          <text x="12" y="54" fill="var(--text-muted)" fontFamily="var(--font-mono)" fontSize="8">
            Early Bronze Age (c. 3100–2900 BCE)
          </text>

          {/* Confidence Ring */}
          <g transform="translate(162, 33)">
            <circle cx="0" cy="0" r="18" fill="none" stroke="var(--border-hairline)" strokeWidth="3" />
            <circle cx="0" cy="0" r="18" fill="none" stroke="#38BDF8" strokeWidth="3" strokeDasharray="97 100" strokeLinecap="round" />
            <text x="0" y="4" textAnchor="middle" fill="#38BDF8" fontFamily="var(--font-mono)" fontSize="8" fontWeight="700">86%</text>
          </g>
        </g>

        {/* Reconstructed Reading Card */}
        <g transform="translate(16, 114)">
          <rect width="198" height="98" rx="8" fill="var(--bg-base)" stroke="var(--border-hairline)" />
          <text x="12" y="18" fill="#E0A838" fontFamily="var(--font-mono)" fontSize="8" fontWeight="600">
            RECONSTRUCTED READING (TOP CANDIDATE)
          </text>
          <text x="12" y="36" fill="var(--text-primary)" fontFamily="var(--font-mono)" fontSize="9" fontWeight="500">
            &ldquo;Belonging to the High Administrator
          </text>
          <text x="12" y="50" fill="var(--text-primary)" fontFamily="var(--font-mono)" fontSize="9" fontWeight="500">
            (Paramount Ruler), allocation of
          </text>
          <text x="12" y="64" fill="var(--text-primary)" fontFamily="var(--font-mono)" fontSize="9" fontWeight="500">
            livestock from the Central Domain.&rdquo;
          </text>
          <text x="12" y="84" fill="#10B981" fontFamily="var(--font-mono)" fontSize="8">
            Confidence: 65% · Metrology: Decimal
          </text>
        </g>

        {/* Sign Specification Card */}
        <g transform="translate(16, 222)">
          <rect width="198" height="84" rx="8" fill="var(--bg-base)" stroke="var(--border-hairline)" />
          <text x="12" y="18" fill="var(--text-muted)" fontFamily="var(--font-mono)" fontSize="8">
            SPECIMEN A1 // HONORIFIC STAR
          </text>
          <text x="12" y="34" fill="var(--text-secondary)" fontFamily="var(--font-mono)" fontSize="9" fontWeight="600">
            M001_A · Logogram (4,806 tokens)
          </text>

          {/* 8-parameter descriptor bar */}
          <g transform="translate(12, 44)">
            <rect width="174" height="6" rx="3" fill="var(--border-hairline)" />
            <motion.rect
              width="145"
              height="6"
              rx="3"
              fill="#E0A838"
              animate={{ width: [120, 145, 120] }}
              transition={{ duration: 3, repeat: Infinity }}
            />
          </g>
          <text x="12" y="66" fill="var(--text-muted)" fontFamily="var(--font-mono)" fontSize="7">
            Corpus Reference: H65[_A + N555_7 + M035_7]
          </text>
        </g>
      </g>

      {/* Bottom Peer Review & Decrypted Report Strip (x: 30, y: 415, w: 740, h: 60) */}
      <g transform="translate(30, 415)">
        <rect width="740" height="60" rx="10" fill="var(--bg-elevated)" stroke="#E0A838" strokeOpacity="0.35" />
        <g transform="translate(20, 16)">
          <circle cx="6" cy="12" r="4" fill="#E0A838" />
          <text x="18" y="16" fill="#E0A838" fontFamily="var(--font-mono)" fontSize="10" fontWeight="700">
            DECRYPTED RESEARCH REPORT // LEVEL 1-4 SCIENTIFIC EVIDENCE
          </text>
        </g>
        <text x="38" y="44" fill="var(--text-primary)" fontFamily="var(--font-mono)" fontSize="9.5">
          Level 1: 9 Candidate Graphemes · Level 2: Proto-Elamite (86.2% Softmax) · Level 3: Susa / MDP Attestation · Level 4: Administrative Ledger
        </text>
      </g>
    </svg>
  );
}

/* ─────────────────────────────────────────────────────────────────────────────
   Main DemoPlaceholder component:
   - Accepts variant, projectId, imageSrc, title, demoImage, onExpandImage.
   - Provides an interactive toggle between Live Animated HUD simulation and authentic screenshot.
   - When in screenshot mode, supports fullscreen inspection via onExpandImage.
   - On error or fallback, renders the bespoke project SVG visual.
   ───────────────────────────────────────────────────────────────────────────── */
export function DemoPlaceholder({
  variant,
  projectId,
  imageSrc,
  title,
  visual,
  demoImage,
  onExpandImage,
}: DemoPlaceholderProps) {
  const [imageError, setImageError] = useState(false);
  const [viewMode, setViewMode] = useState<"interactive" | "screenshot">("interactive");
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
      case "f1-predictor":
      case "f1-race-predictor":
      case "f1-predictor-2026":
      case "f1-live-predictor":
        return <F1PredictorVisual />;
      case "ancient-scripts-ai":
      case "ancient-script-analyser":
      case "ancient-scripts":
        return <AncientScriptsVisual />;
      default:
        return <LisaVisual />;
    }
  };

  const projectName =
    title ||
    (effectiveVariant === "lisa-ai"
      ? "Lisa AIOS"
      : effectiveVariant === "neuronet-ai"
      ? "NeuroNet AI"
      : effectiveVariant === "neuralworkspace"
      ? "NeuralWorkspace.ai"
      : effectiveVariant === "aml-investigator"
      ? "AML Agentic Investigator"
      : effectiveVariant === "neurosim-lab"
      ? "NeuroSim Lab"
      : effectiveVariant === "reachinbox"
      ? "ReachInbox Scheduler"
      : effectiveVariant.includes("f1")
      ? "F1 Live Predictor 2026"
      : effectiveVariant.includes("ancient")
      ? "Ancient Script Analyser"
      : "System");

  const hasScreenshot = Boolean(effectiveImage && !imageError);

  return (
    <div
      className="relative w-full h-full min-h-65 md:min-h-120 rounded-3xl overflow-hidden border border-(--accent-primary)/30 flex items-center justify-center shadow-2xl group"
      style={{
        backgroundColor: "var(--bg-glass)",
        background:
          "radial-gradient(ellipse at 50% 45%, color-mix(in srgb, var(--accent-primary) 12%, transparent), transparent 75%), var(--bg-glass)",
      }}
    >
      {/* Visual content: either Screenshot or Interactive Animated HUD */}
      {hasScreenshot && viewMode === "screenshot" ? (
        <div
          className="relative w-full h-full cursor-zoom-in"
          onClick={() => {
            if (onExpandImage && effectiveImage) {
              onExpandImage({ src: effectiveImage, title: projectName });
            }
          }}
        >
          <Image
            src={effectiveImage!}
            alt={`${projectName} interface`}
            fill
            sizes="(max-width: 1024px) 95vw, 650px"
            className="object-cover object-top transition-transform duration-700 hover:scale-[1.02]"
            onError={() => setImageError(true)}
            priority
          />
        </div>
      ) : (
        renderVisual()
      )}

      {/* Top Controls: Interactive HUD vs Screenshot Toggle & Fullscreen Inspect */}
      {hasScreenshot && (
        <div className="absolute top-4 right-4 z-20 flex items-center gap-2">
          {viewMode === "screenshot" && onExpandImage && (
            <button
              type="button"
              onClick={(e) => {
                e.stopPropagation();
                onExpandImage({ src: effectiveImage!, title: projectName });
              }}
              className="hidden sm:inline-flex items-center gap-1 px-3 py-1.5 rounded-full border border-line bg-elevated/90 font-mono text-[11px] uppercase tracking-wider text-muted hover:text-(--accent-primary) backdrop-blur-md shadow-md transition-colors"
            >
              <span>Inspect</span>
            </button>
          )}

          <div className="flex items-center rounded-full border border-line bg-elevated/90 p-1 backdrop-blur-md shadow-lg">
            <button
              type="button"
              onClick={(e) => {
                e.stopPropagation();
                setViewMode("interactive");
              }}
              className={`px-3 py-1 rounded-full font-mono text-[11px] uppercase tracking-wider transition-all duration-200 ${
                viewMode === "interactive"
                  ? "bg-(--accent-primary) text-ink font-semibold shadow-sm"
                  : "text-muted hover:text-ink"
              }`}
            >
              ⚡ Live HUD
            </button>
            <button
              type="button"
              onClick={(e) => {
                e.stopPropagation();
                setViewMode("screenshot");
              }}
              className={`px-3 py-1 rounded-full font-mono text-[11px] uppercase tracking-wider transition-all duration-200 ${
                viewMode === "screenshot"
                  ? "bg-(--accent-primary) text-ink font-semibold shadow-sm"
                  : "text-muted hover:text-ink"
              }`}
            >
              🖼️ Screenshot
            </button>
          </div>
        </div>
      )}

      {/* Required caption at bottom-left: "<PROJECT NAME> — LIVE PREVIEW / SIMULATION" */}
      <div className="pointer-events-none absolute bottom-4 left-6 z-10 flex items-center gap-2 rounded-full border border-line bg-elevated/85 px-3.5 py-1.5 backdrop-blur-md">
        <span className="h-1.5 w-1.5 rounded-full bg-(--accent-primary) animate-pulse" />
        <span
          className="font-mono text-xs uppercase tracking-[0.22em]"
          style={{ color: "var(--text-metadata, var(--text-muted))" }}
        >
          {projectName} — {hasScreenshot && viewMode === "screenshot" ? "SYSTEM INTERFACE" : "LIVE SIMULATION"}
        </span>
      </div>
    </div>
  );
}

export const ProjectDemo = DemoPlaceholder;
