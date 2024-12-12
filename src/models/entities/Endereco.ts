import { Column, Entity, JoinColumn, OneToOne, PrimaryGeneratedColumn } from "typeorm"
import { Paciente } from "./Paciente"

@Entity('enderecos')
export class Endereco {

    @PrimaryGeneratedColumn()
    id: number

    @Column('char', { length: 2, nullable: true })
    estado: string

    @Column('varchar', { length: 50, nullable: true })
    cidade: string

    @Column('varchar', { length: 50, nullable: true })
    bairro: string

    @Column('varchar', { length: 50, nullable: true })
    rua: string

    @Column('varchar', { length: 10, nullable: true })
    numero: string

    @OneToOne(() => Paciente, paciente => paciente.endereco, { onDelete: 'CASCADE' })
    @JoinColumn({ name: 'paciente_id' })
    paciente: Paciente;
}