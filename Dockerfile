# =========================
# Dependências
# =========================
FROM node:22-alpine AS deps

WORKDIR /app

COPY package.json pnpm-lock.yaml ./

RUN npm install -g pnpm@10
RUN pnpm install --frozen-lockfile

# =========================
# Build
# =========================
FROM node:22-alpine AS builder

WORKDIR /app

RUN npm install -g pnpm@10

COPY --from=deps /app/node_modules ./node_modules
COPY . .

RUN pnpm build

# =========================
# Produção
# =========================
FROM node:22-alpine AS runner

WORKDIR /app

ENV NODE_ENV=production

COPY --from=builder /app/.next ./.next
COPY --from=builder /app/public ./public
COPY --from=builder /app/package.json ./package.json
COPY --from=builder /app/node_modules ./node_modules
COPY --from=builder /app/next.config.* ./

EXPOSE 3000

CMD ["npx", "next", "start"]