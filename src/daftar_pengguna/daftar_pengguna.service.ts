import { Injectable } from '@nestjs/common';
import { CreateDaftarPenggunaDto } from './dto/create-daftar_pengguna.dto';
import { UpdateDaftarPenggunaDto } from './dto/update-daftar_pengguna.dto';
import { PrismaService } from 'src/prisma/prisma.service';

@Injectable()
export class DaftarPenggunaService {

  constructor(private prisma: PrismaService){}

 async create(createDaftarPenggunaDto: CreateDaftarPenggunaDto) {
    const createDaftarPengguna= await this.prisma.daftar_pengguna.create({
      data: createDaftarPenggunaDto
    });
    if(createDaftarPengguna){
      return{
        statusCode: 200,
        data: createDaftarPengguna,
      }
    }
  }

 async  findAll() {
    const dataDaftar_Pengguna = await this.prisma.daftar_pengguna.findMany();
    return {
      statusCode: 200,
      data: dataDaftar_Pengguna,
    };
  }

  async findOne(id: number) {
    const dataDaftar_Pengguna = await this.prisma.daftar_pengguna.findFirst({
      where: {
        id,
      },
    });
    return {
      statusCode: 200,
      data: dataDaftar_Pengguna,
    };
  }

  async update(id: number, updateDaftarPenggunaDto: UpdateDaftarPenggunaDto) {
    const updateDaftar_Pengguna = await this.prisma.daftar_pengguna.update({
      data: updateDaftarPenggunaDto,
      where:{
        id: id,
      },
    });
    return {
      statusCode: 200,
      data: updateDaftar_Pengguna,
    }
  }

  async remove(id: number) {
    const deleteDaftar_Pengguna = await this.prisma.daftar_pengguna.delete({
      where:{
        id
      }
    });
    return {
      statusCode: 200,
      data: deleteDaftar_Pengguna,
      message: ' Data berhasil dihapus',
    };
  }
}
