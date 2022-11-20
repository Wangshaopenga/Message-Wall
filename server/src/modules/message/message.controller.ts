import { Body, Controller, Delete, Get, Param, Patch, Post, Query } from '@nestjs/common'
import { CreateMessageDto } from './dto/create-message.dto'
import { UpdateMessageDto } from './dto/update-message.dto'
import { MessageService } from './message.service'

@Controller('msg')
export class MessageController {
  constructor(private readonly messageService: MessageService) {}

  @Post()
  create(@Body() createMessageDto: CreateMessageDto) {
    return this.messageService.create(createMessageDto)
  }

  @Get()
  findAll(@Query('page') page: number, @Query('categoryId') categoryId: number) {
    return this.messageService.findAll(page || 1, categoryId)
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.messageService.findOne(+id)
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateMessageDto: UpdateMessageDto) {
    return this.messageService.update(+id, updateMessageDto)
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.messageService.remove(+id)
  }
}
