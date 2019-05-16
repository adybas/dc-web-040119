# Callbacks and Iterators
https://github.com/thuyanduong-flatiron/cereals

## Concepts
- functions as variables
- Working with functions... that operate on functions!
- .forEach, .map, .filter, .find, .reduce

## Building our own forEach
- map?
- filter?
- find?
- reduce?

## Writing Callbacks
- as declarations
- as expressions
- as arrow functions

## Objectives

Let's learn about cereal.

Goals:
1. How many cereals in our data? cerealData.length

2. Just the name of all the cereals? cerealData.map(el => (el["name"]))

3. All cereals by a certain manufacturer?
cerealData.filter(el => el['mfr'] == 'N')

4. The names of all cereals manufactured by General Mills?
cerealData.filter(el => el['mfr'] == 'G').map(el => el.name)

5. Any cereal with calories between 80 and 100?
cerealData.find(el => el.calories >= 80 && el.calories <= 100)

6. All cereals with calories between 80 and 100?
cerealData.filter(el => el.calories <100 && el.calories > 80)

7. Sum of ratings?
cerealData.reduce((total, cereal) => cereal.rating+total, 0)

8. Average rating?
cerealData.reduce((total, cereal) => cereal.rating+total, 0) / cerealData.length

9. Sort by calories?
cerealData.sort((firstCereal, secondCereal) => {return firstCereal.calories - secondCereal.calories})


### What about callbacks for addEventListener
- And what about that mysterious e parameter?
