import { Injectable } from '@nestjs/common';
import { Database } from 'src/data/database';
import { generateUuid } from 'src/utils/generateUuid';
import { isEntityByIdExist } from 'src/utils/validation';
import { CreateTrackDto } from '../dto/create-track.dto';
import { UpdateTrackDto } from '../dto/update-track.dto';

@Injectable()
export class TracksService {
  constructor(private database: Database) {}

  async getAll() {
    return this.database.tracks;
  }

  async getById(id: string) {
    const track = this.database.tracks.find((track) => track.id === id);

    isEntityByIdExist(track);

    return track;
  }

  async create({
    artistId = null,
    albumId = null,
    ...otherCreateTrackDto
  }: CreateTrackDto) {
    const newTrack = {
      artistId,
      albumId,
      ...otherCreateTrackDto,
      id: generateUuid(),
    };

    this.database.tracks.push(newTrack);
    return newTrack;
  }

  async updateById(id: string, updateTrackDto: UpdateTrackDto) {
    const tracks = this.database.tracks;
    const trackIndex = tracks.findIndex((track) => {
      return track.id === id;
    });

    isEntityByIdExist(trackIndex);

    const track = tracks[trackIndex];
    const updatedTrack = { ...track, ...updateTrackDto };

    this.database.tracks[trackIndex] = updatedTrack;
    return updatedTrack;
  }

  async removeById(id: string) {
    const tracks = this.database.tracks;
    const trackIndex = tracks.findIndex((track) => {
      return track.id === id;
    });

    isEntityByIdExist(trackIndex);

    this.database.tracks.splice(trackIndex, 1);
    return [];
  }
}
