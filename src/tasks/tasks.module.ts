import { MongooseModule } from '@nestjs/mongoose';
import { TaskSchema } from './schemas/task.schemas';
import { TaskService } from './shared/task.service';
import { TasksController } from './tasks.controller';
import { Module } from '@nestjs/common';



@Module({
    imports: [
        MongooseModule.forFeature([{ name: 'Task', schema: TaskSchema}])
    ],
    controllers: [TasksController],
    providers: [TaskService]
})
export class TasksModule {}
