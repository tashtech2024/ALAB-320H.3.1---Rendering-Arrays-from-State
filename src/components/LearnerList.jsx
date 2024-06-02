import PropTypes from 'prop-types'
import LearnersListItems from '../components/LearnerListItems'

function LearnerList({ learner }) {
      const learnersJSX = learner.map((item) => (
        <LearnersListItems learner={item} key={item.id} />
      ));
    return (
        <div>
          <h2>Learner List</h2>
    
          <div>
            {learner.map((item) => (
              <LearnersListItems learner={item} key={item.id} />
            ))}
          </div>
          
        </div>
      );
}
LearnerList.prototypes = {
    learners: PropTypes.array,
};

export default LearnerList; 