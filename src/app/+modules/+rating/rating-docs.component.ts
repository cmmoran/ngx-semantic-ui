/**
 * Created by terry on 4/21/17.
 */
import {Component, OnInit} from '@angular/core';

@Component({
    selector: 'rating-docs',
    templateUrl: './rating-docs.component.html'
})
export class RatingDocsComponent implements OnInit {

    basicRating: number = 1;
    starRating: number = 0;
    heartRating: number = 2;

    constructor() {
    }

    ngOnInit() {
    }

}
