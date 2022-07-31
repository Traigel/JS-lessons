// links to watch theory
// https://www.youtube.com/watch?v=6napu-MGQDo&list=PLcvhF2Wqh7DNVy1OCUpG3i5lyxyBWhGZ8&index=47
// https://www.youtube.com/watch?v=I8LNJpG60vI&feature=youtu.be

// 1. Simple object
let man = {
    name: 'John',
    age: 28
};

let manFullCopy = {...man}

console.log(1, manFullCopy === man);

// 2. Array of primitives
let numbers = [1, 2, 3];

let numbersFullCopy = [...numbers]

console.log(2, numbersFullCopy === numbers)


// 3. Object inside an object
let man1 = {
    name: 'John',
    age: 28,
    mother: {
        name: 'Kate',
        age: 50
    }
};

let man1FullCopy = {...man1, mother: {...man1.mother}}

console.log(3,
    man1FullCopy.name === man1.name,
    man1FullCopy === man1,
    man1FullCopy.mother === man1.mother
)


// 4. Array of primitives inside an object
let man2 = {
    name: 'John',
    age: 28,
    friends: ["Peter", "Steven", "William"]
};

let man2FullCopy = {...man2, friends: [...man2.friends]}
console.log(4,
    man2FullCopy.name === man2.name,
    man2FullCopy === man2,
    man2FullCopy.friends === man2.friends
)


// 5 Array of objects
let people = [
    {name: "Peter", age: 30},
    {name: "Steven", age: 32},
    {name: "William", age: 28}
];

let peopleFullCopy = people.map(el => ({...el}))

console.log(5,
    peopleFullCopy === people,
    peopleFullCopy[0] === people[0],
    peopleFullCopy[0].age === people[0].age
)


// 6 Array of objects inside object
let man3 = {
    name: 'John',
    age: 28,
    friends: [
        {name: "Peter", age: 30},
        {name: "Steven", age: 32},
        {name: "William", age: 28}
    ]
};

let man3FullCopy = {...man3, friends: man3.friends.map(el => ({...el}))}

console.log(6,
    man3FullCopy === man3,
    man3FullCopy.friends === man3.friends,
    man3FullCopy.friends[0] === man3.friends[0],
    man3FullCopy.friends[0].age === man3.friends[0].age
)


// 7 Object inside an object, inside an object
let man4 = {
    name: 'John',
    age: 28,
    mother: {
        name: "Kate",
        age: 50,
        work: {
            position: "doctor",
            experience: 15
        }
    }
};

let man4FullCopy = {...man4, mother: {...man4.mother, work: {...man4.mother.work}}}

console.log(7,
    man4FullCopy === man4,
    man4FullCopy.mother === man4.mother,
    man4FullCopy.mother.work === man4.mother.work,
    man4FullCopy.mother.work.position === man4.mother.work.position
)

// 8 Array of objects inside object -> object
let man5 = {
    name: 'John',
    age: 28,
    mother: {
        name: "Kate",
        age: 50,
        work: {
            position: "doctor",
            experience: 15
        },
        parents: [
            {name: "Kevin", age: 80},
            {name: "Jennifer", age: 78},
        ]
    }
};

let man5FullCopy = {
    ...man5,
    mother: {...man5.mother, work: {...man5.mother.work}, parents: man5.mother.parents.map(el => ({...el}))}
}

console.log(8,
    man5FullCopy === man5,
    man5FullCopy.mother === man5.mother,
    man5FullCopy.mother.work === man5.mother.work,
    man5FullCopy.mother.work.position === man5.mother.work.position,
    man5FullCopy.mother.parents === man5.mother.parents,
    man5FullCopy.mother.parents[0] === man5.mother.parents[0],
    man5FullCopy.mother.parents[0].age === man5.mother.parents[0].age
)


// 9 Object inside an object -> array -> object ->  object
let man6 = {
    name: 'John',
    age: 28,
    mother: {
        name: "Kate",
        age: 50,
        work: {
            position: "doctor",
            experience: 15
        },
        parents: [
            {
                name: "Kevin",
                age: 80,
                favoriteDish: {
                    title: "borscht"
                }
            },
            {
                name: "Jennifer",
                age: 78,
                favoriteDish: {
                    title: "sushi"
                }
            },
        ]
    }
};

let man6FullCopy = {
    ...man6,
    mother: {
        ...man6.mother,
        work: {...man6.mother.work},
        parents: man6.mother.parents.map(el => ({...el, favoriteDish: {...el.favoriteDish}}))
    }
}

console.log(9,
    man6FullCopy === man6,
    man6FullCopy.mother === man6.mother,
    man6FullCopy.mother.work === man6.mother.work,
    man6FullCopy.mother.work.experience === man6.mother.work.experience,
    man6FullCopy.mother.parents === man6.mother.parents,
    man6FullCopy.mother.parents[0] === man6.mother.parents[0],
    man6FullCopy.mother.parents[0].favoriteDish === man6.mother.parents[0].favoriteDish,
    man6FullCopy.mother.parents[0].favoriteDish.title === man6.mother.parents[0].favoriteDish.title
)


//10 Array of objects inside an object -> object -> array -> object ->  object
let man7 = {
    name: 'John',
    age: 28,
    mother: {
        name: "Kate",
        age: 50,
        work: {
            position: "doctor",
            experience: 15
        },
        parents: [
            {
                name: "Kevin",
                age: 80,
                favoriteDish: {
                    title: "borscht",
                    ingredients: [
                        {title: "beet", amount: 3},
                        {title: "potatoes", amount: 5},
                        {title: "carrot", amount: 1},
                    ]
                }
            },
            {
                name: "Jennifer",
                age: 78,
                favoriteDish: {
                    title: "sushi",
                    ingredients: [
                        {title: "fish", amount: 1},
                        {title: "rise", amount: 0.5}
                    ]
                }
            },
        ]
    }
};

let man7FullCopy = {
    ...man7,
    mother: {
        ...man7.mother,
        work: {...man7.mother.work},
        parents: man7.mother.parents.map(el => ({
            ...el,
            favoriteDish: {
                ...man7.mother.parents.favoriteDish,
                ingredients: el.favoriteDish.ingredients.map(el => ({...el}))
            }
        }))
    }
}

console.log(10,
    man7FullCopy === man7,
    man7FullCopy.mother === man7.mother,
    man7FullCopy.mother.work === man7.mother.work,
    man7FullCopy.mother.parents === man7.mother.parents,
    man7FullCopy.mother.parents[0] === man7.mother.parents[0],
    man7FullCopy.mother.parents[0].favoriteDish === man7.mother.parents[0].favoriteDish,
    man7FullCopy.mother.parents[0].favoriteDish.ingredients === man7.mother.parents[0].favoriteDish.ingredients,
    man7FullCopy.mother.parents[0].favoriteDish.ingredients[0] === man7.mother.parents[0].favoriteDish.ingredients[0],
    man7FullCopy.mother.parents[0].favoriteDish.ingredients[0].title === man7.mother.parents[0].favoriteDish.ingredients[0].title
)


