import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { from, mergeMap, toArray } from 'rxjs';

@Component({
  selector: 'app-js-concurency',
  imports: [],
  templateUrl: './js-concurency.component.html',
  styleUrl: './js-concurency.component.css'
})
export class JsConcurencyComponent implements OnInit {
  urls_array: string[] = [
    'https://dummyjson.com/products/1',
    'https://dummyjson.com/products/2',
    'https://dummyjson.com/products/3',
    'https://dummyjson.com/products/4',
    'https://dummyjson.com/products/5',
    'https://dummyjson.com/products/6',
    'https://dummyjson.com/products/7',
    'https://dummyjson.com/products/8',
    'https://dummyjson.com/products/9',
    'https://dummyjson.com/products/10',
    'https://dummyjson.com/products/11',
    'https://dummyjson.com/products/12',
    'https://dummyjson.com/products/13',
    'https://dummyjson.com/products/14',
    'https://dummyjson.com/products/15',
    'https://dummyjson.com/products/16'];

  max_concurrency: number = 3;

  constructor(private http: HttpClient) {}

  ngOnInit(): void {
    this.fetchUrlsWithConcurrency(this.urls_array, this.max_concurrency).subscribe({
      next: (responses) => {
        console.log('All responses:', responses);
      },
      error: (err) => {
        console.error('Error fetching URLs:', err);
      }
    });
  }

  fetchUrlsWithConcurrency(urls: string[], maxConcurrency: number) {
    return from(urls).pipe(
      mergeMap((url) => this.http.get(url), maxConcurrency),
      toArray()
    );
  }
}
