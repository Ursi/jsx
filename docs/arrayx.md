### `buildIn()`
Adds the `arrayx` functions to `Array.prototype`.

### `array.keySort(...params)`
**`param:`** `sortKey | ( '[' sortKey ',' sortFunc ']' )`

**`sortKey:`** `key [ '<' | '>' ]`

**`key:`** `an object key`

**`sortFunc:`** `a function for Array.prototype.sort`

`keySort` is used to sort an array of obejcts based on their propery values. The objects are sorted by the first `param`. For any object that has
the same value for the `key` of the the `nth` param, the `n+1th` `param` is used to break that tie.

If just a `sortKey` is provied, the
objects are sorted via the defalut sort function of `Array.prototype.sort`. `<` signifies a sort in the default direction and can be
omitted unless `key` ends in `<`. `>` signfifies a sort in the oposite direction.

**Returns:** `array`

### `array.randomRemove()`
Removes a random element from `array`.

**Returns:** the removed element

### `array.shuffle()`

Shuffles `array` in place.

**Returns:** `array`
