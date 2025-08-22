# PTE Mastery Platform

A full-stack, AI-powered PTE Academic preparation platform.

## Tech Stack
- **Frontend:** Next.js 14, TypeScript, TailwindCSS, Tiptap, Zustand, Nivo, Framer Motion
- **Backend:** Fastify, TypeScript, Auth.js, Stripe, MongoDB (Mongoose), Redis (ioredis), ws
- **AI Microservices:** FastAPI, spaCy, Whisper, HuggingFace Transformers, TensorFlow, PyTorch
- **DevOps:** Docker, Docker Compose, Turborepo, pnpm, GitHub Actions

## Monorepo Structure
- `apps/frontend` - Next.js app
- `apps/backend` - Fastify API
- `apps/ai-services` - Python FastAPI microservices
- `packages/ui` - Shared UI components
- `packages/utils` - Shared utilities
- `infrastructure` - Docker, k8s, monitoring

## Getting Started
See `/docs/GETTING_STARTED.md` for local setup instructions. 