import { IsEmail, IsNotEmpty, IsOptional, IsString } from "class-validator";

export class CreateDaftarPenggunaDto {

    @IsString()
    @IsNotEmpty()
    nama: string;

    @IsString()
    @IsNotEmpty()
    divisi: string;

    @IsString()
    @IsOptional()
    @IsEmail()
    email: string;

    @IsString()
    @IsOptional()
    telepon: string;


}
