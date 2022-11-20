import { BadRequestException, Injectable } from '@nestjs/common'
import { ConfigService } from '@nestjs/config'
import { PrismaService } from '../prisma/prisma.service'
import { CreateMessageDto } from './dto/create-message.dto'
import { UpdateMessageDto } from './dto/update-message.dto'

@Injectable()
export class MessageService {
  constructor(private prisma: PrismaService, private config: ConfigService) {}
  create(createMessageDto: CreateMessageDto) {
    return 'This action adds a new message'
  }

  async findAll(page: number = 1, categoryId: number) {
    const row = await this.config.get('MESSAGE_PAGE_ROW')
    const msg = await this.prisma.messages.findMany({
      take: +row,
      skip: +(page - 1) * +row,
      where: {
        categoryId: {
          equals: categoryId || undefined,
        },
      },
    })
    const total = await this.prisma.messages.count({
      where: {
        categoryId: {
          equals: categoryId || undefined,
        },
      },
    })
    const current_page = page
    const total_page = Math.ceil(total / row)
    const links = current_page === total_page
      ? null
      : {
          previous_url: current_page === 1 ? null : `${this.config.get('URL')}/msg?page=${current_page - 1}&categoryId=${categoryId || ''}`,
          next_url: current_page + 1 > total_page ? null : `${this.config.get('URL')}/msg?page=${current_page + 1}&categoryId=${categoryId || ''} `,
        }
    const pagination = {
      total,
      count: msg.length,
      per_page: row,
      current_page,
      total_page,
      links,
    }
    return { data: msg, pagination }
  }

  async findOne(id: number) {
    try {
      const data = await this.prisma.messages.findUnique({ where: { id } })
      if (!data)
        throw new BadRequestException('留言Id错误')
      return data
    }
    catch (error) {
      if (error.response)
        throw new BadRequestException(error.response)
      throw new BadRequestException()
    }
  }

  update(id: number, updateMessageDto: UpdateMessageDto) {
    return `This action updates a #${id} message`
  }

  remove(id: number) {
    return `This action removes a #${id} message`
  }
}
