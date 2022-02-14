// eslint-disable-next-line max-classes-per-file
import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';

import { NestJSTypedConfigService } from './nest-js-typed-config.service';

import type Joi from '@hapi/joi';
import type { DynamicModule, Type } from '@nestjs/common';

@Module({})
export class NestJSTypedConfigModule {
    // eslint-disable-next-line @typescript-eslint/ban-types
    static create<C extends {}>(
        validationSchema: Joi.ObjectSchema<C>
    ): [DynamicModule, Type<NestJSTypedConfigService<C, Extract<keyof C, string>>>] {
        class Service extends NestJSTypedConfigService<C, Extract<keyof C, string>> {}

        const CustomConfigModule: DynamicModule = {
            imports: [
                ConfigModule.forRoot({
                    cache: true,
                    validationSchema,
                    validationOptions: { abortEarly: false },
                    isGlobal: true,
                }),
            ],
            providers: [Service],
            exports: [Service],
            module: NestJSTypedConfigModule,
            global: true,
        };

        return [CustomConfigModule, Service];
    }
}