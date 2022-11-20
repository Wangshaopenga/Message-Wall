import { Type } from 'class-transformer'
import { IsNotEmpty } from 'class-validator'
import { IsExists } from '@/validates/is-Exist'

export class CreateMessageDto {
  @IsNotEmpty({ message: '留言内容不能为空' })
    content: string

  @IsExists('Categories', 'id')
  @IsNotEmpty({ message: '分类不能为空' })
  @Type(() => Number)
    categoryId: number

  @IsNotEmpty({ message: '署名不能为空' })
    signature: string

  // @IsNotEmpty({ message: '颜色不能为空' })
  color: string
}

