import { Body, Controller, Get, HttpCode, Param, ParseBoolPipe, ParseIntPipe, Patch, Post, Query, UsePipes, ValidationPipe } from '@nestjs/common';
import { PropertyDTO } from './dto/dto';

@Controller('property')
export class PropertyController {

    // @Get()
    // findAll() {
    //     return "get all done"
    // }

    // @Get(":id/:slug")
    // findOne(@Param("id") id: string, @Param("slug") slug: string) {
    //     return { id, slug };
    // }
    // @Post("create")

    // create() {
    //     return "Create is completed"
    // }

    // @Post("get-body")

    // @HttpCode(202)
    // getBody(@Body() body) {
    //     return body;
    // }


    // @Get("get-types/:id")
    // findUser(@Param("id", ParseIntPipe) id, @Query("sort", ParseBoolPipe) sort: string) {
    //     console.log("🚀 ~ PropertyController ~ findUser ~ id:", id)
    //     console.log(typeof sort)
    //     return "This is a request for types";
    // }

    @Post("create")

    // @UsePipes(new ValidationPipe({ whitelist: true, forbidNonWhitelisted: true, }))
    create(@Body(new ValidationPipe({ whitelist: true, forbidNonWhitelisted: true, })) body: PropertyDTO) {
        return body;
    }

    @Patch("update")

    // @UsePipes(new ValidationPipe({ whitelist: true, forbidNonWhitelisted: true, }))
    update(@Body(new ValidationPipe({ whitelist: true, forbidNonWhitelisted: true, })) body: PropertyDTO) {
        return body;
    }

}

