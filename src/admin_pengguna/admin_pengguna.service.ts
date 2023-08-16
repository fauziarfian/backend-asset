import { Injectable } from '@nestjs/common';
import { CreateAdminPenggunaDto } from './dto/create-admin_pengguna.dto';
import { UpdateAdminPenggunaDto } from './dto/update-admin_pengguna.dto';
import { PrismaService } from 'src/prisma/prisma.service';

@Injectable()
export class AdminPenggunaService {

  constructor(private prisma: PrismaService){}

 async create(createAdminPenggunaDto: CreateAdminPenggunaDto) {
    const createAdminPengguna= await this.prisma.admin_pengguna.create({
      data: createAdminPenggunaDto
    });
    if(createAdminPengguna){
      return{
        statusCode: 200,
        data: createAdminPengguna,
      }
    }
  }

 async findAll() {
    const dataAdmin_Pengguna = await this.prisma.admin_pengguna.findMany();
    return {
      statusCode: 200,
      data: dataAdmin_Pengguna,
    };

  }

 async findOne(id: number) {
    const dataAdmin_Pengguna = await this.prisma.admin_pengguna.findFirst({
      where: {
        id,
      },
    });
    return {
      statusCode: 200,
      data: dataAdmin_Pengguna,
    };
  }

  async update(id: number, updateAdminPenggunaDto: UpdateAdminPenggunaDto) {
    const updateAdmin_Pengguna = await this.prisma.admin_pengguna.update({
      data: updateAdminPenggunaDto,
      where:{
        id: id,
      },
    });
    return {
      statusCode: 200,
      data: updateAdmin_Pengguna,
    }
  }

 async remove(id: number) {
    const deleteAdmin_Pengguna = await this.prisma.admin_pengguna.delete({
      where:{
        id
      }
    });
    return {
      statusCode: 200,
      data: deleteAdmin_Pengguna,
      message: ' Data berhasil dihapus',
    };
  }
}
