import { HttpClient, HttpParams } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { environment } from "../environments/environment.devel";
import { Product } from "../types/product.type";


@Injectable({
    providedIn: "root",
})

export class ProductService {
    constructor(private http: HttpClient) { }

    getProducts() {
        const { apiUrl } = environment;
        return this.http.get<Product[]>(`${apiUrl}/catalog`)
    }

    getLatestProducts() {
        const { apiUrl } = environment;
        return this.http.get<Product[]>(`${apiUrl}/catalog/latest`)
    }

    createProduct(name: string, description: string, type: string, imageUrl: string) {
        const { apiUrl } = environment;
        const payload = {
            name,
            description,
            type,
            imageUrl,
        };

        return this.http.post<Product>(`${apiUrl}/catalog/create`, payload, { withCredentials: true })
    }

}