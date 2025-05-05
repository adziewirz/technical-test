import { NgIf } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-license-plate',
  imports: [FormsModule, NgIf],
  templateUrl: './license-plate.component.html',
  styleUrl: './license-plate.component.css',
})
export class LicensePlateComponent {
  numbersArray = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];
  lettersArray = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z'];
  index: string = '';
  licensePlate: string = '';

  onSubmit() {
    this.licensePlate = this.getLicensePlate(this.index);
  }

  getLicensePlate(n: string): string {
    const number = parseInt(n, 10);
    let index = 0;
    if (number <= 999999) {
      for (let i = 0; i <= 999999; i++, index++) {
        const formattedNumber = i.toString().padStart(6, '0');
        if (number === index) {
          return formattedNumber;
        }
      }
    } else if (number >= 1000000) {
      index = 1000000;
      for (let letter1 of this.lettersArray) {
        for (let i = 0; i <= 99999; i++, index++) {
          const formattedNumber = i.toString().padStart(5, '0');
          if (number === index) {
            return `${formattedNumber}${letter1}`;
          }
        }
      }
      for (let letter1 of this.lettersArray) {
        for (let letter2 of this.lettersArray) {
          for (let i = 0; i <= 9999; i++, index++) {
            const formattedNumber = i.toString().padStart(4, '0');
            if (number === index) {
              return `${formattedNumber}${letter1}${letter2}`;
            }
          }
        }
      }
      for (let letter1 of this.lettersArray) {
        for (let letter2 of this.lettersArray) {
          for (let letter3 of this.lettersArray) {
            for (let i = 0; i <= 999; i++, index++) {
              const formattedNumber = i.toString().padStart(3, '0');
              if (number === index) {
                return `${formattedNumber}${letter1}${letter2}${letter3}`;
              }
            }
          }
        }
      }
      for (let letter1 of this.lettersArray) {
        for (let letter2 of this.lettersArray) {
          for (let letter3 of this.lettersArray) {
            for (let letter4 of this.lettersArray) {
              for (let i = 0; i <= 99; i++, index++) {
                const formattedNumber = i.toString().padStart(2, '0');
                if (number === index) {
                  return `${formattedNumber}${letter1}${letter2}${letter3}${letter4}`;
                }
              }
            }
          }
        }
      }
      for (let letter1 of this.lettersArray) {
        for (let letter2 of this.lettersArray) {
          for (let letter3 of this.lettersArray) {
            for (let letter4 of this.lettersArray) {
              for (let letter5 of this.lettersArray) {
                for (let i = 0; i <= 9; i++, index++) {
                  const formattedNumber = i.toString().padStart(1, '0');
                  if (number === index) {
                    return `${formattedNumber}${letter1}${letter2}${letter3}${letter4}${letter5}`;
                  }
                }
              }
            }
          }
        }
      }
      for (let letter1 of this.lettersArray) {
        for (let letter2 of this.lettersArray) {
          for (let letter3 of this.lettersArray) {
            for (let letter4 of this.lettersArray) {
              for (let letter5 of this.lettersArray) {
                for (let letter6 of this.lettersArray) {
                  index++;
                  if (number === index) {
                    return `${letter1}${letter2}${letter3}${letter4}${letter5}${letter6}`;
                  }
                }
              }
            }
          }
        }
      }
    }

    return 'Index out of range';
  }
}
