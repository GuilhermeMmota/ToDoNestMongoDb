import { Module } from '@nestjs/common';
import { PassportModule } from '@nestjs/passport';
import { JwtModule } from '@nestjs/jwt';
import { AuthController } from './auth.controller';
import { AuthService } from './shared/auth.service';


import { LocalStrategy } from './shared/local.strategy';
import { UsersModule } from './../users/users.module';
import { JwtStrategy } from './shared/jwt.strategy';
import { jwtConstants } from './shared/constants';

@Module({
    imports: [
        UsersModule,
        PassportModule,
        JwtModule.register({
            secret: jwtConstants.secret,
            signOptions: { expiresIn: '60s'},
        }),
    ],
    controllers: [
        AuthController, ],
    providers: [
        AuthService,
        LocalStrategy,
        JwtStrategy,
     ],
})
export class AuthModule {}
