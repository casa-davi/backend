import { Column, Entity, JoinColumn, ManyToOne, OneToMany, PrimaryGeneratedColumn } from "typeorm";
import { Paciente } from "./Paciente";

@Entity('parentescos')
export class Parentesco {

    @PrimaryGeneratedColumn()
    id: number

    @Column('varchar', { length: 50, nullable: true })
    nome: string

    @Column('varchar', { length: 50, nullable: true })
    sobrenome: string

    @Column('varchar', { length: 50, unique: true, nullable: true })
    grauParentesco: string

    @ManyToOne(() => Paciente, paciente => paciente.parentesco, { onDelete: 'CASCADE' })
    @JoinColumn({ name: 'paciente_id' })
    paciente: Paciente
}