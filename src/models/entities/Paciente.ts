import { Column, Entity, OneToMany, OneToOne, PrimaryGeneratedColumn } from "typeorm";
import { Parentesco } from "./Parentesco";
import { Endereco } from "./Endereco";
import { Exame } from "./Exame";
import { Vacina } from "./Vacina";

@Entity('pacientes')
export class Paciente {
    
    @PrimaryGeneratedColumn()
    id: number

    @Column('varchar', { length: 50 })
    nome: string

    @Column('date', { nullable: true })
    dataNascimento: Date

    @Column('varchar', { length: 11, unique: true, nullable: true })
    cpf: string

    @Column('varchar', { length: 50, unique: true, nullable: true })
    rg: string

    @Column('varchar', { length: 50, unique: true, nullable: true })
    cns: string

    @Column('varchar', { length: 15, nullable: true })
    telefone: string

    @Column('boolean', { default: true })
    ativo: boolean

    @OneToMany(() => Exame, exame => exame.paciente)
    exames: Exame[]
    
    @OneToMany(() => Vacina, vacina => vacina.paciente)
    vacinas: Vacina[]

    @OneToMany(() => Parentesco, parentesco => parentesco.paciente)
    parentesco: Parentesco;

    @OneToOne(() => Endereco, endereco => endereco.paciente)
    endereco: Endereco;
}