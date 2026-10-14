# Next.js standalone image (Dokploy / cualquier host con Docker)
FROM node:22-alpine AS deps
WORKDIR /app
RUN apk add --no-cache libc6-compat
COPY package.json package-lock.json ./
RUN npm ci

# Lista 2: sitios de Astro (pnpm). install.mjs copia el resultado a /app/public/_a y /app/public/_l2.
FROM node:22-alpine AS astro
RUN corepack enable
WORKDIR /app/astro
COPY astro/package.json astro/pnpm-lock.yaml ./
RUN pnpm install --frozen-lockfile
COPY astro/ ./
# Las fuentes se descargan de Google al compilar: se reintenta si falla la red.
RUN mkdir -p /app/public && (pnpm build || pnpm build || pnpm build)

FROM node:22-alpine AS builder
WORKDIR /app
COPY --from=deps /app/node_modules ./node_modules
COPY . .
COPY --from=astro /app/public/_a ./public/_a
COPY --from=astro /app/public/_l2 ./public/_l2
ENV NEXT_TELEMETRY_DISABLED=1
RUN npm run build

FROM node:22-alpine AS runner
WORKDIR /app
ENV NODE_ENV=production \
    NEXT_TELEMETRY_DISABLED=1 \
    PORT=3000 \
    HOSTNAME=0.0.0.0
RUN addgroup -S -g 1001 nodejs && adduser -S -u 1001 -G nodejs nextjs
COPY --from=builder /app/public ./public
RUN mkdir .next data && chown nextjs:nodejs .next data
COPY --from=builder --chown=nextjs:nodejs /app/.next/standalone ./
COPY --from=builder --chown=nextjs:nodejs /app/.next/static ./.next/static
USER nextjs
EXPOSE 3000
CMD ["node", "server.js"]
