import { Body, Controller, Get, HttpCode, Param, Patch, Post } from '@nestjs/common';

@Controller('property')
export class PropertyController {

    @Get()
    findAll() {
        return "get all done"
    }

    @Get(":id/:slug")
    findOne(@Param("id") id: string, @Param("slug") slug: string) {
        return { id, slug };
    }
    @Post("create")

    create() {
        return "Create is completed"
    }

    @Post("get-body")

    @HttpCode(202)
    getBody(@Body() body) {
        return body;
    }


}

