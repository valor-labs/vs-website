import { Component } from '@angular/core';

@Component({
    selector: 'landing',
    styles: [require('./landing.css')],
    template: require('./landing.html')
})
export class LandingComponent {
    public myInterval: number = 500000;
    public noWrapSlides: boolean = false;
    public slides: Array<any> = [];

    public constructor() {
        for (let i = 0; i < 4; i++) {
            this.addSlide();
        }
    }

    public addSlide(): void {
        let newWidth = 600 + this.slides.length + 1;
        this.slides.push({
            image: `//placekitten.com/${newWidth}/300`,
            text: `${['1', '2', '3', '4'][this.slides.length % 4]}`
        });
    }
}
