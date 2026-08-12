# Repository Pattern

- Creates a layer responsible for accessing and persisting data, so the business logic does not depend directly on the database, ORM or infrastructure details.

- Considering an services calling direcly the prisma connection:
```javascript
    const user = await prisma.user.findUnique({
        where: { id: userId }
    });
```
* instead of having the example above everywhere in your services, you can hide the persistence details behaind something like:
```javascript
    const user = await userRepository.findLastPassword(userId)
```
