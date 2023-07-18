# Project Structure

This document will serve as a structured environment where I can articulate my thoughts, attempt to distill the knowledge I am acquiring, and ensure clarity and focus in my project narrative.

---

## MVC Design Pattern

MVC stands for **Model-View-Controller**. It's a **design pattern** used to organize code in a way that separates concerns and makes it easier to manage and update.

Until I find a better design pattern, I will structure the folders and files of my project following this pattern.

---

###1. Model
Includes classes and/or data structures related to the project (e.g. **'hotel', 'room', 'user', 'booking',** etc.).

These classes would interact with the database (where the data for the rooms, bookings and users is stored).

For example, the **'room'** model would handle the information about each room in the hotel, like room number, capacity, price per night and whether it's currently booked or not.

###2. View
Includes everything the user sees and interacts with. It could be the website's homepage, search results page showing available rooms, the booking page, etc.

For example, on the booking page, the user would see the details of the room (from the **'room'** model) and they could input their information and the desired dates.

###3. Controller
This is the intermediary that handles user interaction and updates the models and views accordingly.

For example, when a user searches for a room, the **'searchController'** would take the user's input (e.g. dates and room size), use the **'room'** model to find available rooms in the database, and then pass this data to the search results view to be displayed to the user. If the user decides to book a room, the **'bookingController'** would take the user's input, create a new **'booking'** in the database using the **'booking'** model, and then update the **'room'** model to mark the room as booked.

---

> By structuring my project with this design pattern, we are separating the >responsibilities of handling data (model), user interface (view) and >control flow (control) into distinct components (separation of concerns), >making the system easier to understand, maintain and hopefully, expand >:smile:

---

## Coyotiv Coding Standards

# Principles to keep in mind

**Separation of Concerns**
**Avoid Premature Optimization** (Don't optimize code until it's cessary)
**DRY** - Don't Repeat Yourself (Avoid duplicating code)

- **Rule of Three** (If you use the same code in three places, it shouldbe refactored into a function)
  **KISS** - Keep It Stupid Simple (or Keep It Simple, Stupid)
  **YAGNI** - You Aren't Gonna Need It (Don't add functionality until it's cessary to avoid bloated code)

# Naming Guidelines

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

### Commits

- Start with a verb
- Always in present tense
