import { IsExistPipe } from '@/pipes/is-exist.pipe'

export class CreateMessageDto {
  @IsExistPipe()
    content: string

  categoryId: number
  signature: string
  color: string = '#fab'
}

