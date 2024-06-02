function CreateLearner ({addLearner}) {

    const newLearner = {
        id: 4, 
        name: "Manoela Gumarich",
        bio: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Tortor aliquam nulla facilisi cras fermentum odio.",
        scores: [
            {
              date: '2018-02-08',
              score: 94
            },
            {
              date: '2018-04-22',
              score: 82
            },
            {
              date: '2018-09-15',
              score: 99
            }
          ]
        },

    return (
        <div> 
        <button onClick={() => addLearner(newLearner)}>create</button>
        </div>
    );

}

export default CreateLearner;