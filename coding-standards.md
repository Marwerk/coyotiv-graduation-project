# Coyotiv Coding Standards

---

## Principles to keep in mind

- **Separation of Concerns** (Each function should do one thing)

- **Avoid Premature Optimization** (Don't optimize code until it's necessary)

- **Rule of Three** (If you use the same code in three places, it shouldbe refactored into a function)

- **DRY:** Don't Repeat Yourself (Avoid duplicating code)

- **KISS:** - Keep It Stupid Simple (Don't overcomplicate code)

- **YAGNI:** - You Aren't Gonna Need It (Don't add functionality until it's necessary to avoid bloated code)

---

## Naming Guidelines

- functionNamesLikeThis
- variableNamesLikeThis
- ClassNamesLikeThis
- EnumNamesLikeThis
- methodNamesLikeThis
- CONSTANT_VALUES_LIKE_THIS
- file-names-like-this.js

Name elements in your code clearly and concisely
Don't use abbreviations unless they are very common (e.g. 'url')
Pay attention to casing for different names: camelCase, kebab-case, PascalCase
Use numbers appropriately (e.g. ISO9000)

---

## Commits

- Start with a verb
- Always in present tense

## Docker commands

To prevent mongo logs to show in the terminal:

- docker compose up -d mongo
- docker compose up backend frontend

## On Vue.js CSS components

1. Use CSS component if you can
2. If not, use a simple component that doesn't have any logic inside
3. If not, use a fully fledged component with its own logic
