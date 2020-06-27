import { Controller, Get, Post, Patch, Delete } from "@nestjs/common";
import { Series } from "./series.entity";

@Controller("/series")
export class SeriesController {
  @Get("/")
  async getSeries() {

  }

  @Post()
  async createSeries() { }

  @Patch()
  async updateSeries() { }

  @Delete()
  async deleteSeries() { }
}