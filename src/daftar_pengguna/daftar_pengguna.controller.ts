import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { DaftarPenggunaService } from './daftar_pengguna.service';
import { CreateDaftarPenggunaDto } from './dto/create-daftar_pengguna.dto';
import { UpdateDaftarPenggunaDto } from './dto/update-daftar_pengguna.dto';

@Controller('daftar-pengguna')
export class DaftarPenggunaController {
  constructor(private readonly daftarPenggunaService: DaftarPenggunaService) {}

  @Post()
  async create(@Body() createDaftarPenggunaDto: CreateDaftarPenggunaDto) {
    return await this.daftarPenggunaService.create(createDaftarPenggunaDto);
  }

  @Get()
  async findAll() {
    return await this.daftarPenggunaService.findAll();
  }

  @Get(':id')
  async findOne(@Param('id') id: string) {
    return await this.daftarPenggunaService.findOne(+id);
  }

  @Patch(':id')
  async update(@Param('id') id: string, @Body() updateDaftarPenggunaDto: UpdateDaftarPenggunaDto) {
    return await this.daftarPenggunaService.update(+id, updateDaftarPenggunaDto);
  }

  @Delete(':id')
  async remove(@Param('id') id: string) {
    return await this.daftarPenggunaService.remove(+id);
  }
}
