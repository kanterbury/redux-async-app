import { nanoid } from "@reduxjs/toolkit"
import { createServer } from "miragejs"

export default function () {
  createServer({
    routes() {
      this.get("/api/fetchTodos", () => ({
        todos: [
          { id: "1", content: "Walk the dog", isCompleted: true },
          { id: "2", content: "Take out the trash", isCompleted: false },
          { id: "3", content: "Work out" , isCompleted: false },
        ],
      }))

      this.post("/api/addTodo", (schema, request) => {
        let attrs = JSON.parse(request.requestBody)
        return {
          id: nanoid(),
          content: attrs.content,
          isCompleted: false
        }
      })
    },
  })
}