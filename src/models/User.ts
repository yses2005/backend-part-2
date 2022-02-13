import { DefaultEntity } from '@decorators';
import { Order } from '@models';
import { Column, Entity, OneToMany } from 'typeorm';

@Entity()
export class User extends DefaultEntity {
    @Column()
    username: string;

    @Column({ select: false })
    password: string;

    @OneToMany(() => Order, order => order.customer)
    orders: Order[];
}
