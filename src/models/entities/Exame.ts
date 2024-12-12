import { Column, Entity, JoinColumn, ManyToOne, PrimaryGeneratedColumn } from "typeorm";
import { Paciente } from "./Paciente";

@Entity('exames')
export class Exame {

    @PrimaryGeneratedColumn()
    id: number

    @Column('varchar', { length: 50 })
    nome: string

    @Column('varchar', { length: 50, nullable: true })
    tratamento: string

    @Column('date')
    dataExameRealizado: Date

    @Column('text', { nullable: true })
    medicacao: string

    @Column('text', { nullable: true })
    relatorio: string

    @ManyToOne(() => Paciente, paciente => paciente.exames, { onDelete: 'CASCADE' })
    @JoinColumn({ name: 'paciente_id' })
    paciente: Paciente
}