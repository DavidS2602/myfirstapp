import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { UsersModule } from './users/users.module';
import { AuthModule } from './auth/auth.module';
import { TasksModule } from './tasks/tasks.module';
import { ProjectsController } from './projects/projects.controller';
import { ProjectsModule } from './projects/projects.module';
import { PaymentsModule } from './payments/payments.module';

@Module({
  imports: [TasksModule, ProjectsModule, UsersModule, AuthModule, PaymentsModule],
  controllers: [AppController, ProjectsController],
  providers: [AppService],
})
export class AppModule {}
