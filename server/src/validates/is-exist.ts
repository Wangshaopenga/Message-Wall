// eslint-disable-next-line import/named
import { ValidationOptions, registerDecorator } from 'class-validator'
import { PrismaClient } from '@prisma/client'

export function IsExists(table: string, type: string, validationOptions?: ValidationOptions) {
  return function (object: Record<string, any>, propertyName: string) {
    registerDecorator({
      name: 'IsExists',
      target: object.constructor,
      propertyName,
      constraints: [table],
      options: validationOptions,
      validator: {
        async validate(value: string) {
          const prisma = new PrismaClient()
          const res = await prisma[table].findFirst({
            where: {
              [type]: value,
            },
          })
          return res
        },
      },
    })
  }
}
