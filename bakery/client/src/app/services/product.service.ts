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

    getOneProduct(id: string) {
        const { apiUrl } = environment;
        return this.http.get<Product>(`${apiUrl}/catalog/${id}`);
    }

    editProduct(id: string, name: string, type: string, description: string, imageUrl: string) {
        const { apiUrl } = environment;
        const updateData = { id, name, type, description, imageUrl }
        return this.http.put<Product>(`${apiUrl}/catalog/${id}/edit`, updateData, { withCredentials: true });
    }

    editProductTwo(id: string, updatedFields: any) {
        const { apiUrl } = environment;
        return this.http.put<Product>(`${apiUrl}/catalog/${id}/edit`, updatedFields, { withCredentials: true });
    }

    deleteProduct(id: string) {
        const { apiUrl } = environment;
        return this.http.delete(`${apiUrl}/catalog/${id}`, { withCredentials: true });
    }

    searchProducts(name: string, type: string) {
        const { apiUrl } = environment;
        let params = new HttpParams();

        if (name) {
            params = params.set('name', name);
        }

        if (type) {
            params = params.set('type', type)
        }
        console.log('Search API Params:', params.toString());

        return this.http.get<Product[]>(`${apiUrl}/search`, { params })
    }

    requestProduct(id: string, userId: string, isLiked: boolean) {
        const { apiUrl } = environment;
        const payload = { userId, isLiked };
        return this.http.put<Product>(`${apiUrl}/catalog/likesub/${id}`, payload, {
            withCredentials: true
        })
    }


    cancelRequest(id: string, userId: string) {
        const { apiUrl } = environment;
        const payload = { userId };
        return this.http.put<Product>(`${apiUrl}/catalog/nolikesub/${id}`, payload, { withCredentials: true })
    }



}