import { IsEmail, IsNotEmpty, IsOptional, IsString } from "class-validator";

export class CreateAdminPenggunaDto {


@IsString()
@IsNotEmpty()
nama: string;

@IsString()
@IsNotEmpty()
peran: string;

@IsString()
@IsNotEmpty()
@IsEmail()
email: string;

@IsString()
@IsNotEmpty()
password: string;


}