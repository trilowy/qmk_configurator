/* Copyright 2025 - Generated with the help of convert_keymap_extras_header.js
 *
 * This program is free software: you can redistribute it and/or modify
 * it under the terms of the GNU General Public License as published by
 * the Free Software Foundation, either version 2 of the License, or
 * (at your option) any later version.
 *
 * This program is distributed in the hope that it will be useful,
 * but WITHOUT ANY WARRANTY; without even the implied warranty of
 * MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the
 * GNU General Public License for more details.
 *
 * You should have received a copy of the GNU General Public License
 * along with this program.  If not, see <http://www.gnu.org/licenses/>.
 */

export default {
  /*
   * ┌───┬───┬───┬───┬───┬───┬───┬───┬───┬───┬───┬───┬───┬───────┐
   * │ ` │ 1 │ 2 │ 3 │ 4 │ 5 │ 6 │ 7 │ 8 │ 9 │ 0 │ / │ = │       │
   * ├───┴─┬─┴─┬─┴─┬─┴─┬─┴─┬─┴─┬─┴─┬─┴─┬─┴─┬─┴─┬─┴─┬─┴─┬─┴─┬─────┤
   * │     │ Q │ C │ O │ P │ W │ J │ M │ D │ ★ │ Y │ [ │ ] │     │
   * ├─────┴┬──┴┬──┴┬──┴┬──┴┬──┴┬──┴┬──┴┬──┴┬──┴┬──┴┬──┴┬──┴┐    │
   * │      │ A │ S │ E │ N │ F │ L │ R │ T │ I │ U │ ' │ \ │    │
   * ├────┬─┴─┬─┴─┬─┴─┬─┴─┬─┴─┬─┴─┬─┴─┬─┴─┬─┴─┬─┴─┬─┴─┬─┴───┴────┤
   * │    │ < │ Z │ X │ - │ V │ B │ . │ H │ G │ , │ K │          │
   * ├────┼───┴┬──┴─┬─┴───┴───┴───┴───┴───┴──┬┴───┼───┴┬────┬────┤
   * │    │    │    │                        │    │    │    │    │
   * └────┴────┴────┴────────────────────────┴────┴────┴────┴────┘
   */
  // Row 1
  KC_GRV: { name: '~\n`', alias: 'EL_GRV', title: '~ and `' },
  KC_1: { name: '€\n1', alias: 'EL_1', title: '€ and 1' },
  KC_2: { name: '«\n2', alias: 'EL_2', title: '« and 2' },
  KC_3: { name: '»\n3', alias: 'EL_3', title: '» and 3' },
  KC_4: { name: '$\n4', alias: 'EL_4', title: '$ and 4' },
  KC_5: { name: '%\n5', alias: 'EL_5', title: '% and 5' },
  KC_6: { name: '^\n6', alias: 'EL_6', title: '^ and 6' },
  KC_7: { name: '&\n7', alias: 'EL_7', title: '& and 7' },
  KC_8: { name: '*\n8', alias: 'EL_8', title: '* and 8' },
  KC_9: { name: '#\n9', alias: 'EL_9', title: '# and 9' },
  KC_0: { name: '@\n0', alias: 'EL_0', title: '@ and 0' },
  KC_MINS: { name: '_\n/', alias: 'EL_SLSH', title: '_ and /' },
  KC_EQL: { name: '+\n=', alias: 'EL_EQL', title: '+ and =' },
  // Row 2
  KC_Q: { name: 'Q', alias: 'EL_Q', title: 'Q and q' },
  KC_W: { name: 'C', alias: 'EL_C', title: 'C and c' },
  KC_E: { name: 'O', alias: 'EL_O', title: 'O and o' },
  KC_R: { name: 'P', alias: 'EL_P', title: 'P and p' },
  KC_T: { name: 'W', alias: 'EL_W', title: 'W and w' },
  KC_Y: { name: 'J', alias: 'EL_J', title: 'J and j' },
  KC_U: { name: 'M', alias: 'EL_M', title: 'M and m' },
  KC_I: { name: 'D', alias: 'EL_D', title: 'D and d' },
  KC_O: { name: '!\n★', alias: 'EL_1DK', title: '! and ★' },
  KC_P: { name: 'Y', alias: 'EL_Y', title: 'Y and y' },
  KC_LBRC: { name: '{\n[', alias: 'EL_LBRC', title: '{ and [' },
  KC_RBRC: { name: '}\n]', alias: 'EL_RBRC', title: '} and ]' },
  // Row 3
  KC_A: { name: 'A', alias: 'EL_A', title: 'A and a' },
  KC_S: { name: 'S', alias: 'EL_S', title: 'S and s' },
  KC_D: { name: 'E', alias: 'EL_E', title: 'E and e' },
  KC_F: { name: 'N', alias: 'EL_N', title: 'N and n' },
  KC_G: { name: 'F', alias: 'EL_F', title: 'F and f' },
  KC_H: { name: 'L', alias: 'EL_L', title: 'L and l' },
  KC_J: { name: 'R', alias: 'EL_R', title: 'R and r' },
  KC_K: { name: 'T', alias: 'EL_T', title: 'T and t' },
  KC_L: { name: 'I', alias: 'EL_I', title: 'I and i' },
  KC_SCLN: { name: 'U', alias: 'EL_U', title: 'U and u' },
  KC_QUOT: { name: '"\n\'', alias: 'EL_QUOT', title: '" and \'' },
  KC_BSLS: { name: '|\n\\', alias: 'EL_BSLS', title: '| and \\' },
  // Row 4
  KC_NUBS: { name: '>\n<', alias: 'EL_LABK', title: '> and <' },
  KC_Z: { name: 'Z', alias: 'EL_Z', title: 'Z and z' },
  KC_X: { name: 'X', alias: 'EL_X', title: 'X and x' },
  KC_C: { name: '?\n-', alias: 'EL_MINS', title: '? and -' },
  KC_V: { name: 'V', alias: 'EL_V', title: 'V and v' },
  KC_B: { name: 'B', alias: 'EL_B', title: 'B and b' },
  KC_N: { name: ':\n.', alias: 'EL_DOT', title: ': and .' },
  KC_M: { name: 'H', alias: 'EL_H', title: 'H and h' },
  KC_COMM: { name: 'G', alias: 'EL_G', title: 'G and g' },
  KC_DOT: { name: ';\n,', alias: 'EL_COMM', title: '; and ,' },
  KC_SLSH: { name: 'K', alias: 'EL_K', title: 'K and k' },

  /* Shifted symbols
   * ┌───┬───┬───┬───┬───┬───┬───┬───┬───┬───┬───┬───┬───┬───────┐
   * │ ~ │ € │ « │ » │ $ │ % │ ^ │ & │ * │ # │ @ │ _ │ + │       │
   * ├───┴─┬─┴─┬─┴─┬─┴─┬─┴─┬─┴─┬─┴─┬─┴─┬─┴─┬─┴─┬─┴─┬─┴─┬─┴─┬─────┤
   * │     │   │   │   │   │   │   │   │   │ ! │   │ { │ } │     │
   * ├─────┴┬──┴┬──┴┬──┴┬──┴┬──┴┬──┴┬──┴┬──┴┬──┴┬──┴┬──┴┬──┴┐    │
   * │      │   │   │   │   │   │   │   │   │   │   │ " │ | │    │
   * ├────┬─┴─┬─┴─┬─┴─┬─┴─┬─┴─┬─┴─┬─┴─┬─┴─┬─┴─┬─┴─┬─┴─┬─┴───┴────┤
   * │    │ > │   │   │ ? │   │   │ : │   │   │ ; │   │          │
   * ├────┼───┴┬──┴─┬─┴───┴───┴───┴───┴───┴──┬┴───┼───┴┬────┬────┤
   * │    │    │    │                        │    │    │    │    │
   * └────┴────┴────┴────────────────────────┴────┴────┴────┴────┘
   */
  // Row 1
  'S(KC_GRV)': { name: '~', alias: 'EL_TILD', title: '~' },
  KC_TILD: { name: '~', alias: 'EL_TILD', title: '~' },
  'S(KC_1)': { name: '€', alias: 'EL_EURO', title: '€' },
  KC_EXLM: { name: '€', alias: 'EL_EURO', title: '€' },
  'S(KC_2)': { name: '«', alias: 'EL_LDAQ', title: '«' },
  KC_AT: { name: '«', alias: 'EL_LDAQ', title: '«' },
  'S(KC_3)': { name: '»', alias: 'EL_RDAQ', title: '»' },
  KC_HASH: { name: '»', alias: 'EL_RDAQ', title: '»' },
  'S(KC_4)': { name: '$', alias: 'EL_DLR', title: '$' },
  KC_DLR: { name: '$', alias: 'EL_DLR', title: '$' },
  'S(KC_5)': { name: '%', alias: 'EL_PERC', title: '%' },
  KC_PERC: { name: '%', alias: 'EL_PERC', title: '%' },
  'S(KC_6)': { name: '^', alias: 'EL_CIRC', title: '^' },
  KC_CIRC: { name: '^', alias: 'EL_CIRC', title: '^' },
  'S(KC_7)': { name: '&', alias: 'EL_AMPR', title: '&' },
  KC_AMPR: { name: '&', alias: 'EL_AMPR', title: '&' },
  'S(KC_8)': { name: '*', alias: 'EL_ASTR', title: '*' },
  KC_ASTR: { name: '*', alias: 'EL_ASTR', title: '*' },
  'S(KC_9)': { name: '#', alias: 'EL_HASH', title: '#' },
  KC_LPRN: { name: '#', alias: 'EL_HASH', title: '#' },
  'S(KC_0)': { name: '@', alias: 'EL_AT', title: '@' },
  KC_RPRN: { name: '@', alias: 'EL_AT', title: '@' },
  'S(KC_MINS)': { name: '_', alias: 'EL_UNDS', title: '_' },
  KC_UNDS: { name: '_', alias: 'EL_UNDS', title: '_' },
  'S(KC_EQL)': { name: '+', alias: 'EL_PLUS', title: '+' },
  KC_PLUS: { name: '+', alias: 'EL_PLUS', title: '+' },
  // Row 2
  'S(KC_O)': { name: '!', alias: 'EL_EXLM', title: '!' },
  'S(KC_LBRC)': { name: '{', alias: 'EL_LCBR', title: '{' },
  KC_LCBR: { name: '{', alias: 'EL_LCBR', title: '{' },
  'S(KC_RBRC)': { name: '}', alias: 'EL_RCBR', title: '}' },
  KC_RCBR: { name: '}', alias: 'EL_RCBR', title: '}' },
  // Row 3
  'S(KC_QUOT)': { name: '"', alias: 'EL_DQUO', title: '"' },
  KC_DQUO: { name: '"', alias: 'EL_DQUO', title: '"' },
  'S(KC_BSLS)': { name: '|', alias: 'EL_PIPE', title: '|' },
  KC_PIPE: { name: '|', alias: 'EL_PIPE', title: '|' },
  // Row 4
  'S(KC_NUBS)': { name: '>', alias: 'EL_RABK', title: '>' },
  'S(KC_C)': { name: '?', alias: 'EL_QUES', title: '?' },
  'S(KC_N)': { name: ':', alias: 'EL_COLN', title: ':' },
  'S(KC_DOT)': { name: ';', alias: 'EL_SCLN', title: ';' },
  KC_GT: { name: ';', alias: 'EL_SCLN', title: ';' },
  // Row 5
  'S(KC_SPC)': {
    name: 'NNBS',
    alias: 'EL_NNBS',
    title: 'Narrow non-breaking space'
  },

  /* AltGr symbols
   * ┌───┬───┬───┬───┬───┬───┬───┬───┬───┬───┬───┬───┬───┬───────┐
   * │   │ ₁ │ ₂ │ ₃ │ ₄ │ ₅ │ ₆ │ ₇ │ ₈ │ ₉ │ ₀ │   │   │       │
   * ├───┴─┬─┴─┬─┴─┬─┴─┬─┴─┬─┴─┬─┴─┬─┴─┬─┴─┬─┴─┬─┴─┬─┴─┬─┴─┬─────┤
   * │     │ ^ │ < │ > │ $ │ % │ @ │ & │ * │ ' │ ` │   │   │     │
   * ├─────┴┬──┴┬──┴┬──┴┬──┴┬──┴┬──┴┬──┴┬──┴┬──┴┬──┴┬──┴┬──┴┐    │
   * │      │ { │ ( │ ) │ } │ = │ \ │ + │ - │ / │ " │   │   │    │
   * ├────┬─┴─┬─┴─┬─┴─┬─┴─┬─┴─┬─┴─┬─┴─┬─┴─┬─┴─┬─┴─┬─┴─┬─┴───┴────┤
   * │    │   │ ~ │ [ │ ] │ _ │ # │ | │ ! │ ; │ : │ ? │          │
   * ├────┼───┴┬──┴─┬─┴───┴───┴───┴───┴───┴──┬┴───┼───┴┬────┬────┤
   * │    │    │    │                        │    │    │    │    │
   * └────┴────┴────┴────────────────────────┴────┴────┴────┴────┘
   */
  // Row 1
  'ALGR(KC_1)': { name: '₁', alias: 'EL_SUB1', title: '₁' },
  'ALGR(KC_2)': { name: '₂', alias: 'EL_SUB2', title: '₂' },
  'ALGR(KC_3)': { name: '₃', alias: 'EL_SUB3', title: '₃' },
  'ALGR(KC_4)': { name: '₄', alias: 'EL_SUB4', title: '₄' },
  'ALGR(KC_5)': { name: '₅', alias: 'EL_SUB5', title: '₅' },
  'ALGR(KC_6)': { name: '₆', alias: 'EL_SUB6', title: '₆' },
  'ALGR(KC_7)': { name: '₇', alias: 'EL_SUB7', title: '₇' },
  'ALGR(KC_8)': { name: '₈', alias: 'EL_SUB8', title: '₈' },
  'ALGR(KC_9)': { name: '₉', alias: 'EL_SUB9', title: '₉' },
  'ALGR(KC_0)': { name: '₀', alias: 'EL_SUB0', title: '₀' },
  // Row 3
  'ALGR(KC_S)': { name: '(', alias: 'EL_LPRN', title: '(' },
  'ALGR(KC_D)': { name: ')', alias: 'EL_RPRN', title: ')' },

  /* Shift+AltGr symbols
   * ┌───┬───┬───┬───┬───┬───┬───┬───┬───┬───┬───┬───┬───┬───────┐
   * │   │ ¹ │ ² │ ³ │ ⁴ │ ⁵ │ ⁶ │ ⁷ │ ⁸ │ ⁹ │ ⁰ │   │   │       │
   * ├───┴─┬─┴─┬─┴─┬─┴─┬─┴─┬─┴─┬─┴─┬─┴─┬─┴─┬─┴─┬─┴─┬─┴─┬─┴─┬─────┤
   * │     │ ^ │ ≤ │ ≥ │ ¤ │ ‰ │ ° │   │ × │ ´ │ ` │   │   │     │
   * ├─────┴┬──┴┬──┴┬──┴┬──┴┬──┴┬──┴┬──┴┬──┴┬──┴┬──┴┬──┴┬──┴┐    │
   * │      │ ˇ │   │   │ ˙ │ ≠ │ / │ ± │ ¯ │ ÷ │ ˝ │   │   │    │
   * ├────┬─┴─┬─┴─┬─┴─┬─┴─┬─┴─┬─┴─┬─┴─┬─┴─┬─┴─┬─┴─┬─┴─┬─┴───┴────┤
   * │    │   │ ~ │ , │ ˛ │   │   │   │ ¬ │ ¸ │   │ ˘ │          │
   * ├────┼───┴┬──┴─┬─┴───┴───┴───┴───┴───┴──┬┴───┼───┴┬────┬────┤
   * │    │    │    │                        │    │    │    │    │
   * └────┴────┴────┴────────────────────────┴────┴────┴────┴────┘
   */
  // Row 1
  'S(ALGR(KC_1))': { name: '¹', alias: 'EL_SUP1', title: '¹' },
  'S(ALGR(KC_2))': { name: '²', alias: 'EL_SUP2', title: '²' },
  'S(ALGR(KC_3))': { name: '³', alias: 'EL_SUP3', title: '³' },
  'S(ALGR(KC_4))': { name: '⁴', alias: 'EL_SUP4', title: '⁴' },
  'S(ALGR(KC_5))': { name: '⁵', alias: 'EL_SUP5', title: '⁵' },
  'S(ALGR(KC_6))': { name: '⁶', alias: 'EL_SUP6', title: '⁶' },
  'S(ALGR(KC_7))': { name: '⁷', alias: 'EL_SUP7', title: '⁷' },
  'S(ALGR(KC_8))': { name: '⁸', alias: 'EL_SUP8', title: '⁸' },
  'S(ALGR(KC_9))': { name: '⁹', alias: 'EL_SUP9', title: '⁹' },
  'S(ALGR(KC_0))': { name: '⁰', alias: 'EL_SUP0', title: '⁰' },
  // Row 2
  'S(ALGR(KC_Q))': { name: '^', alias: 'EL_DCIR', title: '◌̂ (dead)' },
  'S(ALGR(KC_W))': { name: '≤', alias: 'EL_LEQL', title: '≤' },
  'S(ALGR(KC_E))': { name: '≥', alias: 'EL_GEQL', title: '≥' },
  'S(ALGR(KC_R))': { name: '¤', alias: 'EL_CURR', title: '¤ (dead)' },
  'S(ALGR(KC_T))': { name: '‰', alias: 'EL_PERM', title: '‰' },
  'S(ALGR(KC_Y))': { name: '°', alias: 'EL_RNGA', title: '◌̊ (dead)' },
  'S(ALGR(KC_I))': { name: '×', alias: 'EL_MUL', title: '×' },
  'S(ALGR(KC_O))': { name: '´', alias: 'EL_ACUT', title: '◌́ (dead)' },
  'S(ALGR(KC_P))': { name: '`', alias: 'EL_DGRV', title: '◌̀ (dead)' },
  // Row 3
  'S(ALGR(KC_A))': { name: 'ˇ', alias: 'EL_CARN', title: '◌̌ (dead)' },
  'S(ALGR(KC_F))': { name: '˙', alias: 'EL_DOTA', title: '◌̇ (dead)' },
  'S(ALGR(KC_G))': { name: '≠', alias: 'EL_NEQL', title: '≠' },
  'S(ALGR(KC_H))': { name: '/', alias: 'EL_DSLS', title: '◌̸ (dead)' },
  'S(ALGR(KC_J))': { name: '±', alias: 'EL_PLMN', title: '±' },
  'S(ALGR(KC_K))': { name: '¯', alias: 'EL_MACR', title: '◌̄ (dead)' },
  'S(ALGR(KC_L))': { name: '÷', alias: 'EL_DIV', title: '÷' },
  'S(ALGR(KC_SCLN))': { name: '”', alias: 'EL_DACU (dead)', title: '”' },
  // Row 4
  'S(ALGR(KC_Z))': { name: '~', alias: 'EL_DTIL', title: '◌̃ (dead)' },
  'S(ALGR(KC_X))': { name: ',', alias: 'EL_DCMM', title: '◌̦ (dead)' },
  'S(ALGR(KC_C))': { name: '˛', alias: 'EL_OGON', title: '◌̨ (dead)' },
  'S(ALGR(KC_M))': { name: '¬', alias: 'EL_NOT', title: '¬' },
  'S(ALGR(KC_COMM))': { name: '¸', alias: 'EL_CEDL', title: '◌̧ (dead)' },
  'S(ALGR(KC_SLSH))': { name: '˘', alias: 'EL_BREV', title: '◌̆ (dead)' },
  // Row 5
  'S(ALGR(KC_SPC))': {
    name: 'NBSP',
    alias: 'EL_NBSP',
    title: 'Non-breaking space'
  },

  /* Other keys */
  KC_NUHS: { name: '|\n\\', title: '| and \\' },
  'S(KC_NUHS)': { name: '|', title: '|' },
  KC_LT: { name: 'G', alias: 'S(EL_G)', title: 'G' },
  KC_COLN: { name: 'U', alias: 'S(EL_U)', title: 'U' },
  KC_QUES: { name: 'K', alias: 'S(EL_K)', title: 'K' },

  SC_LSPO: { name: 'LS / #', title: 'Left Shift when held, # when tapped' },
  SC_RSPC: { name: 'RS / @', title: 'Right Shift when held, @ when tapped' },
  SC_LCPO: { name: 'LC / #', title: 'Left Control when held, # when tapped' },
  SC_RCPC: { name: 'RC / @', title: 'Right Control when held, @ when tapped' },
  SC_LAPO: { name: 'LA / #', title: 'Left Alt when held, # when tapped' },
  SC_RAPC: { name: 'RA / @', title: 'Right Alt when held, @ when tapped' },

  QK_GESC: {
    name: '`/~\nEsc',
    title: 'Esc normally, but ` when GUI is active or ~ when Shift is active'
  }
};
