import mongoose from "mongoose";
import { app, port } from "./app";
import config from "./config/index";
async function bootstrap() {
    try {
        await mongoose.connect(config.database_url as string);
        console.log('data base is connected successfully')

        app.listen(port, () => {
            console.log(`Application listening on port ${port}`)
        })

    } catch (error) {
        console.log('faild to connect database', error)
    }
};

bootstrap()