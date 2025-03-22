import axios, { AxiosPromise } from 'axios';
import { OrderDto } from '../models/order.dto';

export class OrderService {
    public constructor(private url: string) {}
    public getOrder = (id: number): AxiosPromise => {
        return axios.request({
            baseURL: this.url,
            headers: { Accept: 'application/json', 'Content-Type': 'application/json' },
            method: 'GET',
            url: `/v2/store/order/${id}`
        });
    };

    public createOrder = (order: OrderDto): AxiosPromise => {
        return axios.request({
            baseURL: this.url,
            headers: { Accept: 'application/json', 'Content-Type': 'application/json' },
            method: 'POST',
            url: '/v2/store/order',
            data: order
        });
    };
}
