import express from "express"
import { router } from "./routes"
import "./shared/container/index"

const app = express()

app.use(express.json())
app.use(router)

app.listen(3000, () => {
    console.log("is running")
})