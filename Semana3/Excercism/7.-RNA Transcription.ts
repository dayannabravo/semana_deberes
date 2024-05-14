export function toRna(input: string): string {
    const dictionary: { [key: string]: string } = {
      G: 'C', 
      C: 'G', 
      T: 'A', 
      A: 'U' };
    return input.split('').map(element => dictionary[element] || (() => { throw new Error('Invalid input DNA.') })()).join('');
  }
  
  