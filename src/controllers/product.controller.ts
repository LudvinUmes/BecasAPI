import { Request, Response } from 'express';
import { Product } from '../models/product.model';

export const getProducts = async (req: Request, res: Response) => {
    const listProducts = await Product.findAll();

    res.json({
        message: 'Get Products',
        listProducts,
    });
};
