import { Product } from "./product.model";
import { Injectable } from "@angular/core";
import { Observable, from } from "rxjs";

@Injectable()
export class StaticDataSource {
    private products: Product[] = [
        new Product(
            1,
            "Premier Training Football",
            "Football",
            "Durable size 5 football for regular training sessions",
            19.5
        ),
        new Product(
            2,
            "Goalkeeper Gloves",
            "Football",
            "Padded gloves with strong grip for match practice",
            24.95
        ),
        new Product(
            3,
            "Running Trainers",
            "Running",
            "Lightweight trainers for road running and gym sessions",
            59.95
        ),
        new Product(
            4,
            "Trail Running socks",
            "Running",
            "Breathable cushioned socks for longer runs",
            9.95
        ),
        new Product(
            5,
            "Tennis Racket",
            "Tennis",
            "Balanced racket suitable for beginner and club players",
            45
        ),
        new Product(
            6,
            "Tennis Ball Tube",
            "Tennis",
            "Tube of pressurised tennis balls for practice and matches",
            6.5
        ),
        new Product(
            7,
            "Cricket Bat",
            "Cricket",
            "Kasmir willow cricket bat for training and friendly matches",
            39.95
        ),
        new Product(
            8,
            "Junior Cricket Set",
            "Cricket",
            "Starter cricket set with bat, ball, and stumps",
            32.5
        ),
        new Product(
            9,
            "Yoga Mat",
            "Fitness",
            "Non-slip mat for streching, yoga, and home workouts",
            18
        ),

    ];

    getProducts(): Observable<Product[]>{
        return from([this.products]);
    }
}