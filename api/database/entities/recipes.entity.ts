import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';

@Entity('recipes')
export class Recipes {
  @PrimaryGeneratedColumn()
    id: number;

  @Column()
    recipe: string;
}
