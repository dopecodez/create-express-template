import {
    CreateDateColumn,
    PrimaryGeneratedColumn,
    UpdateDateColumn,
} from "typeorm";

export abstract class Base {
    @PrimaryGeneratedColumn("uuid")
    id!: string;

    @CreateDateColumn({ name: "created_at" })
    createdAt!: Date;

    @UpdateDateColumn({ name: "updated_at", select: false })
    updatedAt!: Date;
}


