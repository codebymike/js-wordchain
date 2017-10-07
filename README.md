## Word Chain Builder - TDD with NodeJS/Jasmine

JS implementation of a word puzzle : ['Word Chain' or 'Ladder'](https://en.wikipedia.org/wiki/Word_ladder).

### Rules
> The player is given a start word and an end word. In order to win the game, the player must change the start word into the end word progressively, creating an existing word at each step. 
Each step consists of a single letter substitution.

COLD → CORD → CARD → WARD → WARM

### TODO
* Deal with 'local maximums'
* Implement the full dictionary
* Refactor the dictionary to cluster the similar words to speed up searches