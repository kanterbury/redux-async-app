import { createServer } from "miragejs"

export default function () {
  createServer({
    routes() {
      this.get("/api/todos", () => ({
        todos: [
          { id: "1", content: "Walk the dog", isCompleted: true },
          { id: "2", content: "Take out the trash", isCompleted: false },
          { id: "3", content: "Work out" , isCompleted: false },
        ],
      }))
    },
  })
}