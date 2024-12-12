import { Column, Entity, JoinColumn, ManyToOne, PrimaryGeneratedColumn } from "typeorm";
import { Paciente } from "./Paciente";

@Entity('vacinas')
export class Vacina {
    @PrimaryGeneratedColumn()
    id: number

    @Column('varchar', { length: 50 })
    nome: string

    @Column('date')
    dataAplicacao: Date

    @Column('varchar', { length: 50, nullable: true })
    tratamento: string

    @Column('text', { nullable: true })
    observacao: string

    @ManyToOne(() => Paciente, paciente => paciente.vacinas, { onDelete: 'CASCADE' })
    @JoinColumn({ name: 'paciente_id' })
    paciente: Paciente
}