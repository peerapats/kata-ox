import { describe, it } from 'mocha';
import { expect } from 'chai';

import { OX } from '../src/ox';

describe('ox.js', () => {
  describe('alwaysReturn1()', () => {
    it('Check O invalid input', () => {
      const ox = new OX();
      let result = ox.playOX([
        ['O', 'O', 'O'],
        ['X', 'O', ' '],
        [' ', ' ', ' '],
      ]);
      expect(result).equal('Invalid Input');
    });

    it('Check X invalid input', () => {
      const ox = new OX();
      let result = ox.playOX([
        ['X', 'X', 'X'],
        ['O', ' ', ' '],
        [' ', ' ', ' '],
      ]);
      expect(result).equal('Invalid Input');
    });


    it('O row 1', () => {
      const ox = new OX();
      let result = ox.playOX([
        ['O', 'O', 'O'],
        ['X', 'X', ' '],
        [' ', ' ', ' '],
      ])
      
      expect(result).equal('Winner: O');
    });
    it('O row 2', () => {
      const ox = new OX();
      let result = ox.playOX([
        ['X', 'X', 'O'],
        ['O', 'O', 'O'],
        ['X', ' ', ' '],
      ])

      expect(result).equal('Winner: O');
    });

    it('O row 3', () => {
      const ox = new OX();
      let result = ox.playOX([
        ['X', 'X', ' '],
        ['O', 'X', 'X'],
        ['O', 'O', 'O'],
      ])

      expect(result).equal('Winner: O');
    });

    it('O col 1', () => {
      const ox = new OX();
      let result = ox.playOX([
        ['O', 'X', ' '],
        ['O', 'X', 'X'],
        ['O', 'O', 'X'],
      ])

      expect(result).equal('Winner: O');
    });
    
    it('O col 2', () => {
      const ox = new OX();
      let result = ox.playOX([
        ['X', 'O', ' '],
        ['X', 'O', 'X'],
        ['O', 'O', 'X'],
      ])

      expect(result).equal('Winner: O');
    });

    it('O col 3', () => {
      const ox = new OX();
      let result = ox.playOX([
        ['X', 'X', 'O'],
        ['X', 'X', 'O'],
        ['O', ' ', 'O'],
      ])

      expect(result).equal('Winner: O');
    });

    it('O /', () => {
      const ox = new OX();
      let result = ox.playOX([
        ['X', 'X', 'O'],
        ['X', 'O', 'O'],
        ['O', ' ', 'X'],
      ])

      expect(result).equal('Winner: O');
    });

    it('O \\', () => {
      const ox = new OX();
      let result = ox.playOX([
        ['O', 'X', 'X'],
        ['X', 'O', 'X'],
        ['O', ' ', 'O'],
      ])

      expect(result).equal('Winner: O');
    });

    it('X row 1', () => {
      const ox = new OX();
      let result = ox.playOX([
        ['X', 'X', 'X'],
        ['O', 'O', 'X'],
        [' ', 'O', 'O'],
      ])

      expect(result).equal('Winner: X');
    });
    it('X row 2', () => {
      const ox = new OX();
      let result = ox.playOX([
        ['X', 'O', 'O'],
        ['X', 'X', 'X'],
        ['O', 'O', ' '],
      ])

      expect(result).equal('Winner: X');
    });

    it('X row 3', () => {
      const ox = new OX();
      let result = ox.playOX([
        ['X', 'O', 'O'],
        ['O', 'O', ' '],
        ['X', 'X', 'X'],
      ])

      expect(result).equal('Winner: X');
    });

    it('X col 1', () => {
      const ox = new OX();
      let result = ox.playOX([
        ['O', 'O', ''],
        ['X', 'X', 'X'],
        ['X', 'O', 'O'],
      ])

      expect(result).equal('Winner: X');
    });

    it('X col 2', () => {
      const ox = new OX();
      let result = ox.playOX([
        ['O', 'X', ''],
        ['X', 'X', 'O'],
        ['O', 'X', 'O'],
      ])

      expect(result).equal('Winner: X');
    });

    it('X col 3', () => {
      const ox = new OX();
      let result = ox.playOX([
        [' ', 'O', 'X'],
        ['O', 'X', 'X'],
        ['O', 'O', 'X'],
      ])

      expect(result).equal('Winner: X');
    });

    it('X \\', () => {
      const ox = new OX();
      let result = ox.playOX([
        ['X', 'O', 'O'],
        ['X', 'X', 'O'],
        ['O', '', 'X'],
      ])

      expect(result).equal('Winner: X');
    });

    it('X /', () => {
      const ox = new OX();
      let result = ox.playOX([
        ['O', 'O', 'X'],
        ['X', 'X', 'O'],
        ['X', ' ', 'O'],
      ])

      expect(result).equal('Winner: X');
    });

    it('In Game', () => {
      const ox = new OX();
      let result = ox.playOX([
        ['O', 'O', 'X'],
        ['X', ' ', 'O'],
        ['X', ' ', 'O'],
      ])

      expect(result).equal('In Game');
    });
    
    it('Draw', () => {
      const ox = new OX();
      let result = ox.playOX([
        ['O', 'X', 'O'],
        ['X', 'X', 'O'],
        ['X', 'O', 'X'],
      ])

      expect(result).equal('Draw');
    });

    it('In Game (all blank)', () => {
      const ox = new OX();
      let result = ox.playOX([
        [' ', ' ', ' '],
        [' ', ' ', ' '],
        [' ', ' ', ' '],
      ])

      expect(result).equal('In Game');
    });

    it('Winner more than 1)', () => {
      const ox = new OX();
      let result = ox.playOX([
        ['X', 'X', 'X'],
        ['O', 'O', 'O'],
        [' ', ' ', ' '],
      ])

      expect(result).equal('Invalid Input');
    });
  });
});