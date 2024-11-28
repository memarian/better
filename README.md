### Development Phase

This project is currently in active development and should be considered a work in progress.

### Implemented Features

- ✅ Basic tweet CRUD operations
- ✅ Caching infrastructure
- ✅ Basic API documentation

### In Progress

- 🚧 Implement User System
- 🚧 Implement Group CRUD and integrate to tweet system
- 🚧 Implement Permission System and integrate to tweet and Cash System
- 🚧 Advanced permission inheritance
- 🚧 Enhanced monitoring and logging

## Installation Guide

### Prerequisites

- Docker Engine 24.0.0 or later
- Docker Compose v2.24.0 or later
- Git

### Quick Start

1. Clone the repository

```bash
git clone https://github.com/memarian/better.git
cd better
```

2.Start all services in detached mode

```bash
docker compose up -d
```

3. Verify the services are running

```bash
docker compose ps
```

4. Access the Application

- Swagger API Documentation: http://localhost:3000/api
- Main Application: http://localhost:3000

5. Watch application logs

```bash
docker compose logs -f main
```

6. Stop all services

```bash
docker compose down
```

## Design Decisions

### Database Selection Considerations

I evaluated three database options for this project:

- PostgreSQL (SQL)
- MongoDB (NoSQL)
- Neo4j (Graph)

For the tweet model, while both PostgreSQL and MongoDB could be suitable, I chose MongoDB for the following reasons:

1. **Eventual Consistency Model**

- Tweets don't require strict real-time consistency
- Eventual consistency better handles high-volume permission changes
- Better write performance for high-frequency updates
- Supports atomic operations for tweet metadata updates

2. **Group Management**
   Groups are stored in a separate collection for:

- Optimized concurrent access patterns
- Independent scaling of group operations
- Reduced document size and better query performance
- Efficient permission inheritance handling

3. **Permission Management System**
   Implemented with:

- Dedicated permission collection for granular access control
- Indexed queries for permission lookups
- Efficient cache invalidation patterns
- Event-driven permission updates

### Cache & Queue Architecture

The system uses a multi-layer caching strategy

### Event-Driven Permission Updates

using Redis Pub/Sub for real-time permission propagation:
using BullMQ so I wouldn't get involved in configuring and setting up Kafka and RabbitMQ services due to lack of time.

### System Architecture Benefits

1. **Scalability**

- Horizontal scaling through MongoDB sharding
- Distributed caching with Redis
- Asynchronous processing via message queues

2. **Reliability**

- Guaranteed message delivery
- Automatic retry mechanisms
- Consistent permission state management

3. **Performance**

- Optimized query patterns
- Efficient cache utilization
- Batch processing capabilities

## Hexagonal Architecture Implementation

The project strictly follows hexagonal architecture principles
domain/
infrastructure/
application/

This architecture provides:

- Clear separation of concerns
- Technology independence
- Testable business logic
- Flexible infrastructure choices
