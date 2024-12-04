FROM node:22-alpine AS base

# Install pnpm globally
RUN corepack enable && corepack prepare pnpm@latest --activate

WORKDIR /app

# COPY package.json pnpm-lock.yaml ./

# RUN pnpm install

# COPY . .

# RUN pnpm build

# EXPOSE 3000

# CMD ["pnpm", "start:prod"]





FROM base AS development
ENV NODE_ENV=development
COPY package.json pnpm-lock.yaml ./
RUN pnpm install
COPY . .
CMD ["pnpm","start:dev"]

FROM base AS builder
COPY package.json pnpm-lock.yaml ./
RUN pnpm install --frozen-lockfile
COPY . .
RUN pnpm  build

# Production stage
FROM base AS production
ENV NODE_ENV=production
COPY package.json pnpm-lock.yaml ./
RUN pnpm install --prod --frozen-lockfile
COPY --from=builder /app/dist ./dist

# Security: Run as non-root user
USER node

EXPOSE 3000

CMD ["pnpm", "start:prod"]
