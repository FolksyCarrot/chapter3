export const getFish = () => {
    return database.fish.map(fish => ({...fish}))
}

const database = {
    fish: [
        {
            name: "Bart",
            food: "shrimp",
            size: 3,
            species: "fish",
            location: "ocean",
        },
         {
            name: "Teddy",
            food: "algae",
            size: 8,
            species: "fish",
            location: "ocean",
         }
    ]
};

