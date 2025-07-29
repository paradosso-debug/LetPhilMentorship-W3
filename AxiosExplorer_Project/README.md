# 📘 Axios Explorer: Learn All HTTP Methods

Welcome! This project teaches you all 7 common HTTP methods using **Axios**: `GET`, `POST`, `PUT`, `PATCH`, `DELETE`, `HEAD`, and `OPTIONS`.

---

## 🌐 What Are HTTP Requests?

Imagine your website is a customer 📱 walking into a restaurant 🍽️ (the server). The customer can ask for the menu, place an order, change the order, cancel it, or just check what services are available.

These different actions are called **HTTP requests**. They are the ways a browser or website "talks" to another server using the internet.

Each request type has a **specific purpose**, like asking for data or sending new data. These requests are part of a system called **HTTP** (HyperText Transfer Protocol) — it’s just a fancy name for the rules of how things talk over the internet.

---

## 🧠 What is Axios?

Axios is like a smart and polite waiter 🧑‍🍳📬 that knows how to speak HTTP fluently.

It helps your website **send and receive** these requests easily.

---

## 📦 HTTP Methods Explained with Analogies

| Method   | Analogy 🧠                            | What it does                              |
| -------- | ------------------------------------- | ----------------------------------------- |
| `GET`    | Reading a menu at a restaurant 📖     | Ask for data from the server              |
| `POST`   | Ordering food 🥡                      | Send new data to the server               |
| `PUT`    | Replacing a whole dish on the menu 🍽️ | Replace existing data completely          |
| `PATCH`  | Changing just the spice level 🌶️      | Update part of existing data              |
| `DELETE` | Cancelling your order ❌              | Delete something from the server          |
| `HEAD`   | Checking the menu cover 📑            | Ask for just metadata (not the full data) |

---

## 🧪 Test API Used

We use [JSONPlaceholder](https://jsonplaceholder.typicode.com/) — a fake API designed for practicing API requests.

- `GET` returns real fake data (like users or posts)
- `POST`, `PUT`, `PATCH`, `DELETE` respond like they work, but the data isn’t actually changed
- `HEAD` and `OPTIONS` show how metadata and allowed requests work

This is **perfect** because:

- You don’t need to create an account
- You can test requests safely
- It behaves like a real server, without any risk

---
